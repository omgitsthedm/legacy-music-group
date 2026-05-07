/**
 * Centralized data store. PLACEHOLDER markers note temporary content; the
 * full inventory + swap-out instructions live in PLACEHOLDERS.md.
 */

import type { FaqEntry } from './schemas'

// =========================================================================
// CALENDLY CONFIGURATION
// =========================================================================

export interface CalendlyEventConfig {
  bookingUrl: string
  eventTypeUri: string
}

export const calendly = {
  withEngineer: {
    default: {
      bookingUrl: 'https://calendly.com/legacymusicgroup/recording-with-engineer',
      eventTypeUri: 'https://api.calendly.com/event_types/PLACEHOLDER-UUID-DEFAULT',
    } satisfies CalendlyEventConfig,
    byEngineerId: {
      '1': {
        bookingUrl: 'https://calendly.com/legacymusicgroup/recording-with-marcus-cole',
        eventTypeUri: 'https://api.calendly.com/event_types/PLACEHOLDER-UUID-1',
      },
      '2': {
        bookingUrl: 'https://calendly.com/legacymusicgroup/recording-with-sofia-reyes',
        eventTypeUri: 'https://api.calendly.com/event_types/PLACEHOLDER-UUID-2',
      },
      '3': {
        bookingUrl: 'https://calendly.com/legacymusicgroup/recording-with-david-byrne',
        eventTypeUri: 'https://api.calendly.com/event_types/PLACEHOLDER-UUID-3',
      },
      '4': {
        bookingUrl: 'https://calendly.com/legacymusicgroup/recording-with-jade-williams',
        eventTypeUri: 'https://api.calendly.com/event_types/PLACEHOLDER-UUID-4',
      },
    } as Record<string, CalendlyEventConfig>,
  },
  withoutEngineer: {
    bookingUrl: 'https://calendly.com/legacymusicgroup/studio-time',
    eventTypeUri: 'https://api.calendly.com/event_types/PLACEHOLDER-UUID-STUDIO-TIME',
  } satisfies CalendlyEventConfig,
  availabilityEndpoint: '/.netlify/functions/calendly-availability',
}

// =========================================================================
// CONTACT INFO
// =========================================================================
// PLACEHOLDER: replace all values with real contact details before launch.

export const contact = {
  phone: '(214) 555-0199',
  phoneE164: '+12145550199',
  email: 'book@legacymusic.group',
  addressLine1: 'Deep Ellum',
  addressLine2: 'Dallas, TX 75226',
  hours: 'Mon–Sat, 10am–10pm',
  responseTime: 'We reply within 24hrs',
}

// =========================================================================
// ENGINEERS
// =========================================================================

export interface EngineerCredit {
  artist: string
  track?: string
  spotifyUri?: string
  appleMusicUri?: string
  year?: string
}

export interface Engineer {
  id: string
  name: string
  specialty: string
  image: string
  bio: string
  stats: { experience: string; projects: string; highlight: string }
  genres: string[]
  /** Service slugs this engineer specializes in (links to /services/[slug]) */
  serviceSlugs: string[]
  samples: { title: string; artist: string; duration: string }[]
  /** PLACEHOLDER: real artist track credits with Spotify/AM embeds */
  credits: EngineerCredit[]
}

// PLACEHOLDER: All engineer data is fictional — see PLACEHOLDERS.md §Engineers.
export const engineers: Engineer[] = [
  {
    id: '1',
    name: 'Marcus Cole',
    specialty: 'Hip-Hop, R&B',
    image: '/images/engineer-1.jpg',
    bio: 'Marcus Cole is a Grammy-nominated engineer and producer with over a decade of experience shaping the sound of Dallas hip-hop and R&B. His approach blends analog warmth with modern clarity, creating mixes that feel both timeless and contemporary. Marcus began his career interning at legendary studios in Los Angeles before returning to his hometown to build Legacy Music Group alongside fellow creators. His work has been featured on major streaming playlists, national radio, and even a Super Bowl commercial. Artists describe his sessions as transformative — he has a rare gift for making vocalists feel completely at ease while pushing them to deliver their best performance.',
    stats: { experience: '10+ Years', projects: '500+ Projects', highlight: 'Grammy Nominated' },
    genres: ['Hip-Hop', 'R&B', 'Trap Soul'],
    serviceSlugs: ['rap-recording', 'r-and-b'],
    samples: [
      { title: 'Midnight in Deep Ellum', artist: 'Local Artist Mix', duration: '3:42' },
      { title: 'Caramel Skies', artist: 'R&B Session', duration: '4:15' },
      { title: 'Concrete Jungle', artist: 'Hip-Hop Beat', duration: '2:58' },
      { title: 'Late Night Drive', artist: 'Trap Soul Mix', duration: '3:30' },
    ],
    credits: [
      { artist: 'Placeholder Artist A', track: 'Track Name', year: '2024' },
      { artist: 'Placeholder Artist B', track: 'Track Name', year: '2024' },
      { artist: 'Placeholder Artist C', track: 'Track Name', year: '2023' },
    ],
  },
  {
    id: '2',
    name: 'Sofia Reyes',
    specialty: 'Pop, Electronic',
    image: '/images/engineer-2.jpg',
    bio: 'Sofia Reyes is a pop and electronic music specialist whose productions have collectively amassed over 50 million streams. Trained in both classical piano and electronic production, she brings a unique harmonic sensibility to modern pop music. Sofia has a particular talent for vocal production — comping, tuning, and layering vocals to create that polished, radio-ready sound. Her electronic productions are known for their dynamic range and emotional depth, often blending organic instrumentation with synthesized textures.',
    stats: { experience: '8+ Years', projects: '300+ Projects', highlight: '50M+ Streams' },
    genres: ['Pop', 'Electronic', 'Synthwave'],
    serviceSlugs: ['artist-development'],
    samples: [
      { title: 'Neon Dreams', artist: 'Pop Production', duration: '3:18' },
      { title: 'Pulse', artist: 'Electronic Mix', duration: '4:02' },
      { title: 'Glass Heart', artist: 'Pop Ballad', duration: '3:55' },
      { title: 'Digital Love', artist: 'Synthwave Track', duration: '3:22' },
    ],
    credits: [
      { artist: 'Placeholder Pop Artist', track: 'Track Name', year: '2024' },
      { artist: 'Placeholder Synth Act', track: 'Track Name', year: '2024' },
    ],
  },
  {
    id: '3',
    name: 'David Byrne',
    specialty: 'Rock, Folk',
    image: '/images/engineer-3.jpg',
    bio: 'David Byrne has spent over 15 years recording and mixing for indie darlings and major label rock acts. His philosophy is simple: capture the performance, not the perfection. David specializes in live band recording, using minimal processing to preserve the raw energy of a group playing together in a room. His folk productions are renowned for their intimate, "sitting-right-next-to-you" quality. David also mentors younger engineers at Legacy, passing down the craft of analog signal flow and microphone technique.',
    stats: { experience: '15+ Years', projects: '700+ Projects', highlight: 'Multi-Platinum' },
    genres: ['Rock', 'Folk', 'Indie'],
    serviceSlugs: ['voiceover', 'podcasts'],
    samples: [
      { title: 'Dust and Bones', artist: 'Rock Album Mix', duration: '4:10' },
      { title: 'Front Porch', artist: 'Folk Session', duration: '3:45' },
      { title: 'Amplifier', artist: 'Live Band Recording', duration: '3:58' },
      { title: 'Open Road', artist: 'Indie Production', duration: '4:22' },
    ],
    credits: [
      { artist: 'Placeholder Indie Band', track: 'Track Name', year: '2023' },
      { artist: 'Placeholder Folk Artist', track: 'Track Name', year: '2024' },
    ],
  },
  {
    id: '4',
    name: 'Jade Williams',
    specialty: 'Hip-Hop, Soul',
    image: '/images/engineer-4.jpg',
    bio: 'Jade Williams is an artist-first engineer who believes every great recording starts with a great performance. Specializing in hip-hop and soul, Jade has an uncanny ability to connect with artists on a personal level, creating a studio environment where vulnerability and creativity can flourish. She cut her teeth engineering for local Dallas artists before quickly rising to work with touring acts passing through Deep Ellum. Her soul productions feature lush, warm tones that harken back to the golden age of R&B while maintaining contemporary punch.',
    stats: { experience: '6+ Years', projects: '200+ Projects', highlight: 'Rising Star' },
    genres: ['Hip-Hop', 'Soul', 'Neo-Soul'],
    serviceSlugs: ['rap-recording', 'r-and-b', 'artist-development'],
    samples: [
      { title: 'Soul Searching', artist: 'Neo-Soul Mix', duration: '4:05' },
      { title: 'Barz', artist: 'Hip-Hop Session', duration: '3:12' },
      { title: 'Golden Hour', artist: 'Soul Production', duration: '3:48' },
      { title: 'Freestyle Room', artist: 'Raw Session', duration: '2:45' },
    ],
    credits: [
      { artist: 'Placeholder Hip-Hop Artist', track: 'Track Name', year: '2024' },
      { artist: 'Placeholder Soul Singer', track: 'Track Name', year: '2023' },
    ],
  },
]

