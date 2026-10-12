/**
 * Centralized data store. PLACEHOLDER markers note temporary content; the
 * full inventory + swap-out instructions live in PLACEHOLDERS.md.
 */

import type { FaqEntry } from './schemas'

// =========================================================================
// CONTACT INFO (REAL — sourced from legacymusicgroup.com 2026-05-07)
// =========================================================================

export const contact = {
  "phone": "(214) 377-9729",
  "phoneE164": "+12143779729",
  "email": "info@legacymusicgroup.com",
  "addressLine1": "2815 Main St, Suite A",
  "addressLine2": "Dallas, TX 75226",
  "ownerTagline": "Recording and music production at 2815 Main Street in Deep Ellum, Dallas. Vocals, mixing, mastering, and help with the business behind your music.",
  "social": {
    "instagram": "https://www.instagram.com/legacymusicgroup/",
    "facebook": "https://www.facebook.com/theLegacymusicgroup",
    "twitter": "https://twitter.com/LegacyMusicGrp",
    "youtube": "https://www.youtube.com/channel/UCT43C_YONC9axTl3IMwgdVw",
    "linkedin": "https://www.linkedin.com/company/legacymusicgroup"
  }
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

// Real engineers sourced from legacymusicgroup.com 2026-05-07.
// Photos remain placeholder paths — engineer headshots exist on the live site
// and need to be downloaded/uploaded. See PLACEHOLDERS.md §Engineers.
export const engineers: Engineer[] = [
  {
    "id": "matthew",
    "name": "Matthew Medlock",
    "specialty": "Studio Owner & Manager",
    "image": "/images/engineer-1.jpg",
    "bio": "Matthew owns and manages Legacy Music Group. Raised near Memphis, he studied Music Business and took part in GRAMMY U while in college. His work at Legacy includes music business consultation. Bring your music and the questions behind your next release.",
    "stats": {
      "experience": "Music",
      "projects": "Owner",
      "highlight": "Advice"
    },
    "genres": [
      "Studio Operations",
      "Artist Development",
      "Music Business"
    ],
    "serviceSlugs": [
      "artist-development"
    ],
    "samples": [],
    "credits": []
  },
  {
    "id": "ray",
    "name": "Ray Dallas",
    "specialty": "Head Engineer",
    "image": "/images/engineer-2.jpg",
    "bio": "Ray is Legacy’s head engineer. He works in tracking, mixing, editing, and Melodyne. His published client credits include Mac Miller, B.o.B, Dorrough, and Young Jeezy. His listed interests include rap, pop, and singer-songwriter music.",
    "stats": {
      "experience": "Tracking",
      "projects": "Mixing",
      "highlight": "Editing"
    },
    "genres": [
      "Rap",
      "Pop",
      "Songwriter"
    ],
    "serviceSlugs": [
      "rap-recording",
      "r-and-b",
      "voiceover",
      "podcasts"
    ],
    "samples": [],
    "credits": [
      {
        "artist": "Mac Miller"
      },
      {
        "artist": "B.o.B"
      },
      {
        "artist": "Dorrough"
      },
      {
        "artist": "Young Jeezy"
      }
    ]
  },
  {
    "id": "wayne",
    "name": "Wayne",
    "specialty": "Studio Engineer / Producer",
    "image": "/images/engineer-3.jpg",
    "bio": "Wayne is a studio engineer and producer at Legacy. His work focuses on mixing, production, and editing in Pro Tools. Ask the studio about his availability and the work your session needs.",
    "stats": {
      "experience": "Engineer",
      "projects": "Mixing",
      "highlight": "Pro Tools"
    },
    "genres": [
      "Mixing",
      "Production",
      "Editing"
    ],
    "serviceSlugs": [
      "rap-recording",
      "r-and-b"
    ],
    "samples": [],
    "credits": []
  },
  {
    "id": "terry",
    "name": "Terry",
    "specialty": "Maintenance Engineer",
    "image": "/images/engineer-4.jpg",
    "bio": "Terry is Legacy’s maintenance engineer. For recording sessions and current team availability, contact the studio.",
    "stats": {
      "experience": "Team",
      "projects": "Upkeep",
      "highlight": "Studio"
    },
    "genres": [
      "Studio Maintenance"
    ],
    "serviceSlugs": [],
    "samples": [],
    "credits": []
  }
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
    "slug": "rap-recording",
    "name": "Rap Recording in Dallas",
    "shortName": "Rap Recording",
    "category": "recording",
    "oneLiner": "Bring the verse. Make room for the details.",
    "hero": "/images/studio-vocal-booth.jpg",
    "intro": "The line is written. The beat is right. Now comes the work you hear between the words: a breath, a double, an ad-lib that lands just behind the lead. Record rap vocals at Legacy in Deep Ellum.",
    "body": [
      "Bring the current beat, your lyrics, and one or two tracks that show the sound you want. Tell the team whether you need to record, edit, mix, or finish a song. Each is a different part of the job.",
      "Head engineer Ray Dallas works in tracking, mixing, editing, and Melodyne. His published client credits include Mac Miller, B.o.B, Dorrough, and Young Jeezy. Read his profile before you choose a session.",
      "Recording is listed at $75 an hour with a two-hour minimum. Mixing starts at $150; mastering is listed at $30. Ask for the scope and total for your song before you book."
    ],
    "whatsIncluded": [
      "Current beat and lyrics",
      "Reference tracks and notes on the vocal sound",
      "A list of lead parts, doubles, and ad-libs",
      "Time for setup, takes, and playback",
      "An agreed file list and delivery date"
    ],
    "startingPrice": "$75/hr recording",
    "targetQueries": [
      "rap recording studio dallas",
      "hip hop studio dallas",
      "rap studio deep ellum",
      "rap studio dallas tx"
    ],
    "faqs": [
      {
        "question": "How many songs can I record in one session?",
        "answer": "That depends on the parts, takes, and work each song needs. Send a demo and your goals to the studio so the team can help you choose enough time."
      },
      {
        "question": "Can Legacy mix and master my rap track?",
        "answer": "Yes. Mixing and mastering are separate published services. Mixing starts at $150 and mastering is listed at $30. Confirm your track count, edits, revisions, and final file needs for a quote."
      },
      {
        "question": "Can I bring my producer?",
        "answer": "Tell the studio who is coming and who will run the session. Confirm the room, engineer, and guest arrangements before booking."
      }
    ],
    "image": "/images/studio-vocal-booth.jpg",
    "recommendedEngineerIds": [
      "ray",
      "wayne"
    ]
  },
  {
    "slug": "r-and-b",
    "name": "R&B Recording in Dallas",
    "shortName": "R&B Recording",
    "category": "recording",
    "oneLiner": "A lead vocal worth listening to twice.",
    "hero": "/images/studio-control-room.jpg",
    "intro": "R&B can put a lot into a small space: one quiet lead, a stack of harmonies, a hook that opens up. Bring the song to Legacy and plan time for the parts that give it shape.",
    "body": [
      "Start with the lead melody and lyrics. Mark where you want harmonies, doubles, or a spoken line. A rough phone demo can help explain the idea before the session.",
      "Legacy records vocals across genres. Its published equipment list includes a Neumann U 87, an AKG C414, and an Avalon 737. Talk through your voice and the sound you want with the engineer.",
      "If your song needs live instruments, guest singers, or new production, discuss that scope before you book. Recording, mixing, and mastering each need their own place in the plan."
    ],
    "whatsIncluded": [
      "Lead melody and lyrics",
      "Harmony and backing-vocal notes",
      "A current instrumental or demo",
      "Reference tracks for tone and space",
      "A plan for recording, edits, mix, and master"
    ],
    "startingPrice": "$75/hr recording",
    "targetQueries": [
      "r&b recording studio dallas",
      "r&b vocal recording dallas",
      "soul recording studio dallas"
    ],
    "faqs": [
      {
        "question": "Can I record harmonies and backing vocals?",
        "answer": "Yes, vocal recording is part of Legacy’s work. Tell the studio how many parts and singers you plan to record so the session can be scoped."
      },
      {
        "question": "Is mixing included in the hourly recording rate?",
        "answer": "Mixing and mastering have separate published prices. Some packages include both. Compare the package details on Pricing or ask for a quote for your song."
      },
      {
        "question": "Can I book a package for several songs?",
        "answer": "Legacy publishes packages with studio time, mixes, masters, and artwork. The $999 package lists five studio hours, three mixes, three masters, a consultation, and a photoshoot."
      }
    ],
    "image": "/images/studio-control-room.jpg",
    "recommendedEngineerIds": [
      "ray",
      "wayne"
    ]
  },
  {
    "slug": "podcasts",
    "name": "Podcast Recording in Dallas",
    "shortName": "Podcasts",
    "category": "creative",
    "oneLiner": "Keep the conversation. Plan the recording.",
    "hero": "/images/studio-live-room.jpg",
    "intro": "A good guest can take a conversation somewhere you did not expect. The recording plan should be clear before anyone sits down. Legacy offers podcast recording at its Deep Ellum studio.",
    "body": [
      "Send the team your show format, guest count, planned episode length, and a sample if you have one. Say whether you need audio only or want to discuss video as well.",
      "Recording an episode and editing it are separate tasks. Ask what the quote covers: room time, engineer, edit, music, final files, and any clips you want to share.",
      "For remote guests, name the connection tool and ask the studio to confirm a setup that fits. Arrange a check before the session; do not assume a specific remote platform is included."
    ],
    "whatsIncluded": [
      "Show outline and guest count",
      "Episode length and recording goals",
      "Audio or video requirements",
      "Remote guest details, if needed",
      "Editing scope and final file requirements"
    ],
    "startingPrice": "$75/hr recording",
    "targetQueries": [
      "podcast studio dallas",
      "podcast recording dallas",
      "dallas podcast studio rental",
      "professional podcast recording deep ellum"
    ],
    "faqs": [
      {
        "question": "Does Legacy record podcasts?",
        "answer": "Yes. Podcast recording is listed in Legacy’s services. Share your format and guest count with the team before choosing a session."
      },
      {
        "question": "Does the rate include editing or video?",
        "answer": "The published recording rate does not define a podcast edit or video package. Ask for a quote that names the services and files you need."
      },
      {
        "question": "Can I record a series?",
        "answer": "Send your planned episode count, dates, and release schedule. The team can discuss the time and scope before you reserve sessions."
      }
    ],
    "image": "/images/studio-live-room.jpg",
    "recommendedEngineerIds": [
      "ray"
    ]
  },
  {
    "slug": "voiceover",
    "name": "Voiceover Recording in Dallas",
    "shortName": "Voiceover",
    "category": "creative",
    "oneLiner": "A clear read starts with a clear brief.",
    "hero": "/images/studio-vocal-booth.jpg",
    "intro": "A voiceover may be thirty seconds long and still need several reads. Bring the final script, the audience, and the file requirements. Legacy records voiceovers and advertisements in Deep Ellum.",
    "body": [
      "Mark names, pronunciations, and any lines that must fit a time limit. A reference read helps show the pace and tone you want without asking the engineer to guess.",
      "For client work, agree on who will approve the take. If a director needs to listen remotely, ask about the connection and test plan before the session.",
      "An ad, audiobook, and training film may each need different files. Send the delivery specifications before booking and confirm any editing, pickups, and deadline in the quote."
    ],
    "whatsIncluded": [
      "Final script with pronunciation notes",
      "Timing and tone references",
      "Client approval contact",
      "Required file format and technical specifications",
      "A plan for edits, pickups, and delivery"
    ],
    "startingPrice": "$75/hr recording",
    "targetQueries": [
      "voiceover studio dallas",
      "voiceover recording dallas",
      "audiobook recording studio dallas",
      "commercial vo recording deep ellum"
    ],
    "faqs": [
      {
        "question": "Can I record an ad or narration at Legacy?",
        "answer": "Yes. Legacy lists voiceover and advertising recording among its services. Send the script and required files so the team can confirm the right session."
      },
      {
        "question": "Can my client direct the session remotely?",
        "answer": "Ask the studio before booking. Share the client’s connection requirements and arrange a test; no specific remote platform is promised here."
      },
      {
        "question": "Can you meet my platform’s audio requirements?",
        "answer": "Send the current requirements with your brief. The studio must confirm the recording, editing, and delivery scope before you rely on a deadline or format."
      }
    ],
    "image": "/images/studio-vocal-booth.jpg",
    "recommendedEngineerIds": [
      "ray"
    ]
  },
  {
    "slug": "artist-development",
    "name": "Artist Development in Dallas",
    "shortName": "Artist Development",
    "category": "creative",
    "oneLiner": "Bring the music. Talk through the next move.",
    "hero": "/images/about-studio-wide.jpg",
    "intro": "You may have a finished song and still have a page of questions. Which work comes next? What needs a budget? What can wait? A music business consultation gives those questions a place to start.",
    "body": [
      "Legacy is owned and operated by Matthew Medlock, whose background includes a Music Business degree. The studio publishes a $99 music business consultation.",
      "Bring your music, a short account of what you have released, and the questions you want to cover. Set a budget and a near-term goal before the conversation.",
      "Need artwork, production, or photos as well? Legacy lists those services and packages. Ask for a written scope so you can compare a consultation with a wider project."
    ],
    "whatsIncluded": [
      "Music or demos to discuss",
      "A short release history",
      "Your next goal and available budget",
      "Questions about the business side of the work",
      "An agreed consultation scope"
    ],
    "startingPrice": "$99 consultation",
    "targetQueries": [
      "artist development dallas",
      "music branding dallas",
      "independent artist support dallas",
      "music career development deep ellum"
    ],
    "faqs": [
      {
        "question": "What does an artist development consultation cost?",
        "answer": "Legacy lists a music business consultation at $99. Confirm the duration, topics, and any follow-up work before you book."
      },
      {
        "question": "Does a consultation include management or a record deal?",
        "answer": "The published offer is a consultation. Do not assume management, a record deal, rights terms, or promotion is part of it. Ask the studio for any wider proposal in writing."
      },
      {
        "question": "What should I bring?",
        "answer": "Bring your music, release plans, budget, and a short list of questions. Pick the decisions you most need help making."
      }
    ],
    "image": "/images/about-studio-wide.jpg",
    "recommendedEngineerIds": [
      "matthew"
    ]
  }
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

// Real pricing sourced from legacymusicgroup.com 2026-05-07.
export const pricingTiers: PricingTier[] = [
  {
    "name": "Recording",
    "price": "$75",
    "unit": "/hour · 2-hour minimum",
    "tagline": "Vocals, voiceovers, podcasts.",
    "features": [
      "Vocal, voiceover, and podcast recording",
      "Two-hour minimum",
      "Discounts begin at five-hour blocks",
      "Confirm room and engineer when booking"
    ]
  },
  {
    "name": "Starter Package",
    "price": "$399",
    "unit": "2 hrs · 1 mix · 1 master · cover art",
    "tagline": "Studio time and a finished-song package.",
    "features": [
      "2 hours of studio time",
      "1 song mixed",
      "1 song mastered",
      "Cover art designed",
      "Instagram story"
    ]
  },
  {
    "name": "Pro Package",
    "price": "$999",
    "unit": "5 hrs · 3 mixes · 3 masters · photoshoot",
    "tagline": "Studio time, songs, and a photoshoot.",
    "features": [
      "5 hours of studio time",
      "3 mixes + 3 masters",
      "Cover art + Instagram story",
      "Music business consultation",
      "1-hour photoshoot"
    ],
    "highlighted": true
  },
  {
    "name": "Album Package",
    "price": "$2,900",
    "unit": "10 hrs · 7 mixes · 7 masters · music video",
    "tagline": "A wider music and visual project.",
    "features": [
      "10 hours of studio time",
      "7 mixes and 7 masters",
      "Cover art, Instagram story and post",
      "Consultation with Medlock",
      "1-hour photoshoot",
      "Music video with published 1080p scope"
    ]
  }
]

// À la carte services — beyond the packages above.
export interface AlaCarteService {
  name: string
  price: string
  description: string
}

export const alaCarteServices: AlaCarteService[] = [
  {
    "name": "Mixing",
    "price": "$150+",
    "description": "Balance the parts of your song. Ask for a quote based on the tracks and edits."
  },
  {
    "name": "Mastering",
    "price": "$30",
    "description": "Final polish for singles or full projects."
  },
  {
    "name": "Custom Production",
    "price": "$500",
    "description": "One-on-one beat production with a Legacy producer."
  },
  {
    "name": "Freelance Rate — Room A",
    "price": "$55/hour",
    "description": "Published freelance studio rate. Confirm room access and engineer arrangements."
  },
  {
    "name": "Freelance Rate — Room B",
    "price": "$45/hour",
    "description": "Published freelance studio rate. Confirm room access and engineer arrangements."
  },
  {
    "name": "Major Label Rate",
    "price": "$175/hour",
    "description": "Rate for major-label artists or label-budgeted sessions."
  },
  {
    "name": "Lessons",
    "price": "$100",
    "description": "Recording and production lessons with a pro engineer."
  },
  {
    "name": "Music Business Consultation",
    "price": "$99",
    "description": "Personalized guidance on music business questions."
  },
  {
    "name": "Listening Parties",
    "price": "$125",
    "description": "Lounge-space hosting · 3-hour minimum."
  },
  {
    "name": "Graphic Design",
    "price": "Call for Quote",
    "description": "Album covers, song artwork, marketing materials."
  }
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

// Real gear list sourced from legacymusicgroup.com/equipment 2026-05-07.
export const gearList: GearItem[] = [
  {
    "name": "Neumann U 87",
    "brand": "Neumann",
    "category": "microphone",
    "description": "Listed for the vocal booth."
  },
  {
    "name": "AKG C414",
    "brand": "AKG",
    "category": "microphone",
    "description": "Listed in B Room."
  },
  {
    "name": "Kaotica Eyeball",
    "brand": "Kaotica",
    "category": "microphone",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Avalon 737",
    "brand": "Avalon",
    "category": "preamp",
    "description": "Listed in A Room."
  },
  {
    "name": "Purple Audio Compressor",
    "brand": "Purple Audio",
    "category": "compressor",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "UA Apollo",
    "brand": "Universal Audio",
    "category": "preamp",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "UA Satellite Expansion CPU",
    "brand": "Universal Audio",
    "category": "outboard",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Focusrite Scarlett",
    "brand": "Focusrite",
    "category": "preamp",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Stagesnake 16-Input",
    "brand": "Stagesnake",
    "category": "outboard",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Focal Duo Monitors",
    "brand": "Focal",
    "category": "monitor",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Adams Studio 10 Monitors",
    "brand": "Adams",
    "category": "monitor",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Presonus Sceptre S6",
    "brand": "Presonus",
    "category": "monitor",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Mackie Thump 12 PA + 18\" Sub",
    "brand": "Mackie",
    "category": "monitor",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Digimax Headphone Amp",
    "brand": "Presonus",
    "category": "outboard",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Presonus HP60 Headphone Amp",
    "brand": "Presonus",
    "category": "outboard",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Pro Tools",
    "brand": "Avid",
    "category": "software",
    "description": "Used by engineer and producer Wayne."
  },
  {
    "name": "Studio One",
    "brand": "Presonus",
    "category": "software",
    "description": "Ask the studio to confirm the DAW and version for your project."
  },
  {
    "name": "Logic Pro X",
    "brand": "Apple",
    "category": "software",
    "description": "Listed among the studio’s recording software."
  },
  {
    "name": "UAD Plugins",
    "brand": "Universal Audio",
    "category": "software",
    "description": "Listed plugin tools; ask about any specific plugin."
  },
  {
    "name": "Waves Bundle",
    "brand": "Waves",
    "category": "software",
    "description": "Listed mixing software; confirm the version your project needs."
  },
  {
    "name": "Slate Digital",
    "brand": "Slate Digital",
    "category": "software",
    "description": "Listed plugin tools; check your session’s needs."
  },
  {
    "name": "C24 Control Surface",
    "brand": "Avid",
    "category": "console",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "iMac 27\"",
    "brand": "Apple",
    "category": "instrument",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Akai MAX 49 MIDI Controller",
    "brand": "Akai",
    "category": "instrument",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Vocal Booth — Floating Ceiling",
    "brand": "Custom",
    "category": "outboard",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Two Producer Workstations",
    "brand": "Legacy Music Group",
    "category": "instrument",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  },
  {
    "name": "Prime Acoustics Treatment",
    "brand": "Prime Acoustics",
    "category": "outboard",
    "description": "Part of Legacy’s published equipment list. Confirm availability for your session."
  }
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
  geo?: { latitude: number; longitude: number }
  image?: string
}

export const neighborhoods: Neighborhood[] = [
  {
    "slug": "deep-ellum",
    "name": "Deep Ellum",
    "fullName": "Deep Ellum, Dallas",
    "oneLiner": "Record on Main Street.",
    "driveTime": "Studio in Deep Ellum, Dallas",
    "intro": "Legacy is at 2815 Main St, Suite A, in Deep Ellum. Use this address for your session, whether you are coming to record a verse, finish a mix, or talk through a project.",
    "body": [
      "A studio visit has a few moving parts: your start time, the files, the people, and the way into the building. Save the studio phone number before you set out.",
      "Parking near the studio includes meters and paid lots. Check the posted rules where you park and leave time to reach Suite A. Ask the team about entry and loading gear."
    ],
    "highlights": [
      {
        "label": "Studio address",
        "detail": "2815 Main St, Suite A"
      },
      {
        "label": "City and ZIP",
        "detail": "Dallas, TX 75226"
      },
      {
        "label": "Recording",
        "detail": "$75/hour · two-hour minimum"
      },
      {
        "label": "Before you travel",
        "detail": "Confirm the session, entry, and parking"
      }
    ],
    "image": "/images/studio-lobby.jpg"
  },
  {
    "slug": "uptown",
    "name": "Uptown Dallas",
    "fullName": "Uptown Dallas",
    "oneLiner": "From Uptown to a session in Deep Ellum.",
    "driveTime": "Studio in Deep Ellum, Dallas",
    "intro": "Planning studio time from Uptown Dallas? Legacy records at 2815 Main St, Suite A, in Deep Ellum. Put the session time and address in your calendar before planning the rest of the evening.",
    "body": [
      "An after-work session needs a realistic start time. Check the route from your actual address and allow time for parking and arrival.",
      "Have the beat or session files ready before you leave. Send your goals to the studio so you can discuss the work and available times together."
    ],
    "highlights": [
      {
        "label": "Studio address",
        "detail": "2815 Main St, Suite A"
      },
      {
        "label": "City and ZIP",
        "detail": "Dallas, TX 75226"
      },
      {
        "label": "Recording",
        "detail": "$75/hour · two-hour minimum"
      },
      {
        "label": "Before you travel",
        "detail": "Confirm the session, entry, and parking"
      }
    ]
  },
  {
    "slug": "bishop-arts",
    "name": "Bishop Arts",
    "fullName": "Bishop Arts District, Dallas",
    "oneLiner": "An Oak Cliff project. A Deep Ellum session.",
    "driveTime": "Studio in Deep Ellum, Dallas",
    "intro": "For artists coming from Bishop Arts, Legacy offers recording and production across town at its Deep Ellum studio. There is one studio address: 2815 Main St, Suite A, Dallas.",
    "body": [
      "If a song brings several people into the room, sort out who needs to attend before you book. Share the guest count and any instruments with the studio.",
      "Bring a demo that shows the parts you want to keep and the ones you want to work on. That is more useful than trying to fit the song into a genre label."
    ],
    "highlights": [
      {
        "label": "Studio address",
        "detail": "2815 Main St, Suite A"
      },
      {
        "label": "City and ZIP",
        "detail": "Dallas, TX 75226"
      },
      {
        "label": "Recording",
        "detail": "$75/hour · two-hour minimum"
      },
      {
        "label": "Before you travel",
        "detail": "Confirm the session, entry, and parking"
      }
    ]
  },
  {
    "slug": "plano",
    "name": "Plano",
    "fullName": "Plano, TX",
    "oneLiner": "Plan the music and the trip from Plano.",
    "driveTime": "Studio in Deep Ellum, Dallas",
    "intro": "If you are weighing a Dallas session from Plano, start with the work you need done. Legacy offers recording, mixing, mastering, and production at its Deep Ellum address.",
    "body": [
      "Compare the full scope before comparing hourly rates. Does the quote include an engineer, editing, a mix, or just recording time? Ask for the same details from each studio.",
      "Once the session is confirmed, check travel time from your part of Plano. Back up your files and agree on what you will receive, so the trip has a clear purpose."
    ],
    "highlights": [
      {
        "label": "Studio address",
        "detail": "2815 Main St, Suite A"
      },
      {
        "label": "City and ZIP",
        "detail": "Dallas, TX 75226"
      },
      {
        "label": "Recording",
        "detail": "$75/hour · two-hour minimum"
      },
      {
        "label": "Before you travel",
        "detail": "Confirm the session, entry, and parking"
      }
    ]
  },
  {
    "slug": "frisco",
    "name": "Frisco",
    "fullName": "Frisco, TX",
    "oneLiner": "Make the Dallas session worth the trip.",
    "driveTime": "Studio in Deep Ellum, Dallas",
    "intro": "Coming from Frisco? Give the studio your song list, demos, and priorities before you choose a block of time. Legacy is in Deep Ellum, Dallas, at 2815 Main St, Suite A.",
    "body": [
      "A longer trip can make it tempting to fit everything into one day. Separate the work you need to record from the mixing and mastering that may follow.",
      "Legacy publishes a two-hour recording minimum and discounts starting at five-hour blocks. Ask for the available dates and a quote for your plan; a longer booking does not guarantee a fixed number of finished songs."
    ],
    "highlights": [
      {
        "label": "Studio address",
        "detail": "2815 Main St, Suite A"
      },
      {
        "label": "City and ZIP",
        "detail": "Dallas, TX 75226"
      },
      {
        "label": "Recording",
        "detail": "$75/hour · two-hour minimum"
      },
      {
        "label": "Before you travel",
        "detail": "Confirm the session, entry, and parking"
      }
    ]
  },
  {
    "slug": "richardson",
    "name": "Richardson",
    "fullName": "Richardson, TX",
    "oneLiner": "A recording plan before the drive from Richardson.",
    "driveTime": "Studio in Deep Ellum, Dallas",
    "intro": "Legacy welcomes project enquiries from Richardson at its Deep Ellum recording studio. Share your music, voiceover script, or podcast plan before you reserve time.",
    "body": [
      "For a project made partly at home, ask how to prepare the files. Include the software you used, any plugins the session needs, and a rough mix for reference.",
      "Book around the work you need next: a new vocal, a mix, a master, or a consultation. Check the route and parking before you leave Richardson."
    ],
    "highlights": [
      {
        "label": "Studio address",
        "detail": "2815 Main St, Suite A"
      },
      {
        "label": "City and ZIP",
        "detail": "Dallas, TX 75226"
      },
      {
        "label": "Recording",
        "detail": "$75/hour · two-hour minimum"
      },
      {
        "label": "Before you travel",
        "detail": "Confirm the session, entry, and parking"
      }
    ]
  }
]

// =========================================================================
// REVIEWS (placeholder — wire to real Google reviews via API on launch)
// =========================================================================

export interface Review {
  author: string
  body: string
  rating: number
  source: 'Google' | 'Yelp' | 'Direct'
}

// Selected excerpts verified on Legacy's current website. Dates and aggregate totals are intentionally omitted.
export const reviews: Review[] = [
  {
    author: 'Brandon P.',
    body: 'Recorded a few songs here, they have excellent quality and the engineers can really help take the song to the next level.',
    rating: 5,
    source: 'Google',
  },
  {
    author: 'Farhan P.',
    body: 'Their unbelievable customer service, alongside the beautiful studio and excellent equipment, made my experience top-notch.',
    rating: 5,
    source: 'Google',
  },
  {
    author: 'Richard C.',
    body: "The atmosphere gave off a musical vibe that's makes everything flow. The recording process was relaxed and productive.",
    rating: 5,
    source: 'Google',
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

// Recurring weekly event sourced from Legacy's Facebook 2026-05-07.
// Started March 30 2026, runs every Monday at TX Tea Room in Deep Ellum.
//
// We compute the next 6 occurrences from today so the events page is always
// fresh without needing manual updates. The series itself is described as a
// single recurring entity in schema (eventSchedule).

/** True if `date` falls within US Central Daylight Time (2nd Sun of March through 1st Sun of November). */
function isCentralDST(date: Date): boolean {
  const year = date.getFullYear()
  const march = new Date(year, 2, 1)
  const dstStart = new Date(year, 2, 8 + ((7 - march.getDay()) % 7))
  const november = new Date(year, 10, 1)
  const dstEnd = new Date(year, 10, 1 + ((7 - november.getDay()) % 7))
  return date >= dstStart && date < dstEnd
}

/**
 * Returns the next `count` Monday Date objects, each fixed at 9:00 PM
 * Central Time (CDT or CST as appropriate). Always anchored to Central
 * regardless of the runtime's timezone — Legacy Live is a Dallas event.
 */
function nextMondaysCentral(count: number, fromDate: Date = new Date()): Date[] {
  const dates: Date[] = []
  const cursor = new Date(fromDate)
  cursor.setHours(0, 0, 0, 0)
  const dayOfWeek = cursor.getDay()
  const daysUntilMonday = (1 - dayOfWeek + 7) % 7 || 7
  cursor.setDate(cursor.getDate() + daysUntilMonday)
  for (let i = 0; i < count; i++) {
    const y = cursor.getFullYear()
    const m = String(cursor.getMonth() + 1).padStart(2, '0')
    const d = String(cursor.getDate()).padStart(2, '0')
    const offset = isCentralDST(cursor) ? '-05:00' : '-06:00'
    dates.push(new Date(`${y}-${m}-${d}T21:00:00${offset}`))
    cursor.setDate(cursor.getDate() + 7)
  }
  return dates
}

export const studioEvents: StudioEvent[] = nextMondaysCentral(6).map((d) => {
  // 2-hour show — ends at 11 PM Central
  const end = new Date(d.getTime() + 2 * 60 * 60 * 1000)
  const slug = `legacy-live-${d.toISOString().slice(0, 10)}`
  return {
    slug,
    name: 'Legacy Live — Weekly Open Mic',
    startDate: d.toISOString(),
    endDate: end.toISOString(),
    description:
      "One mic. One song. Dallas, show us what you got. Legacy Live is our weekly open mic for the Dallas artist community at TX Tea Room in Deep Ellum. Sign-ups at 8:30 PM, show starts at 9:00 PM. One song per artist, limited performance slots. Free event for rappers, singers, musicians, and poets — pull up, perform, and connect. Hosted by Legacy Music Group with sound by Kyle Cannon.",
    image: '/images/studio-live-room.jpg',
  }
})

/**
 * Anchor metadata about Legacy Live as a recurring series — used for the
 * series-level Event card and schema. Each occurrence in `studioEvents` above
 * is a concrete date for the upcoming weeks.
 */
export const legacyLiveSeries = {
  name: 'Legacy Live — Weekly Open Mic',
  tagline: 'One mic. One song. Dallas, show us what you got.',
  description:
    'A weekly open mic for the Dallas artist community. Sign-ups at 8:30 PM, show at 9:00 PM. One song only, limited performance slots. Free event — artists and audience welcome. Rappers, singers, musicians, poets — pull up, perform, and connect.',
  recurrence: 'Every Monday',
  doors: '8:30 PM (sign-ups)',
  start: '9:00 PM',
  cost: 'FREE',
  venue: {
    name: 'TX Tea Room',
    neighborhood: 'Deep Ellum',
    city: 'Dallas',
  },
  hostedBy: 'Legacy Music Group',
  soundBy: 'Kyle Cannon',
  startedDate: '2026-03-30',
}

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
  dateModified?: string
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
    "slug": "recording-studios-in-deep-ellum-guide",
    "title": "Recording in Deep Ellum: Plan Your Session",
    "excerpt": "The address, the files, and the booking details to sort out before a Deep Ellum session.",
    "category": "Neighborhood",
    "datePublished": "2026-05-06",
    "readMins": 3,
    "image": "/images/studio-lobby.jpg",
    "sections": [
      {
        "heading": "Start with the room and the work",
        "paragraphs": [
          "A studio name on a map is a starting point. Ask what the room can handle, who will run the session, and which parts of the project the quote covers.",
          "For Legacy Music Group, the address is 2815 Main St, Suite A, Dallas, TX 75226. The studio records vocals, bands, voiceovers, and podcasts, and offers mixing and mastering."
        ]
      },
      {
        "heading": "Plan your arrival",
        "paragraphs": [
          "Save the address and phone number. Ask how to enter and where to unload instruments before you set out.",
          "Allow time to park. Read the signs at the meter or paid lot you use; a studio booking does not reserve a parking space."
        ]
      },
      {
        "heading": "Make a useful shortlist",
        "paragraphs": [
          "Compare the engineer, room, available time, and full project cost. Listen to work that fits what you are making. A name on a gear list cannot tell you how your session will feel.",
          "Legacy publishes rates and packages. Use those to start the conversation, then confirm the scope of your own session."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Where is Legacy in Deep Ellum?",
        "answer": "The studio is at 2815 Main St, Suite A, Dallas, TX 75226."
      },
      {
        "question": "Does a session include parking?",
        "answer": "Do not assume it does. Check posted meter or lot rules and ask the studio about arrival and loading gear."
      }
    ],
    "related": [
      {
        "label": "Inside Legacy: gear, rooms, workflow",
        "href": "/blog/inside-legacy-studio"
      },
      {
        "label": "The Studio (about page)",
        "href": "/studio"
      },
      {
        "label": "Deep Ellum neighborhood page",
        "href": "/neighborhoods/deep-ellum"
      }
    ],
    "dateModified": "2026-10-12"
  },
  {
    "slug": "first-studio-session-dallas",
    "title": "Your First Studio Session in Dallas",
    "excerpt": "Bring the right files, make a short plan, and leave room to listen.",
    "category": "Getting Started",
    "datePublished": "2026-05-06",
    "readMins": 3,
    "image": "/images/studio-vocal-booth.jpg",
    "sections": [
      {
        "heading": "Pick one clear goal",
        "paragraphs": [
          "Finish a lead vocal. Record a demo. Capture an interview. A clear goal makes it easier to choose a service and talk about time.",
          "Send a rough version or outline to the studio. List the parts you have and the parts you still need."
        ]
      },
      {
        "heading": "Pack the files before the bag",
        "paragraphs": [
          "Bring the latest beat or audio files, lyrics or script, and a reference track. Keep a backup somewhere you can reach. Ask the engineer which format to use.",
          "For a song made in another app, name the app and any plugins. Do not assume every studio can open the original project."
        ]
      },
      {
        "heading": "Leave time for playback",
        "paragraphs": [
          "A session includes setup and listening as well as recording. Tell the engineer what you like and which moments you want to try again.",
          "Before you leave, confirm what files you will get, when to expect them, and how to keep your own backup."
        ]
      },
      {
        "heading": "Know what you are paying for",
        "paragraphs": [
          "Legacy lists recording at $75 an hour with a two-hour minimum. Mixing and mastering have separate prices; some packages include them.",
          "Ask for the whole project quote before booking. Two booked hours do not promise a finished song."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How much is the minimum recording time?",
        "answer": "Legacy publishes a two-hour minimum at $75 an hour. That is $150 of recording time before any other agreed work or charges."
      },
      {
        "question": "Will I leave with a finished song?",
        "answer": "That depends on the work booked. Confirm whether the plan covers recording only or also editing, mixing, and mastering."
      }
    ],
    "related": [
      {
        "label": "Booking policies",
        "href": "/policies"
      },
      {
        "label": "Pricing",
        "href": "/pricing"
      },
      {
        "label": "See our engineers",
        "href": "/engineers"
      }
    ],
    "dateModified": "2026-10-12"
  },
  {
    "slug": "rap-recording-dallas",
    "title": "Rap Recording in Dallas: Choose the Right Session",
    "excerpt": "What to ask about the engineer, vocal parts, session time, and final files.",
    "category": "Hip-Hop",
    "datePublished": "2026-05-06",
    "readMins": 3,
    "image": "/images/studio-control-room.jpg",
    "sections": [
      {
        "heading": "Listen for the work you need",
        "paragraphs": [
          "Listen to an engineer’s examples with your own song in mind. Hear how the lead sits against the beat and how the doubles and ad-libs fit.",
          "Credits can start a conversation. Ask who will be in the room for your session and what that person will handle."
        ]
      },
      {
        "heading": "Bring a vocal plan",
        "paragraphs": [
          "Mark the lead, doubles, ad-libs, and guest parts in your lyrics. You can change the plan in the room; having one helps everyone follow the song.",
          "Bring the right version of the beat. Ask your producer about separate audio tracks if the song will need a full mix."
        ]
      },
      {
        "heading": "Compare the whole quote",
        "paragraphs": [
          "An hourly rate, a mix price, and a release package pay for different work. Compare like with like, including edits, revisions, files, and delivery dates.",
          "Legacy lists recording at $75 an hour, mixing from $150, and mastering at $30. Start with the service page, then ask for a quote for your song."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many songs fit in a session?",
        "answer": "The answer depends on the song parts, takes, and edits. Send demos and priorities so the studio can help you choose time."
      },
      {
        "question": "Who handles rap at Legacy?",
        "answer": "Head engineer Ray Dallas lists rap among his interests. Read the team profiles and confirm who is available for your session."
      }
    ],
    "related": [
      {
        "label": "Rap Recording service page",
        "href": "/services/rap-recording"
      },
      {
        "label": "Pricing breakdown",
        "href": "/pricing"
      },
      {
        "label": "Hip-hop engineers at Legacy",
        "href": "/engineers"
      }
    ],
    "dateModified": "2026-10-12"
  },
  {
    "slug": "mixing-mastering-pricing-dallas",
    "title": "Mixing and Mastering Prices: Read the Scope",
    "excerpt": "A useful quote tells you what work, revisions, and files the price covers.",
    "category": "Mixing & Mastering",
    "datePublished": "2026-05-06",
    "readMins": 3,
    "image": "/images/studio-control-room.jpg",
    "sections": [
      {
        "heading": "Two different parts of the job",
        "paragraphs": [
          "Mixing brings the recorded parts together. Mastering works on the final mix for delivery. Ask whether the price covers one or both.",
          "Legacy lists mixing from $150 and mastering at $30. Those are separate published services, not a combined $150 promise."
        ]
      },
      {
        "heading": "Explain the work before asking for a total",
        "paragraphs": [
          "Send a rough mix and a track count. Say whether the project needs timing edits, vocal tuning, clean versions, or instrumentals.",
          "Name a reference track and explain what you hear in it. Clear notes help the engineer understand the result you want."
        ]
      },
      {
        "heading": "Agree on the finish line",
        "paragraphs": [
          "Ask how revisions work, which files you receive, and when they are due. Put a real release deadline in the brief before the work is booked.",
          "Some studios charge by the hour; others quote per song or project. The useful comparison is the full scope and total, not just the first number."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does Legacy bundle mixing and mastering?",
        "answer": "Some published packages include mixes and masters. The standalone menu lists mixing from $150 and mastering at $30; ask which option fits your work."
      },
      {
        "question": "How long will the mix take?",
        "answer": "Confirm a delivery date with the studio after it has seen the project. Do not plan a release around an unconfirmed turnaround."
      }
    ],
    "related": [
      {
        "label": "Pricing page",
        "href": "/pricing"
      },
      {
        "label": "Services overview",
        "href": "/services"
      }
    ],
    "dateModified": "2026-10-12"
  },
  {
    "slug": "artist-development-dallas-choosing-studio",
    "title": "Artist Development: Choose the Next Step",
    "excerpt": "Use a music business consultation to work through a clear set of questions.",
    "category": "Artist Development",
    "datePublished": "2026-05-06",
    "readMins": 3,
    "image": "/images/about-studio-wide.jpg",
    "sections": [
      {
        "heading": "Bring a decision, not just a dream",
        "paragraphs": [
          "A finished song can open a new set of questions. What should the next release cost? Which parts can you do yourself? What help do you need?",
          "Write down the decisions you want to make. Bring your music, budget, and any release plans."
        ]
      },
      {
        "heading": "Ask what the work includes",
        "paragraphs": [
          "Artist development can mean different things to different providers. Ask what happens in the meeting and what, if anything, follows it.",
          "If a proposal includes artwork, photos, promotion, or ongoing work, ask for those items and their costs in writing. Do not infer a record deal or management relationship from the name of a service."
        ]
      },
      {
        "heading": "Start at Legacy",
        "paragraphs": [
          "Legacy lists a $99 music business consultation. Owner Matthew Medlock has a Music Business background and runs the studio.",
          "Ask about the topics, duration, and next steps before booking. A consultation can help you consider a plan; it cannot promise an audience or a career outcome."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How much is a consultation at Legacy?",
        "answer": "The published music business consultation is $99. Confirm its duration and scope with the studio."
      },
      {
        "question": "Should I book a package or a consultation?",
        "answer": "Start with the work you need. A package lists production items; a consultation is for music business questions. Ask the team if you are unsure which fits."
      }
    ],
    "related": [
      {
        "label": "Artist Development service",
        "href": "/services/artist-development"
      },
      {
        "label": "Contact us to talk about your project",
        "href": "/contact"
      }
    ],
    "dateModified": "2026-10-12"
  },
  {
    "slug": "inside-legacy-studio",
    "title": "Inside Legacy: Rooms, Gear, and Session Planning",
    "excerpt": "Use the published equipment list to ask better questions about your project.",
    "category": "Studio",
    "datePublished": "2026-05-06",
    "readMins": 3,
    "image": "/images/studio-control-room.jpg",
    "sections": [
      {
        "heading": "Match the room to the work",
        "paragraphs": [
          "Legacy’s equipment page lists A Room, B Room, a vocal booth, and a lounge. Describe your setup before booking so the team can discuss the space you need.",
          "A solo vocal and a band session need different plans. Share the number of people, instruments, and inputs before you arrive."
        ]
      },
      {
        "heading": "Ask about the tools that matter",
        "paragraphs": [
          "The published list includes a Neumann U 87 in the vocal booth, an AKG C414 in B Room, and an Avalon 737 and UA Apollo in A Room.",
          "If your session depends on a specific mic, plugin, or app version, confirm it in advance. A gear list is useful context, not a promise that every item is in every room."
        ]
      },
      {
        "heading": "Plan the handoff",
        "paragraphs": [
          "Ask how to send your files and what the engineer needs to open them. Include a rough mix and a note about any missing parts.",
          "Before the session ends, agree on the files and delivery date. Keep your own backup rather than treating studio storage as your only copy."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I bring a project from another app?",
        "answer": "Tell the studio which app and plugins you used. Ask whether to bring the original project, exported audio tracks, or both."
      },
      {
        "question": "Where can I see the equipment list?",
        "answer": "See the Gear page for the published list, then confirm the tools and room you need for your session."
      }
    ],
    "related": [
      {
        "label": "See the full gear list",
        "href": "/gear"
      },
      {
        "label": "The Studio (about page)",
        "href": "/studio"
      }
    ],
    "dateModified": "2026-10-12"
  }
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
    "category": "Booking",
    "question": "How do I book a session?",
    "answer": "Use Legacy’s booking page or call (214) 377-9729. Choose your service and check the session details before paying."
  },
  {
    "category": "Pricing",
    "question": "What does recording cost?",
    "answer": "The published rate is $75 per hour with a two-hour minimum. Mixing starts at $150, and mastering is listed at $30. Ask for the full quote for your project."
  },
  {
    "category": "Sessions",
    "question": "What should I bring?",
    "answer": "Bring the current beat or session files, lyrics or script, and a reference for the sound you want. Keep a backup and ask which file format the engineer needs."
  },
  {
    "category": "Sessions",
    "question": "Can I bring a producer or guests?",
    "answer": "Tell the studio who will attend and who will run the session. Review the guest terms and confirm any extra people before you arrive."
  },
  {
    "category": "Booking",
    "question": "What if I need to cancel or move my session?",
    "answer": "Read the studio’s published terms and contact the team before changing a booking. Confirm the notice period, any fee, and how the terms apply to your payment."
  },
  {
    "category": "Payment",
    "question": "Is a deposit or full payment required?",
    "answer": "Check the payment terms for the booking option you choose. Ask the team to confirm the amount due and the cancellation terms before you pay."
  },
  {
    "category": "Location",
    "question": "Where is the studio?",
    "answer": "Legacy is at 2815 Main St, Suite A, Dallas, TX 75226, in Deep Ellum. All location pages on this site refer to this one studio."
  },
  {
    "category": "Location",
    "question": "Where can I park?",
    "answer": "There are meters and paid lots near the studio. Check the posted rates and hours where you park. Ask the team about entry and loading equipment."
  },
  {
    "category": "Delivery",
    "question": "When will I receive my files?",
    "answer": "Agree on the files, edits, and delivery date before the work begins. Recording, mixing, and mastering are different services; the schedule depends on your project."
  }
]

// =========================================================================
// PRICING (legacy export — kept for backward compatibility)
// =========================================================================

export const pricing = [
  {
    "service": "Recording",
    "withEngineer": "$75/hr",
    "withoutEngineer": "2-hour min."
  },
  {
    "service": "Mixing",
    "withEngineer": "$150+",
    "withoutEngineer": "Quote by scope"
  },
  {
    "service": "Mastering",
    "withEngineer": "$30",
    "withoutEngineer": "Confirm scope"
  },
  {
    "service": "Production",
    "withEngineer": "$500",
    "withoutEngineer": "One-on-one"
  },
  {
    "service": "Consultation",
    "withEngineer": "$99",
    "withoutEngineer": "Music business"
  }
]
