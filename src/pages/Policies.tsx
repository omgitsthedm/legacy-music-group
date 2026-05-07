import ScrollReveal from '../components/ScrollReveal'
import { useSeo } from '../lib/seo'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { contact } from '../lib/data'

// Real policies sourced from legacymusicgroup.com/terms-and-conditions 2026-05-07.
const sections = [
  {
    title: 'Booking & Approval',
    body: [
      'Session bookings, times, and dates are subject to availability and approval from a member of the Legacy team.',
      'Legacy reserves the right to refuse or reschedule confirmed bookings at our discretion. We will notify you as soon as possible if this happens.',
      'Bookings can be confirmed via legacymusicgroup.com, by phone at (214) 377-9729, or by email at info@legacymusicgroup.com.',
    ],
  },
  {
    title: 'Deposits & Payment',
    body: [
      'A non-refundable, non-transferable 50% deposit is required to secure all bookings. The remaining balance is due on the day of your session.',
      'For sessions exceeding 8 hours, installment payments may be required as time is used.',
      'Legacy retains all copies of recordings, masters, or session files until full payment clears.',
      'Refusal to pay may lead to prosecution. We do not enjoy this part — please don\'t put us in that position.',
    ],
  },
  {
    title: 'Cancellations & Rescheduling',
    body: [
      '24 hours notice is required for the cancellation of a session — including weekends and holidays.',
      'Cancellations with less than 24 hours notice incur a $55 reschedule fee.',
      'No-shows forfeit all payments made.',
      'Weather-related cancellations are rescheduled at no penalty.',
    ],
  },
  {
    title: 'File Retention',
    body: [
      'All session files are deleted from Legacy\'s hard drives 90 days after session completion unless otherwise specified at booking.',
      'If you need extended file retention, tell us at booking and we\'ll quote a backup arrangement.',
      'Long-term archival of your masters is the artist\'s responsibility.',
    ],
  },
  {
    title: 'Studio Conduct',
    body: [
      'Maximum 7 guests per session. Additional guests require 24-hour advance notice and may incur a $35 cleanup fee per extra person.',
      'Cigarette smoking is not permitted anywhere inside the studio complex.',
      'Food and beverages are welcome — but not on the equipment. Spillage damages will be billed under the damages policy.',
      'Legacy is not responsible for any personal items lost or damaged on the premises.',
    ],
  },
  {
    title: 'Damages & Equipment',
    body: [
      'Any damage to studio equipment due to misuse, abuse, or negligence will be charged to the booking party (artist, band, or individual).',
      'Refusal to pay damage charges results in exclusion from future bookings and potential prosecution.',
      'If you arrive and notice anything missing or damaged, report it to your engineer immediately so it doesn\'t become your bill.',
    ],
  },
  {
    title: 'Parking',
    body: [
      'Metered street parking is available outside the studio. Meters are active 6pm–midnight, 7 days a week, at $0.25 per 30 minutes.',
      'Legacy is not responsible for any parking tickets or towing violations.',
      'Plan for parking time when arriving — we don\'t extend session windows for parking.',
    ],
  },
  {
    title: 'Fee Schedule',
    body: [
      '$55 — late-cancellation / reschedule fee',
      '$35 — additional guest / cleanup fee per extra person',
      'Damage fees are quoted per incident based on equipment value and repair cost.',
    ],
  },
]

export default function Policies() {
  useSeo({
    title: 'Booking Policies & Terms',
    description:
      'Booking, deposit, cancellation, conduct, file retention, and damages policies for Legacy Music Group sessions in Deep Ellum, Dallas.',
    path: '/policies',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="policies-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Policies', path: '/policies' },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              The Fine Print
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              Booking Policies
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 leading-[1.7]">
              The rules of the room. Designed to keep things smooth for artists,
              engineers, and the studio. By booking a session at Legacy you're agreeing
              to these terms on behalf of yourself, your artist, or your band.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] space-y-10">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 50}>
              <article className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-8">
                <h2
                  data-speakable
                  className="font-body text-[1.25rem] font-medium text-[#F5F0E8] mb-4"
                >
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.7]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <p className="font-body text-[0.85rem] text-[#A38F7B] text-center pt-4 border-t border-[rgba(245,240,232,0.08)]">
              Questions about these policies? Email{' '}
              <a href={`mailto:${contact.email}`} className="text-[#E8A33D] hover:underline">
                {contact.email}
              </a>{' '}
              or call <a href={`tel:${contact.phoneE164}`} className="text-[#E8A33D] hover:underline">{contact.phone}</a>.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
