import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-20">
      {/* Contact Form */}
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[600px]">
          <ScrollReveal className="text-center mb-10">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Get in Touch
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Let's talk about your project.
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4">
              Not ready to book? Send us a message and we'll get back to you within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {submitted ? (
              <div className="text-center py-12 bg-[#111111] rounded-xl border border-[rgba(245,240,232,0.08)]">
                <div className="w-16 h-16 rounded-full bg-[rgba(74,124,89,0.2)] flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-[#4A7C59]" />
                </div>
                <h3 className="font-display text-2xl text-[#F5F0E8] mb-3">Message Sent</h3>
                <p className="font-body text-[0.95rem] text-[#A38F7B]">
                  Thanks for reaching out. We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-body text-[0.8rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3.5 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-body text-[0.8rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3.5 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-[0.8rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3.5 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                    placeholder="(214) 555-0199"
                  />
                </div>
                <div>
                  <label className="block font-body text-[0.8rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[#111111] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3.5 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E8A33D] text-[#0A0A0A] font-body text-[1rem] font-medium px-6 py-4 rounded-lg hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[800px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <MapPin size={20} className="text-[#E8A33D]" />
                </div>
                <p className="font-body text-[0.95rem] text-[#F5F0E8] font-medium">Deep Ellum</p>
                <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Dallas, TX 75226</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <Phone size={20} className="text-[#E8A33D]" />
                </div>
                <p className="font-body text-[0.95rem] text-[#F5F0E8] font-medium">(214) 555-0199</p>
                <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Mon–Sat, 10am–10pm</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <Mail size={20} className="text-[#E8A33D]" />
                </div>
                <p className="font-body text-[0.95rem] text-[#F5F0E8] font-medium">book@legacymusic.group</p>
                <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">We reply within 24hrs</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