// =========================================================================
// SERVICES (genre / category landing pages)
// =========================================================================

export interface Service {
  slug: string
  name: string
  shortName: string
  category: 'recording' | 'production' | 'creative'
  oneLiner: string
  hero: string
  intro: string
  /** Used in page body — short paragraphs */
  body: string[]
  /** Bullet list items — what's included */
  whatsIncluded: string[]
  /** Pricing teaser ("from $X") — full pricing on /pricing */
  startingPrice: string
  /** SEO keywords/queries this page targets */
  targetQueries: string[]
  faqs: FaqEntry[]
  image: string
  /** Engineer IDs who specialize in this service */
  recommendedEngineerIds: string[]
}

export const services: Service[] = [
  {
    slug: 'rap-recording',
    name: 'Rap Recording in Dallas',
    shortName: 'Rap Recording',
    category: 'recording',
    oneLiner: 'Hip-hop sessions tuned for vocal clarity, low-end weight, and the modern Dallas sound.',
    hero: '/images/studio-vocal-booth.jpg',
    intro:
      "Dallas hip-hop has its own pocket — and we record it like it does. Legacy's vocal chain is dialed for rap delivery: tight low-mids, controlled sibilance, and the kind of breathy presence that makes a verse feel like the artist is in the room with the listener.",
    body: [
      "Most rap sessions at Legacy book through with-engineer time — you bring the bars, your engineer dials the chain, comps the takes, and you walk out with a stem-ready session. Beat off your laptop, beat from a producer in the room, beat we're tracking live — all good.",
      "We work fast. A four-hour block typically gets you 1–2 finished records (vocals tracked, comped, lightly polished). Add mixing & mastering to the booking and you leave with masters in 5–7 days.",
      "The room is built for the workflow. Pro Tools and Logic Pro on-deck, vocal booth tuned for hip-hop articulation, and a producer's chair that doesn't get in the way of the artist's flow.",
    ],
    whatsIncluded: [
      'Pro engineer at the board',
      'Vocal chain tuned for rap delivery',
      'Comping, tuning, light polish in-session',
      'Stem-ready session files delivered after',
      'Add mixing & mastering for radio-ready output',
    ],
    startingPrice: '$75/hr',
    targetQueries: [
      'rap recording studio dallas',
      'hip hop studio dallas',
      'rap studio deep ellum',
      'best rap recording studio in dallas',
      'rap studio dallas tx',
    ],
    faqs: [
      {
        question: 'Can I bring my own producer or beat?',
        answer: 'Yes. Bring beats on a USB drive, your laptop, or pull them from your email — we route audio in any way you need. If you want a producer in the room, that\'s a Without Engineer booking with the producer running the board.',
      },
      {
        question: 'How many records can I track in a session?',
        answer: 'A four-hour block typically lands 1–2 finished vocal tracks (recorded, comped, polished). A full eight-hour day can land 3–5 depending on complexity.',
      },
      {
        question: 'Do you do mixing and mastering for rap separately?',
        answer: 'Yes — send your stems and we mix and master them out. Most artists bundle it with their recording session via the Mixing & Mastering add-on, but standalone projects are welcome.',
      },
      {
        question: 'What\'s your turnaround for finished records?',
        answer: 'Recording session files: same day. Mixing & mastering: 5–7 business days, with two rounds of revisions included.',
      },
    ],
    image: '/images/studio-vocal-booth.jpg',
    recommendedEngineerIds: ['1', '4'],
  },
  {
    slug: 'r-and-b',
    name: 'R&B Recording in Dallas',
    shortName: 'R&B Recording',
    category: 'recording',
    oneLiner: 'Vocal-forward sessions with the warmth, harmony stacking, and pocket modern R&B demands.',
    hero: '/images/studio-control-room.jpg',
    intro:
      'Modern R&B lives or dies on vocal performance and harmony stacking — and we treat them like the engineering problem they are. Legacy\'s R&B chain is built for layered vocals, expressive ad-libs, and the kind of intimate texture that holds up on Spotify and on a car system.',
    body: [
      "Whether you're cutting a slow-burn ballad or a Bedroom-R&B groove, the workflow is the same: we get your lead vocal feeling natural, then build the harmony stack, then tune and color it until the mix sits where it should.",
      "Our R&B engineers come from the school of capturing the take, not engineering it from a click. Real comping, real harmony stacking, real attention to the breaths between phrases.",
      "Bookings can be tracking-only or full-session (record + mix + master in-house). The Full Package adds promotional clips for social.",
    ],
    whatsIncluded: [
      'Vocal chain for layered R&B production',
      'Harmony stacking + comping in-session',
      'Live instrument capture if you bring a band',
      'Mixing & mastering as add-on or bundled',
      'Stem files + reference mixes delivered same day',
    ],
    startingPrice: '$75/hr',
    targetQueries: [
      'r&b recording studio dallas',
      'r&b vocal recording dallas',
      'soul recording studio dallas',
      'best r&b studio in deep ellum',
    ],
    faqs: [
      {
        question: 'Can you record live instruments alongside vocals?',
        answer: 'Yes. We have a live room for guitar, keys, and small ensemble work. Drums need pre-booking discussion since the room setup takes longer.',
      },
      {
        question: 'Do you offer harmony stacking as a service?',
        answer: 'It\'s included in any with-engineer R&B session. We comp, double, and stack as part of the workflow rather than billing it separately.',
      },
      {
        question: 'How much pre-production should I do before coming in?',
        answer: 'Bring a clear demo, lyric sheet, and reference tracks. The cleaner your prep, the more time we spend on takes that matter instead of figuring out arrangement on the clock.',
      },
    ],
    image: '/images/studio-control-room.jpg',
    recommendedEngineerIds: ['1', '4'],
  },
  {
    slug: 'podcasts',
    name: 'Podcast Recording in Dallas',
    shortName: 'Podcasts',
    category: 'creative',
    oneLiner: 'Studio-grade podcast capture with engineer-driven editing and audiogram-ready exports.',
    hero: '/images/studio-live-room.jpg',
    intro:
      "Most podcast 'studios' in Dallas are coworking rooms with two USB mics on a table. Legacy is a real recording studio that records podcasts — broadcast-grade mics, treated rooms, and an engineer who knows how to make conversation sit comfortably in the listener's ears.",
    body: [
      "We support 1–4 hosts in the room with isolated capture per voice, plus remote-guest integration via Squadcast or Riverside if needed. The engineer handles routing, level-setting, and rough edits in-session.",
      "Editing is the part that kills DIY podcasters. We deliver edited episodes (filler-word removal, awkward-pause trims, basic music beds) with 5-day turnaround. Audiograms and 60s social cuts available as add-ons.",
      "Recurring shows get block discounts. If you\'re publishing weekly, we'll set up a same-time-every-week slot and a templated workflow so each session takes less of your bandwidth.",
    ],
    whatsIncluded: [
      'Up to 4 host mics + remote guest routing',
      'Treated room — no echo, no HVAC noise',
      'Engineer-driven rough edits in-session',
      'Edited episode delivered in 5 days',
      'Audiograms + social cuts as add-on',
    ],
    startingPrice: '$120/hr (tracking + edit bundle)',
    targetQueries: [
      'podcast studio dallas',
      'podcast recording dallas',
      'dallas podcast studio rental',
      'professional podcast recording deep ellum',
    ],
    faqs: [
      {
        question: 'Can I record remote guests?',
        answer: 'Yes. We integrate Squadcast or Riverside on the engineer\'s end so remote guests get isolated capture quality. You just need them on a decent mic.',
      },
      {
        question: 'Do you edit and produce too, or just record?',
        answer: 'Both. The default podcast booking includes engineer-driven rough editing in-session. Final edited episode delivered within 5 business days. Full sound design + music beds available as upgrades.',
      },
      {
        question: 'Is there a discount for recurring weekly shows?',
        answer: 'Yes — recurring weekly bookings get block-discount pricing. We\'ll set up a templated workflow so each session is faster than the last.',
      },
    ],
    image: '/images/studio-live-room.jpg',
    recommendedEngineerIds: ['3'],
  },
  {
    slug: 'voiceover',
    name: 'Voiceover Recording in Dallas',
    shortName: 'Voiceover',
    category: 'creative',
    oneLiner: 'Broadcast-ready voiceover sessions for commercials, audiobooks, narration, and animation.',
    hero: '/images/studio-vocal-booth.jpg',
    intro:
      "Whether you're a working voice actor with a regular client list or recording your first national spot, we run voiceover sessions like the broadcast clients they\'re for: tight, prepped, and ready for direction from your producer (in-room, on-line, or both).",
    body: [
      "Phone patch, ipDTL, Source-Connect, Zoom — pick your remote-direction stack and we\'ll have it tested before you walk in. Engineer-directed sessions and self-direction both supported.",
      "We deliver broadcast-spec files (WAV, AIFF, MP3 — your spec) with leveling, de-noise, and edit cleanup applied. Tongue-clicks, breath edits, room tone — handled in-session so you walk out with usable audio.",
      "Audiobooks book as full-day or half-day sessions with quiet-room reads and engineer-driven edit cleanup. ACX-compliant masters available as add-on.",
    ],
    whatsIncluded: [
      'Broadcast-grade vocal chain',
      'Source-Connect / ipDTL / Zoom remote direction',
      'Edit cleanup + leveling in-session',
      'Files delivered to spec',
      'ACX-compliant audiobook masters available',
    ],
    startingPrice: '$95/hr',
    targetQueries: [
      'voiceover studio dallas',
      'voiceover recording dallas',
      'audiobook recording studio dallas',
      'commercial vo recording deep ellum',
    ],
    faqs: [
      {
        question: 'Do you support remote direction?',
        answer: 'Yes — Source-Connect, ipDTL, Zoom, and phone patch are all supported. Tell us which one your client uses when you book.',
      },
      {
        question: 'Can I do audiobook recording here?',
        answer: 'Yes. Audiobooks book as full or half-day sessions in the quiet room. ACX-compliant masters are an add-on if you\'re publishing through Audible.',
      },
      {
        question: 'How fast can I get files after the session?',
        answer: 'Edit-cleanup audio walks out with you on a USB drive or arrives in your inbox same-day. Final mastered deliverables for commercials usually within 24 hrs.',
      },
    ],
    image: '/images/studio-vocal-booth.jpg',
    recommendedEngineerIds: ['3'],
  },
  {
    slug: 'artist-development',
    name: 'Artist Development in Dallas',
    shortName: 'Artist Development',
    category: 'creative',
    oneLiner: 'Strategy, branding, and creative direction beyond the recording booth.',
    hero: '/images/about-studio-wide.jpg',
    intro:
      "Recording the song is the easy part. Releasing it, building an audience, and turning a song into a career is where most independent artists stall. Legacy\'s artist development isn't a contract — it\'s a working relationship that helps you make the right decisions at the right time.",
    body: [
      "Engagement levels run from one-off consultations (you\'re stuck on a release plan, you need a second pair of ears on a brand identity) to multi-month creative-direction relationships (we help you plan the rollout, the visuals, the social strategy, the positioning).",
      "We don\'t do management. We don\'t take points on your masters. We help you make better decisions and connect you with the right people in the Dallas scene — venues, photographers, designers, distributors — when you need them.",
      "Best fit: artists with at least one solid record under their belt who want to take the next step seriously. If you\'re still finding your sound, book recording time first and let\'s talk after a few sessions.",
    ],
    whatsIncluded: [
      'Release strategy + roadmap',
      'Brand identity review',
      'Creative direction for visuals + content',
      'Connections to Dallas scene (venues, designers, photogs)',
      'Multi-month engagements available',
    ],
    startingPrice: 'Consultation $150 / Multi-month engagements custom',
    targetQueries: [
      'artist development dallas',
      'music branding dallas',
      'independent artist support dallas',
      'music career development deep ellum',
    ],
    faqs: [
      {
        question: 'Is this management?',
        answer: 'No. We don\'t take points on your masters, we don\'t book your shows, we don\'t sign you to anything. We\'re a working relationship for strategy and creative direction.',
      },
      {
        question: 'Who is this best for?',
        answer: 'Artists with at least one strong record finished who want to take the next step seriously — releasing intentionally, building real audience, and not winging the brand decisions.',
      },
      {
        question: 'How does pricing work?',
        answer: 'One-off consultations are flat-rate. Multi-month engagements are custom-scoped — we start with a free intro call to see if it\'s a fit and what level of engagement makes sense.',
      },
    ],
    image: '/images/about-studio-wide.jpg',
    recommendedEngineerIds: ['2', '4'],
  },
]

