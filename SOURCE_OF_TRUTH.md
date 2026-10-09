# Legacy Music Group source truth — October 9, 2026

- Working checkout: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/rebuild`.
- Canonical checkout, preserved: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`.
- GitHub: `https://github.com/omgitsthedm/legacy-music-group`; audit branch `audit/2026-10-09`; production branch `master`.
- Exact Netlify ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`; host `https://legacy-music-group.netlify.app`; no custom-domain alias.
- Identity: Legacy Music Group, recording studio and production company in Deep Ellum, Dallas. The owner explicitly corrected the original LFNYC rebrand; real and prospective clients retain their own identity. Only abstract projects use LFNYC branding.
- PR #16 merged the LFNYC direction immediately before the correction, but no LFNYC production upload occurred. Original studio production `6ac795afb6dbbe1ac131f88c` remained live during correction. That source merge is historical, not the final client identity.
- The corrected site has eighteen HTML documents, local Inter/DM Serif Display, Legacy’s actual logo and published studio photographs, responsive images and an unsent email-draft helper. No functions, database, third-party scripts or form submissions.
- Official studio site: `https://legacymusicgroup.com`; booking: `/service-plus/`; terms: `/terms-and-conditions/`. The October 9 browser visit rendered Bookly’s service and engineer selectors. No booking or payment was submitted.
- Email `info@legacymusicgroup.com`, phone `(214) 377-9729`, address `2815 Main St, Suite A, Dallas, TX 75226` agree on the official homepage and contact page.
- The official homepage lists recording at $75/hour, two-hour minimum; mixing from $150; custom production $500 per beat. The rebuilt site labels these published starting rates and directs price/scope confirmation to the studio.
- Historical engineer bios differ from the live booking selector. Old rosters, tenure claims, career credits and placeholder headshots were not carried forward.
- Booking instructions and recording terms disagree on payment percentage. This site links the studio’s terms and contact options without inventing a resolution or duplicating either figure.
- Separate domain, DNS and WordPress booking remain untouched. This duplicate Netlify property remains noindex with an empty sitemap.
- Fresh public evidence: `../evidence/legacy-official-current.json` and `../evidence/legacy-assets/provenance.json`. Archives, credentials, evidence, tools and marketing never enter dist.

## Verified release

- Live source: `d58e09eff71904941b42c5a429ff08170a4046de`; corrected PR #17 merged after passing CI.
- Current production deploy: `6ac8b098350fdec4e6b7db41`, published October 9 at 09:15:07 UTC.
- Publish-tree SHA-256 excluding release.json: `97a31014a4aab36121685af3448813e979b4e444a473bb330ad5a2d6e7a993b5`.
- Primary and immutable production each match all 49 public files. The complete artifact has 51 files including provider headers/redirects.
- Fourteen production browser tests and ten unit/artifact tests passed; 34 axe scans returned zero violations; dependency audit returned zero vulnerabilities.
- The existing review alias now serves the same Legacy artifact as unpromoted deploy `6ac8b2255315a423c592a924`; its historical URL label is retained to correct already-shared links.
- Full evidence: `../evidence/production-artifact-parity.json`, `../evidence/review-mirror-artifact-parity.json`, `../evidence/netlify-final-provider.json`, `../evidence/browser-production-results.json`.
- Final measurements, package and external-policy follow-up: AUDIT-REPORT.md. Later documentation-only commits do not change the deployed source above.
