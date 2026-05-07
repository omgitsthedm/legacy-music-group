import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import { Play, ChevronLeft } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'

const engineers = [
  {
    id: '1',
    name: 'Marcus Cole',
    specialty: 'Hip-Hop, R&B',
    image: '/images/engineer-1.jpg',
    bio: 'Marcus Cole is a Grammy-nominated engineer and producer with over a decade of experience shaping the sound of Dallas hip-hop and R&B. His approach blends analog warmth with modern clarity, creating mixes that feel both timeless and contemporary. Marcus began his career interning at legendary studios in Los Angeles before returning to his hometown to build Legacy Music Group alongside fellow creators. His work has been featured on major streaming playlists, national radio, and even a Super Bowl commercial. Artists describe his sessions as transformative — he has a rare gift for making vocalists feel completely at ease while pushing them to deliver their best performance.',
    stats: { experience: '10+ Years', projects: '500+ Projects', highlight: 'Grammy Nominated' },
    genres: ['Hip-Hop', 'R&B', 'Trap Soul'],
    samples: [
      { title: 'Midnight in Deep Ellum', artist: 'Local Artist Mix', duration: '3:42' },
      { title: 'Caramel Skies', artist: 'R&B Session', duration: '4:15' },
      { title: 'Concrete Jungle', artist: 'Hip-Hop Beat', duration: '2:58' },
      { title: 'Late Night Drive', artist: 'Trap Soul Mix', duration: '3:30' },
    ],
  },
  {
    id: '2',
    name: 'Sofia Reyes',
    specialty: 'Pop, Electronic',
    image: '/images/engineer-2.jpg',
    bio: 'Sofia Reyes is a pop and electronic music specialist whose productions have collectively amassed over 50 million streams. Trained in both classical piano and electronic production, she brings a unique harmonic sensibility to modern pop music. Sofia has a particular talent for vocal production — comping, tuning, and layering vocals to create that polished, radio-ready sound. Her electronic productions are known for their dynamic range and emotional depth, often blending organic instrumentation with synthesized textures.',
    stats: { experience: '8+ Years', projects: '300+ Projects', highlight: '50M+ Streams' },
    genres: ['Pop', 'Electronic', 'Synthwave'],
    samples: [
      { title: 'Neon Dreams', artist: 'Pop Production', duration: '3:18' },
      { title: 'Pulse', artist: 'Electronic Mix', duration: '4:02' },
      { title: 'Glass Heart', artist: 'Pop Ballad', duration: '3:55' },
      { title: 'Digital Love', artist: 'Synthwave Track', duration: '3:22' },
    ],
  },
  {
    id: '3',
    name: 'David Byrne',
    specialty: 'Rock, Folk',
    image: '/images/engineer-3.jpg',
    bio: 'David Byrne has spent over 15 years recording and mixing for indie darlings and major label rock acts. His philosophy is simple: capture the performance, not the perfection. David specializes in live band recording, using minimal processing to preserve the raw energy of a group playing together in a room. His folk productions are renowned for their intimate, "sitting-right-next-to-you" quality. David also mentors younger engineers at Legacy, passing down the craft of analog signal flow and microphone technique.',
    stats: { experience: '15+ Years', projects: '700+ Projects', highlight: 'Multi-Platinum' },
    genres: ['Rock', 'Folk', 'Indie'],
    samples: [
      { title: 'Dust and Bones', artist: 'Rock Album Mix', duration: '4:10' },
      { title: 'Front Porch', artist: 'Folk Session', duration: '3:45' },
      { title: 'Amplifier', artist: 'Live Band Recording', duration: '3:58' },
      { title: 'Open Road', artist: 'Indie Production', duration: '4:22' },
    ],
  },
  {
    id: '4',
    name: 'Jade Williams',
    specialty: 'Hip-Hop, Soul',
    image: '/images/engineer-4.jpg',
    bio: 'Jade Williams is an artist-first engineer who believes every great recording starts with a great performance. Specializing in hip-hop and soul, Jade has an uncanny ability to connect with artists on a personal level, creating a studio environment where vulnerability and creativity can flourish. She cut her teeth engineering for local Dallas artists before quickly rising to work with touring acts passing through Deep Ellum. Her soul productions feature lush, warm tones that harken back to the golden age of R&B while maintaining contemporary punch.',
    stats: { experience: '6+ Years', projects: '200+ Projects', highlight: 'Rising Star' },
    genres: ['Hip-Hop', 'Soul', 'Neo-Soul'],
    samples: [
      { title: 'Soul Searching', artist: 'Neo-Soul Mix', duration: '4:05' },
      { title: 'Barz', artist: 'Hip-Hop Session', duration: '3:12' },
      { title: 'Golden Hour', artist: 'Soul Production', duration: '3:48' },
      { title: 'Freestyle Room', artist: 'Raw Session', duration: '2:45' },
    ],
  },
]