// =========================================================================
// PRICING (transparent tier card — contrarian play vs hidden-pricing competitors)
// =========================================================================

export interface PricingTier {
  name: string
  price: string
  unit: string
  tagline: string
  features: string[]
  highlighted?: boolean
}

// PLACEHOLDER: pricing reflects illustrative rates — confirm with owner.
export const pricingTiers: PricingTier[] = [
  {
    name: 'Hourly',
    price: '$75',
    unit: '/hr · with engineer',
    tagline: 'Best for short sessions or testing the room.',
    features: [
      'Pro engineer at the board',
      'Pro Tools / Logic Pro',
      'Vocal booth or live room',
      '$45/hr without engineer',
      '2-hour minimum booking',
    ],
  },
  {
    name: '4-Hour Block',
    price: '$280',
    unit: 'with engineer · saves $20',
    tagline: 'The sweet spot. 1–2 finished records.',
    features: [
      'Includes engineer',
      'Comping + light polish in-session',
      '$170 without engineer',
      'Stem files delivered same-day',
      'Add mixing/mastering for $150/song',
    ],
    highlighted: true,
  },
  {
    name: '8-Hour Day',
    price: '$520',
    unit: 'with engineer · saves $80',
    tagline: 'Full project day. EP- or album-ready.',
    features: [
      'Includes engineer',
      'Stem files + reference mixes',
      '$320 without engineer',
      'Coffee + meal accommodation',
      'Add Full Package for $300',
    ],
  },
  {
    name: 'Full Package',
    price: '$500',
    unit: 'recording + mix + master + 3 promo clips',
    tagline: 'The release-ready bundle.',
    features: [
      '4-hour recording session',
      'Professional mix + master',
      '3 promotional content clips',
      'Release strategy consult',
      '5–7 day turnaround on deliverables',
    ],
  },
]

// =========================================================================
// GEAR (for /gear page — Product schema)
// =========================================================================

