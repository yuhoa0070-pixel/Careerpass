const http = require('http');
const fs = require('fs');
const path = require('path');
const commentsHandler = require('./api/comments');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost:' + PORT}`);
  const pathname = parsedUrl.pathname;

  // Handle API routes
  if (pathname === '/api/comments' || pathname.startsWith('/api/comments/')) {
    try {
      await commentsHandler(req, res);
    } catch (err) {
      console.error('API Error:', err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, error: 'Internal Server Error' }));
    }
    return;
  }

  // Handle Static Files
  const decodedPath = decodeURIComponent(pathname === '/' ? '/index.html' : pathname);
  const filePath = path.resolve(ROOT, '.' + decodedPath);

  // Security check: prevent path traversal. A plain startsWith(ROOT) can be
  // fooled by a sibling directory that happens to share ROOT as a string
  // prefix (e.g. ROOT="/a/project" vs "/a/project-evil") — require an exact
  // match or a real path-separator boundary instead.
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    // SPA fallback to index.html if the resolved path isn't a real file
    const servePath = (err || !stats.isFile()) ? path.join(ROOT, 'index.html') : filePath;

    const ext = path.extname(servePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(servePath, (readErr, content) => {
      if (readErr) {
        res.statusCode = 404;
        res.end('Not Found');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(content);
    });
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`TreyVisai dev server running at http://localhost:${PORT}`);
  });
}

module.exports = server;
