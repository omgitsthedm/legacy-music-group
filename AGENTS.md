# AI Tool Entry

Read `.ai/RULES.md` and `.ai/STATE.md` before working, then `BRIEF.md` (master doctrine) and `CLAUDE.md`.
The shared project rules live in `.ai/RULES.md`; current state in `.ai/STATE.md`.

Live Vite/React site (branch `master`, legacy-music-group.netlify.app). Do NOT deploy, submit real booking/Calendly/lead actions, modify secrets, or mutate production without the required gate (`APPROVE LIVE CHANGE`). **NEVER push** — git is divergent/stale vs live and push may trigger the GH-Action deploy. There are 25 pre-existing dirty (in-progress) files — do NOT clean, stage, or commit them. `publish = "dist"`, so `.ai/`, `CLAUDE.md`, `AGENTS.md` are repo-only.