export interface GearItem {
  name: string
  brand?: string
  category: 'console' | 'microphone' | 'preamp' | 'compressor' | 'monitor' | 'instrument' | 'software' | 'outboard'
  description?: string
  image?: string
}

// PLACEHOLDER: gear list reflects a realistic Dallas studio loadout.
// Replace with Legacy's actual gear list before launch.
export const gearList: GearItem[] = [
  {
    name: 'Solid State Logic SSL Console',
    brand: 'SSL',
    category: 'console',
    description: 'Analog summing console for hybrid mixing workflow.',
  },
  {
    name: 'Pro Tools',
    brand: 'Avid',
    category: 'software',
    description: 'Industry-standard DAW running on every session.',
  },
  {
    name: 'Logic Pro',
    brand: 'Apple',
    category: 'software',
    description: 'Available on request — works for songwriters who came up in Logic.',
  },
  {
    name: 'Neumann U87',
    brand: 'Neumann',
    category: 'microphone',
    description: 'The vocal mic. Bright, present, forgiving.',
  },
  {
    name: 'Shure SM7B',
    brand: 'Shure',
    category: 'microphone',
    description: 'Hip-hop vocal mic + podcast mic. Defaults for rap sessions.',
  },
  {
    name: 'Sony C-800G',
    brand: 'Sony',
    category: 'microphone',
    description: 'When the song calls for that polished modern hip-hop sound.',
  },
  {
    name: 'AEA R84A Ribbon',
    brand: 'AEA',
    category: 'microphone',
    description: 'For vocals that need warmth and roll-off — also tracks guitar amps and brass.',
  },
  {
    name: 'Royer R-121',
    brand: 'Royer',
    category: 'microphone',
    description: 'Guitar amp ribbon. Warm and detailed.',
  },
  {
    name: 'Universal Audio Apollo',
    brand: 'Universal Audio',
    category: 'preamp',
    description: 'Front-end interface with UAD plugins for tracking-time effects.',
  },
  {
    name: 'Neve 1073-style Preamp',
    brand: 'Neve',
    category: 'preamp',
    description: 'For vocals that need that classic British color.',
  },
  {
    name: 'API 512c',
    brand: 'API',
    category: 'preamp',
    description: 'Snare and percussion preamp — punch.',
  },
  {
    name: 'LA-2A Compressor',
    brand: 'Universal Audio',
    category: 'compressor',
    description: 'Silky vocal compressor. Standard hip-hop and R&B chain.',
  },
  {
    name: '1176 Compressor',
    brand: 'Universal Audio',
    category: 'compressor',
    description: 'Aggressive vocal and drum compression.',
  },
  {
    name: 'Distressor EL8',
    brand: 'Empirical Labs',
    category: 'compressor',
    description: 'Mod button on, vocal sounds 10× more expensive.',
  },
  {
    name: 'Genelec 1031A Monitors',
    brand: 'Genelec',
    category: 'monitor',
    description: 'Mains. Translation that holds up everywhere.',
  },
  {
    name: 'Yamaha NS-10M',
    brand: 'Yamaha',
    category: 'monitor',
    description: 'Reference nearfields. The unforgiving second opinion.',
  },
  {
    name: 'Avantone MixCubes',
    brand: 'Avantone',
    category: 'monitor',
    description: 'Mid-only check — what your mix sounds like in the average car.',
  },
]

// =========================================================================
// NEIGHBORHOODS (for /neighborhoods/[slug] pages)
// =========================================================================

