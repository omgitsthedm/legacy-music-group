# PLACEHOLDERS.md

> Single source of truth for everything in this codebase that is **placeholder content**, **placeholder logic**, or **awaiting real data/integration**. Per BRIEF.md §19 and §32.

Every entry below should be replaced before public launch (or at least audited and either replaced, removed, or explicitly accepted as placeholder for staging).

Last updated: 2026-05-06.

---

## Engineers

All four engineer profiles are fictional. Source of truth: [`src/lib/data.ts` `engineers` array](src/lib/data.ts).

| Field | Placeholder | Needs |
|---|---|---|
| Engineer 1 — name | Marcus Cole | Real name |
| Engineer 1 — bio | Grammy-nominated, LA studios, etc. | Real bio |
| Engineer 1 — image | `/public/images/engineer-1.jpg` (stock) | Real headshot |
| Engineer 1 — stats | "10+ Years / 500+ Projects / Grammy Nominated" | Real career stats |
| Engineer 1 — samples | 4 fictional track titles | Real audio files + titles + durations |
| Engineer 2 — name | Sofia Reyes | Real name |
| Engineer 2 — bio | 50M streams pop/electronic | Real bio |
| Engineer 2 — image | `/public/images/engineer-2.jpg` (stock) | Real headshot |
| Engineer 2 — stats | "8+ Years / 300+ Projects / 50M+ Streams" | Real career stats |
| Engineer 2 — samples | 4 fictional track titles | Real audio files |
| Engineer 3 — name | David Byrne | Real name (and note: collides with the famous Talking Heads frontman — change before launch regardless) |
| Engineer 3 — bio | 15+ years rock/folk | Real bio |
| Engineer 3 — image | `/public/images/engineer-3.jpg` (stock) | Real headshot |
| Engineer 3 — stats | "15+ Years / 700+ Projects / Multi-Platinum" | Real career stats |
| Engineer 3 — samples | 4 fictional track titles | Real audio files |
| Engineer 4 — name | Jade Williams | Real name |
| Engineer 4 — bio | Rising star hip-hop/soul | Real bio |
| Engineer 4 — image | `/public/images/engineer-4.jpg` (stock) | Real headshot |
| Engineer 4 — stats | "6+ Years / 200+ Projects / Rising Star" | Real career stats |
| Engineer 4 — samples | 4 fictional track titles | Real audio files |
| Sample playback | Play buttons render but don't play | Wire up `<audio>` element + real MP3/WAV URLs |

---

## Studio Imagery

`public/images/`. All currently stock or AI-generated placeholders matching the dark-luxury tone per BRIEF §19.

| File | Usage | Needs |
|---|---|---|
| `hero-studio-dark.jpg` | Homepage hero, OG image | Real Legacy hero shot |
| `about-studio-wide.jpg` | About section + Studio page hero + footer-area context | Real wide angle of the renovated space |
| `studio-control-room.jpg` | Horizontal gallery, Services, Studio philosophy | Real control room photo |
| `studio-vocal-booth.jpg` | Horizontal gallery, Services Recording card | Real vocal booth photo |
| `studio-live-room.jpg` | Horizontal gallery, Services Full Package card | Real live room photo |
| `studio-lobby.jpg` | Horizontal gallery, Studio location section | Real lobby/lounge photo |
| `studio-gear.jpg` | Horizontal gallery | Real outboard gear close-up |

**Optimization to-do once real images arrive:**
- Convert to `.webp` per LiFi NYC client rules (CLAUDE.md "Images" section).
- Provide multiple sizes: hero q80/2000px, standard q78/1400px, thumb q75/900px.
- Add explicit `width`/`height` attributes to `<img>` tags to lock CLS.

---

## Session Video Clips

`public/videos/`. All placeholders for the Legacy Live homepage section.

