import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const baseline = JSON.parse(await readFile(new URL('./design-baseline.json', import.meta.url), 'utf8'));
const sha = data => createHash('sha256').update(data).digest('hex');
for (const [file, expected] of Object.entries(baseline.files)) {
  assert.equal(sha(await readFile(file)), expected, `Original design changed: ${file}`);
}
const css = (await readdir('dist/assets')).filter(name => /^index-.*\.css$/.test(name));
assert.equal(css.length, 1);
assert.equal(sha(await readFile(`dist/assets/${css[0]}`)), baseline.cssSha256, 'Compiled CSS differs from original production');
console.log(`PASS original design: ${Object.keys(baseline.files).length} protected source/media files and exact original compiled CSS`);
