import { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { openBooking } = useContext(BookingContext)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Studio', href: '/studio' },
    { label: 'Services', href: '/services' },
    { label: 'Engineers', href: '/engineers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Journal', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + '/')

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[rgba(245,240,232,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1400px] h-full flex items-center justify-between px-[clamp(1.5rem,5vw,4rem)]">
          <Link
            to="/"
            className="font-display text-[1.25rem] tracking-[4px] uppercase text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300"
            aria-label="Legacy Music Group home"
          >
            Legacy
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-[0.78rem] uppercase tracking-[2px] transition-colors duration-300 ${
                  isActive(link.href) ? 'text-[#F5F0E8]' : 'text-[#A38F7B] hover:text-[#F5F0E8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openBooking}
              className="hidden sm:inline-flex items-center justify-center bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.85rem] font-medium px-6 py-2.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book Now
            </button>
            <button
              className="lg:hidden text-[#F5F0E8] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] transition-all duration-500 lg:hidden overflow-y-auto ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-full py-24 gap-6 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[2rem] text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300"
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-5 mt-2">
            <Link
              to="/faq"
              onClick={() => setMenuOpen(false)}
              className="font-body text-[0.85rem] uppercase tracking-[1.5px] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/gear"
              onClick={() => setMenuOpen(false)}
              className="font-body text-[0.85rem] uppercase tracking-[1.5px] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
            >
              Gear
            </Link>
            <Link
              to="/reviews"
              onClick={() => setMenuOpen(false)}
              className="font-body text-[0.85rem] uppercase tracking-[1.5px] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
            >
              Reviews
            </Link>
          </div>
          <button
            onClick={() => {
              setMenuOpen(false)
              openBooking()
            }}
            className="mt-3 bg-[#E8A33D] text-[#0A0A0A] font-body text-[1rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  )
}
