import { readFile, readdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const files = [];
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const name = path.join(dir, item.name);
    if (item.isDirectory()) await walk(name);
    else if (item.name !== 'release.json') files.push(name);
  }
}
await walk('dist');
const hash = createHash('sha256');
for (const name of files.sort()) {
  hash.update(name.replace(/^dist\//, '') + '\0');
  hash.update(await readFile(name));
}
const release = {
  project: 'Legacy Music Group',
  siteId: 'd04515bf-0eb2-45ae-b71b-2a08dc92391a',
  branch: execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim() || 'detached',
  sourceRevision: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  contentSha256: hash.digest('hex'),
  previewOnly: process.env.RELEASE_MODE !== 'production',
};
await writeFile('dist/release.json', JSON.stringify(release, null, 2) + '\n');
console.log(`Static release: ${files.length} files; ${release.contentSha256}`);
