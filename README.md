# Legacy Music Group

The original recording-studio website, restored after the October 9 redesign was rejected. Maintenance preserves its design, content, photography and motion.

React 19, Vite 7, TypeScript, Tailwind CSS 3, GSAP/ScrollTrigger, Lucide and React Router. Use Node 24.21.0 from `.nvmrc`.

```sh
npm ci
npm run dev          # 127.0.0.1:52764
npm run verify       # lint, TypeScript/build, accessibility, consent and exact design checks
npm run test:browser # installed Google Chrome, isolated artifact server on 52765
npm run preview     # serve built files and routing/headers locally
npm audit --omit=dev
npm audit
```

`test:design` checks 41 original page/style/media files and requires the compiled stylesheet to match the original production bytes. Keep these checks when changing tooling. The mobile menu repair and metadata cleanup do not change visible styling or content.

The full dependency audit retains six build-only findings in the Tailwind 3 → glob/watch → braces chain. Compatible updates and a selector-parser override removed the other seven findings. Production dependencies have zero findings. Tailwind 4 is a separate compiler migration; forcing it during this repair would violate the design-preservation constraint without further compatibility work.

The 35 original routes are preserved, including studio, services, engineer profiles, pricing, journal, neighborhoods, FAQ, contact and policies. Booking and contact hand off to the existing studio site. No reservation, payment or contact data is collected here. This duplicate Netlify host stays noindex.

GitHub: `omgitsthedm/legacy-music-group`, branch `master`. Site: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`. Git pushes run checks, not automatic production uploads. The manual Netlify workflow is draft-only and names the exact site. Production uploads require the verified artifact and existing scoped authorization.

Read [AGENTS.md](AGENTS.md) for the design contract and [SOURCE_OF_TRUTH.md](SOURCE_OF_TRUTH.md) for current release identity. Historical BRIEF/hand-off files never override the owner's instruction to preserve this design.
