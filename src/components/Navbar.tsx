import { useContext, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { BookingContext } from '../lib/booking-context'

const navLinks = [
  { label: 'Studio', href: '/studio' },
  { label: 'Services', href: '/services' },
  { label: 'Engineers', href: '/engineers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const { openBooking } = useContext(BookingContext)

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(`${href}/`)

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    const menuButton = menuButtonRef.current
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      )
      const first = focusable[0]
      const last = focusable.at(-1)
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const backgroundRegions = [
      document.getElementById('site-navigation-bar'),
      document.getElementById('main-content'),
      document.querySelector<HTMLElement>('footer'),
    ].filter((region): region is HTMLElement => Boolean(region))

    for (const region of backgroundRegions) {
      region.setAttribute('aria-hidden', 'true')
      region.inert = true
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    requestAnimationFrame(() => closeButtonRef.current?.focus())

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      for (const region of backgroundRegions) {
        region.removeAttribute('aria-hidden')
        region.inert = false
      }
      menuButton?.focus()
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="site-navigation-bar" className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/15 bg-[#0b0c0d]/95 backdrop-blur-md">
        <div className="site-shell flex h-full items-center justify-between gap-6">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-3 text-[#f1f1ee] hover:text-[#E8A33D]"
          >
            <span className="font-display text-2xl font-semibold uppercase tracking-[0.1em]">Legacy</span>
            <span className="hidden border-l border-white/20 pl-3 font-control text-[0.62rem] uppercase leading-4 tracking-[0.12em] text-[#b7bcc2] sm:block">
              Music<br />Group
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex min-h-11 items-center border-b text-[0.74rem] font-bold uppercase tracking-[0.08em] transition-colors ${
                  isActive(link.href)
                    ? 'border-[#E8A33D] text-[#f1f1ee]'
                    : 'border-transparent text-[#b7bcc2] hover:text-[#f1f1ee]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={openBooking}
              className="signal-button hidden sm:inline-flex"
            >
              Book a session
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-[#f1f1ee] lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu aria-hidden="true" size={22} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={dialogRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[60] bg-[#0b0c0d]"
        >
          <div className="site-shell flex h-20 items-center justify-between border-b border-white/15">
            <span className="font-display text-2xl font-semibold uppercase tracking-[0.1em] text-[#f1f1ee]">
              Legacy
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-[#f1f1ee]"
              aria-label="Close navigation"
            >
              <X aria-hidden="true" size={22} strokeWidth={1.7} />
            </button>
          </div>

          <div className="site-shell flex min-h-[calc(100dvh-5rem)] flex-col justify-between py-8">
            <div className="grid">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={closeMenu}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className="border-b border-white/15 py-3 font-display text-[clamp(2.8rem,14vw,5rem)] font-medium uppercase leading-none text-[#f1f1ee] hover:text-[#E8A33D]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/15 pt-6">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#b7bcc2]">
                <Link to="/gear" onClick={closeMenu} className="hover:text-[#f1f1ee]">Gear</Link>
                <Link to="/reviews" onClick={closeMenu} className="hover:text-[#f1f1ee]">Reviews</Link>
                <Link to="/events" onClick={closeMenu} className="hover:text-[#f1f1ee]">Events</Link>
                <Link to="/faq" onClick={closeMenu} className="hover:text-[#f1f1ee]">FAQ</Link>
              </div>
              <button
                type="button"
                onClick={() => {
                  closeMenu()
                  openBooking()
                }}
                className="signal-button mt-2 w-full"
              >
                Book a session
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
