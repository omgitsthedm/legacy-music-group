import { useContext } from 'react'
import { Headphones, User, ChevronRight } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from './ScrollReveal'

/**
 * Homepage immediate fast-booking preview (BRIEF §14).
 * Shows the user how easy booking is — two clear paths, one click to launch the modal.
 */
export default function Quickbook() {
  const { openBooking } = useContext(BookingContext)

  const paths = [
    {
      icon: Headphones,
      title: 'Book a session with an engineer',
      body: 'Guided session, pro engineer at the board.',
      price: 'From $75/hr',
    },
    {
      icon: User,
      title: 'Book studio time on your own',
      body: 'You run the room. For experienced artists.',
      price: 'From $45/hr',
    },
  ]

  return (
    <section className="relative px-[clamp(1.5rem,5vw,4rem)] -mt-12 sm:-mt-20 z-20">
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal>
          <div className="bg-[rgba(17,17,17,0.92)] backdrop-blur-xl border border-[rgba(245,240,232,0.1)] rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  Fast booking
                </p>
                <h2 className="font-body text-[1.05rem] sm:text-[1.15rem] font-medium text-[#F5F0E8] mt-1">
                  Pick a path. We take it from here.
                </h2>
              </div>
              <span className="hidden sm:inline-flex font-body text-[0.75rem] text-[#A38F7B] uppercase tracking-[1px]">
                ~30 seconds
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {paths.map((path) => (
                <button
                  key={path.title}
                  onClick={openBooking}
                  className="group text-left bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-4 sm:p-5 hover:border-[rgba(232,163,61,0.4)] hover:bg-[#111111] transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center shrink-0 group-hover:bg-[#E8A33D] transition-colors duration-300">
                    <path.icon
                      size={18}
                      className="text-[#E8A33D] group-hover:text-[#0A0A0A] transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body text-[0.95rem] font-medium text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                      {path.title}
                    </h3>
                    <p className="font-body text-[0.85rem] text-[#A38F7B] mt-0.5">{path.body}</p>
                    <p className="font-body text-[0.8rem] text-[#E8A33D] mt-2 font-medium">
                      {path.price}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-[#A38F7B] group-hover:text-[#E8A33D] group-hover:translate-x-1 transition-all duration-300 mt-3"
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
