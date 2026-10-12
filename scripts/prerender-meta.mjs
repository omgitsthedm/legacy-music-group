import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import ts from 'typescript'

const moduleCode = ts.transpileModule(await readFile('src/lib/data.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText
const data = await import('data:text/javascript;base64,' + Buffer.from(moduleCode).toString('base64'))

const site = (process.env.VITE_SITE_URL || 'https://legacy-music-group.netlify.app').replace(/\/$/, '')
const dist = path.resolve('dist')
const source = await readFile(path.join(dist, 'index.html'), 'utf8')

const fixedRoutes = [
  ['studio', 'The Studio', 'See the control room, vocal booth, live room and working environment at Legacy Music Group in Deep Ellum.'],
  ['services', 'Recording Studio Services', 'Recording, mixing, mastering, podcasts, voiceover and artist development services in Deep Ellum, Dallas.'],
  ['engineers', 'Studio Engineers', 'Meet the engineers and studio team behind recording, mixing and production at Legacy Music Group.'],
  ['gear', 'Studio Gear', 'Explore the recording, monitoring and production tools available at Legacy Music Group in Deep Ellum.'],
  ['pricing', 'Studio Pricing', 'Published recording session rates and project options for Legacy Music Group in Dallas.'],
  ['blog', 'The Legacy Journal', 'Practical notes on recording, mixing, mastering, and planning your next Dallas studio session.'],
  ['reviews', 'Client Reviews', 'Read selected client feedback published on Legacy Music Group’s website.'],
  ['events', 'Studio Updates', 'Check Legacy’s current social posts for studio news and confirmed event details.'],
  ['contact', 'Contact the Studio', 'Call or email Legacy Music Group at 2815 Main St, Suite A, Dallas, TX 75226.'],
  ['faq', 'Recording Studio FAQ', 'Straight answers about sessions, rates, location, gear and booking at Legacy Music Group.'],
  ['policies', 'Studio Policies', 'Read the current studio policy information published by Legacy Music Group.'],
  ['privacy', 'Privacy', 'Read the Legacy Music Group website privacy notice.'],
  ['terms', 'Terms', 'Read the Legacy Music Group website terms.'],
]

const engineerRoutes = data.engineers.map(e => [`engineers/${e.id}`, `${e.name} — ${e.specialty}`, `${e.name}, ${e.specialty} at Legacy Music Group in Deep Ellum, Dallas. Read the profile and contact the studio.`])
const serviceRoutes = data.services.map(s => [`services/${s.slug}`, s.name, `${s.name} at Legacy Music Group in Deep Ellum. ${s.oneLiner}`])
const neighborhoodRoutes = data.neighborhoods.map(p => [`neighborhoods/${p.slug}`, `Recording Studio Near ${p.name}`, `Recording for artists from ${p.fullName} at Legacy Music Group in Deep Ellum, Dallas. Plan your session at 2815 Main St, Suite A.`])
const blogRoutes = data.blogPosts.map(b => [`blog/${b.slug}`, b.title, b.excerpt])

const routes = [
  ...fixedRoutes,
  ...engineerRoutes,
  ...serviceRoutes,
  ...neighborhoodRoutes,
  ...blogRoutes,
]

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

async function assertRootAbsoluteAssets(html, destination) {
  const assetUrls = [...html.matchAll(/(?:href|src)="([^"]*\/assets\/[^\"]+)"/g)].map((match) => match[1])
  const relativeUrls = [...html.matchAll(/(?:href|src)="\.\/([^"]+)"/g)].map((match) => match[1])
  const rootStaticUrls = ['/favicon.svg', '/site.webmanifest']

  if (
    assetUrls.length === 0 ||
    assetUrls.some((url) => !url.startsWith('/assets/')) ||
    relativeUrls.length > 0 ||
    rootStaticUrls.some((url) => !html.includes(`\"${url}\"`))
  ) {
    throw new Error(`Generated ${destination} must use root-absolute static URLs.`)
  }

  await Promise.all(
    [...assetUrls, ...rootStaticUrls].map((url) => access(path.join(dist, url.slice(1)))),
  )
}

async function setMeta(html, route, title, description, noindex = true) {
  const fullTitle = `${title} | Legacy Music Group`
  const url = `${site}/${route}`
  const safeTitle = escapeHtml(fullTitle)
  const safeDescription = escapeHtml(description)
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  const output = html
    // Vite's `base: './'` is correct for the root document but breaks static
    // metadata documents served from deep routes such as `/events/`.
    .replaceAll('./assets/', '/assets/')
    .replaceAll('./favicon.svg', '/favicon.svg')
    .replaceAll('./site.webmanifest', '/site.webmanifest')
    .replace(/\s*<link rel="preload" as="image" href="\/images\/control-room-signal-gold\.webp" fetchpriority="high" \/>/, '')
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`)
    .replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/, `$1${robots}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${safeTitle}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${safeTitle}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`)

  await assertRootAbsoluteAssets(output, `/${route}`)
  return output
}

for (const [route, title, description] of routes) {
  const target = path.join(dist, route)
  await mkdir(target, { recursive: true })
  await writeFile(path.join(target, 'index.html'), await setMeta(source, route, title, description))
}

await writeFile(
  path.join(dist, '404.html'),
  await setMeta(source, '404', 'Page Not Found', 'The requested page could not be found.', true),
)


console.log(`Generated metadata-first HTML for ${routes.length} routes plus 404.`)
