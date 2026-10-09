import { Headphones, ChevronRight } from 'lucide-react'
import { BOOKING_HANDOFF_URL } from '../lib/handoff'
import ScrollReveal from './ScrollReveal'

/**
 * A transparent handoff to Legacy's currently verified booking site.
 * This property does not show availability or retain booking details.
 */
export default function Quickbook() {
  return (
    <section className="relative px-[clamp(1.5rem,5vw,4rem)] -mt-12 sm:-mt-20 z-20">
      <div className="mx-auto max-w-[900px]">
        <ScrollReveal>
          <div className="bg-[rgba(17,17,17,0.92)] backdrop-blur-xl border border-[rgba(245,240,232,0.1)] rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  Studio booking
                </p>
                <h2 className="font-body text-[1.05rem] sm:text-[1.15rem] font-medium text-[#F5F0E8] mt-1">
                  Continue to Legacy&apos;s current booking page.
                </h2>
              </div>
              <Headphones size={20} className="text-[#E8A33D] shrink-0" aria-hidden="true" />
            </div>
            <a
              href={BOOKING_HANDOFF_URL}
              className="group flex items-center gap-4 rounded-xl bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] p-4 sm:p-5 hover:border-[rgba(232,163,61,0.4)] hover:bg-[#111111] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center shrink-0">
                <Headphones size={18} className="text-[#E8A33D]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-body text-[0.95rem] font-medium text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                  Book through Legacy Music Group
                </h3>
                <p className="font-body text-[0.85rem] text-[#A38F7B] mt-0.5">
                  Opens the studio&apos;s current booking page in this tab.
                </p>
              </div>
              <ChevronRight size={16} className="text-[#A38F7B] group-hover:text-[#E8A33D] group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
