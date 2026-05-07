# Legacy Music Group

Deep Ellum recording studio + artist development brand. Production website.

## Source of Truth

Read [BRIEF.md](./BRIEF.md) first — it's the master project doctrine: positioning, design direction, booking strategy, SEO pillars, copy direction.

[CLAUDE.md](./CLAUDE.md) holds operational metadata and the decisions log.

[info.md](./info.md) is Kimi vk2.6's design-handoff notes (component inventory, structure).

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS 3.4 + shadcn/ui (40+ components)
- react-router-dom v7
- GSAP + ScrollTrigger for motion
- react-hook-form + zod
- lucide-react icons
- Inter (body) + DM Serif Display (display)

## Local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produces dist/
npm run preview  # serve dist/ locally
```

## Deploy

Push to `master` → GitHub Actions (`.github/workflows/netlify-deploy.yml`) runs `npm ci && npm run build` and publishes `dist/` to [legacy-music-group.netlify.app](https://legacy-music-group.netlify.app).

## Routes

- `/` — Home
- `/engineers`, `/engineers/:id` — Engineer directory + profiles
- `/services` — Services overview
- `/studio` — Studio environment
- `/contact` — Contact
- Global `BookingModal` — fast booking flow accessible from anywhere
