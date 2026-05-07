/**
 * Calendly availability proxy.
 *
 * Fetches real available time slots for a given Calendly event type from
 * Calendly's REST API and returns them to our client. The Calendly Personal
 * Access Token (PAT) is read from `CALENDLY_PAT` env var on Netlify and never
 * leaves the function — the client only ever sees the slot list.
 *
 * Falls back to a deterministic mock response when CALENDLY_PAT is not set,
 * so design-preview deploys still demo a working picker.
 *
 * GET /api/calendly-availability
 *   ?eventTypeUri=https://api.calendly.com/event_types/{UUID}
 *   &start=2026-05-07T00:00:00Z
 *   &end=2026-05-14T00:00:00Z
 *
 * Response shape (matches Calendly's collection shape, simplified):
 *   {
 *     slots: [
 *       {
 *         start: "2026-05-07T15:00:00.000000Z",
 *         end:   "2026-05-07T16:00:00.000000Z",
 *         schedulingUrl: "https://calendly.com/.../2026-05-07T10:00:00-05:00"
 *       },
 *       ...
 *     ],
 *     mock: false
 *   }
 *
 * See PLACEHOLDERS.md §Calendly for swap-out instructions.
 */

import type { Handler } from '@netlify/functions'

interface CalendlySlot {
  status: string
  start_time: string
  end_time: string
  scheduling_url: string
}

interface CalendlyResponse {
  collection: CalendlySlot[]
}

const CALENDLY_API = 'https://api.calendly.com'
const MAX_RANGE_DAYS = 7 // Calendly limits to 7-day windows per request

const handler: Handler = async (event) => {
  const eventTypeUri = event.queryStringParameters?.eventTypeUri
  const start = event.queryStringParameters?.start
  const end = event.queryStringParameters?.end

  if (!eventTypeUri || !start || !end) {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'Missing eventTypeUri, start, or end query params.' }),
    }
  }

  // Validate range
  const startDate = new Date(start)
  const endDate = new Date(end)
  const rangeMs = endDate.getTime() - startDate.getTime()
  if (rangeMs <= 0 || rangeMs > MAX_RANGE_DAYS * 24 * 60 * 60 * 1000) {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: `Range must be between 1 and ${MAX_RANGE_DAYS} days.` }),
    }
  }

  const pat = process.env.CALENDLY_PAT

  // PLACEHOLDER FALLBACK: when no PAT configured, return mock availability so
  // the design preview still works. Slots are generated deterministically based
  // on the requested range so the UI looks alive without a real account.
  if (!pat) {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=60',
      },
      body: JSON.stringify({
        slots: generateMockSlots(startDate, endDate, eventTypeUri),
        mock: true,
        note: 'CALENDLY_PAT env var not configured — returning mock availability. See PLACEHOLDERS.md §Calendly.',
      }),
    }
  }

  try {
    const url = new URL(`${CALENDLY_API}/event_type_available_times`)
    url.searchParams.set('event_type', eventTypeUri)
    url.searchParams.set('start_time', startDate.toISOString())
    url.searchParams.set('end_time', endDate.toISOString())

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${pat}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const text = await response.text()
      return {
        statusCode: 502,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          error: 'Calendly API error',
          upstreamStatus: response.status,
          upstreamBody: text.slice(0, 500),
        }),
      }
    }

    const data = (await response.json()) as CalendlyResponse
    const slots = data.collection.map((s) => ({
      start: s.start_time,
      end: s.end_time,
      schedulingUrl: s.scheduling_url,
    }))

    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=60',
      },
      body: JSON.stringify({ slots, mock: false }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        error: 'Unexpected error contacting Calendly',
        message: err instanceof Error ? err.message : String(err),
      }),
    }
  }
}

/**
 * Mock generator — produces a believable, non-uniform pattern of slots for the
 * design preview. Skips Sundays. Skips lunch (12pm) and a couple of "booked"
 * slots per day so the UI shows a mix of available and unavailable.
 */
function generateMockSlots(start: Date, end: Date, eventTypeUri: string): {
  start: string
  end: string
  schedulingUrl: string
}[] {
  const slots: { start: string; end: string; schedulingUrl: string }[] = []
  const cursor = new Date(start)
  cursor.setUTCHours(0, 0, 0, 0)

  while (cursor < end) {
    const dayOfWeek = cursor.getUTCDay()
    if (dayOfWeek !== 0) {
      const hours = [10, 11, 13, 14, 15, 16, 17, 18, 19, 20]
      const dayKey = cursor.toISOString().slice(0, 10)
      // Hash-ish: drop a couple slots based on day-of-month to vary the pattern
      const dropA = (cursor.getUTCDate() * 7) % hours.length
      const dropB = (cursor.getUTCDate() * 11) % hours.length

      hours.forEach((h, i) => {
        if (i === dropA || i === dropB) return
        const slotStart = new Date(cursor)
        slotStart.setUTCHours(h, 0, 0, 0)
        const slotEnd = new Date(slotStart)
        slotEnd.setUTCHours(h + 1)

        // Construct a plausible Calendly scheduling URL (the real one comes
        // from Calendly's response when PAT is configured).
        const slug = eventTypeUri.split('/').pop() ?? 'event'
        const localStart = slotStart.toISOString().replace(/Z$/, '-05:00')
        slots.push({
          start: slotStart.toISOString(),
          end: slotEnd.toISOString(),
          schedulingUrl: `https://calendly.com/legacymusicgroup/${slug}/${localStart}`,
        })
      })

      // void unused
      void dayKey
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }

  return slots
}

export { handler }
