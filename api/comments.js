const fs = require('fs');
const path = require('path');

// In-memory cache for serverless lifecycles
let memoryComments = null;

// Paths for persistent fallback
const DATA_FILE = path.join(__dirname, '..', 'data', 'comments.json');
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
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
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
    const payload = await parseBody(req);
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
