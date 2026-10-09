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

The same thirteen browser tests also pass on the published production host. Screenshots are in `../screenshots/preserved-local/` and `../screenshots/preserved-production/`. The published original layout was inspected at desktop and mobile sizes. No form, email, reservation or payment was submitted.

Dependency findings fell from 13 to **6**, all high-severity reports in one build-only Tailwind 3 dependency chain: braces, chokidar, fast-glob, micromatch, tailwindcss and tailwindcss-animate. Production dependencies have **zero** findings. Compatible audit fixes and the parser override were applied and verified. The remaining root issue has no patched braces release; the suggested automatic alternative is a Tailwind 4 compiler migration. That migration is deliberately excluded from this design-preserving repair. This is not a clean full dependency audit.

The canonical checkout's 15 existing status entries were preserved. The separate custom domain, WordPress/Bookly booking, DNS, billing and publication of marketing were unchanged. Earlier Astro/LFNYC redesign reports, screenshots, scores and social posts are rejected historical material; their performance claims do not describe this restored site.

## Verified release

- Live: https://legacy-music-group.netlify.app/
- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`.
- Published October 9, 2026 at 10:02:11 UTC: `6ac8bba15461611aa56c8f05`.
- Immutable production: https://6ac8bba15461611aa56c8f05--legacy-music-group.netlify.app/
- Review mirror, also restored to the original design: https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app/ (deploy `6ac8bb58e900330f03b81466`).
- Application source: `a678f61af6ea6d314f8309f16a6d00869cab6d44`, merged through https://github.com/omgitsthedm/legacy-music-group/pull/18.
- CI passed: https://github.com/omgitsthedm/legacy-music-group/actions/runs/37914525497.
- Publish-tree SHA-256, excluding the release marker: `92b068802262cf692c5a804f101f904703fa556a9d0064cb34506a942f60b247`.
- All 82 public files match the tested local artifact on the primary and immutable production URLs, and on both review URLs. Production marker, provider site ID and published deploy agree.
- `../evidence/production-release-artifact.zip` contains the 84-file release including Netlify headers/redirects. ZIP SHA-256: `450ef89582ffdb993c29ca6411dcc50b582cd4eb57e4f009536ab6e0d4b073d3`.
- Homepage JavaScript decreased from 460,757 to 451,122 decoded bytes. No new Lighthouse or business-outcome claim is made.
- Release reason: owner-directed restoration of original character with narrow repairs. One maintenance production upload followed restoration of the existing snapshot; account credit delta was not measured. No documentation-only redeploy.

## Separate future actions (NEEDS-APPROVAL.md)

The original-design restoration and narrow maintenance release are authorized. No approval is needed to finish them.

- **CSS compiler migration:** compatible patches and a safe selector-parser override were applied. Six build-only reports remain in the unpatched braces/Tailwind 3 chain; production dependencies are clean. A Tailwind 4 migration must be isolated and prove the existing appearance unchanged before any future adoption. No forced migration in this repair.
- **Domain/booking migration:** keep legacymusicgroup.com and its existing WordPress/Bookly booking flow unchanged. No DNS or account changes are included.
- **Marketing:** rejected redesign graphics, social posts, case study and reported performance are historical and must not be posted as current work.
