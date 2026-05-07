import { useContext, useState, useRef, useEffect } from 'react'
import { X, ChevronRight, Headphones, User, Sliders, Package, Check } from 'lucide-react'
import { BookingContext } from '../App'
import { Calendar } from '@/components/ui/calendar'

const engineers = [
  { id: '1', name: 'Marcus Cole', specialty: 'Hip-Hop, R&B', image: '/images/engineer-1.jpg' },
  { id: '2', name: 'Sofia Reyes', specialty: 'Pop, Electronic', image: '/images/engineer-2.jpg' },
  { id: '3', name: 'David Byrne', specialty: 'Rock, Folk', image: '/images/engineer-3.jpg' },
  { id: '4', name: 'Jade Williams', specialty: 'Hip-Hop, Soul', image: '/images/engineer-4.jpg' },
]

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM',
]

const disabledSlots = ['12:00 PM', '3:00 PM', '6:00 PM']

export default function BookingModal() {
  const { isOpen, setIsOpen } = useContext(BookingContext)
  const [step, setStep] = useState(1)
  const [sessionType, setSessionType] = useState<'with' | 'without' | null>(null)
  const [addons, setAddons] = useState<string[]>([])
  const [selectedEngineer, setSelectedEngineer] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const totalSteps = sessionType === 'with' ? 4 : 3

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      setStep(1)
      setSessionType(null)
      setAddons([])
      setSelectedEngineer(null)
      setSelectedDate(new Date())
      setSelectedTime(null)
      setConfirmed(false)
    }, 300)
  }

  const handleNext = () => {
    if (step === 1 && !sessionType) return
    if (step === 3 && sessionType === 'with' && !selectedEngineer) return
    if (step === totalSteps && !selectedTime) return

    if (step === totalSteps) {
      setConfirmed(true)
      return
    }

    if (step === 1 && sessionType === 'without') {
      setStep(3)
    } else {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step === 3 && sessionType === 'without') {
      setStep(1)
    } else {
      setStep(step - 1)
    }
  }

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[600px] bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(245,240,232,0.08)]">
          <div className="flex items-center gap-3">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#A38F7B]">
              Step {confirmed ? totalSteps : step} of {totalSteps}
            </span>
            {!confirmed && (
              <div className="flex items-center gap-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-1 rounded-full transition-colors duration-300 ${
                      i < step ? 'bg-[#E8A33D]' : 'bg-[rgba(245,240,232,0.15)]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          <button
            onClick={handleClose}
            className="text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div ref={contentRef} className="px-6 py-6 min-h-[380px]">
          {confirmed ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 rounded-full bg-[rgba(74,124,89,0.2)] flex items-center justify-center mb-6">
                <Check size={32} className="text-[#4A7C59]" />
              </div>
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-3">Booking Confirmed</h3>
              <p className="font-body text-[0.95rem] text-[#A38F7B] max-w-[350px] mb-6">
                Your session is booked for {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}. We've sent a confirmation to your email.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.9rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-200">
              {/* Step 1: Session Type */}
              {step === 1 && (
                <div>
                  <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Choose your session type</h3>
                  <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Select the option that fits your experience level.</p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSessionType('with')}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                        sessionType === 'with'
                          ? 'border-[#E8A33D] bg-[rgba(232,163,61,0.15)]'
                          : 'border-[rgba(245,240,232,0.08)] bg-[#111111] hover:border-[rgba(245,240,232,0.2)]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        sessionType === 'with' ? 'bg-[#E8A33D] text-[#0A0A0A]' : 'bg-[#1A1A1A] text-[#A38F7B]'
                      }`}>
                        <Headphones size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-body text-[1rem] font-medium text-[#F5F0E8]">With Engineer</h4>
                          <span className="font-body text-[0.85rem] text-[#E8A33D] font-medium">From $75/hr</span>
                        </div>
                        <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Guided session with a pro engineer. Recommended for most artists.</p>
                      </div>
                    </button>

                    <button
                      onClick={() => setSessionType('without')}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                        sessionType === 'without'
                          ? 'border-[#E8A33D] bg-[rgba(232,163,61,0.15)]'
                          : 'border-[rgba(245,240,232,0.08)] bg-[#111111] hover:border-[rgba(245,240,232,0.2)]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        sessionType === 'without' ? 'bg-[#E8A33D] text-[#0A0A0A]' : 'bg-[#1A1A1A] text-[#A38F7B]'
                      }`}>
                        <User size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-body text-[1rem] font-medium text-[#F5F0E8]">Without Engineer</h4>
                          <span className="font-body text-[0.85rem] text-[#E8A33D] font-medium">From $45/hr</span>
                        </div>
                        <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Self-service session. You run the board. For experienced artists.</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Add-ons */}
              {step === 2 && (
                <div>
                  <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Enhance your session</h3>
                  <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Add professional finishing touches to your recording.</p>
                  <div className="space-y-3">
                    <button
                      onClick={() => toggleAddon('mixing')}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                        addons.includes('mixing')
                          ? 'border-[#E8A33D] bg-[rgba(232,163,61,0.15)]'
                          : 'border-[rgba(245,240,232,0.08)] bg-[#111111] hover:border-[rgba(245,240,232,0.2)]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        addons.includes('mixing') ? 'bg-[#E8A33D] text-[#0A0A0A]' : 'bg-[#1A1A1A] text-[#A38F7B]'
                      }`}>
                        <Sliders size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-body text-[1rem] font-medium text-[#F5F0E8]">Mixing & Mastering</h4>
                          <span className="font-body text-[0.85rem] text-[#E8A33D] font-medium">+$150</span>
                        </div>
                        <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Add professional mix and master to your session.</p>
                      </div>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-1 ${
                        addons.includes('mixing') ? 'bg-[#E8A33D] border-[#E8A33D]' : 'border-[rgba(245,240,232,0.3)]'
                      }`}>
                        {addons.includes('mixing') && <Check size={12} className="text-[#0A0A0A]" />}
                      </div>
                    </button>

                    <button
                      onClick={() => toggleAddon('full')}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                        addons.includes('full')
                          ? 'border-[#E8A33D] bg-[rgba(232,163,61,0.15)]'
                          : 'border-[rgba(245,240,232,0.08)] bg-[#111111] hover:border-[rgba(245,240,232,0.2)]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        addons.includes('full') ? 'bg-[#E8A33D] text-[#0A0A0A]' : 'bg-[#1A1A1A] text-[#A38F7B]'
                      }`}>
                        <Package size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-body text-[1rem] font-medium text-[#F5F0E8]">Full Package</h4>
                          <span className="font-body text-[0.85rem] text-[#E8A33D] font-medium">+$300</span>
                        </div>
                        <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Includes mixing, mastering, and 3 promotional content clips.</p>
                      </div>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-1 ${
                        addons.includes('full') ? 'bg-[#E8A33D] border-[#E8A33D]' : 'border-[rgba(245,240,232,0.3)]'
                      }`}>
                        {addons.includes('full') && <Check size={12} className="text-[#0A0A0A]" />}
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Engineer Selection */}
              {step === 3 && sessionType === 'with' && (
                <div>
                  <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Choose your engineer</h3>
                  <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Select the engineer that matches your style.</p>
                  <div className="space-y-2">
                    {engineers.map((eng) => (
                      <button
                        key={eng.id}
                        onClick={() => setSelectedEngineer(eng.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                          selectedEngineer === eng.id
                            ? 'border-l-[3px] border-l-[#E8A33D] border-t-[rgba(245,240,232,0.08)] border-r-[rgba(245,240,232,0.08)] border-b-[rgba(245,240,232,0.08)] bg-[rgba(232,163,61,0.08)]'
                            : 'border-[rgba(245,240,232,0.08)] bg-[#111111] hover:border-[rgba(245,240,232,0.2)]'
                        }`}
                      >
                        <img
                          src={eng.image}
                          alt={eng.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-body text-[0.95rem] font-medium text-[#F5F0E8]">{eng.name}</h4>
                          <p className="font-body text-[0.8rem] text-[#E8A33D] uppercase tracking-[1px]">{eng.specialty}</p>
                        </div>
                        <ChevronRight size={16} className="text-[#A38F7B]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Time Selection (or Step 3 if without engineer) */}
              {(step === 4 || (step === 3 && sessionType === 'without')) && (
                <div>
                  <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Pick a time</h3>
                  <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Select your preferred date and time slot.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="bg-[#111111] rounded-xl border border-[rgba(245,240,232,0.08)] p-3"
                        disabled={(date) => date < new Date()}
                      />
                    </div>
                    <div>
                      <h4 className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#A38F7B] mb-3">
                        Available Slots
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((slot) => {
                          const isDisabled = disabledSlots.includes(slot)
                          const isSelected = selectedTime === slot
                          return (
                            <button
                              key={slot}
                              disabled={isDisabled}
                              onClick={() => setSelectedTime(slot)}
                              className={`font-body text-[0.85rem] py-2.5 px-3 rounded-full border transition-all duration-300 ${
                                isSelected
                                  ? 'bg-[#E8A33D] text-[#0A0A0A] border-[#E8A33D]'
                                  : isDisabled
                                  ? 'text-[rgba(163,143,123,0.4)] border-[rgba(245,240,232,0.05)] line-through cursor-not-allowed'
                                  : 'text-[#F5F0E8] border-[rgba(245,240,232,0.2)] hover:border-[#E8A33D] hover:text-[#E8A33D]'
                              }`}
                            >
                              {slot}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {!confirmed && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(245,240,232,0.08)]">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`font-body text-[0.9rem] transition-colors duration-300 ${
                step === 1 ? 'text-[rgba(163,143,123,0.4)] cursor-not-allowed' : 'text-[#A38F7B] hover:text-[#F5F0E8]'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !sessionType) ||
                (step === 3 && sessionType === 'with' && !selectedEngineer) ||
                (step === totalSteps && !selectedTime)
              }
              className={`font-body text-[0.9rem] font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
                (step === 1 && !sessionType) ||
                (step === 3 && sessionType === 'with' && !selectedEngineer) ||
                (step === totalSteps && !selectedTime)
                  ? 'bg-[rgba(232,163,61,0.3)] text-[rgba(10,10,10,0.5)] cursor-not-allowed'
                  : 'bg-[#E8A33D] text-[#0A0A0A] hover:bg-[#D4873C] hover:scale-[1.02]'
              }`}
            >
              {step === totalSteps ? 'Confirm Booking' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
