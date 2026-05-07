import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const engineers = [
  {
    id: '1',
    name: 'Marcus Cole',
    specialty: 'Hip-Hop, R&B',
    bio: 'A veteran of the Dallas music scene, Marcus has worked with Grammy-nominated artists and brings a signature warmth to every mix.',
    image: '/images/engineer-1.jpg',
  },
  {
    id: '2',
    name: 'Sofia Reyes',
    specialty: 'Pop, Electronic',
    bio: 'Sofia combines technical precision with creative intuition. Her pop and electronic productions have garnered millions of streams.',
    image: '/images/engineer-2.jpg',
  },
  {
    id: '3',
    name: 'David Byrne',
    specialty: 'Rock, Folk',
    bio: 'With over 15 years in the industry, David has recorded and mixed for indie darlings and major label acts alike.',
    image: '/images/engineer-3.jpg',
  },
  {
    id: '4',
    name: 'Jade Williams',
    specialty: 'Hip-Hop, Soul',
    bio: 'Jade is an artist-first engineer who specializes in capturing raw, emotional vocal performances for hip-hop and soul artists.',
    image: '/images/engineer-4.jpg',
  },
]

export default function Engineers() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              The Team
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Meet the Engineers
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 max-w-[600px] leading-[1.7]">
              Our team of producers and engineers bring decades of combined experience across every major genre.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Engineer Grid */}
      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((eng, i) => (
              <ScrollReveal key={eng.id} delay={i * 100}>
                <Link
                  to={`/engineers/${eng.id}`}
                  className="group block bg-[#111111] rounded-xl overflow-hidden border border-[rgba(245,240,232,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={eng.image}
                      alt={eng.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
                      {eng.name}
                    </h3>
                    <p className="font-body text-[0.85rem] text-[#E8A33D] uppercase tracking-[1px] mt-1">
                      {eng.specialty}
                    </p>
                    <p className="font-body text-[0.9rem] text-[#A38F7B] mt-3 leading-[1.6] line-clamp-2">
                      {eng.bio}
                    </p>
                    <span className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#F5F0E8] mt-4 group-hover:text-[#E8A33D] transition-colors duration-300">
                      View Profile <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