| File | Caption shown | Needs |
|---|---|---|
| `hero-studio-ambient.mp4` | (currently unused — was for hero ambient bg) | Real ambient B-roll if hero video is wanted |
| `session-clip-1.mp4` | "Midnight Sessions / Ari Lennox Vibe" | Real session clip |
| `session-clip-2.mp4` | "Behind the Board / Producer POV" | Real session clip |
| `session-clip-3.mp4` | "Live Drums / Deep Ellum Jam" | Real session clip |
| `session-clip-4.mp4` | "Guitar Tracking / Indie Artist Feature" | Real session clip |

Captions/titles are also placeholder — replace with real artist names or remove names entirely.

---

## Pricing

`src/lib/data.ts` `pricing` array.

All rates are illustrative. Real rates pending owner confirmation:

| Service | Placeholder (with engineer / without) | Needs |
|---|---|---|
| Hourly Recording | $75/hr / $45/hr | Real rate |
| 4-Hour Block | $280 / $170 | Real rate |
| 8-Hour Day | $520 / $320 | Real rate |
| Mixing & Mastering | $150/song | Real rate |
| Full Package | $500 (with) / N/A | Real rate |
| Booking add-on prices | Mixing $150, Full Package $300 | Real rates (also in `src/components/BookingModal.tsx` `ADDON_PRICES`) |

---

## Contact info

`src/lib/data.ts` `contact` object.

| Field | Placeholder | Needs |
|---|---|---|
| Phone (display) | `(214) 555-0199` | Real phone — update everywhere this string appears |
| Phone (E.164) | `+12145550199` | Real E.164 phone for `tel:` links |
| Email | `book@legacymusic.group` | Real email (and confirm domain) |
| Privacy email | `privacy@legacymusic.group` (in `src/pages/Privacy.tsx`) | Real privacy contact |
| Address line 1 | `Deep Ellum` | Real street address |
| Address line 2 | `Dallas, TX 75226` | Real ZIP if different |
| Hours | `Mon–Sat, 10am–10pm` | Real operating hours |
| Response time copy | `We reply within 24hrs` | Confirm SLA |

Also in `src/lib/schemas.ts` `BUSINESS` constant — same fields, schema-encoded.

---

## Social URLs

`src/components/Footer.tsx` social icons currently link to `#`.

| Icon | Needs |
|---|---|
| Instagram | Real IG URL |
| Spotify | Real Spotify artist/profile URL |
| YouTube | Real YouTube channel URL |

Add other platforms (TikTok, Twitter/X) as needed.

---

## Lead capture

All forms currently no-op locally — submit handlers call `setSubmitted(true)` and don't send anything anywhere.

| Form | File | Needs to wire |
|---|---|---|
| Long-form contact | `src/pages/Contact.tsx` | Email send (Resend / Netlify Forms / Supabase write) + alert to `book@…` |
| Callback request | `src/components/CallbackForm.tsx` | Same — plus optional SMS to studio (Twilio / Grasshopper sync per BRIEF §21) |
| Newsletter / Artist List | `src/components/NewsletterSignup.tsx` (used on Home + Contact pages) | Email provider sync (Klaviyo / Mailchimp / Resend Audiences) |
| Booking — contact details capture (step 5) | `src/components/BookingModal.tsx` | Persist to Supabase `leads` / `bookings` tables per BRIEF §22 |

---

## Booking backend

Core flow is wired through 9 steps but no real backend.

| Step | What's there | What's needed |
|---|---|---|
| 1 — Session type | UI complete | n/a |
| 2 — Add-ons | UI complete | n/a |
| 3 — Engineer | UI complete (uses centralized `engineers`) | When real engineer roster lands, this auto-updates |
| 4 — Date/time | Calendar + slot picker, with hardcoded `disabledSlots` | Real availability source — pull from engineer calendars (Google Cal / Cal.com / custom in Supabase) |
| 5 — Contact details | Form complete with validation | Persist to Supabase `leads` and `bookings` |
| 6 — Review | Dynamic review summary with estimated total | Replace est. total with real pricing engine |
| 7 — Agreement | Placeholder agreement text | Final terms from owner; capture acceptance with timestamp + IP |
| 8 — Payment | Placeholder card form (no real charge) | **Stripe Elements** integration; charge deposit, queue balance |
| 9 — Confirmation | Static confirmation screen | Send confirmation email (Resend) + SMS (Grasshopper or Twilio) |

