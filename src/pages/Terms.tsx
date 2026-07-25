import { Link } from 'react-router'
import JsonLd from '../components/JsonLd'
import ScrollReveal from '../components/ScrollReveal'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { useSeo } from '../lib/seo'

const sections = [
  {
    title: 'Website information',
    body:
      'Legacy works to keep rates, hours, team details and service information accurate. Published prices are starting estimates unless a studio representative confirms a final scope and total.',
  },
  {
    title: 'Session agreements',
    body:
      'Using this website does not reserve a room or create a session agreement. A booking is confirmed only when the Legacy team confirms availability and provides the applicable payment and studio terms.',
  },
  {
    title: 'Acceptable use',
    body:
      'Do not attempt to disrupt the site, submit fraudulent requests, misuse forms or use the website for unlawful activity.',
  },
  {
    title: 'External links',
    body:
      'The website links to third-party press, social networks and service providers. Their content and privacy practices are controlled by those third parties.',
  },
  {
    title: 'Questions',
    body:
      'Ask about website terms or the terms for a specific session before booking by calling (214) 377-9729 or emailing info@legacymusicgroup.com.',
  },
]

export default function Terms() {
  useSeo({
    title: 'Website Terms',
    description: 'General terms for using the Legacy Music Group website.',
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
      <section className="site-shell section-space">
        <ScrollReveal>
          <p className="control-label text-[#E8A33D]">Terms</p>
          <h1 className="mt-4 font-display text-[clamp(4rem,9vw,8rem)] font-semibold uppercase leading-[0.84] text-[#f1f1ee]">
            Website terms.
          </h1>
          <p className="mt-5 font-body text-sm text-[#b7bcc2]">Last updated July 24, 2026</p>
        </ScrollReveal>

        <div className="mt-16 max-w-[820px] border-t border-white/15">
          {sections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 40}>
              <section className="grid gap-4 border-b border-white/15 py-8 md:grid-cols-[0.45fr_1fr]">
                <h2 className="font-display text-2xl uppercase text-[#f1f1ee]">{section.title}</h2>
                <p className="font-body text-base leading-7 text-[#b7bcc2]">{section.body}</p>
              </section>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-10 font-body text-sm text-[#b7bcc2]">
          Studio conduct, deposit and file policies are listed on the{' '}
          <Link to="/policies" className="text-[#E8A33D] hover:underline">policies page</Link>.
        </p>
      </section>
    </div>
  )
}
