# Legacy Music Group — original design restored

The owner rejected the October 9 redesign and ordered the preceding version restored. Netlify production was restored to `6ac795afb6dbbe1ac131f88c` at 09:35:46 UTC on October 9, 2026. The restored homepage, JavaScript and CSS match the canonical checkout's prior dist byte for byte.

- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`.
- Host: `https://legacy-music-group.netlify.app`; no custom-domain aliases.
- GitHub: `omgitsthedm/legacy-music-group`; production branch `master`; repair branch `fix/preserve-design-2026-10-09`.
- Repair checkout: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/preserve-design`.
- Canonical checkout: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`; its 15 preexisting status entries are preserved.
- Original source was recovered from the pre-rebuild Git tree plus the already-published runtime changes in the canonical working tree. A fresh build reproduced the old JavaScript and CSS exactly before any maintenance edits.
- Original CSS SHA-256: `36ed0c2d8cfa2399f18cddeefd34dd17e82d4002401dc9fda70744beedc67347`.
- Original baseline is 35 routes and a 404. Layout, content, assets, typography, colors and GSAP motion are unchanged by the repair.
- Nonvisual repairs: mobile menu focus/Escape/Tab behavior, close-on-home navigation, removal of a nonexistent SearchAction and wrong logo metadata, removal of the development inspector and unused functions package, compatible dependency patches, deterministic checks and manual exact-site release controls.
- Full audit: 13 findings before, 6 build-only Tailwind-chain findings after compatible fixes; zero production-dependency findings. No forced styling/compiler migration.
- This duplicate host remains noindex. Booking uses `https://legacymusicgroup.com/service-plus/`; contact uses `/contacts/` plus the existing studio phone/email. WordPress, DNS, billing and marketing publication remain unchanged.
- Evidence: `../evidence/original-design-restored.json`, `restored-original-parity.json`, `recovered-source-provenance.json`, `recovered-build-parity.json`, and the `preserve-design-*` validation files.

The earlier Astro/LFNYC rebuild and marketing package are rejected history. They are not the current site's design, metrics or release evidence.

## Current verified publication

- Application source: `a678f61af6ea6d314f8309f16a6d00869cab6d44` (PR #18, merged).
- Production deploy: `6ac8bba15461611aa56c8f05`, ready and published at 2026-10-09T10:02:11.241Z.
- Immutable production: https://6ac8bba15461611aa56c8f05--legacy-music-group.netlify.app/.
- Review alias: https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app/; deploy `6ac8bb58e900330f03b81466`; identical artifact, unpromoted review mirror.
- Publish-tree SHA-256 excluding release.json: `92b068802262cf692c5a804f101f904703fa556a9d0064cb34506a942f60b247`.
- Local and production Chrome suites: 13 passed each. Every public file (82) matches local bytes across both production URLs and both review URLs.
- Final proof: `../evidence/preserved-final-provider.json`, `preserved-production-parity.json`, `preserved-review-parity.json`, `preserve-design-browser-production.txt`, and `production-release-archive.json`.
- The publication record is followed only by documentation changes; the release marker retains the tested application-source SHA. Do not redeploy documentation.
