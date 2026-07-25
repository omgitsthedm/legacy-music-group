import { useContext, useMemo, useState } from 'react'
import { Headphones, Mic2, SlidersHorizontal } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'

const durations = [2, 4, 8] as const
const waveform = [34, 58, 43, 78, 92, 50, 66, 38, 84, 62, 46, 73, 56, 88, 40, 68]

export default function SessionBuilder() {
  const { openBooking } = useContext(BookingContext)
  const [mode, setMode] = useState<'engineer' | 'room'>('engineer')
  const [hours, setHours] = useState<(typeof durations)[number]>(2)
  const [finishing, setFinishing] = useState(false)

  const estimate = useMemo(() => {
    const hourlyRate = mode === 'engineer' ? 75 : 45
    return hourlyRate * hours + (finishing ? 150 : 0)
  }, [finishing, hours, mode])

  return (
    <section className="section-space" aria-labelledby="build-session-heading">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="max-w-xl self-start lg:sticky lg:top-28">
          <p className="control-label mb-5">Session builder</p>
          <h2
            id="build-session-heading"
            className="font-display text-[clamp(3.1rem,7vw,6.6rem)] font-semibold uppercase leading-[0.82] tracking-[-0.035em] text-[#f1f1ee]"
          >
            Price the room before you call.
          </h2>
          <p className="mt-7 max-w-[48ch] text-base leading-7 text-[#b7bcc2]">
            Start with the published rates. Pick the room, time and finish level, then send the studio a clean session brief.
          </p>
        </div>

        <div className="console-panel overflow-hidden">
          <div className="border-b border-white/15 px-5 py-4 sm:px-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <SlidersHorizontal aria-hidden="true" className="text-[#E8A33D]" size={18} strokeWidth={1.7} />
                <span className="control-label text-[#f1f1ee]">Build your signal chain</span>
              </div>
              <span className="font-control text-xs text-[#b7bcc2]">2 hour minimum</span>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
            <div className="border-b border-white/15 p-5 sm:p-7 md:border-b-0 md:border-r">
              <fieldset>
                <legend className="control-label mb-4">Room setup</legend>
                <div className="grid gap-2" role="group" aria-label="Room setup">
                  <button
                    type="button"
                    aria-pressed={mode === 'engineer'}
                    onClick={() => setMode('engineer')}
                    className={`flex min-h-16 items-center justify-between border px-4 text-left transition-colors ${
                      mode === 'engineer'
                        ? 'border-[#E8A33D] bg-[#E8A33D]/10 text-[#f1f1ee]'
                        : 'border-white/15 bg-[#0b0c0d] text-[#b7bcc2] hover:border-white/35'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Headphones aria-hidden="true" size={18} strokeWidth={1.7} />
                      <span className="font-medium">With engineer</span>
                    </span>
                    <span className="font-control text-sm">$75/hr</span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={mode === 'room'}
                    onClick={() => setMode('room')}
                    className={`flex min-h-16 items-center justify-between border px-4 text-left transition-colors ${
                      mode === 'room'
                        ? 'border-[#E8A33D] bg-[#E8A33D]/10 text-[#f1f1ee]'
                        : 'border-white/15 bg-[#0b0c0d] text-[#b7bcc2] hover:border-white/35'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Mic2 aria-hidden="true" size={18} strokeWidth={1.7} />
                      <span className="font-medium">Room only</span>
                    </span>
                    <span className="font-control text-sm">$45/hr</span>
                  </button>
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="control-label mb-4">Session length</legend>
                <div className="grid grid-cols-3 gap-2" role="group" aria-label="Session length">
                  {durations.map((duration) => (
                    <button
                      key={duration}
                      type="button"
                      aria-pressed={hours === duration}
                      onClick={() => setHours(duration)}
                      className={`min-h-12 border font-control text-sm transition-colors ${
                        hours === duration
                          ? 'border-[#E8A33D] bg-[#E8A33D] font-bold text-[#0b0c0d]'
                          : 'border-white/15 bg-[#0b0c0d] text-[#b7bcc2] hover:border-white/35'
                      }`}
                    >
                      {duration} hr
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="mt-7 flex cursor-pointer items-start gap-3 border border-white/15 bg-[#0b0c0d] p-4 hover:border-white/35">
                <input
                  type="checkbox"
                  checked={finishing}
                  onChange={(event) => setFinishing(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#E8A33D]"
                />
                <span className="flex-1">
                  <span className="block font-medium text-[#f1f1ee]">Mixing and mastering</span>
                  <span className="mt-1 block text-sm leading-6 text-[#b7bcc2]">
                    Add the published finishing rate for one song.
                  </span>
                </span>
                <span className="font-control text-sm text-[#f1f1ee]">+$150</span>
              </label>
            </div>

            <div className="flex min-h-[31rem] flex-col justify-between bg-[#0e1012] p-5 sm:p-7">
              <div>
                <p className="control-label mb-5">Signal preview</p>
                <div
                  className="flex h-32 items-center gap-[5px] border-y border-white/15 py-5"
                  aria-hidden="true"
                >
                  {waveform.map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className={`block min-w-0 flex-1 bg-[#E8A33D] ${
                        finishing ? 'opacity-100' : index % 3 === 0 ? 'opacity-45' : 'opacity-75'
                      }`}
                      style={{ height: `${finishing ? Math.min(height + 8, 100) : height}%` }}
                    />
                  ))}
                </div>

                <dl className="mt-7 grid gap-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-[#b7bcc2]">Setup</dt>
                    <dd className="text-right text-sm font-semibold text-[#f1f1ee]">
                      {mode === 'engineer' ? 'Engineer-led session' : 'Self-service room'}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-[#b7bcc2]">Time</dt>
                    <dd className="font-control text-sm text-[#f1f1ee]">{hours} hours</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-[#b7bcc2]">Finish</dt>
                    <dd className="text-right text-sm font-semibold text-[#f1f1ee]">
                      {finishing ? 'Mix and master' : 'Tracking only'}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 border-t border-white/15 pt-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="control-label mb-2">Starting estimate</p>
                    <p className="font-display text-6xl font-semibold leading-none text-[#f1f1ee]">
                      ${estimate}
                    </p>
                  </div>
                  <span className="font-control text-xs text-[#b7bcc2]">before deposit</span>
                </div>
                <button type="button" onClick={openBooking} className="signal-button mt-6 w-full">
                  Continue booking
                </button>
                <p className="mt-4 text-xs leading-5 text-[#8f969d]">
                  Estimate uses published starting rates. The studio confirms availability, deposit and final scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
