import JsonLd from '../components/JsonLd'
import ScrollReveal from '../components/ScrollReveal'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { useSeo } from '../lib/seo'

const sections = [
  {
    title: 'Information you choose to send',
    body:
      'The contact, callback and artist-list forms can collect your name, email address, phone number, preferred callback time and project details. We also receive information you send by phone or email.',
  },
  {
    title: 'How it is used',
    body:
      'Legacy uses this information to answer questions, discuss session availability, respond to callback requests and send studio updates when you explicitly join the artist list.',
  },
  {
    title: 'Form processing',
    body:
      'Website forms are processed by Netlify, the hosting provider for this site. Legacy does not sell personal information. Information may be shared with service providers only when needed to operate the website or respond to your request.',
  },
  {
    title: 'Payments and audio',
    body:
      'This website does not currently collect card details, process deposits or upload session audio. The studio provides current payment and file-delivery instructions directly.',
  },
  {
    title: 'Analytics and cookies',
    body:
      'No advertising tracker or Google Analytics measurement ID is enabled in this build. The hosting provider may process basic request logs and essential technical data for security and delivery.',
  },
  {
    title: 'Your choices',
    body:
      'You can ask Legacy to correct or delete information submitted through this site, or ask to leave the artist list, by emailing info@legacymusicgroup.com.',
  },
]

export default function Privacy() {
  useSeo({
    title: 'Privacy Policy',
    description:
      'How Legacy Music Group handles information submitted through this website.',
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
      <section className="site-shell section-space">
        <ScrollReveal>
          <p className="control-label text-[#E8A33D]">Privacy</p>
          <h1 className="mt-4 font-display text-[clamp(4rem,9vw,8rem)] font-semibold uppercase leading-[0.84] text-[#f1f1ee]">
            Privacy policy.
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
      </section>
    </div>
  )
}
