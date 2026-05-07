import { useContext } from 'react'
import { Mic, Sliders, Star, Check, ChevronRight } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    icon: Mic,
    title: 'Recording',
    body: 'Our recording rooms are acoustically designed and equipped with industry-standard microphones, preamps, and converters. Whether you are tracking vocals, instruments, or a full band, we provide the environment and expertise to capture your best performance.',
    features: ['Vocal tracking', 'Instrument recording', 'Full band sessions', 'Pro Tools & Logic Pro'],
    image: '/images/studio-vocal-booth.jpg',
  },
  {
    icon: Sliders,
    title: 'Mixing & Mastering',
    body: 'Take your raw recordings to radio-ready quality. Our engineers use a hybrid analog-digital workflow to give your tracks depth, clarity, and competitive loudness. Every mix is treated as a unique creative project.',
    features: ['Analog summing', 'Stem mixing', 'Mastering for streaming', 'Revision rounds included'],
    image: '/images/studio-control-room.jpg',
  },
  {
    icon: Star,
    title: 'Full Package',
    body: 'The complete artist experience. Our Full Package includes a recording session, professional mixing and mastering, plus 3 promotional content clips for social media. Everything you need to release your next single with confidence.',
    features: ['Recording session', 'Mixing & mastering', '3 promo clips', 'Release strategy consult'],
    image: '/images/studio-live-room.jpg',
  },
]

const pricing = [
  { service: 'Hourly Recording', withEngineer: '$75/hr', withoutEngineer: '$45/hr' },
  { service: '4-Hour Block', withEngineer: '$280', withoutEngineer: '$170' },
  { service: '8-Hour Day', withEngineer: '$520', withoutEngineer: '$320' },
  { service: 'Mixing & Mastering', withEngineer: '$150/song', withoutEngineer: '$150/song' },
  { service: 'Full Package', withEngineer: '$500', withoutEngineer: 'N/A' },
]

export default function ServicesPage() {
  const { openBooking } = useContext(BookingContext)

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              What We Do
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Studio Services
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1000px] space-y-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className={`bg-[#111111] rounded-xl overflow-hidden border border-[rgba(245,240,232,0.08)] flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:h-full"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mb-6">
                    <service.icon size={24} className="text-[#E8A33D]" />
                  </div>
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] text-[#F5F0E8] mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7] mb-6">
                    {service.body}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={16} className="text-[#4A7C59] shrink-0" />
                        <span className="font-body text-[0.95rem] text-[#F5F0E8]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openBooking}
                    className="inline-flex items-center gap-1 font-body text-[0.95rem] text-[#E8A33D] hover:gap-2 transition-all duration-300 self-start"
                  >
                    Book This Service <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#F5F0E8]">
              Session Rates
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1A1A1A] px-6 py-4">
                <span className="font-body text-[0.8rem] uppercase tracking-[1px] text-[#A38F7B]">Service</span>
                <span className="font-body text-[0.8rem] uppercase tracking-[1px] text-[#A38F7B] text-center">With Engineer</span>
                <span className="font-body text-[0.8rem] uppercase tracking-[1px] text-[#A38F7B] text-center">Without Engineer</span>
              </div>
              {pricing.map((row, i) => (
                <div
                  key={row.service}
                  className={`grid grid-cols-3 px-6 py-4 items-center ${
                    i < pricing.length - 1 ? 'border-b border-[rgba(245,240,232,0.05)]' : ''
                  }`}
                >
                  <span className="font-body text-[0.95rem] text-[#A38F7B]">{row.service}</span>
                  <span className="font-body text-[0.95rem] text-[#F5F0E8] font-medium text-center">{row.withEngineer}</span>
                  <span className="font-body text-[0.95rem] text-[#F5F0E8] font-medium text-center">{row.withoutEngineer}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-8 text-center">
            <button
              onClick={openBooking}
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
