import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const site = (process.env.VITE_SITE_URL || 'https://legacy-music-group.netlify.app').replace(/\/$/, '')
const dist = path.resolve('dist')
const source = await readFile(path.join(dist, 'index.html'), 'utf8')

const fixedRoutes = [
  ['studio', 'The Studio', 'See the control room, vocal booth, live room and working environment at Legacy Music Group in Deep Ellum.'],
  ['services', 'Recording Studio Services', 'Recording, mixing, mastering, podcasts, voiceover and artist development services in Deep Ellum, Dallas.'],
  ['engineers', 'Studio Engineers', 'Meet the engineers and studio team behind recording, mixing and production at Legacy Music Group.'],
  ['gear', 'Studio Gear', 'Explore the recording, monitoring and production tools available at Legacy Music Group in Deep Ellum.'],
  ['pricing', 'Studio Pricing', 'Published recording session rates and project options for Legacy Music Group in Dallas.'],
  ['blog', 'Newsroom and Studio Notes', 'Verified coverage of Legacy Music Group plus a growing archive of owner-reviewed studio notes.'],
  ['reviews', 'Client Reviews', 'Read client feedback and the dated Google rating snapshot for Legacy Music Group.'],
  ['events', 'Legacy Live and Studio Events', 'Find the next Legacy Music Group artist showcase through the studio social feed or direct contact.'],
  ['contact', 'Contact the Studio', 'Call, email or request a callback from Legacy Music Group at 2815 Main Street in Dallas.'],
  ['faq', 'Recording Studio FAQ', 'Straight answers about sessions, rates, location, gear and booking at Legacy Music Group.'],
  ['policies', 'Studio Policies', 'Read the current studio policy information published by Legacy Music Group.'],
  ['privacy', 'Privacy', 'Read the Legacy Music Group website privacy notice.'],
  ['terms', 'Terms', 'Read the Legacy Music Group website terms.'],
]

const engineerRoutes = [
  ['matthew', 'Matthew Medlock'],
  ['ray', 'Ray Dallas'],
  ['wayne', 'Wayne'],
  ['terry', 'Terry'],
].map(([slug, name]) => [
  `engineers/${slug}`,
  `${name} | Studio Team`,
  `Learn about ${name} and their role at Legacy Music Group in Deep Ellum, Dallas.`,
])

const serviceRoutes = [
  ['rap-recording', 'Rap Recording in Dallas'],
  ['r-and-b', 'R&B Recording in Dallas'],
  ['podcasts', 'Podcast Recording in Dallas'],
  ['voiceover', 'Voiceover Recording in Dallas'],
  ['artist-development', 'Artist Development in Dallas'],
].map(([slug, title]) => [
  `services/${slug}`,
  title,
  `${title} at Legacy Music Group in Deep Ellum, with published rates and direct studio contact.`,
])

const routes = [
  ...fixedRoutes,
  ...engineerRoutes,
  ...serviceRoutes,
]

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function setMeta(html, route, title, description, noindex = false) {
  const fullTitle = `${title} | Legacy Music Group`
  const url = `${site}/${route}`
  const safeTitle = escapeHtml(fullTitle)
  const safeDescription = escapeHtml(description)
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  return html
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
}

for (const [route, title, description] of routes) {
  const target = path.join(dist, route)
  await mkdir(target, { recursive: true })
  await writeFile(path.join(target, 'index.html'), setMeta(source, route, title, description))
}

await writeFile(
  path.join(dist, '404.html'),
  setMeta(source, '404', 'Page Not Found', 'The requested page could not be found.', true),
)

console.log(`Generated metadata-first HTML for ${routes.length} routes plus 404.`)
