import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
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

const neighborhoodRoutes = [
  ['deep-ellum', 'Deep Ellum, Dallas', "Legacy Music Group is based in Deep Ellum — Dallas's historic music neighborhood."],
  ['uptown', 'Uptown Dallas', 'Legacy Music Group serves Uptown Dallas artists from its Deep Ellum recording studio.'],
  ['bishop-arts', 'Bishop Arts District, Dallas', 'Legacy Music Group serves Bishop Arts artists from its Deep Ellum recording studio.'],
  ['plano', 'Plano, TX', 'Legacy Music Group serves Plano artists from its Deep Ellum recording studio.'],
  ['frisco', 'Frisco, TX', 'Legacy Music Group serves Frisco artists from its Deep Ellum recording studio.'],
  ['richardson', 'Richardson, TX', 'Legacy Music Group serves Richardson artists from its Deep Ellum recording studio.'],
].map(([slug, name, description]) => [
  `neighborhoods/${slug}`,
  `Recording Studio Near ${name}`,
  description,
])

const blogRoutes = [
  ['recording-studios-in-deep-ellum-guide', 'Recording Studios in Deep Ellum: A Guide', 'A guide to recording studios in Deep Ellum and what artists should plan for.'],
  ['first-studio-session-dallas', 'What to Expect on Your First Studio Session in Dallas', 'A practical first-timer’s guide to preparing for a Dallas studio session.'],
  ['rap-recording-dallas', 'Rap Recording in Dallas: Studios, Engineers, Pricing', 'A guide to Dallas rap recording, engineers, studios, and published rates.'],
  ['mixing-mastering-pricing-dallas', 'How Mixing & Mastering Pricing Works in Dallas (2026)', 'A guide to Dallas mixing and mastering prices and what each service includes.'],
  ['artist-development-dallas-choosing-studio', 'Artist Development in Dallas: Choosing the Right Studio', 'How to evaluate artist development and recording studios in Dallas.'],
  ['inside-legacy-studio', 'Inside the Legacy Studio: Gear, Rooms, Workflow', 'A behind-the-scenes look at Legacy Music Group’s rooms, gear, and workflow.'],
].map(([slug, title, description]) => [`blog/${slug}`, title, description])

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

async function setMeta(html, route, title, description, noindex = false) {
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

async function assertSitemapRoutes() {
  const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8')
  const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
    const url = new URL(match[1])
    if (url.origin !== site) throw new Error(`Sitemap host must be ${site}.`)
    return url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '')
  })
  const expectedPaths = ['/', ...routes.map(([route]) => `/${route}`)]
  const missing = expectedPaths.filter((route) => !sitemapPaths.includes(route))
  const unexpected = sitemapPaths.filter((route) => !expectedPaths.includes(route))

  if (missing.length > 0 || unexpected.length > 0) {
    throw new Error(`Sitemap/static route mismatch. Missing: ${missing.join(', ') || 'none'}. Unexpected: ${unexpected.join(', ') || 'none'}.`)
  }
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

await assertSitemapRoutes()

console.log(`Generated metadata-first HTML for ${routes.length} routes plus 404.`)
