/**
 * Launch-ready sitemap, written after `vite build` + `prerender-meta.mjs`.
 *
 * The Netlify host is deliberately noindex while legacymusicgroup.com serves
 * the current WordPress site, so the default build keeps the intentionally
 * empty sitemap byte-for-byte. `INDEXABLE=true` (custom-domain cutover only)
 * populates it from the static route documents prerender-meta just emitted —
 * nothing hand-kept, so a route that exists in dist is in the sitemap.
 *
 *   npm run build                    # preview: empty sitemap (current state)
 *   INDEXABLE=true npm run build     # cutover: populated sitemap
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const site = (process.env.VITE_SITE_URL || 'https://legacy-music-group.netlify.app').replace(/\/$/, '')
const dist = join(process.cwd(), 'dist')
const indexable = process.env.INDEXABLE === 'true'

const EMPTY =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n'

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (name === 'index.html') out.push(p)
  }
  return out
}

if (!indexable) {
  writeFileSync(join(dist, 'sitemap.xml'), EMPTY)
  console.log('sitemap: preview (empty, noindex state preserved)')
} else {
  const urls = walk(dist)
    .map((p) => `/${relative(dist, p).replace(/index\.html$/, '').split(sep).join('/')}`)
    .filter((route) => route !== '/404/')
    .sort((a, b) => a.localeCompare(b))
  const body = urls.map((route) => `  <url><loc>${site}${route}</loc></url>`).join('\n')
  writeFileSync(
    join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
  )
  console.log(`sitemap: indexable build (${urls.length} URLs)`)
}
