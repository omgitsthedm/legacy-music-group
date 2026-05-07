import { SITE } from './seo'

const BUSINESS = {
  legalName: 'Legacy Music Group',
  description:
    'Premium recording studio and artist development brand in Deep Ellum, Dallas. Recording, mixing, mastering, and full artist packages for independent artists.',
  address: {
    street: 'Placeholder Street Address',
    city: 'Dallas',
    region: 'TX',
    postal: '75226',
    country: 'US',
    neighborhood: 'Deep Ellum',
  },
  phone: '+1-214-555-0199',
  email: 'book@legacymusic.group',
  geo: {
    latitude: 32.7842,
    longitude: -96.7841,
  },
  priceRange: '$$',
  founded: 'Placeholder year',
} as const

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: BUSINESS.legalName,
  url: SITE.url,
  logo: `${SITE.url}/images/hero-studio-dark.jpg`,
  description: BUSINESS.description,
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
  '@id': `${SITE.url}/#localbusiness`,
  name: BUSINESS.legalName,
  description: BUSINESS.description,
  url: SITE.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  image: `${SITE.url}/images/hero-studio-dark.jpg`,
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
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '22:00',
    },
  ],
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
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: 'en-US',
}

export interface FaqEntry {
  question: string
  answer: string
}

export const buildFaqSchema = (entries: FaqEntry[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entries.map((e) => ({
    '@type': 'Question',
    name: e.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: e.answer,
    },
  })),
})

export const buildPersonSchema = (engineer: {
  id: string
  name: string
  specialty: string
  image: string
  bio: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/engineers/${engineer.id}#person`,
  name: engineer.name,
  jobTitle: `Recording Engineer — ${engineer.specialty}`,
  worksFor: { '@id': `${SITE.url}/#organization` },
  image: `${SITE.url}${engineer.image}`,
  description: engineer.bio,
  url: `${SITE.url}/engineers/${engineer.id}`,
})

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
