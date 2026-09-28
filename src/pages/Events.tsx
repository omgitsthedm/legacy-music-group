import { Instagram, Mail, Phone } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { contact } from '../lib/data'

export default function Events() {
  useSeo({ title: 'Studio Updates', description: 'Follow Legacy Music Group for current studio updates and event announcements.', path: '/events' })
  return (
    <div className="pt-20">
      <JsonLd id="events-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Studio Updates', path: '/events' }])} />
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]"><div className="mx-auto max-w-[800px] text-center"><ScrollReveal><span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">Studio updates</span><h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">Follow current announcements.</h1><p className="font-body text-[1rem] text-[#A38F7B] leading-[1.8] mt-5">This site does not publish an event schedule. Check Legacy&apos;s current social channel or contact the studio for confirmed updates.</p><div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"><a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8A33D] px-7 py-3.5 font-body text-[0.95rem] font-medium text-[#0A0A0A] hover:bg-[#D4873C] transition-colors duration-300"><Instagram size={17} aria-hidden="true" />Follow Instagram</a><a href={`tel:${contact.phoneE164}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(245,240,232,0.25)] px-7 py-3.5 font-body text-[0.95rem] text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300"><Phone size={17} aria-hidden="true" />Call the studio</a><a href={`mailto:${contact.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(245,240,232,0.25)] px-7 py-3.5 font-body text-[0.95rem] text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300"><Mail size={17} aria-hidden="true" />Email the studio</a></div></ScrollReveal></div></section>
    </div>
  )
}
