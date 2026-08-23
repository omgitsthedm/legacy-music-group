import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react'
import { useContext } from 'react'
import { BookingContext } from '../lib/booking-context'
import { contact, services, neighborhoods } from '../lib/data'

export default function Footer() {
  const { openBooking } = useContext(BookingContext)
  const year = new Date().getFullYear()

  return (
    <>
    <footer className="bg-[#111111] border-t border-[rgba(245,240,232,0.08)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,5vw,4rem)] py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-4 col-span-2">
            <Link
              to="/"
              className="font-display text-[1.25rem] tracking-[4px] uppercase text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300"
            >
              Legacy
            </Link>
            <p className="font-body text-[0.9rem] text-[#A38F7B] leading-relaxed max-w-[320px]">
              Deep Ellum recording studio and artist development brand. Built to help
              independent artists make professional music in Dallas.
            </p>
            <button
              onClick={openBooking}
              className="inline-flex items-center justify-center bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.85rem] font-medium px-6 py-2.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contact.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(245,240,232,0.15)] flex items-center justify-center text-[#A38F7B] hover:text-[#E8A33D] hover:border-[#E8A33D] transition-colors duration-300"
              >
                <Instagram size={15} />
              </a>
              <a
                href={contact.social.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(245,240,232,0.15)] flex items-center justify-center text-[#A38F7B] hover:text-[#E8A33D] hover:border-[#E8A33D] transition-colors duration-300"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h3 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Studio', href: '/studio' },
                { label: 'Gear', href: '/gear' },
                { label: 'Engineers', href: '/engineers' },
                { label: 'Pricing', href: '/pricing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium">
              Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Journal', href: '/blog' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Events', href: '/events' },
                { label: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium">
              Connect
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#A38F7B]">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span className="font-body text-[0.9rem]">
                  {contact.addressLine1}<br />
                  {contact.addressLine2}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneE164}`}
                  className="flex items-center gap-2 text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                >
                  <Phone size={14} />
                  <span className="font-body text-[0.9rem]">{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 break-all"
                >
                  <Mail size={14} />
                  <span className="font-body text-[0.9rem]">{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Neighborhoods strip */}
        <div className="mt-12 pt-8 border-t border-[rgba(245,240,232,0.08)]">
          <p className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium mb-3">
            Serving North Dallas
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                to={`/neighborhoods/${n.slug}`}
                className="font-body text-[0.85rem] text-[#A38F7B] hover:text-[#E8A33D] transition-colors duration-300"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(245,240,232,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.85rem] text-[#A38F7B]">
            © {year} Legacy Music Group. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <Link to="/policies" className="font-body text-[0.85rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300">
              Policies
            </Link>
            <Link to="/privacy" className="font-body text-[0.85rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300">
              Privacy
            </Link>
            <Link to="/terms" className="font-body text-[0.85rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
    <aside className="lf-care-bar" aria-label="Little Fight NYC design and care credit"><a className="lf-care-bar__link" href="https://littlefightnyc.com/" rel="author"><img className="lf-care-bar__mark" src="/little-fight-care/mark-orange.svg" width="72" height="48" alt="" aria-hidden="true" /><span className="lf-care-bar__copy">Designed, Built and Cared For By</span><span className="lf-care-bar__wordmark">LittleFightNYC.com</span></a></aside>
    </>
  )
}
