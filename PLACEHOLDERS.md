# PLACEHOLDERS.md

> Single source of truth for everything in this codebase that is **placeholder content**, **placeholder logic**, or **awaiting real data/integration**. Per BRIEF.md §19 and §32.

Last updated: 2026-05-07. Most contact, gear, pricing, engineer, and policy content was sourced from the existing legacymusicgroup.com on 2026-05-07. The remaining placeholders are listed below.

---

## NOW REAL (sourced from legacymusicgroup.com 2026-05-07)

These were placeholders and are now real. Documenting here so future sessions don't accidentally treat them as placeholder again:

- ✅ Contact info — phone, email, address, all 4 social URLs
- ✅ 4 real engineers — Matthew Medlock, Ray Dallas, Wayne, Terry (with their real bios)
- ✅ Real gear list — 27 items in `/equipment` (UA Apollo, C24, Avalon 737, Neumann U87, AKG C414, Focal Duo, Adams S10, Mackie Thump 12, Pro Tools, Studio One, Logic Pro X, UAD plugins, Waves, Slate Digital, etc.)
- ✅ Real pricing tiers + à la carte — Recording $75/hr, Starter $399, Pro $999, Album $2,900, plus 10 à la carte services (Mixing $150+, Mastering $30, Custom Production $500, Engineer A/B rates, Major Label rate, Lessons, Consultation, Listening Parties, Graphic Design)
- ✅ Real policies — 50% non-refundable deposit, 24hr cancellation rule, $55 reschedule fee, $35 guest fee, 90-day file retention, max 7 guests, no-smoking, parking metered $0.25/30min after 6pm
- ✅ 3 real Google reviews (Brandon P., Farhan P., Richard C.)
- ✅ Real Matthew Medlock founder story (Memphis, GRAMMYU, 10yr veteran, music business degree)
- ✅ Two-room studio fact (A Room and B Room with different engineer rates)
- ✅ Schema BUSINESS constant — real address, phone, geo coords (~32.7837, -96.7780), social `sameAs`, founded year (2014 estimated)

---

## STILL PLACEHOLDER

### Operating Hours

✅ **NOW REAL** — sourced from Google Business Profile 2026-05-07. Open every day 10am–1am (1am the following day). Reflected in `contact.hours` ("Open daily · 10am–1am") and `localBusinessSchema.openingHoursSpecification` (all 7 days, 10:00–01:00).

### Founding Year

`src/lib/schemas.ts` `BUSINESS.founded`. Currently `'2014'` as a reasonable estimate from the 10-year-veteran owner mention.

**Needs:** confirm exact founding year for `foundingDate` in Organization schema.

### Engineer Photos

`src/lib/data.ts` `engineers[].image`. All four engineers reference placeholder paths (`/images/engineer-1.jpg` through `engineer-4.jpg`).

**Real photos exist on legacymusicgroup.com** at `/team`, `/team/wayne`, `/team/terry` (and equivalent for Matthew + Ray). Need to:
1. Download each engineer's headshot from the live site (or get higher-res from owner)
2. Convert to `.webp` (per LiFi NYC client rules)
3. Save into `/public/images/` with named slugs (e.g., `engineer-matthew.webp`)
4. Update `image` paths in `data.ts`

### Engineer Track Credits (deeper)

`src/lib/data.ts` `engineers[].credits`. Ray Dallas has 4 named credits (Mac Miller, B.o.B, Dorrough, Young Jeezy) but no specific tracks. Other engineers have empty credits.

**Needs:** real track names + Spotify/Apple Music URIs per engineer for `MusicGroup` / track schema and the engineer profile credit sheet.

### AggregateRating

✅ **NOW REAL (snapshot)** — sourced from Google Business Profile 2026-05-07. Currently hardcoded as **4.4 stars / 128 reviews** in `contact.rating`, `localBusinessSchema.aggregateRating`, and rendered on `/reviews` and homepage reviews preview. Reviews.tsx page metadata also reflects "Reviews — 4.4★ on Google · 128 Reviews."

