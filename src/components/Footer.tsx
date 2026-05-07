import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useContext } from 'react'
import { BookingContext } from '../App'

export default function Footer() {
  const { openBooking } = useContext(BookingContext)

  return (
    <footer className="bg-[#111111] border-t border-[rgba(245,240,232,0.08)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,5vw,4rem)] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-display text-[1.25rem] tracking-[4px] uppercase text-[#F5F0E8]">
              Legacy
            </Link>
            <p className="font-body text-[0.9rem] text-[#A38F7B] leading-relaxed">
              Deep Ellum, Dallas, TX<br />
              Premium recording studio and artist development.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h4 className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Studio', href: '/studio' },
                { label: 'Services', href: '/services' },
                { label: 'Engineers', href: '/engineers' },
                { label: 'Contact', href: '/contact' },
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
            <h4 className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={openBooking}
                  className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                >
                  Recording
                </button>
              </li>
              <li>
                <button
                  onClick={openBooking}
                  className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                >
                  Mixing & Mastering
                </button>
              </li>
              <li>
                <button
                  onClick={openBooking}
                  className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                >
                  Full Package
                </button>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
                >
                  Artist Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#F5F0E8] font-medium">
              Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#A38F7B]">
                <MapPin size={14} />
                <span className="font-body text-[0.9rem]">Deep Ellum, Dallas, TX</span>
              </li>
              <li className="flex items-center gap-2 text-[#A38F7B]">
                <Phone size={14} />
                <span className="font-body text-[0.9rem]">(214) 555-0199</span>
              </li>
              <li className="flex items-center gap-2 text-[#A38F7B]">
                <Mail size={14} />
                <span className="font-body text-[0.9rem]">book@legacymusic.group</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(245,240,232,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.85rem] text-[#A38F7B]">
            © 2025 Legacy Music Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="font-body text-[0.85rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
