# Legacy Music Group operating rules

- **Preserve the existing design and character.** On October 9 the owner rejected the redesign and explicitly ordered restoration of the preceding production version. The design reference is deploy `6ac795afb6dbbe1ac131f88c`: original layout, typography, colors, photographs, content, rounded controls, entrance animations and pinned gallery. Do not redesign, replace the framework, rewrite visible copy or swap assets as maintenance work.
- Real and prospective client sites keep their identity. Only abstract projects use LFNYC branding. Legacy remains Legacy Music Group.
- Isolated repair checkout: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/preserve-design`. Canonical source at `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group` has unrelated existing work; preserve it.
- GitHub `omgitsthedm/legacy-music-group`, production branch `master`. Exact Netlify site `d04515bf-0eb2-45ae-b71b-2a08dc92391a`; live host `https://legacy-music-group.netlify.app`.
- Source uses React 19, Vite 7, Tailwind 3 and GSAP. Keep the original rendering dependencies pinned. `scripts/design-baseline.json` and `npm run test:design` prevent silent source/media/CSS changes. A future intentional design revision needs a new explicit brief; never loosen this check just to pass an upgrade.
- The owner authorized restoring production and repairing this version. Domain/DNS, separate WordPress/Bookly booking, billing, paid integrations and marketing publication remain separate scope.
- Run `npm run verify`, `npm run test:browser`, and both full and production-only dependency audits. Full audit has a documented, build-only Tailwind 3 dependency chain; never describe it as fully clean. Do not use force upgrades that alter styling.
- Browser checks use installed Google Chrome (`channel: chrome`). Development port 52764, local artifact QA 52765, baseline comparison 52766. No shared/global installation changes.
- No real booking, payment or contact submission in tests. Preserve noindex and the existing booking/contact destinations. No visitor tracking loads on the Netlify host.
- Git pushes run quality checks; Netlify Git builds stay ignored. Upload only a verified `dist/` with the explicit site ID. Production builds require `RELEASE_MODE=production APPROVED_SITE_ID=d04515bf-0eb2-45ae-b71b-2a08dc92391a`.
- Rejected Astro/LFNYC rebuilds and their marketing remain historical evidence outside this active checkout. Do not restore them as current design guidance.