**Still needed for live wiring:** Google Business Profile API integration (Netlify Function pattern, similar to Calendly availability) so the count and rating refresh automatically as reviews accumulate. Until that lands, the values are a static snapshot — update `contact.rating` periodically.

### Google Business Profile

Not yet claimed/configured per the compete analysis. Highest single-lever for ranking in North Dallas studio search.

**Needs:** owner to claim GBP, set up category (Recording Studio + Music Production Service), upload 30+ photos, hours, services menu, Q&A pre-seeded.

### Calendly URLs (still pending)

`src/lib/data.ts` `calendly` object. All `bookingUrl` slugs and `eventTypeUri` UUIDs are placeholders.

**Needs:** `CALENDLY_PAT` env var on Netlify + replacement of 6 placeholder URLs/URIs with real Calendly account values. See instructions below.

The existing legacymusicgroup.com site uses a custom Wix-style booking widget (5-step flow with full-payment-upfront), NOT Calendly. **Confirm with owner that the planned switch to Calendly is still the direction.** If not, the BookingModal needs to integrate with their actual booking system instead.

### Press Mentions

`src/lib/data.ts` `pressMentions`. Currently lists outlets to *pitch* (Dallas Observer, D Magazine, Central Track, KERA News, Texas Music Office) — Legacy has not yet earned coverage in any of them.

**Needs:** actual press wins. The compete analysis recommended pitching these outlets specifically.

### Events

✅ **NOW REAL** — sourced from Legacy's Facebook 2026-05-07. The `/events` page now features the actual recurring series:

- **Legacy Live — Weekly Open Mic** at TX Tea Room in Deep Ellum, every Monday, 8:30 PM sign-ups + 9 PM show, free, hosted by Legacy with sound by Kyle Cannon.

`studioEvents` is generated programmatically (next 6 Mondays from today) so the events page stays fresh without manual updates. Each occurrence is rendered with `Event` schema using TX Tea Room as the off-site location (via the new optional `location` parameter on `buildEventSchema`).

**Still optional:** add other events as Legacy hosts them (listening parties, label nights, songwriter circles at the studio itself).

### Blog Posts

`src/lib/data.ts` `blogPosts` — six anchor articles drafted to be publishable but not yet reviewed by Legacy team.

**Needs:**
1. Owner / engineer review for tone, accuracy on gear specifics, accuracy of pricing references, accuracy of neighborhood claims
2. Real author bylines (currently attributed to "Legacy Music Group" — could attribute to Matthew or Ray)
3. The live site has 4 real blog posts (Mixing & Mastering, Are You Ready to Record, Take Care of Your Voice, Ladies Where You At) — consider importing these alongside the new ones for the Journal launch

### Service Specialty Mapping

`src/lib/data.ts` `engineers[].serviceSlugs`. Mapped based on engineer specialty per their bio. Matthew → artist-development; Ray → rap, R&B, voiceover, podcasts; Wayne → rap, R&B; Terry → none (maintenance role).

**Needs:** owner confirmation that these mappings reflect each engineer's actual genre fit and service preference.

### Genre/Service Pricing Alignment

`src/lib/data.ts` `services[]` — the 5 genre service pages (rap-recording, r-and-b, podcasts, voiceover, artist-development) reference starting prices that broadly match real Legacy rates but should be reviewed:
- "rap-recording" lists `From $75/hr` ✓ matches real
- "r-and-b" lists `From $75/hr` ✓ matches real
- "podcasts" lists `From $120/hr` — Legacy's actual podcast pricing not specified on live site, this is a guess
- "voiceover" lists `From $95/hr` — Legacy's actual VO pricing not specified, this is a guess
- "artist-development" lists `Consultation $150 / Multi-month engagements custom` — actual Legacy rate is $99 consultation, multi-month custom

**Needs:** confirm podcast and VO rates with owner; update artist-dev page to use real $99 consultation rate.

