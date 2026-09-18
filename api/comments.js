const fs = require('fs');
const path = require('path');

// In-memory cache for serverless lifecycles
let memoryComments = null;

// Paths for persistent fallback
const DATA_FILE = path.join(__dirname, 'comments-seed.json');
const TMP_FILE = path.join('/tmp', 'treyvisai_comments.json');

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

function loadSeedData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (e) {}
  return [];
}

function loadComments() {
  if (memoryComments && Array.isArray(memoryComments) && memoryComments.length) {
    return memoryComments;
  }
  // Try /tmp in serverless
  try {
    if (fs.existsSync(TMP_FILE)) {
      const raw = fs.readFileSync(TMP_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) {
        memoryComments = parsed;
        return memoryComments;
      }
    }
  } catch (e) {}

  // Fallback to static seed data
  memoryComments = loadSeedData();
  return memoryComments;
}

function saveComments(list) {
  memoryComments = list;
  // Attempt to write to data file if writable (local dev)
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (e) {
    // In serverless, filesystem is read-only except /tmp
    try {
      fs.writeFileSync(TMP_FILE, JSON.stringify(list, null, 2), 'utf8');
    } catch (err) {}
  }
}

const MAX_BODY_BYTES = 20 * 1024; // a comment payload only ever needs a few KB

async function parseBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch (e) {}
  }
  return new Promise((resolve) => {
    let body = '';
    let tooLarge = false;
    req.on('data', chunk => {
      if (tooLarge) return;
      body += chunk;
      if (body.length > MAX_BODY_BYTES) {
        tooLarge = true;
        resolve(null); // signals "reject", handled by the caller
      }
    });
    req.on('end', () => {
      if (tooLarge) return;
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

// Best-effort per-IP rate limit. In-memory only, so it resets on cold start
// and isn't shared across serverless instances — this raises the bar against
// naive scripted spam without needing new infra, but isn't a hard guarantee.
// A durable multi-instance limit would need a shared store (e.g. Vercel KV).
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitLog = new Map(); // ip -> timestamps[]

function getClientIp(req) {
  const fwd = (req.headers && req.headers['x-forwarded-for']) || '';
  const first = fwd.split(',')[0].trim();
  return first || (req.socket && req.socket.remoteAddress) || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (rateLimitLog.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitLog.set(ip, recent);
  return false;
}

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  // GET: Retrieve comments
  if (req.method === 'GET') {
    const comments = loadComments();
    const headers = req.headers || {};
    const url = new URL(req.url || '/', `http://${headers.host || 'localhost'}`);
    const schoolFilter = (url.searchParams.get('school') || '').toLowerCase().trim();
    const limit = parseInt(url.searchParams.get('limit') || '50', 10);

    let filtered = comments;
    if (schoolFilter && schoolFilter !== 'all') {
      filtered = comments.filter(c => {
        const idMatch = (c.schoolId || '').toLowerCase() === schoolFilter;
        const nameMatch = (c.schoolName || '').toLowerCase().includes(schoolFilter);
        return idMatch || nameMatch;
      });
    }

    const result = filtered.slice(0, Math.max(1, limit));
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // Let Vercel's edge cache serve repeated reads for a bit instead of
    // re-invoking this function on every single page load — this is what
    // actually matters for many people opening the site at once.
    res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=120');
    res.statusCode = 200;
    return res.end(JSON.stringify({
      success: true,
      total: comments.length,
      count: result.length,
      comments: result
    }));
  }

  // POST: Create a new comment without login
  if (req.method === 'POST') {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.statusCode = 429;
      return res.end(JSON.stringify({
        success: false,
        error: 'អ្នកបានបញ្ចេញមតិញឹកញាប់ពេក សូមព្យាយាមម្តងទៀតក្នុងពេលបន្តិច (Too many comments — please try again later)'
      }));
    }

    const payload = await parseBody(req);
    if (payload === null) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.statusCode = 413;
      return res.end(JSON.stringify({ success: false, error: 'Payload too large' }));
    }

    // Honeypot: a real user never fills this hidden field. Silently accept
    // (so a bot can't tell it was rejected) without actually saving anything.
    if (payload.website) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.statusCode = 201;
      return res.end(JSON.stringify({ success: true }));
    }

    const rawName = payload.name || payload.author;
    const rawSchool = payload.schoolName || payload.school;
    const rawSchoolId = payload.schoolId || '';
    const rawProgram = payload.program || '';
    const rawQuote = payload.quote || payload.comment || payload.text;
    const rawRating = parseInt(payload.rating, 10) || 5;

    const name = sanitize(rawName).slice(0, 60);
    const schoolName = sanitize(rawSchool).slice(0, 100);
    const schoolId = sanitize(rawSchoolId).toLowerCase().slice(0, 50);
    const program = sanitize(rawProgram).slice(0, 80);
    const quote = sanitize(rawQuote).slice(0, 600);
    const rating = Math.min(5, Math.max(1, isNaN(rawRating) ? 5 : rawRating));

    if (!name || !schoolName || !quote) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.statusCode = 400;
      return res.end(JSON.stringify({
        success: false,
        error: 'សូមបំពេញឈ្មោះ សាលា និងមតិយោបល់របស់អ្នក (Name, school, and comment are required)'
      }));
    }

    const newComment = {
      id: 'c_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      name: name,
      schoolId: schoolId || (schoolName.toLowerCase().replace(/[^a-z0-9]/g, '')),
      schoolName: schoolName,
      program: program,
      quote: quote,
      rating: rating,
      createdAt: new Date().toISOString()
    };

    const currentList = loadComments();
    currentList.unshift(newComment);
    saveComments(currentList);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 201;
    return res.end(JSON.stringify({
      success: true,
      comment: newComment
    }));
  }

  res.statusCode = 405;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
};