export interface Neighborhood {
  slug: string
  name: string
  fullName: string
  oneLiner: string
  driveTime: string
  intro: string
  body: string[]
  highlights: { label: string; detail: string }[]
  geo: { latitude: number; longitude: number }
  image?: string
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'deep-ellum',
    name: 'Deep Ellum',
    fullName: 'Deep Ellum, Dallas',
    oneLiner: 'Where Legacy Music Group lives — Dallas\'s historic music neighborhood.',
    driveTime: '0 minutes — we\'re right here',
    intro:
      "Deep Ellum has been the heartbeat of Dallas music for over a century. Legendary blues sessions, punk shows in the 80s, hip-hop and indie waves through every decade since — the neighborhood is the reason Legacy exists.",
    body: [
      "Walk a block in any direction from the studio and you'll pass venues that have hosted every kind of artist: Trees, Three Links, Stubbs, Bomb Factory. The mural-covered walls and late-night food spots that fuel the creativity inside our walls.",
      "Deep Ellum sits in 75226 — accessible from the Deep Ellum DART rail station, just east of downtown Dallas. Most artists who book at Legacy plan their session around dinner at a Main Street restaurant or a show at a nearby venue afterward.",
      "Recording studios in Deep Ellum have a particular character: smaller rooms, more individual attention, and a tighter connection to the Dallas music scene than the bigger commercial studios in North Dallas or Garland. Legacy is built squarely in that tradition with a 2026 modern-luxury upgrade.",
    ],
    highlights: [
      { label: 'DART Station', detail: 'Deep Ellum Station — short walk from studio' },
      { label: 'ZIP Code', detail: '75226' },
      { label: 'Drive from Downtown', detail: '5 minutes from the heart of Dallas' },
      { label: 'Nearby Venues', detail: 'Trees · Three Links · Bomb Factory · Stubbs' },
      { label: 'Late-Night Food', detail: 'Easy walk to multiple late-hours spots' },
    ],
    geo: { latitude: 32.7842, longitude: -96.7841 },
    image: '/images/studio-lobby.jpg',
  },
  {
    slug: 'uptown',
    name: 'Uptown Dallas',
    fullName: 'Uptown Dallas',
    oneLiner: 'A 10-minute drive south for the artists building careers from Dallas\'s growth corridor.',
    driveTime: '10 min · 4 miles',
    intro:
      "Uptown is where a lot of Dallas\'s working creative class lives — designers, musicians, producers all sharing rent in the same towers and walk-up brownstones. Legacy is a quick highway hop or a 10-minute Lyft from anywhere in Uptown.",
    body: [
      "If you live in Uptown, you have your pick of recording studios in the metro area, but most of the bigger commercial ones are 25–40 minutes north or east. Legacy in Deep Ellum is the closest premium studio with engineer-driven sessions.",
      "Uptown artists typically book evening sessions — leave work, hit the studio for a four-hour block, grab dinner in Deep Ellum after. Sessions that start at 6 or 7 PM and run to 10 or 11 are the most common booking pattern from Uptown.",
      "Free street parking in Deep Ellum after 6 PM and a dedicated lot for sessions makes the 10-minute hop frictionless even on weeknights.",
    ],
    highlights: [
      { label: 'Drive time', detail: '10 minutes via Woodall Rodgers Fwy' },
      { label: 'Distance', detail: 'Approximately 4 miles' },
      { label: 'Best session times', detail: 'Evening blocks (6–10 PM) work well from Uptown' },
      { label: 'Parking', detail: 'Free street parking in Deep Ellum after 6 PM' },
    ],
    geo: { latitude: 32.8014, longitude: -96.8021 },
  },
  {
    slug: 'bishop-arts',
    name: 'Bishop Arts',
    fullName: 'Bishop Arts District, Dallas',
    oneLiner: 'A 12-minute drive across the river for the Oak Cliff creative community.',
    driveTime: '12 min · 6 miles',
    intro:
      "Bishop Arts has its own creative density — independent artists, working musicians, design studios, and the kind of small-business culture that breeds collaboration. Legacy is a quick crossing of the Trinity River away.",
    body: [
      "Recording studios in Oak Cliff itself are limited, and most Bishop Arts artists end up booking either at home setups or trekking to North Dallas. Legacy in Deep Ellum is the nearest premium studio — close enough for weeknight sessions without the commitment of a north-side drive.",
      "Bishop Arts is heavy on R&B, soul, and Latin music — Legacy\'s engineering chain runs particularly well for those genres. We have engineers who specialize in soul and R&B production specifically.",
      "Cross the Margaret Hunt Hill Bridge or hit Houston Street and you\'re at the studio in 12 minutes. Park in our lot, work, eat in Deep Ellum, head home.",
    ],
    highlights: [
      { label: 'Drive time', detail: '12 minutes' },
      { label: 'Distance', detail: 'Approximately 6 miles via Margaret Hunt Hill Bridge' },
      { label: 'Genre fit', detail: 'R&B, soul, Latin — engineers experienced in all three' },
    ],
    geo: { latitude: 32.7501, longitude: -96.8276 },
  },
  {
    slug: 'plano',
    name: 'Plano',
    fullName: 'Plano, TX',
    oneLiner: 'A 25-minute drive south on the Tollway for the North Dallas artist community.',
    driveTime: '25 min · 19 miles',
    intro:
      "Plano artists looking for a real recording studio with engineer-driven sessions usually have one of two paths: stay local at the smaller Plano-area studios, or come down to Deep Ellum for the deeper Dallas music infrastructure. Legacy is the case for the second option.",
    body: [
      "The drive is direct — Dallas North Tollway south to Woodall Rodgers, exit on the Deep Ellum side, you\'re at the studio. 25 minutes off-peak, 35–40 in rush traffic.",
      "Most Plano clients book full-day sessions or 4-hour evening blocks specifically because the drive makes it worth doing more in one trip. We accommodate the schedule — full-day sessions get a dedicated parking spot and we\'re happy to coordinate dinner orders mid-day.",
      "If you\'re recording in Plano regularly and the local options aren\'t hitting the mark on engineering depth or genre specialization, the Deep Ellum drive is worth doing once to feel the difference.",
    ],
    highlights: [
      { label: 'Drive time', detail: '25 minutes off-peak via Dallas North Tollway' },
      { label: 'Distance', detail: 'Approximately 19 miles' },
      { label: 'Best booking pattern', detail: 'Full-day or 4-hour evening blocks' },
      { label: 'Parking', detail: 'Dedicated lot for full-day sessions' },
    ],
    geo: { latitude: 33.0198, longitude: -96.6989 },
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    fullName: 'Frisco, TX',
    oneLiner: 'A 35-minute drive for North Dallas artists who want serious studio infrastructure.',
    driveTime: '35 min · 30 miles',
    intro:
      "Frisco is one of the fastest-growing music markets in the metro — and one of the most underserved by serious recording studios. Most working artists end up driving to Plano, Garland, or Dallas proper for engineer-driven sessions. Legacy is the Deep Ellum option.",
    body: [
      "Tollway south to Woodall Rodgers, ~35 minutes door-to-door. Worth doing for sessions where the engineering depth matters more than convenience.",
      "Frisco artists tend to book full-day sessions and stack work — we\'ll record vocals in the morning, mix and master after lunch, and have you driving home with finished records by evening. This works particularly well for hip-hop and R&B artists juggling work schedules.",
      "If you\'re looking for the kind of studio that has a real console, real engineers, and a real connection to the Dallas music scene — and the closer Frisco/Plano options aren\'t hitting that mark — Legacy is built for that exact gap.",
    ],
    highlights: [
      { label: 'Drive time', detail: '35 minutes off-peak via Dallas North Tollway' },
      { label: 'Distance', detail: 'Approximately 30 miles' },
      { label: 'Best booking pattern', detail: 'Full-day sessions to maximize the drive' },
    ],
    geo: { latitude: 33.1507, longitude: -96.8236 },
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    fullName: 'Richardson, TX',
    oneLiner: 'A 20-minute drive south for the inner-ring North Dallas creative scene.',
    driveTime: '20 min · 15 miles',
    intro:
      "Richardson sits between the deeper-suburb music scenes (Plano, Frisco) and the Dallas-proper studios. Most Richardson artists end up at home setups or making the trek south. Legacy is 20 minutes away — manageable for a weeknight session.",
    body: [
      "75 South to Woodall Rodgers, exit Live Oak/Pacific, you\'re at the studio. 20 minutes off-peak, 25 in traffic.",
      "Richardson has a sizable hip-hop and R&B scene from UTD and surrounding communities — Legacy\'s engineering depth in those genres makes the trip worthwhile for serious work. Evening blocks work well; we accommodate weekday post-work schedules.",
      "If you\'re recording in Richardson regularly and want to step up to engineer-driven sessions in a treated room with real outboard gear, Legacy is the closest premium option south of LBJ.",
    ],
    highlights: [
      { label: 'Drive time', detail: '20 minutes off-peak via 75' },
      { label: 'Distance', detail: 'Approximately 15 miles' },
      { label: 'Genre fit', detail: 'Strong for hip-hop, R&B from UTD-area communities' },
    ],
    geo: { latitude: 32.9483, longitude: -96.7299 },
  },
]

// =========================================================================
// REVIEWS (placeholder — wire to real Google reviews via API on launch)
// =========================================================================

export interface Review {
  author: string
  body: string
  rating: number
  source: 'Google' | 'Yelp' | 'Direct'
  date: string
}

// PLACEHOLDER: hardcoded reviews to demo the UI. Real reviews wire via
// Google Business Profile API on launch. See PLACEHOLDERS.md §Reviews.
export const reviews: Review[] = [
  {
    author: 'Placeholder Artist Name',
    body: 'Best studio I\'ve recorded at in Dallas. Engineer was dialed in, the room sounded incredible, and the booking was the easiest I\'ve ever done. Walking out with finished records same-day was a first.',
    rating: 5,
    source: 'Google',
    date: '2026-04-15',
  },
  {
    author: 'Placeholder Producer Name',
    body: 'Legacy is the studio I send all my artists to now. The chain is clean, the workflow is fast, and the engineers actually understand hip-hop production — not just \"recording for hip-hop.\" Big difference.',
    rating: 5,
    source: 'Google',
    date: '2026-03-28',
  },
  {
    author: 'Placeholder Podcaster Name',
    body: 'We record our podcast here weekly. The recurring booking is seamless, the sound is broadcast-quality, and the engineer-driven editing saves us 4+ hours of post a week. Worth every dollar.',
    rating: 5,
    source: 'Google',
    date: '2026-03-10',
  },
  {
    author: 'Placeholder Vocalist Name',
    body: 'I\'ve been recording in Dallas for 12 years. Legacy is the first studio that felt like both a serious workspace AND a comfortable creative environment. Booked my next session before I left.',
    rating: 5,
    source: 'Yelp',
    date: '2026-02-22',
  },
  {
    author: 'Placeholder Indie Artist Name',
    body: 'Honestly thought premium studios in Deep Ellum were out of my budget. Legacy\'s pricing is transparent, the engineer was patient with a first-time recorder, and the masters sound like a major label release. Hugely recommend.',
    rating: 5,
    source: 'Google',
    date: '2026-02-08',
  },
  {
    author: 'Placeholder Voice Actor Name',
    body: 'Source-Connect setup was tested before I walked in, the engineer knew exactly how to direct for broadcast, and I had the final masters in my inbox same day. Best VO session I\'ve done in DFW.',
    rating: 5,
    source: 'Google',
    date: '2026-01-30',
  },
]

// =========================================================================
// EVENTS (placeholder for /events scaffold)
// =========================================================================

export interface StudioEvent {
  slug: string
  name: string
  startDate: string
  endDate?: string
  description: string
  image?: string
}

// PLACEHOLDER: ready for real events. See PLACEHOLDERS.md §Events.
export const studioEvents: StudioEvent[] = [
  {
    slug: 'open-mic-night',
    name: 'Legacy Open Mic Night',
    startDate: '2026-06-15T19:00:00-05:00',
    endDate: '2026-06-15T22:00:00-05:00',
    description: 'Monthly open mic at Legacy. Artists, songwriters, and producers welcome. RSVP via the booking page.',
    image: '/images/studio-live-room.jpg',
  },
  {
    slug: 'songwriter-circle',
    name: 'Deep Ellum Songwriter Circle',
    startDate: '2026-06-22T18:00:00-05:00',
    endDate: '2026-06-22T20:00:00-05:00',
    description: 'A working session for Dallas songwriters. Bring a song-in-progress. Limited to 8 attendees.',
    image: '/images/studio-lobby.jpg',
  },
]

