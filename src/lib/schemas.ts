import { SITE } from './seo'

const BUSINESS = {
  legalName: 'Legacy Music Group',
  // Description mirrored from the owner's Google Business Profile copy
  // for consistency with the Knowledge Graph entity.
  description:
    'Professional recording and production studio in Downtown Dallas (Deep Ellum). We offer hit quality recordings at affordable rates. Our top tier audio engineers will have your sound just right. Artists, producers, and engineers find this setting perfect for quality professional work.',
  address: {
    street: '2815 Main St, Suite A',
    city: 'Dallas',
    region: 'TX',
    postal: '75226',
    country: 'US',
    neighborhood: 'Deep Ellum',
  },
  phone: '+1-214-377-9729',
  email: 'info@legacymusicgroup.com',
  geo: {
    // Approximate coords for 2815 Main St, Dallas, TX 75226 (Deep Ellum)
    latitude: 32.7837,
    longitude: -96.7780,
  },
  priceRange: '$$',
  // PLACEHOLDER: real founding year not surfaced on legacymusicgroup.com or GBP.
  // Estimated from team tenure (10-yr veteran owner). Confirm with owner.
  founded: '2014',
  sameAs: [
    'https://www.instagram.com/legacymusicgroup/',
    'https://www.facebook.com/theLegacymusicgroup/',
    'https://twitter.com/LegacyMusicGrp',
    'https://www.youtube.com/c/LegacyMusicGroup',
    'https://www.linkedin.com/company/legacymusicgroup',
  ],
} as const

const ORG_REF = `${SITE.url}/#organization`
const LOCAL_REF = `${SITE.url}/#localbusiness`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_REF,
  name: BUSINESS.legalName,
  url: SITE.url,
  logo: `${SITE.url}/images/hero-studio-dark.jpg`,
  description: BUSINESS.description,
  sameAs: BUSINESS.sameAs,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.phone,
    contactType: 'customer service',
    email: BUSINESS.email,
    areaServed: 'US',
    availableLanguage: 'English',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MusicVenue'],
  '@id': LOCAL_REF,
  name: BUSINESS.legalName,
  description: BUSINESS.description,
  url: SITE.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  image: `${SITE.url}/images/hero-studio-dark.jpg`,
  sameAs: BUSINESS.sameAs,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postal,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  areaServed: [
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Fort Worth' },
    { '@type': 'AdministrativeArea', name: 'Dallas-Fort Worth Metroplex' },
    { '@type': 'Place', name: 'Deep Ellum' },
    { '@type': 'Place', name: 'Uptown Dallas' },
    { '@type': 'Place', name: 'Bishop Arts District' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Frisco' },
    { '@type': 'City', name: 'Richardson' },
  ],
  // Real hours sourced from Google Business Profile 2026-05-07.
  // Open every day 10:00 to 01:00 (1am the next day).
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '01:00',
    },
  ],
  foundingDate: BUSINESS.founded,
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/`,
      inLanguage: 'en-US',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Studio Session',
    },
  },
  // Real aggregate rating snapshot from Google Business Profile 2026-05-07.
  // Will be replaced by live GBP API integration on launch (Netlify Function
  // pattern, similar to Calendly availability proxy).
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    reviewCount: '128',
    bestRating: '5',
    worstRating: '1',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': ORG_REF },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// --- FAQ + Speakable -----------------------------------------------------

export interface FaqEntry {
  question: string
  answer: string
}

/**
 * FAQPage schema with `speakable` selectors so voice assistants can read
 * questions and answers aloud directly from the rendered DOM.
 */
export const buildFaqSchema = (entries: FaqEntry[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable]', 'h1', 'h2'],
  },
  mainEntity: entries.map((e) => ({
    '@type': 'Question',
    name: e.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: e.answer,
    },
  })),
})

// --- Person --------------------------------------------------------------

export const buildPersonSchema = (engineer: {
  id: string
  name: string
  specialty: string
  image: string
  bio: string
  credits?: { artist: string; track?: string; spotifyUri?: string }[]
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/engineers/${engineer.id}#person`,
  name: engineer.name,
  jobTitle: `Recording Engineer — ${engineer.specialty}`,
  worksFor: { '@id': ORG_REF },
  image: `${SITE.url}${engineer.image}`,
  description: engineer.bio,
  url: `${SITE.url}/engineers/${engineer.id}`,
  ...(engineer.credits && engineer.credits.length > 0
    ? {
        knowsAbout: Array.from(new Set(engineer.credits.map((c) => c.artist))),
      }
    : {}),
})

// --- Breadcrumb ----------------------------------------------------------

