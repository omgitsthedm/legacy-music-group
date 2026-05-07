import ScrollReveal from '../components/ScrollReveal'
import { useSeo } from '../lib/seo'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumbSchema } from '../lib/schemas'

export default function Privacy() {
  useSeo({
    title: 'Privacy Policy',
    description:
      'How Legacy Music Group collects, uses, and protects your personal information when you book sessions or contact us.',
    path: '/privacy',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="privacy-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy', path: '/privacy' },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Privacy
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Privacy Policy
            </h1>
            <p className="font-body text-[0.85rem] text-[#A38F7B] mt-3">
              Last updated: 2026-05-06 · Placeholder content pending legal review
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] space-y-8 font-body text-[1rem] text-[#A38F7B] leading-[1.8]">
          <ScrollReveal>
            <p>
              Legacy Music Group ("Legacy," "we," "us") respects your privacy. This policy
              explains what information we collect, how we use it, and your rights. If you have
              questions, email us at{' '}
              <a href="mailto:privacy@legacymusic.group" className="text-[#E8A33D] hover:underline">
                privacy@legacymusic.group
              </a>
              .
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              1. What we collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-[#F5F0E8]">Booking info:</strong> name, email, phone,
                session preferences, engineer choice, date and time.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Payment info:</strong> handled by our payment
                processor — we don't store full card numbers.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Communications:</strong> messages you send via
                contact forms, email, and phone.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Audio files:</strong> recordings, mixes, and
                masters created during your sessions.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Site analytics:</strong> standard analytics
                (page views, device type, referrer) collected via privacy-respecting tooling.
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              2. How we use it
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To deliver the sessions, mixes, and services you book.</li>
              <li>To communicate with you about your booking, files, and follow-ups.</li>
              <li>To improve the studio experience based on aggregate, non-identifying data.</li>
              <li>
                To send you optional marketing (artist list, event invites) — only if you opt in,
                and you can unsubscribe anytime.
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              3. Who we share with
            </h2>
            <p className="mt-3">
              Only service providers who help us run the studio: payment processor, email and SMS
              providers, file storage, scheduling. We don't sell your information.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              4. How long we keep it
            </h2>
            <p className="mt-3">
              Booking records: kept for tax and accounting purposes per applicable law. Audio
              files: retained on our servers for 90 days after delivery; long-term backup is the
              artist's responsibility. Marketing list: until you unsubscribe.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">5. Your rights</h2>
            <p className="mt-3">
              You can request a copy of the data we hold on you, ask us to correct it, or ask us
              to delete it (within the limits of legal record-keeping requirements). Email{' '}
              <a href="mailto:privacy@legacymusic.group" className="text-[#E8A33D] hover:underline">
                privacy@legacymusic.group
              </a>
              .
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">6. Cookies</h2>
            <p className="mt-3">
              We use a minimal set of cookies for analytics and remembering your preferences.
              You can clear or block cookies via your browser settings.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              7. Changes to this policy
            </h2>
            <p className="mt-3">
              If we make material changes, we'll update the "last updated" date at the top of
              this page and, where appropriate, notify you by email.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-[0.85rem] pt-6 border-t border-[rgba(245,240,232,0.08)]">
              <strong className="text-[#F5F0E8]">Placeholder notice:</strong> this policy is a
              first-pass draft for design preview only. Final policy text pending legal review.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
