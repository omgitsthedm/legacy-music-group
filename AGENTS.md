# LFNYC review candidate rules

- This branch is `audit/2026-10-09` in the isolated output checkout, not the dirty canonical studio checkout.
- Working root: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/rebuild`.
- GitHub: `omgitsthedm/legacy-music-group`; default branch: `master`.
- Exact Netlify site: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`; `dist/` only. Always pass `--site` explicitly.
- Preview work and branch pushes are authorized. Master merges, production deploys, domain/DNS changes, paid services and outbound messages are not authorized.
- Brand authority: the supplied `/Users/davidmarsh/Desktop/LiFi NYC/Business/Brand Kit`; local implementation uses its logo, fonts and tokens. Do not alter the tugboat or invent client outcomes.
- Inspect Git status before editing. Preserve unrelated work, historical source and other running projects. No global installs/configuration or default/shared dev ports.
- Use ports 52761/52762/52763. Use installed Google Chrome with `channel: chrome`; do not download another browser.
- Every page renders meaningful HTML without JavaScript. Preview noindex, strict CSP, no tracking and no false send confirmation are required.
- After substantive changes run `npm run verify`, `npm run test:browser` and `npm audit`. Do not submit real email, contact, payment or booking actions.
- Never publish the archive, audit evidence, credential settings, dependency trees or marketing drafts. No secrets are needed in browser code.
- Keep README, SOURCE_OF_TRUTH, DECISIONS and AUDIT-REPORT aligned with observed evidence. Archive material is historical, not active instruction.
