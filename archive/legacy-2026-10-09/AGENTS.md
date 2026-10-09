# Legacy Music Group agent rules

- Canonical checkout: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`
- GitHub: `omgitsthedm/legacy-music-group`; production branch: `master`.
- Netlify: `legacy-music-group` (`d04515bf-0eb2-45ae-b71b-2a08dc92391a`), published from `dist`.
- A push to `master` runs the production deploy workflow. Do not merge, push to `master`, or deploy without clear production authorization.
- Preserve any open pull request or non-default branch until its work is merged or explicitly retired.
- Do not read or expose `.env*`, credentials, booking data, Calendly data, or production submissions.
- Do not submit real booking, lead, or contact actions during testing.

Commands: `npm run dev`, `npm run lint`, `npm run build`.

Read `SOURCE_OF_TRUTH.md` for current routing and deployment facts. Read `BRIEF.md` only when product, brand, or content decisions require it; it is not startup context. Preserve unrelated work and validate proportionally before handoff.