export const buildBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE.url}${item.path}`,
  })),
})

// --- Service -------------------------------------------------------------

export interface ServiceSchemaInput {
  name: string
  slug: string
  description: string
  serviceType?: string
  startingPrice?: string
  faqs?: FaqEntry[]
}

/**
 * Service schema — applied to /services and per-service landing pages
 * (rap-recording, r-and-b, podcasts, voiceover, artist-development).
 * Bundles in `Offer` if pricing is known.
 */
export const buildServiceSchema = (s: ServiceSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/services/${s.slug}#service`,
  name: s.name,
  description: s.description,
  provider: { '@id': ORG_REF },
  serviceType: s.serviceType ?? s.name,
  areaServed: [
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'AdministrativeArea', name: 'Dallas-Fort Worth Metroplex' },
  ],
  url: `${SITE.url}/services/${s.slug}`,
  ...(s.startingPrice
    ? {
        offers: {
          '@type': 'Offer',
          price: s.startingPrice,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: s.startingPrice,
            priceCurrency: 'USD',
          },
          availability: 'https://schema.org/InStock',
        },
      }
    : {}),
})

// --- Product (gear items) ------------------------------------------------

export interface ProductSchemaInput {
  name: string
  brand?: string
  category: string
  description?: string
  image?: string
}

export const buildProductSchema = (p: ProductSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.name,
  ...(p.brand ? { brand: { '@type': 'Brand', name: p.brand } } : {}),
  category: p.category,
  ...(p.description ? { description: p.description } : {}),
  ...(p.image ? { image: `${SITE.url}${p.image}` } : {}),
})

// --- Place (neighborhood pages) ------------------------------------------

export interface PlaceSchemaInput {
  name: string
  slug: string
  description: string
  containedInPlace?: string
  geo?: { latitude: number; longitude: number }
}

export const buildPlaceSchema = (p: PlaceSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': `${SITE.url}/neighborhoods/${p.slug}#place`,
  name: p.name,
  description: p.description,
  url: `${SITE.url}/neighborhoods/${p.slug}`,
  ...(p.containedInPlace
    ? {
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: p.containedInPlace,
        },
      }
    : {}),
  ...(p.geo
    ? {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: p.geo.latitude,
          longitude: p.geo.longitude,
        },
      }
    : {}),
})

// --- Article (blog) ------------------------------------------------------

export interface ArticleSchemaInput {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}

export const buildArticleSchema = (a: ArticleSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE.url}/blog/${a.slug}#article`,
  headline: a.title,
  description: a.description,
  image: `${SITE.url}${a.image ?? '/images/hero-studio-dark.jpg'}`,
  datePublished: a.datePublished,
  dateModified: a.dateModified ?? a.datePublished,
  author: {
    '@type': a.author ? 'Person' : 'Organization',
    name: a.author ?? 'Legacy Music Group',
  },
  publisher: { '@id': ORG_REF },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE.url}/blog/${a.slug}`,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable]', 'h1', 'h2'],
  },
})

// --- Event ---------------------------------------------------------------

export interface EventSchemaInput {
  name: string
  startDate: string
  endDate?: string
  description: string
  url?: string
  image?: string
}

export const buildEventSchema = (e: EventSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: e.name,
  startDate: e.startDate,
  ...(e.endDate ? { endDate: e.endDate } : {}),
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: { '@id': LOCAL_REF },
  description: e.description,
  ...(e.url ? { url: e.url } : {}),
  ...(e.image ? { image: `${SITE.url}${e.image}` } : {}),
  organizer: { '@id': ORG_REF },
})

// --- Review + AggregateRating --------------------------------------------

export interface ReviewSchemaInput {
  author: string
  reviewBody: string
  ratingValue: number
  datePublished?: string
}

export const buildReviewSchema = (r: ReviewSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: { '@type': 'Person', name: r.author },
  reviewBody: r.reviewBody,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: r.ratingValue,
    bestRating: 5,
    worstRating: 1,
  },
  itemReviewed: { '@id': LOCAL_REF },
  ...(r.datePublished ? { datePublished: r.datePublished } : {}),
})

export const buildAggregateRatingSchema = (input: {
  ratingValue: number
  reviewCount: number
}) => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: { '@id': LOCAL_REF },
  ratingValue: input.ratingValue,
  reviewCount: input.reviewCount,
  bestRating: 5,
  worstRating: 1,
})

// --- ItemList (for collection pages: blog, services, engineers) ---------

export const buildItemListSchema = (
  name: string,
  items: { name: string; url: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    url: `${SITE.url}${item.url}`,
  })),
})
