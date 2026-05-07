import JsonLd from './JsonLd'
import { SITE } from '../lib/seo'

/**
 * HowTo schema for the booking process — eligible for Google's
 * "step-by-step" rich results in some markets. Mirror of the actual
 * BookingModal flow.
 */
const bookingHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Book a Recording Session at Legacy Music Group',
  description:
    "Book a session at Legacy Music Group in Deep Ellum, Dallas in under a minute.",
  totalTime: 'PT1M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '75',
  },
  tool: [
    { '@type': 'HowToTool', name: 'A web browser' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Choose your session type',
      text: 'Pick "With Engineer" for a guided session ($75/hour) or "Without Engineer" if you run the board yourself ($45/hour). Two-hour minimum.',
      url: `${SITE.url}/services`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Add optional services',
      text: 'Bundle mixing & mastering ($150/song) or upgrade to the Full Package ($500) for record + mix + master + 3 promo clips.',
      url: `${SITE.url}/services`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Pick your engineer',
      text: 'Choose from our team — head engineer Ray Dallas (rap/pop/songwriter, credits include Mac Miller and B.o.B), Wayne (mixing/production), or any-available.',
      url: `${SITE.url}/engineers`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Pick a time',
      text: 'Choose from real available time slots in our brand-matched calendar. Pre-launch booking opens through legacymusicgroup.com.',
      url: `${SITE.url}/`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Confirm details and pay',
      text: 'Enter your contact info, accept the studio agreement, and pay your deposit. Confirmation email and calendar invite arrive instantly.',
      url: `${SITE.url}/policies`,
    },
  ],
}

export default function BookingHowToSchema() {
  return <JsonLd id="booking-howto" data={bookingHowTo} />
}
