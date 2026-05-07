import ScrollReveal from '../components/ScrollReveal'
import { useSeo } from '../lib/seo'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumbSchema } from '../lib/schemas'

const sections = [
  {
    title: 'Booking & Deposits',
    body: [
      'A deposit is required to confirm your session. The remaining balance is due before the session begins.',
      'Sessions are held in your name once the deposit is received. We do not hold time slots without a confirmed booking.',
      '(Placeholder amounts — final deposit structure pending owner confirmation.)',
    ],
  },
  {
    title: 'Cancellations & Rescheduling',
    body: [
      'Cancellations made more than 48 hours before your session are fully refundable.',
      'Cancellations within 48 hours forfeit the deposit, but you may reschedule once at no extra cost.',
      'No-shows forfeit the entire session amount.',
      '(Placeholder windows — final timing pending owner confirmation.)',
    ],
  },
  {
    title: 'Late Arrivals',
    body: [
      'Sessions start at the scheduled time and end at the scheduled time. Late arrivals do not extend the session.',
      'If you are running more than 15 minutes late, please call (214) 555-0199 so we can plan accordingly.',
    ],
  },
  {
    title: 'Studio Conduct',
    body: [
      'Legacy is a creative space. We expect respectful behavior toward staff, engineers, and other artists.',
      'No smoking inside the studio. Designated outdoor area available.',
      'No outside alcohol. Drinks may be brought in by approval.',
      'Damage to equipment is the responsibility of the booking party.',
    ],
  },
  {
    title: 'Files & Deliverables',
    body: [
      'Recording session files (raw stems, session files) are delivered after the session via secure link.',
      'Mixing & mastering deliverables include the final stereo master plus instrumental and a cappella variants on request.',
      'Files are retained on our servers for 90 days after delivery. Backups beyond that are the artist\'s responsibility.',
    ],
  },
  {
    title: 'Revisions',
    body: [
      'Mixing and mastering services include two rounds of revisions.',
      'Additional revisions are available at a per-round rate. (Rate pending.)',
      'Revision requests should be specific and consolidated to avoid back-and-forth.',
    ],
  },
  {
    title: 'Rights & Ownership',
    body: [
      'You retain full ownership of all music recorded, mixed, or mastered at Legacy.',
      'Legacy reserves the right to display non-confidential portfolio examples (e.g., that an artist worked here, with permission).',
      'We do not register, distribute, or claim publishing rights to your work.',
    ],
  },
]

export default function Policies() {
  useSeo({
    title: 'Booking Policies',
    description:
      'Booking, cancellation, late arrival, conduct, file delivery, revision, and rights policies for Legacy Music Group sessions.',
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
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Booking Policies
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 leading-[1.7]">
              The rules of the room. Designed to keep things smooth for artists, engineers, and the studio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] space-y-10">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 50}>
              <article className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-8">
                <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8] mb-4">
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
              <a href="mailto:book@legacymusic.group" className="text-[#E8A33D] hover:underline">
                book@legacymusic.group
              </a>{' '}
              or call (214) 555-0199.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
