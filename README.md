# Legacy Music Group

Deep Ellum recording studio + artist development brand. Production website.

## Source of Truth

**Read [BRIEF.md](./BRIEF.md) first.** It is the master project doctrine — positioning, design direction, stack, booking strategy, and the Kimi → Codex handoff.

[CLAUDE.md](./CLAUDE.md) holds operational metadata and the decisions log.

## Status

Pre-design. Kimi vk2.6 is producing the first-pass design system. Codex will implement after design approval. The current scaffold is a black "Coming Soon" placeholder with `noindex`.

## Stack (per BRIEF.md §23)

Next.js 15+ App Router · TypeScript · Tailwind CSS · Supabase · Stripe · Resend · GA4 · Sentry · pnpm · Netlify.

## Deploy

Push to `master` → GitHub Actions runs `.github/workflows/netlify-deploy.yml` → Netlify rebuilds [legacy-music-group.netlify.app](https://legacy-music-group.netlify.app).