Total in BookingModal review/payment steps is computed from `baseRate + addonTotal`. The base rate doesn't currently account for session length — needs a real pricing engine when wiring Stripe.

---

## SEO / Analytics

| Item | Status | Needs |
|---|---|---|
| `robots.txt` | `Disallow: /` (pre-launch) | Flip to allowing crawl + sitemap reference at launch |
| `sitemap.xml` | Static, references `legacymusicgroup.com` URLs | Confirm domain; regenerate if route map changes |
| Canonical URLs | Use `https://legacymusicgroup.com` | Confirm domain |
| `noindex` meta on all pages | Set via `useSeo({ noindex: true })` default | Flip default to `false` at launch |
| GA4 | Snippet commented out in `index.html` with placeholder `G-XXXXXXXXXX` | Real GA4 measurement ID + uncomment |
| Sentry | Not yet wired | Add per BRIEF §23 stack list |
| OG image | Reuses `hero-studio-dark.jpg` | Dedicated 1200×630 OG asset |
| Schema — LocalBusiness | Includes placeholder street address `"Placeholder Street Address"` | Real street address in `src/lib/schemas.ts` `BUSINESS.address.street` |
| Schema — geo | Approximate Deep Ellum coords (32.7842, -96.7841) | Real building coordinates |
| Schema — `priceRange` | `$$` | Confirm |
| Schema — `founded` | `"Placeholder year"` | Real founding year |

---

## Policies / Legal

| Page | Status | Needs |
|---|---|---|
| `/policies` | First-pass copy covering booking, cancellation, late, conduct, files, revisions, ownership | Owner review + possibly legal review |
| `/privacy` | First-pass GDPR/CCPA-aware draft | Legal review; confirm what tracking actually happens |
| `/terms` | First-pass standard terms | Legal review; confirm Texas governing law and Dallas County venue clause |
| Cancellation windows | "48 hrs" placeholder | Real window from owner |
| Deposit structure | "Deposit required" — amount unstated | Real deposit % or flat amount |
| Revision rounds | "Two rounds included" | Confirm |

---

## Copy

Most page copy follows BRIEF §15 voice but should still be reviewed for:
- Engineer bios (all fictional, see Engineers section above)
- "Where artists become originals" tagline — owner approval
- Hero subhead "Premium recording studio and artist development for independent creators." — owner approval
- About copy on Home, Studio — owner approval
- Service descriptions on Services — confirm features list matches reality
- FAQ answers — confirm specifics (cancellation window, gear list, parking, deposit amount)
- Studio agreement text in BookingModal step 7 — confirm against final policies

---

## Pre-launch checklist (when ready to flip from preview to public)

1. Replace placeholder content per all sections above.
2. `public/robots.txt` → switch to `Allow: /` and add `Sitemap:` line.
3. `index.html` → set `<meta name="robots">` default to `index, follow`.
4. `src/lib/seo.ts` → set `useSeo` default `noindex: false`.
5. `index.html` → uncomment GA4 block and replace `G-XXXXXXXXXX`.
6. Wire all forms (contact, callback, newsletter) to real backends.
7. Wire Stripe in BookingModal step 8 + real availability source for step 4.
8. Add real OG image at `/og-image.jpg` (1200×630) and update `src/lib/seo.ts` `defaultOgImage`.
9. Convert all images to `.webp` with proper sizes per LiFi NYC client rules.
10. Set up custom domain on Netlify, point DNS, confirm canonical matches.
11. Run `/audit-website`, `/seo-audit`, `/perf-audit`, `/security-audit`, `/ultraship`.
