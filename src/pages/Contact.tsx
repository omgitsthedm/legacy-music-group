import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import CallbackForm from '../components/CallbackForm'
import NewsletterSignup from '../components/NewsletterSignup'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { contact } from '../lib/data'
import { buildBreadcrumbSchema } from '../lib/schemas'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' })

  // PLACEHOLDER ACTION: form submit no-ops; needs Resend / Netlify Forms wiring.
  // See PLACEHOLDERS.md §Lead capture.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useSeo({
    title: 'Contact',
    description:
      'Get in touch with Legacy Music Group — phone, email, contact form, or callback request. Deep Ellum recording studio in Dallas, TX.',
    path: '/contact',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="contact-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal className="text-center">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Get in Touch
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Let's talk about your project.
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4">
              Not ready to book? Send a message, request a callback, or call us direct.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Long form contact */}
            <ScrollReveal>
              {submitted ? (
                <div className="text-center py-12 bg-[#111111] rounded-xl border border-[rgba(245,240,232,0.08)] h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[rgba(74,124,89,0.2)] flex items-center justify-center mb-6">
                    <Check size={32} className="text-[#4A7C59]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#F5F0E8] mb-3">Message Sent</h3>
                  <p className="font-body text-[0.95rem] text-[#A38F7B] max-w-[400px]">
                    Thanks for reaching out. We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-7 space-y-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#E8A33D]" />
                    </div>
                    <div>
                      <h2 className="font-body text-[1.05rem] font-medium text-[#F5F0E8]">Send a Message</h2>
                      <p className="font-body text-[0.85rem] text-[#A38F7B]">
                        We reply within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                      placeholder="(214) 555-0199"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                      I'm interested in
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select...</option>
                      <option value="recording">Recording</option>
                      <option value="mixing">Mixing & Mastering</option>
                      <option value="full">Full Package</option>
                      <option value="development">Artist Development</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-6 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Callback option */}
            <ScrollReveal delay={100}>
              <CallbackForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[800px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <MapPin size={20} className="text-[#E8A33D]" />
                </div>
                <p className="font-body text-[0.95rem] text-[#F5F0E8] font-medium">{contact.addressLine1}</p>
                <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">{contact.addressLine2}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <Phone size={20} className="text-[#E8A33D]" />
                </div>
                <a
                  href={`tel:${contact.phoneE164}`}
                  className="font-body text-[0.95rem] text-[#F5F0E8] font-medium hover:text-[#E8A33D] transition-colors duration-300"
                >
                  {contact.phone}
                </a>
                <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">{contact.hours}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <Mail size={20} className="text-[#E8A33D]" />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-body text-[0.95rem] text-[#F5F0E8] font-medium hover:text-[#E8A33D] transition-colors duration-300 break-all"
                >
                  {contact.email}
                </a>
                <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">{contact.responseTime}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <NewsletterSignup label="Join the Artist List" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
