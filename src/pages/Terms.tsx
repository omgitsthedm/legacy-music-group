import ScrollReveal from '../components/ScrollReveal'
import { useSeo } from '../lib/seo'
import JsonLd from '../components/JsonLd'
import { buildBreadcrumbSchema } from '../lib/schemas'

export default function Terms() {
  useSeo({
    title: 'Terms of Service',
    description:
      'Terms governing your use of legacymusicgroup.com and the services Legacy Music Group provides.',
    path: '/terms',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="terms-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms', path: '/terms' },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Terms
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Terms of Service
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
              By using legacymusicgroup.com or booking a session with Legacy Music Group, you
              agree to these terms. If you don't agree, please don't use the site or book.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">1. Sessions</h2>
            <p className="mt-3">
              Booking a session creates a contract between you and Legacy. You agree to follow
              the studio policies (see <a href="/policies" className="text-[#E8A33D] hover:underline">/policies</a>),
              treat staff and equipment with respect, and pay the agreed rates on time.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">2. Payments</h2>
            <p className="mt-3">
              Deposits and balances are due as outlined at the time of booking. Disputed charges
              should be addressed with us first before initiating a chargeback. Failure to pay
              the agreed amount may result in withholding deliverables.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              3. Ownership of work
            </h2>
            <p className="mt-3">
              You own the music you create here. Legacy retains the right to reference our work
              with you (e.g., that you recorded with us, with your permission) for portfolio and
              promotional purposes.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              4. Acceptable use of the site
            </h2>
            <p className="mt-3">
              Don't attempt to break, scrape, exploit, or otherwise abuse the site. Don't submit
              fraudulent booking information. Don't use the site for any unlawful purpose.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              5. Limitation of liability
            </h2>
            <p className="mt-3">
              Legacy is not liable for indirect or consequential damages arising from use of the
              site or services. Direct liability is limited to the amount paid for the specific
              session in question.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
              6. Governing law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the State of Texas. Disputes are resolved
              in the courts of Dallas County, TX.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">7. Changes</h2>
            <p className="mt-3">
              We may update these terms. Continued use of the site after updates constitutes
              acceptance of the new terms.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-[0.85rem] pt-6 border-t border-[rgba(245,240,232,0.08)]">
              <strong className="text-[#F5F0E8]">Placeholder notice:</strong> this terms text is
              a first-pass draft for design preview only. Final terms pending legal review.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
