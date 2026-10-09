import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('built homepage is useful without browser JavaScript and stays noindex', async () => {
  const html = await readFile('dist/index.html', 'utf8');
  assert.match(html, /<h1[^>]*>Small crew\. Heavy pull\.<\/h1>/);
  assert.match(html, /noindex/);
  assert.match(html, /mailto:hello@littlefightnyc\.com/);
  assert.doesNotMatch(html, /studio information is loading|googletagmanager|facebook\.net/);
});

test('preview headers prevent indexation and active third-party scripts', async () => {
  const headers = await readFile('dist/_headers', 'utf8');
  assert.match(headers, /X-Robots-Tag: noindex/);
  assert.match(headers, /script-src 'self'/);
  assert.doesNotMatch(headers, /unsafe-eval|unsafe-inline|googletagmanager/);
});