export default function EngineerProfile() {
  const { id } = useParams()
  const { openBooking } = useContext(BookingContext)
  const engineer = engineers.find((e) => e.id === id)

  if (!engineer) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <h1 className="font-display text-3xl text-[#F5F0E8]">Engineer not found</h1>
        <Link to="/engineers" className="mt-4 inline-block text-[#E8A33D] hover:underline">
          Back to all engineers
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Profile Hero */}
      <section className="pt-[clamp(3rem,6vw,5rem)] pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/engineers"
            className="inline-flex items-center gap-2 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 mb-8"
          >
            <ChevronLeft size={16} /> All Engineers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={engineer.image}
                  alt={engineer.name}
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[16/10]"
                />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  Engineer
                </span>
                <h1 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-2">
                  {engineer.name}
                </h1>
                <div className="flex flex-wrap gap-2 mt-4">
                  {engineer.genres.map((genre) => (
                    <span
                      key={genre}
                      className="font-body text-[0.8rem] text-[#A38F7B] bg-[#1A1A1A] border border-[rgba(245,240,232,0.1)] rounded-full px-3 py-1"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <button
                  onClick={openBooking}
                  className="mt-6 bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
                >
                  Book with {engineer.name.split(' ')[0]}
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bio & Stats */}
      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)] bg-[#0A0A0A]">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <h2 className="font-body text-[1.5rem] font-medium text-[#F5F0E8] mb-6">About</h2>
            <p className="font-body text-[1.05rem] text-[#A38F7B] leading-[1.7]">
              {engineer.bio}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 flex items-center justify-center gap-8 py-6 border-y border-[rgba(245,240,232,0.08)]">
              {Object.entries(engineer.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <p className="font-body text-[1.1rem] font-medium text-[#F5F0E8]">{value}</p>
                  <p className="font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B] mt-1">
                    {key === 'experience' ? 'Experience' : key === 'projects' ? 'Projects' : 'Highlight'}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sound Samples */}
      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <h2 className="font-body text-[1.5rem] font-medium text-[#F5F0E8] mb-8">Sound Samples</h2>
          </ScrollReveal>
          <div className="space-y-0">
            {engineer.samples.map((sample, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group flex items-center gap-4 py-4 border-b border-[rgba(245,240,232,0.08)] hover:bg-[rgba(245,240,232,0.03)] transition-colors duration-300 px-2 -mx-2 rounded-lg cursor-pointer">
                  <button className="w-10 h-10 rounded-full border border-[#A38F7B] flex items-center justify-center group-hover:border-[#E8A33D] group-hover:bg-[rgba(232,163,61,0.15)] transition-all duration-300">
                    <Play size={14} className="text-[#F5F0E8] ml-0.5" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[1rem] text-[#F5F0E8] truncate">{sample.title}</p>
                    <p className="font-body text-[0.85rem] text-[#A38F7B]">{sample.artist}</p>
                  </div>
                  <span className="font-body text-[0.85rem] text-[#A38F7B] shrink-0">{sample.duration}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
              Work with {engineer.name.split(' ')[0]}
            </h2>
            <button
              onClick={openBooking}
              className="mt-6 bg-[#E8A33D] text-[#0A0A0A] font-body text-[1rem] font-medium px-10 py-4 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
