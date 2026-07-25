import { useContext } from 'react'
import { Link } from 'react-router'
import { BookingContext } from '../lib/booking-context'
import { contact } from '../lib/data'

const primaryLinks = [
  { label: 'Studio', href: '/studio' },
  { label: 'Services', href: '/services' },
  { label: 'Engineers', href: '/engineers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Gear', href: '/gear' },
  { label: 'Journal', href: '/blog' },
  { label: 'Events', href: '/events' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const { openBooking } = useContext(BookingContext)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/15 bg-[#0b0c0d]">
      <div className="site-shell section-space">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <Link
              to="/"
              className="font-display text-[clamp(4rem,10vw,8.5rem)] font-semibold uppercase leading-[0.76] tracking-[-0.04em] text-[#f1f1ee] hover:text-[#E8A33D]"
            >
              Legacy
            </Link>
            <p className="mt-7 max-w-[42ch] text-base leading-7 text-[#b7bcc2]">
              Independent recording, production and artist development in Deep Ellum, Dallas.
            </p>
            <button type="button" onClick={openBooking} className="signal-button mt-8">
              Book a session
            </button>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="control-label mb-4">Visit</p>
              <address className="not-italic text-sm leading-7 text-[#f1f1ee]">
                <span className="block">{contact.addressLine1}</span>
                <span className="block">{contact.addressLine2}</span>
              </address>
              <p className="mt-3 text-sm text-[#b7bcc2]">{contact.hours}</p>
            </div>
            <div>
              <p className="control-label mb-4">Contact</p>
              <a
                href={`tel:${contact.phoneE164}`}
                className="block min-h-11 text-sm font-bold text-[#f1f1ee] hover:text-[#E8A33D]"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block min-h-11 break-all text-sm font-bold text-[#f1f1ee] hover:text-[#E8A33D]"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="mt-16 border-y border-white/15 py-6">
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold text-[#b7bcc2] hover:text-[#f1f1ee]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-7 flex flex-col justify-between gap-6 text-xs leading-5 text-[#8f969d] sm:flex-row">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© {year} Legacy Music Group</span>
            <Link to="/policies" className="hover:text-[#f1f1ee]">Policies</Link>
            <Link to="/privacy" className="hover:text-[#f1f1ee]">Privacy</Link>
            <Link to="/terms" className="hover:text-[#f1f1ee]">Terms</Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#f1f1ee]">Instagram</a>
            <a href={contact.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#f1f1ee]">YouTube</a>
            <a href="https://littlefightnyc.com" target="_blank" rel="noopener noreferrer" className="text-[#E8A33D] hover:text-[#f1f1ee]">
              Site by Little Fight NYC
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
