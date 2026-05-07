/**
 * Centralized data store for engineers, services, FAQs, etc.
 *
 * All entries marked `// PLACEHOLDER:` are temporary. See PLACEHOLDERS.md
 * at the repo root for the full inventory of what needs replacing.
 */

export interface Engineer {
  id: string
  name: string
  specialty: string
  image: string
  bio: string
  stats: { experience: string; projects: string; highlight: string }
  genres: string[]
  samples: { title: string; artist: string; duration: string }[]
}

// PLACEHOLDER: All engineer data below is fictional and needs replacement
// with real Legacy Music Group team. See PLACEHOLDERS.md §Engineers.
export const engineers: Engineer[] = [
  {
    id: '1',
    name: 'Marcus Cole',
    specialty: 'Hip-Hop, R&B',
    image: '/images/engineer-1.jpg',
    bio: 'Marcus Cole is a Grammy-nominated engineer and producer with over a decade of experience shaping the sound of Dallas hip-hop and R&B. His approach blends analog warmth with modern clarity, creating mixes that feel both timeless and contemporary. Marcus began his career interning at legendary studios in Los Angeles before returning to his hometown to build Legacy Music Group alongside fellow creators. His work has been featured on major streaming playlists, national radio, and even a Super Bowl commercial. Artists describe his sessions as transformative — he has a rare gift for making vocalists feel completely at ease while pushing them to deliver their best performance.',
    stats: { experience: '10+ Years', projects: '500+ Projects', highlight: 'Grammy Nominated' },
    genres: ['Hip-Hop', 'R&B', 'Trap Soul'],
    samples: [
      { title: 'Midnight in Deep Ellum', artist: 'Local Artist Mix', duration: '3:42' },
      { title: 'Caramel Skies', artist: 'R&B Session', duration: '4:15' },
      { title: 'Concrete Jungle', artist: 'Hip-Hop Beat', duration: '2:58' },
      { title: 'Late Night Drive', artist: 'Trap Soul Mix', duration: '3:30' },
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
    samples: [
      { title: 'Neon Dreams', artist: 'Pop Production', duration: '3:18' },
      { title: 'Pulse', artist: 'Electronic Mix', duration: '4:02' },
      { title: 'Glass Heart', artist: 'Pop Ballad', duration: '3:55' },
      { title: 'Digital Love', artist: 'Synthwave Track', duration: '3:22' },
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
    samples: [
      { title: 'Dust and Bones', artist: 'Rock Album Mix', duration: '4:10' },
      { title: 'Front Porch', artist: 'Folk Session', duration: '3:45' },
      { title: 'Amplifier', artist: 'Live Band Recording', duration: '3:58' },
      { title: 'Open Road', artist: 'Indie Production', duration: '4:22' },
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
    samples: [
      { title: 'Soul Searching', artist: 'Neo-Soul Mix', duration: '4:05' },
      { title: 'Barz', artist: 'Hip-Hop Session', duration: '3:12' },
      { title: 'Golden Hour', artist: 'Soul Production', duration: '3:48' },
      { title: 'Freestyle Room', artist: 'Raw Session', duration: '2:45' },
    ],
  },
]

// PLACEHOLDER: pricing values are illustrative for first-pass design.
// Real rates pending owner approval — see PLACEHOLDERS.md §Pricing.
export const pricing = [
  { service: 'Hourly Recording', withEngineer: '$75/hr', withoutEngineer: '$45/hr' },
  { service: '4-Hour Block', withEngineer: '$280', withoutEngineer: '$170' },
  { service: '8-Hour Day', withEngineer: '$520', withoutEngineer: '$320' },
  { service: 'Mixing & Mastering', withEngineer: '$150/song', withoutEngineer: '$150/song' },
  { service: 'Full Package', withEngineer: '$500', withoutEngineer: 'N/A' },
]

// PLACEHOLDER: contact info — see PLACEHOLDERS.md §Contact.
export const contact = {
  phone: '(214) 555-0199',
  phoneE164: '+12145550199',
  email: 'book@legacymusic.group',
  addressLine1: 'Deep Ellum',
  addressLine2: 'Dallas, TX 75226',
  hours: 'Mon–Sat, 10am–10pm',
  responseTime: 'We reply within 24hrs',
}

export interface FaqItem {
  category: string
  question: string
  answer: string
}

// FAQ content drafted to match BRIEF voice — confirm with owner before launch.
// PLACEHOLDER markers in answers refer to specific values needing real data.
export const faqs: FaqItem[] = [
  {
    category: 'Booking',
    question: 'How do I book a session?',
    answer:
      "Hit Book Now anywhere on the site. Pick your session type, choose an engineer if you want one, lock in a time, and you're done — under a minute. We'll confirm by email and text.",
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
      'Pro Tools, Logic Pro, top-shelf microphones, outboard preamps and compressors, and a tuned listening environment. (Full gear list pending — coming when renovation photography drops.)',
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
      'Deep Ellum, Dallas — the heart of the city\'s music district. Walking distance from venues, food, and the energy that makes this neighborhood special. (Specific street address pending — see Contact for current details.)',
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
      'Online card payment at booking — Visa, Mastercard, AMEX, Discover. A deposit secures your time; balance is due before the session. (Live payment processing coming — placeholder for now.)',
  },
]