### Neighborhood Pages

`src/lib/data.ts` `neighborhoods` — 6 pages. Drive times and ZIPs are accurate at first-pass but reviewed by someone living in DFW would help.

### Studio Imagery

`/public/images/` — 7 stock studio images. Replace with real photos of Legacy's two-room setup (A Room with C24, vocal booth, B Room) when renovation/photography happens.

### Session Video Clips

`/public/videos/` — 5 stock session clips. Replace with real "Live from Legacy" video sessions per the compete recommendation.

### Buy Beats / Merch (services Legacy actually offers but we haven't built yet)

The live site has:
- **`/buy-beats`** — exclusive and leased beats catalog (login-gated; we don't have catalog data)
- **`/shop`** — merch (T-shirts, hoodies, snapbacks, koozies)

We have NOT built routes for these yet. **Decide:**
- Build a `/shop` page that links out to the existing Wix shop (until it's migrated)?
- Build a `/beats` page or service?
- Wait until launch and bring them over fully?

### Domain Cutover

`legacymusicgroup.com` is currently serving the older Wix-style site. The new build needs to:
1. Backlink audit on the existing domain (Ahrefs/Semrush) before switching
2. Map any URL changes for 301 redirects (e.g., `/about-2` → `/studio`, `/services-page` → `/services`, `/contacts` → `/contact`, `/team/*` → `/engineers/*`, `/equipment` → `/gear`, `/buy-beats` → ???, `/shop` → ???)
3. Set up `_redirects` in Netlify with the migration map
4. Flip DNS only after redirects are tested

### Pre-Launch Toggle Set

When ready to publish:
1. `public/robots.txt` → switch from `Disallow: /` to `Allow: /` + `Sitemap:` line
2. `index.html` `<meta name="robots">` default → `index, follow`
3. `src/lib/seo.ts` `useSeo` default `noindex: false`
4. `index.html` → uncomment GA4 block + replace `G-XXXXXXXXXX` with real measurement ID
5. Add real OG image at `/og-image.jpg` (1200×630)
6. Convert images to `.webp` per LiFi NYC client rules
7. Run `/audit-website`, `/seo-audit`, `/perf-audit`, `/security-audit`, `/ultraship`

---

## Calendly setup (when ready)

**Three placeholder layers:**

**1. Calendly Personal Access Token** — set as Netlify env var `CALENDLY_PAT`. Get from Calendly admin → Integrations → API & Webhooks → Personal Access Tokens.
```bash
netlify env:set CALENDLY_PAT "your-pat-here" --context production
```

**2. Public booking URLs** in `src/lib/data.ts` `calendly`:

| Use case | Placeholder URL |
|---|---|
| With engineer (default) | `calendly.com/legacymusicgroup/recording-with-engineer` |
| With Matthew Medlock | `calendly.com/legacymusicgroup/recording-with-marcus-cole` (legacy slug — update) |
| With Ray Dallas | `calendly.com/legacymusicgroup/recording-with-sofia-reyes` (legacy slug — update) |
| With Wayne | `calendly.com/legacymusicgroup/recording-with-david-byrne` (legacy slug — update) |
| With Terry | n/a (maintenance role, not bookable) |
| Without engineer | `calendly.com/legacymusicgroup/studio-time` |

**Note:** the per-engineer URL keys in `data.ts` need updating — they currently match old placeholder engineer IDs (`'1'`, `'2'`, `'3'`, `'4'`) but the new engineer IDs are slug-based (`matthew`, `ray`, `wayne`, `terry`). When real Calendly URLs land, update `byEngineerId` to use the new slugs.

**3. Event type URIs** — get them via:
```bash
curl -H "Authorization: Bearer $CALENDLY_PAT" \
  https://api.calendly.com/event_types?user=https://api.calendly.com/users/{YOUR-USER-UUID}
```

Replace `PLACEHOLDER-UUID-*` strings in `src/lib/data.ts`.
