# Legacy Music Group — original design restoration

The owner rejected the redesign. The previous production deploy, `6ac795afb6dbbe1ac131f88c`, was restored on October 9, 2026 at 09:35:46 UTC. The repair preserves the original website's design and character.

## Preserved

All 35 original routes; every existing page's visible copy and markup; original photography and video; typography, colors, rounded buttons, spacing and page composition; GSAP entrance motion and the pinned horizontal gallery.

A fresh recovery build reproduced the original JavaScript and CSS byte for byte. The final repair protects 41 source/style/media files by hash and still emits the exact original stylesheet: `36ed0c2d8cfa2399f18cddeefd34dd17e82d4002401dc9fda70744beedc67347`. Navbar class expressions also match the original.

## Narrow repairs

- Mobile menu: keyboard focus, Tab cycling, Escape with focus return, and closing when the home logo is selected. Existing styles and transition timings are unchanged.
- Metadata: removed a SearchAction for nonexistent search, the studio photo incorrectly labeled as a logo, and an unused invented founding year. Visible content is unchanged.
- Dependencies: pinned the existing rendering stack; updated Vite within version 7; patched compatible transitive packages; upgraded the selector parser with identical-CSS verification; removed the build inspector and unused functions package.
- Operations: exact-site manual releases, no automatic production upload from pushes, pinned Node/actions, local non-default ports, browser regressions and original-design checks.

## Verification

Build, TypeScript, lint, accessibility-shell checks, analytics-consent checks and design-preservation checks pass. Thirteen Chrome browser tests pass: all 35 routes at desktop/mobile widths, homepage at three additional widths, twelve automated accessibility scans, menu keyboard behavior, skip navigation, FAQ, external booking/contact links, tracking remaining off, original animation/pinning, historical redirects and real 404s.

Screenshots are in `../screenshots/preserved-local/`. The original layout was inspected at desktop and mobile sizes. No form, email, reservation or payment was submitted.

Dependency findings fell from 13 to **6**, all high-severity reports in one build-only Tailwind 3 dependency chain: braces, chokidar, fast-glob, micromatch, tailwindcss and tailwindcss-animate. Production dependencies have **zero** findings. Compatible audit fixes and the parser override were applied and verified. The remaining root issue has no patched braces release; the suggested automatic alternative is a Tailwind 4 compiler migration. That migration is deliberately excluded from this design-preserving repair. This is not a clean full dependency audit.

The canonical checkout's 15 existing status entries were preserved. The separate custom domain, WordPress/Bookly booking, DNS, billing and publication of marketing were unchanged. Earlier Astro/LFNYC redesign reports, screenshots, scores and social posts are rejected historical material; their performance claims do not describe this restored site.

Final maintenance release identity is recorded after hosting verification. Existing production already serves the restored original while that verification completes.
