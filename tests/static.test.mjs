import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';

test('built homepage is useful without browser JavaScript and stays noindex', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  assert.match(html, /<h1[^>]*>Small crew\./);
  assert.match(html, /noindex/);
  assert.match(html, /mailto:hello@littlefightnyc\.com/);
  assert.doesNotMatch(html, /studio information is loading|googletagmanager|facebook\.net/);
});

test('every route has complete crawlable HTML, unique metadata and valid JSON-LD', async () => {
  const files = (await readdir('dist', { recursive: true })).filter(file => file.endsWith('.html'));
  assert.equal(files.length, 13);
  const titles = new Set();
  for (const file of files) {
    const html = await readFile(path.join('dist', file), 'utf8');
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, file);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), `Unique title: ${file}`); titles.add(title);
    assert.match(html, /name="description" content="[^"]{60,}"/);
    assert.match(html, /name="robots" content="noindex, nofollow, noarchive"/);
    assert.ok(html.includes(`rel="canonical" href="${process.env.SITE_ORIGIN || 'https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app'}/`));
    const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1] || 'null');
    assert.ok(data['@graph'].some(node => node['@type'] === 'Organization'));
    assert.doesNotMatch(html, /SearchAction|FAQPage|HowTo|AggregateRating|GTM-|calendly|facebook\.net|studio information is loading/);
  }
});

test('all internal links, images, fonts, scripts and social assets exist in the publish tree', async () => {
  const files = (await readdir('dist', { recursive: true })).filter(file => file.endsWith('.html'));
  const links = new Set(['/og-image.png', '/site.webmanifest', '/llms.txt', '/sitemap.xml']);
  for (const file of files) {
    const html = await readFile(path.join('dist', file), 'utf8');
    for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) links.add(match[1].split(/[?#]/)[0]);
  }
  for (const link of links) await access(path.join('dist', link.endsWith('/') ? link + 'index.html' : link));
  assert.equal((await readFile('dist/sitemap.xml', 'utf8')).includes('<loc>'), false);
});

test('publish output contains no historical source, credentials or application database', async () => {
  const files = await readdir('dist', { recursive: true });
  assert.ok(files.every(file => !/(^|\/)(archive|node_modules|\.git|\.env)(\/|$)/.test(file)));
  const release = JSON.parse(await readFile('dist/release.json', 'utf8'));
  assert.equal(release.siteId, 'd04515bf-0eb2-45ae-b71b-2a08dc92391a');
  assert.equal(release.previewOnly, process.env.RELEASE_MODE !== 'production');
  assert.match(release.contentSha256, /^[a-f0-9]{64}$/);
});

test('preview headers prevent indexation and active third-party scripts', async () => {
  const headers = await readFile('dist/_headers', 'utf8');
  assert.match(headers, /X-Robots-Tag: noindex/);
  assert.match(headers, /script-src 'self'/);
  assert.doesNotMatch(headers, /unsafe-eval|unsafe-inline|googletagmanager/);
});
