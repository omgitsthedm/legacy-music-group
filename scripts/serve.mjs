// Local artifact QA only. Production is served by Netlify.
import http from 'node:http';
import path from 'node:path';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const root = path.resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const port = Number(process.env.PORT || 52762);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json' };
const rules = (await readFile(path.join(root, '_redirects'), 'utf8')).split('\n').filter(l => l && !l.startsWith('#')).map(l => l.split(/\s+/));
const headerGroups = [];
for (const line of (await readFile(path.join(root, '_headers'), 'utf8')).split('\n')) {
  if (line.startsWith('/')) headerGroups.push({ route: line.trim(), values: {} });
  else if (line.trim()) { const split = line.indexOf(':'); headerGroups.at(-1).values[line.slice(0, split).trim()] = line.slice(split + 1).trim(); }
}
const matches = (pattern, pathname) => pattern.endsWith('*') ? pathname.startsWith(pattern.slice(0, -1)) : pathname.replace(/\/$/, '') === pattern.replace(/\/$/, '');
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    for (const group of headerGroups) if (matches(group.route, pathname)) for (const [name, value] of Object.entries(group.values)) res.setHeader(name, value);
    const redirect = rules.find(([from, , code]) => code.startsWith('3') && matches(from, pathname));
    if (redirect) { res.writeHead(Number(redirect[2]), { Location: redirect[1] }); res.end(); return; }
    let file = path.resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    let status = 200;
    try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); await stat(file); }
    catch { file = path.join(root, '404.html'); status = 404; }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    let body = await readFile(file);
    if (/\.(html|css|js|json|xml|txt|svg)$/.test(file) && /gzip/.test(req.headers['accept-encoding'] || '')) {
      body = gzipSync(body); res.setHeader('Content-Encoding', 'gzip'); res.setHeader('Vary', 'Accept-Encoding');
    }
    res.writeHead(status); res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(400); res.end('Invalid request'); }
});
server.on('error', error => { console.error(error); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`LFNYC legacy preview: http://127.0.0.1:${port} from ${root}`));
