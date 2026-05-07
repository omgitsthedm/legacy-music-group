import { useEffect } from 'react'

const SITE = {
  name: 'Legacy Music Group',
  url: 'https://legacymusicgroup.com',
  defaultDescription:
    "Hit-quality recordings at affordable rates from Dallas' top-tier audio engineers. Recording, mixing, mastering, and artist development in Deep Ellum. Book in under a minute.",
  defaultOgImage: '/images/hero-studio-dark.jpg',
  twitterHandle: '@LegacyMusicGrp',
  locale: 'en_US',
} as const

export interface SeoOptions {
  title: string
  description?: string
  path?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  noindex?: boolean
}

const setOrCreateMeta = (
  selector: string,
  attr: 'name' | 'property',
  attrValue: string,
  content: string,
) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setOrCreateLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function applySeo({
  title,
  description = SITE.defaultDescription,
  path = '',
  ogImage = SITE.defaultOgImage,
  ogType = 'website',
  noindex = false,
}: SeoOptions) {
  const fullTitle =
    title === SITE.name ? title : `${title} | ${SITE.name}`
  const url = `${SITE.url}${path}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE.url}${ogImage}`

  document.title = fullTitle

  setOrCreateMeta('meta[name="description"]', 'name', 'description', description)
  setOrCreateMeta(
    'meta[name="robots"]',
    'name',
    'robots',
    noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  )

  // Open Graph
  setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
  setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description)
  setOrCreateMeta('meta[property="og:type"]', 'property', 'og:type', ogType)
  setOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', url)
  setOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', fullOgImage)
  setOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE.name)
  setOrCreateMeta('meta[property="og:locale"]', 'property', 'og:locale', SITE.locale)

  // Twitter
  setOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
  setOrCreateMeta(
    'meta[name="twitter:description"]',
    'name',
    'twitter:description',
    description,
  )
  setOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', fullOgImage)

  setOrCreateLink('canonical', url)
}

export function useSeo(options: SeoOptions) {
  useEffect(() => {
    applySeo(options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    options.title,
    options.description,
    options.path,
    options.ogImage,
    options.ogType,
    options.noindex,
  ])
}

export { SITE }