// =========================================================================
// PRESS MENTIONS (placeholder)
// =========================================================================

export interface PressMention {
  outlet: string
  quote?: string
  url?: string
}

// PLACEHOLDER: replace with real press once we earn coverage.
export const pressMentions: PressMention[] = [
  { outlet: 'Dallas Observer' },
  { outlet: 'D Magazine' },
  { outlet: 'Central Track' },
  { outlet: 'KERA News' },
  { outlet: 'Texas Music Office' },
]

// =========================================================================
// BLOG POSTS (anchor content for SEO)
// =========================================================================

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  datePublished: string
  readMins: number
  image: string
  /** Sections rendered as <section> with h2 + body paragraphs */
  sections: { heading: string; paragraphs: string[] }[]
  /** FAQ block at the bottom of the post for FAQPage schema */
  faqs?: FaqEntry[]
  /** Related links (to other site pages) */
  related?: { label: string; href: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'recording-studios-in-deep-ellum-guide',
    title: 'Recording Studios in Deep Ellum: A Guide',
    excerpt:
      'Deep Ellum has been the heartbeat of Dallas music for over a century. Here\'s what\'s worth knowing if you\'re recording in the neighborhood.',
    category: 'Neighborhood',
    datePublished: '2026-05-06',
    readMins: 6,
    image: '/images/studio-lobby.jpg',
    sections: [
      {
        heading: 'Why Deep Ellum is different',
        paragraphs: [
          'Deep Ellum sits east of downtown Dallas in zip code 75226. It\'s been a music neighborhood since the 1920s — blues clubs in the Jim Crow era, punk and new wave in the \'80s, hip-hop and indie waves ever since.',
          'For a recording artist, what makes Deep Ellum specifically valuable is the density. Within a 10-minute walk of any studio in the neighborhood you have working venues, mural-coated walls for visual content, late-night food, and a working creative class that\'s been here for decades.',
        ],
      },
      {
        heading: 'What kind of studios live here',
        paragraphs: [
          'Deep Ellum studios tend to be smaller than the bigger commercial rooms in North Dallas or Garland. That\'s a feature: smaller rooms mean more individual attention, more flexible workflows, and tighter connection to the local music scene.',
          'Studios in the neighborhood typically serve a mix of hip-hop, R&B, indie rock, and singer-songwriter projects. Bigger genre-specific specialization lives further out — Deep Ellum is about general musical density.',
        ],
      },
      {
        heading: 'Things to plan for if you\'re recording in Deep Ellum',
        paragraphs: [
          'Parking: most studios have a dedicated lot, but you\'ll also see street parking after 6 PM. Check ahead for game days or weekend nights when the neighborhood gets full.',
          'Access: Deep Ellum is one stop from downtown on the DART green line. Most studios are walking distance from the Deep Ellum station, so a session-and-DART-back-to-Uptown is genuinely doable.',
          'Scene context: if you can, plan to grab dinner or a show in the neighborhood before or after your session. Builds your context for the music you\'re making.',
        ],
      },
      {
        heading: 'How Legacy fits in',
        paragraphs: [
          'Legacy Music Group is a Deep Ellum studio in the modern-luxury tier — engineer-driven sessions, transparent pricing, and a workflow built for fast booking. Our address sits in 75226, walking distance from venues like Trees, Three Links, and Bomb Factory.',
          'If you\'re considering Deep Ellum studios for your next session, we\'d love to be on your shortlist. Booking takes about a minute through our calendar.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many recording studios are in Deep Ellum?',
        answer: 'There are 5–8 active recording studios in the Deep Ellum neighborhood depending on how strictly you define the boundary. Most are independent and engineer-led.',
      },
      {
        question: 'Is Deep Ellum a safe place to record at night?',
        answer: 'Yes. The neighborhood has a heavy nighttime venue scene which keeps it active and well-lit. Most studios have dedicated parking and many sessions run until 10–11 PM without issue.',
      },
      {
        question: 'How do I book a session in Deep Ellum?',
        answer: 'Most studios in the neighborhood take bookings through Calendly, custom forms, or direct phone. Legacy specifically takes bookings through our online calendar — under a minute from session-type to confirmed.',
      },
    ],
    related: [
      { label: 'Inside Legacy: gear, rooms, workflow', href: '/blog/inside-legacy-studio' },
      { label: 'The Studio (about page)', href: '/studio' },
      { label: 'Deep Ellum neighborhood page', href: '/neighborhoods/deep-ellum' },
    ],
  },
  {
    slug: 'first-studio-session-dallas',
    title: 'What to Expect on Your First Studio Session in Dallas',
    excerpt:
      'A practical first-timer\'s guide: what to bring, what to expect from the engineer, and how to walk in prepared.',
    category: 'Getting Started',
    datePublished: '2026-05-06',
    readMins: 5,
    image: '/images/studio-vocal-booth.jpg',
    sections: [
      {
        heading: 'Before you walk in',
        paragraphs: [
          'Have your music ready. If you\'re a vocalist, that means a clear demo of the song with a click track, your lyric sheet printed (in case the screen distracts you), and reference tracks of where you want the song to land sonically.',
          'If you\'re using a beat from a producer, make sure it\'s the latest version, in WAV (not MP3), and that you have the stems if mixing is part of the plan.',
          'Hydrate and warm up. Vocal sessions are physical — your voice will fatigue after 90 minutes of takes if you didn\'t warm up. Most engineers don\'t want to spend studio time on vocal warm-ups.',
        ],
      },
      {
        heading: 'What the engineer\'s actually doing',
        paragraphs: [
          'Setting levels, comping (combining the best parts of multiple takes), tuning where appropriate, and giving you direction on performance. A good engineer is a quiet, persistent voice in your headphones telling you what worked and what to try next.',
          'You\'re paying for their ear, not just their gear. The pickier they are, the better the record will sound.',
        ],
      },
      {
        heading: 'How long things take',
        paragraphs: [
          'Setup + sound check: 15–30 minutes for vocals, longer for instruments.',
          'Tracking: 60–90 minutes per song for a confident vocalist, 2–3 hours for someone still finding the part.',
          'Comping + light polish: 30 minutes per song in-session. Final mix and master are separate sessions or a separate timeline.',
        ],
      },
      {
        heading: 'What you\'ll walk out with',
        paragraphs: [
          'Stem files. A reference mix (rough). Possibly a bounce of the lead vocal in-the-box for sharing. Final mixed and mastered records typically arrive 5–7 days after the session.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much should I budget for my first session?',
        answer: 'A reasonable first session for a single song is a 4-hour block with engineer ($280 at Legacy). That gets you tracked, comped, and a rough mix. Add $150 for a final mixed and mastered record.',
      },
      {
        question: 'Do I need to bring anything physical?',
        answer: 'Bring water, your lyrics on paper, your beat or stems on a USB drive (and as a backup in your email), headphones if you have a preference, and a positive attitude. Studio gear and software is all on us.',
      },
    ],
    related: [
      { label: 'Booking policies', href: '/policies' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'See our engineers', href: '/engineers' },
    ],
  },
  {
    slug: 'rap-recording-dallas',
    title: 'Rap Recording in Dallas: Studios, Engineers, Pricing',
    excerpt:
      'A full guide to rap recording in DFW — what to look for in a studio, how engineers shape the modern Dallas sound, and what sessions actually cost.',
    category: 'Hip-Hop',
    datePublished: '2026-05-06',
    readMins: 8,
    image: '/images/studio-control-room.jpg',
    sections: [
      {
        heading: 'What makes a studio good for rap',
        paragraphs: [
          'Three things: vocal chain, engineer experience, and workflow speed.',
          'Vocal chain matters because rap delivery sits in a specific frequency range — tight low-mids, controlled sibilance, breathy presence — and a chain dialed for a different genre will fight you. The right chain is a Sony C-800G or U87 or SM7B into an LA-2A or 1176 with a tasteful bit of distortion compression for color.',
          'Engineer experience matters because hip-hop comping and stacking is its own skill. An engineer who came up on rock won\'t necessarily know how to handle ad-libs, doubles, and harmony stacks the way the genre demands.',
          'Workflow speed matters because rap sessions are dense — you\'re tracking multiple takes per line, stacking, comping, polishing, all under a clock. A studio with friction (slow setup, slow file delivery, hard-to-recall sessions) is just expensive.',
        ],
      },
      {
        heading: 'How much a real Dallas rap session costs',
        paragraphs: [
          'Hourly with engineer: $75–$125/hr at the premium tier. Cheaper rooms exist but you\'re typically paying for less engineering attention.',
          '4-hour block with engineer: $280–$500 for a session that gets you 1–2 finished tracked records.',
          'Full project bundles (recording + mixing + mastering + promo content): $500–$1,000 depending on the scope. The bundle usually saves 15–25% over piecing it together.',
        ],
      },
      {
        heading: 'Studios in Dallas that record rap',
        paragraphs: [
          'There are 10+ studios in DFW that handle rap regularly. The differentiation is engineering depth, gear, and pricing transparency. Most rooms hide their pricing behind contact forms — Legacy publishes ours.',
          'Heritage studios like Audio Dallas (Garland) and The Kitchen (Lakewood) have decades of credits including major-label rap acts. Newer studios like Greenville Ave Recording have built brand around genre-specific landing pages. Legacy positions in the modern-luxury tier — engineer-driven sessions, real Deep Ellum location, transparent rates.',
        ],
      },
      {
        heading: 'How Legacy approaches rap sessions',
        paragraphs: [
          'Default booking is 4-hour with engineer at $280. The engineer dials your chain to your delivery in the first 10 minutes. We track multiple takes per verse, stack ad-libs and doubles, comp in-session, and you walk out with stems plus a rough mix.',
          'Add the Mixing & Mastering bundle ($150/song) and final masters arrive in 5–7 business days. Add the Full Package ($500) and you also get 3 promo content clips for your release.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I bring my producer to my Dallas rap session?',
        answer: 'Yes. Producers in the room are common. Either book a "with engineer" session and the producer rides along, or book "without engineer" and the producer runs the board with our gear.',
      },
      {
        question: 'How many records can I track in a 4-hour rap session?',
        answer: 'A confident artist with prep can finish 1–2 records in a 4-hour block (tracked, comped, lightly polished). A full 8-hour day can land 3–5.',
      },
      {
        question: 'Do you offer mixing and mastering as a separate service?',
        answer: 'Yes. $150/song for mixing and mastering combined. Send your stems, we deliver mastered records in 5–7 days with two rounds of revisions included.',
      },
    ],
    related: [
      { label: 'Rap Recording service page', href: '/services/rap-recording' },
      { label: 'Pricing breakdown', href: '/pricing' },
      { label: 'Hip-hop engineers at Legacy', href: '/engineers' },
    ],
  },
  {
    slug: 'mixing-mastering-pricing-dallas',
    title: 'How Mixing & Mastering Pricing Works in Dallas (2026)',
    excerpt:
      'Most studios hide their mixing and mastering rates. Here\'s what you should actually expect to pay in DFW — and why pricing varies so much.',
    category: 'Mixing & Mastering',
    datePublished: '2026-05-06',
    readMins: 6,
    image: '/images/studio-control-room.jpg',
    sections: [
      {
        heading: 'Why studios hide mixing and mastering pricing',
        paragraphs: [
          'Two reasons. First, prices vary by complexity — a 3-stem podcast master is not the same as a 64-track album mix. Hiding price lets the studio quote per-project.',
          'Second, hiding price filters serious clients from price-shoppers. If you have to email to get a number, you\'re probably more committed than someone scrolling for a deal.',
          'The downside of hidden pricing is artists with budgets can\'t shop intelligently. Legacy publishes our rates because we think the trade-off is worth it.',
        ],
      },
      {
        heading: 'What a typical mix and master actually costs in Dallas',
        paragraphs: [
          'Per song, mixing alone: $100–$250 in DFW for a competent engineer. Major-credit engineers charge $400–$1,000+ per song.',
          'Per song, mastering alone: $50–$150 for analog/digital mastering. Mastering-only houses (no mixing) live in this range.',
          'Per song, mix + master bundled: $150–$300 at most premium DFW studios. Legacy charges $150/song for the bundle.',
          'Album rates (8–12 songs): typically a 15–25% discount over per-song rates. $1,000–$2,500 for a full album mix and master at the indie tier.',
        ],
      },
      {
        heading: 'What the rate actually buys',
        paragraphs: [
          'A real mix involves: gain staging, EQ, compression, saturation, parallel processing, automation, busing, master bus chain, reference comparison, revisions. A typical song takes 6–10 hours of engineer time.',
          'A real master involves: corrective EQ, multi-band compression, limiting to streaming-spec, reference matching, format conversion. Typical: 1–2 hours per song.',
          'Cheaper rates usually mean fewer hours per song. The result: less detailed, less commercial-feeling final product. The lift between $50 and $200 mastering is enormous.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does Dallas mixing cost less than Nashville or LA?',
        answer: 'Lower studio overhead and a less concentrated client base. Same talent tier of engineer charges 30–50% less in DFW than in major music markets — which is good for artists.',
      },
      {
        question: 'Can I get my mix and master done in a day?',
        answer: 'For a single song, sometimes yes. The standard turnaround at Legacy is 5–7 business days for stems-to-master with two rounds of revisions included. Rush options exist but cost extra.',
      },
    ],
    related: [
      { label: 'Pricing page', href: '/pricing' },
      { label: 'Services overview', href: '/services' },
    ],
  },
  {
    slug: 'artist-development-dallas-choosing-studio',
    title: 'Artist Development in Dallas: Choosing the Right Studio',
    excerpt:
      'How to evaluate studios when you\'re past your first record and looking to actually build a career in Dallas.',
    category: 'Artist Development',
    datePublished: '2026-05-06',
    readMins: 7,
    image: '/images/about-studio-wide.jpg',
    sections: [
      {
        heading: 'What "artist development" actually means',
        paragraphs: [
          'Stripped of music industry vocabulary: artist development is the work of turning a song into a career. Release strategy, brand identity, audience-building, scene relationships, the long-term decisions that compound.',
          'It\'s not management — managers handle the day-to-day operations and bookings. It\'s not a label — labels finance and distribute. Artist development is the strategic layer in between.',
        ],
      },
      {
        heading: 'When you actually need it',
        paragraphs: [
          'You don\'t need artist development for your first song. You need it when you have a body of work that\'s working — at least one record getting traction, a sense of your sound, and the willingness to invest in next steps.',
          'Most artists hit a wall around their second or third release: streams plateau, content output gets exhausting, brand decisions start contradicting each other. That\'s the point where development pays for itself.',
        ],
      },
      {
        heading: 'How to evaluate a studio for development work',
        paragraphs: [
          'First: do they actually do development, or just say they do? Ask for specifics — what does an engagement look like, what deliverables come out, what does month 3 look like vs month 1.',
          'Second: are they local? Dallas-specific scene knowledge matters. A development partner who knows the right venues, photographers, designers, and DSPs in DFW is worth more than a remote service that knows none of them.',
          'Third: do they have alignment with your music? If they specialize in country and you make hip-hop, the connections won\'t carry. Match genre and aesthetic.',
        ],
      },
      {
        heading: 'How Legacy approaches development',
        paragraphs: [
          'We start with a free intro call. If it makes sense, we scope a one-off consultation ($150) or a multi-month engagement (custom-priced based on scope). We don\'t take points on your masters, we don\'t book your shows, we don\'t sign you to anything.',
          'The work is decision-support and connection-making. Release plans, brand reviews, creative direction, intros to people in the Dallas scene who can help you. You get a working relationship, not a contract.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Legacy artist development management?',
        answer: 'No. We don\'t take percentages or sign artists. We provide strategy, creative direction, and Dallas scene connections on a flat-fee or month-to-month basis.',
      },
      {
        question: 'How long does a typical engagement run?',
        answer: 'One-off consultations are 1–2 hours flat-rate. Multi-month engagements are typically 3–6 months and customized to the artist\'s release timeline.',
      },
    ],
    related: [
      { label: 'Artist Development service', href: '/services/artist-development' },
      { label: 'Contact us to talk about your project', href: '/contact' },
    ],
  },
  {
    slug: 'inside-legacy-studio',
    title: 'Inside the Legacy Studio: Gear, Rooms, Workflow',
    excerpt:
      'A behind-the-scenes look at how a Legacy session actually runs — the gear chain, the room setup, and the workflow that makes us fast.',
    category: 'Studio',
    datePublished: '2026-05-06',
    readMins: 5,
    image: '/images/studio-control-room.jpg',
    sections: [
      {
        heading: 'The rooms',
        paragraphs: [
          'Legacy runs three primary spaces: a control room, a vocal booth, and a live room.',
          'The control room hosts the SSL console, monitoring, and the engineer\'s seat. Acoustically tuned with broadband absorption on the walls and ceiling. Genelecs as mains, NS-10s as reference, MixCubes for the unforgiving second opinion.',
          'The vocal booth is a treated isolation space tuned for the modern hip-hop and R&B vocal sound. Tighter low-mids than a typical broadcast booth, designed to capture rap delivery without fighting the chain.',
          'The live room handles guitar, keys, small ensemble work, and acoustic projects. Two of our engineers specialize in live band tracking — bring a band, we\'ll set up.',
        ],
      },
      {
        heading: 'The chain',
        paragraphs: [
          'Default vocal chain runs Neumann U87 or SM7B into a Neve 1073-style preamp into an LA-2A and 1176 in series, then into Pro Tools through a Universal Audio Apollo. UAD plugins available for tracking-time effects.',
          'For modern hip-hop, the SM7B into an 1176 with the Distressor in mod-button mode is our default — clean low-end, expressive top, the kind of present-but-controlled sound the modern rap chart demands.',
          'For R&B and singer-songwriter, the U87 into the Neve 1073 with light LA-2A compression is the go-to. Warm, bright, forgiving on dynamics.',
        ],
      },
      {
        heading: 'The workflow',
        paragraphs: [
          'A typical session at Legacy starts with a 10–15 minute setup: chain dialed, headphone cue mix built, rough levels set against the reference track. The engineer walks through any gear questions or production thoughts so you\'re not figuring it out on the clock.',
          'Tracking happens in passes — full takes from top to bottom rather than punching in line by line. Comping happens in-session at the end of tracking. Light polish (de-ess, breath cleanup, level rides) gets baked in before you walk out.',
          'Stem files and a reference mix are delivered same-day. Final mix and master, if booked, arrive in 5–7 business days.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What DAW does Legacy run?',
        answer: 'Pro Tools is the default. Logic Pro is available on request. We can match whatever your producer\'s session uses.',
      },
      {
        question: 'Can I bring my own plugins or session files?',
        answer: 'Yes. We\'ll import session files from Pro Tools, Logic, Ableton, FL Studio, Reaper. Bring stems on a USB drive or in a Dropbox link.',
      },
    ],
    related: [
      { label: 'See the full gear list', href: '/gear' },
      { label: 'The Studio (about page)', href: '/studio' },
    ],
  },
]

// =========================================================================
// FAQS (homepage / global FAQ)
// =========================================================================

export interface FaqItem {
  category: string
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    category: 'Booking',
    question: 'How do I book a session?',
    answer:
      "Hit Book Now anywhere on the site. Pick your session type, choose an engineer if you want one, then schedule via Calendly — confirmation email and calendar invite arrive instantly. The whole thing takes under a minute.",
  },
  {
    category: 'Booking',
    question: 'Can I book without an engineer?',
    answer:
      'Yes. If you know the room and want to run the board yourself, choose a Without Engineer session. Best for experienced artists and producers.',
  },
  {
    category: 'Booking',
    question: 'How far in advance should I book?',
    answer:
      'Most artists book 1–2 weeks out for prime time slots. Same-day and next-day bookings are sometimes available — call us at (214) 555-0199 if you need something fast.',
  },
  {
    category: 'Booking',
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations more than 48 hours before your session are fully refundable. Inside 48 hours, your deposit is non-refundable but transferable to a future session. (Placeholder policy — final terms confirmed with owner.)',
  },
  {
    category: 'Sessions',
    question: 'What gear do you have?',
    answer:
      'Pro Tools, Logic Pro, top-shelf microphones (Neumann U87, SM7B, Sony C-800G), outboard preamps and compressors (Neve, API, LA-2A, 1176, Distressor), and tuned monitoring (Genelec, NS-10, MixCubes). Full list on /gear.',
  },
  {
    category: 'Sessions',
    question: 'Can I bring my own producer or engineer?',
    answer:
      'Yes. Without Engineer sessions are designed exactly for that. Just be ready to run the board yourself or with your team.',
  },
  {
    category: 'Sessions',
    question: 'How many people can I bring?',
    answer:
      'Standard sessions accommodate up to 4 people in the room. Larger groups can be arranged — let us know in advance.',
  },
  {
    category: 'Mixing & Mastering',
    question: 'How does mixing & mastering work?',
    answer:
      'Send us your stems or a rough session, tell us the reference tracks you want it to sit alongside, and one of our engineers takes it from there. Two rounds of revisions included. Turnaround is typically 5–7 business days.',
  },
  {
    category: 'Mixing & Mastering',
    question: "Can I add mixing & mastering to my recording session?",
    answer:
      'Yes — pick the Mixing & Mastering add-on during booking, or upgrade to the Full Package for recording + mix/master + 3 social clips bundled together.',
  },
  {
    category: 'Artist Development',
    question: 'What does artist development mean here?',
    answer:
      'Strategy and creative direction beyond just recording — release planning, branding, content, and connecting you with the right people in the Dallas scene. Currently offered as consultation; reach out via Contact to see if it fits your project.',
  },
  {
    category: 'Location',
    question: 'Where is the studio located?',
    answer:
      'Deep Ellum, Dallas — the heart of the city\'s music district in zip code 75226. Walking distance from Trees, Three Links, Bomb Factory, and the Deep Ellum DART station.',
  },
  {
    category: 'Location',
    question: 'Is parking available?',
    answer:
      'Yes — street parking and a dedicated lot for sessions. Details sent with your booking confirmation. (Parking specifics pending owner confirmation.)',
  },
  {
    category: 'Payment',
    question: 'How do I pay?',
    answer:
      'Card payment is collected through our Calendly booking flow at the time of scheduling. A deposit holds your slot; balance is due before the session. (Real payment processing is configured in Calendly — see PLACEHOLDERS.md if not yet enabled.)',
  },
]

// =========================================================================
// PRICING (legacy export — kept for backward compatibility)
// =========================================================================

export const pricing = [
  { service: 'Hourly Recording', withEngineer: '$75/hr', withoutEngineer: '$45/hr' },
  { service: '4-Hour Block', withEngineer: '$280', withoutEngineer: '$170' },
  { service: '8-Hour Day', withEngineer: '$520', withoutEngineer: '$320' },
  { service: 'Mixing & Mastering', withEngineer: '$150/song', withoutEngineer: '$150/song' },
  { service: 'Full Package', withEngineer: '$500', withoutEngineer: 'N/A' },
]
