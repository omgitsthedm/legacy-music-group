# AI-Ops Project Rules

Rules Version: 2026-06-27-aiops-foundation-v1
Generated date/time: 2026-06-28
Source Base: ~/AI-OPS/TEMPLATES/RULES_BASE.md (shared base, mirrored from Grand Funding foundation)
Source Header: .ai/RULES_HEADER.md
<!-- AI-OPS-GENERATED: edit RULES_HEADER.md (per-project) or the shared RULES_BASE, then rerun generate-rules. Hand-mirrored from the Grand Funding AI-Ops foundation. -->

<!-- AI-OPS-CONTENT-BEGIN -->
## Project Rules Header

# Legacy Music Group AI-Ops Rules Header

Project Code:

LFNYC-LMG

Project Name:

Legacy Music Group

Business Line:

Client Projects under Little Fight NYC

Tier:

Tier 2 — live small-business site for a recording studio + artist-development brand, with a booking/lead-capture flow

Risk:

Medium — design-preview site moving toward real booking. Treat any real booking/lead action as transactional.

Canonical Path:

/Users/davidmarsh/Desktop/LiFi NYC/Clients/Legacy Music Group/legacy-music-group

Remote:

https://github.com/omgitsthedm/legacy-music-group.git  (default branch: `master`)

Host:

Netlify — **Vite build** (`command = "npm run build"`, `publish = "dist"`). `.ai/`, `CLAUDE.md`, `AGENTS.md` are repo-only (never shipped). Netlify site `legacy-music-group` (id `d04515bf-0eb2-45ae-b71b-2a08dc92391a`); `legacy-music-group-preview` is a superseded older Next.js artifact.

Live URL:

`https://legacy-music-group.netlify.app`

⚠️ DEPLOY MODEL — git ≠ live: `published_deploy.commit_ref = null` (CLI/manual deploy, not a Netlify-Git build). Live deploy (2026-06-12, "Remove public placeholders and audit clean build") does NOT match local git HEAD (2026-05-07, `e93d756`); working tree has 25 uncommitted changes → git is **divergent and stale** vs live. A GH Action (`netlify-deploy.yml`) could deploy-on-push. **NEVER push** — treat push as a production deploy trigger.

Stack:

Vite 7 + React 19 + TS, Tailwind + shadcn/ui, react-router-dom v7, GSAP, react-hook-form + zod. `BRIEF.md` is master doctrine.

## Commands

- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Deploy: DO NOT push/deploy — git diverged/stale; gated by clear, scoped confirmation from David (David-run).

## Locked Rules

- Live client site — treat as production. Branch is `master`.
- **NEVER push.** git is divergent/stale vs live; push may trigger a deploy. Verify via read-only `netlify api listSiteDeploys`.
- 25 pre-existing dirty files (see STATE) are NOT part of onboarding — do NOT clean/stage/commit them. Only `.ai/` + `AGENTS.md` + the CLAUDE.md edit are staged.
- Booking / Calendly / lead-capture on live = transactional. No real test bookings/leads against production.
- `BRIEF.md` is doctrine.
- `.env`/secrets never read or committed.
- `publish = "dist"` → `.ai/`, `CLAUDE.md`, `AGENTS.md` are repo-only.

## Legacy Music Group QA Harness Map

Observational (agent may run): `git status/log`, read source/config, `npm run dev/lint/build` locally, public GET to the live URL, read-only Netlify deploy metadata.

Transactional/gated (David-run / approved): any deploy (incl. push that triggers the GH Action); real booking/Calendly/lead submissions; DNS/domain/env/secret changes.

## Shared Rules Base

# AI-Ops Shared Rules Base

This is the canonical shared behavior contract for Little Fight NYC AI-Ops work.

Keep truth in the repo. Store only what Git cannot know. Maintain shared rules once. Automate facts. Have AI propose judgment. Safety overrides forward motion.

## Command Words

Agents must recognize these exact commands:

- `SESSION START`
- `SESSION CLOSEOUT`
- `STOP`
- `HALT`

## Operating Contract

- Repo truth beats chat truth.
- Git knows code history.
- Deployment/build metadata knows what shipped.
- `.ai/STATE.md` stores what Git cannot know.
- Ideas go to inbox before becoming rules.
- Production QA must separate observation from transaction.
- Autonomy is useful until risk appears.
- Safety overrides forward motion.

## SESSION START Protocol

When starting work:

1. Read `.ai/RULES.md`.
2. Read `.ai/STATE.md`.
3. Check the current branch, worktree, and git status.
4. Check recent commits relevant to the requested work.
5. Check whether `.ai/STATE.md` is stale against Git, deploy metadata, or current task context.
6. Check `QA-PENDING` before claiming anything is complete.
7. State the current branch, dirty files, active risk level, and intended first action.

Do not rely on chat memory when the repo has a newer source of truth.

## SESSION CLOSEOUT Protocol

Before ending a work session:

1. Update `.ai/STATE.md` with facts Git cannot know.
2. Record unresolved `QA-PENDING` items.
3. Record proposed rule changes in the inbox rather than editing generated rules directly.
4. Report branch, files created, files modified, verification run, warnings, and next-agent directive.
5. Do not claim production QA passed unless production QA was actually run and stayed observational or was properly approved.

## Emergency Mode

Emergency Mode applies when production, client data, billing, secrets, auth, DNS, deployments, or irreversible operations may be affected.

In Emergency Mode:

- Stop forward feature work.
- Preserve evidence.
- Do the smallest reversible action.
- Ask David before destructive or transactional action.
- Prefer observation, rollback, and containment over new behavior.

## STOP / HALT Protocol

`STOP` means pause all work and report current state.

`HALT` means stop immediately, avoid further file or system changes, and report the last completed action plus the next safest recovery step.

If a STOP or HALT conflicts with automation, human instruction wins.

## Live Change Confirmation Protocol

Clear scoped confirmation is required before any live transactional action unless the action is sandboxed, staged, explicitly David-run, or already protected by a project-specific approved safe path.

Approval must be scoped to a specific action. It does not authorize unrelated live changes.

## Proposed Changes / Inbox

Rules are not rewritten ad hoc.

Put candidate changes in `.ai/STATE.md` under `Proposed Changes / Inbox` with:

- Proposal
- Reason
- Risk
- Source evidence
- Suggested owner

Promote proposals into `.ai/RULES_HEADER.md` or `~/AI-OPS/TEMPLATES/RULES_BASE.md` only after review.

## Tactical Visibility Before >3 Source File Edits

Before editing more than three source files, report:

- Goal
- Files expected to change
- Risk
- Verification plan
- Rollback plan

Documentation, generated rules, and state files still require visibility when they affect agent behavior.

## Observational vs Transactional QA Split

Observational production QA is allowed when it only reads public or authorized state and does not create, mutate, submit, send, buy, book, upload, export, or persist anything.

Transactional production QA is not allowed unless sandboxed, staged, explicitly David-run, or gated by clear, scoped confirmation from David plus a safe test path.

If a `qa:prod` harness exists, run it instead of improvising checks.

Transactional actions include:

- live checkout orders
- live payments
- real appointment bookings
- real lead form submissions
- real client emails
- real database writes
- real uploads into client workflows
- PHC bid/export actions that could alter client data
- anything that pollutes client records, calendars, inboxes, analytics, orders, or production data

## Dangerous Operation Gate

Do not perform dangerous operations without explicit approval.

Dangerous operations include:

- pushing to protected branches
- deploying
- deleting files or cloud resources
- modifying secrets, `.env`, DNS, auth, or billing
- mutating production data
- running live transactional QA
- changing production infrastructure

Live danger requires clear confirmation from David that identifies the intended production action and scope.

Broad standing autonomy does not cover ambiguous or destructive production changes. Confirm the intended live action and scope in plain language before proceeding.

## Stale State Protocol

If `.ai/STATE.md` conflicts with Git, deploy metadata, logs, or current source files:

1. Treat the state as stale.
2. Use repo/deploy facts as the higher source of truth.
3. Update `.ai/STATE.md` during closeout with the corrected fact and evidence.
4. Do not silently carry stale assumptions forward.

## QA-PENDING Protocol

`QA-PENDING` means work is not verified enough to claim done.

Each pending item must include:

- What needs verification
- Why it matters
- Safe verification path
- Whether it is observational or transactional
- Current owner

Do not collapse QA-PENDING into success language.

## Collision Detection

Before editing, check for collisions:

- current branch
- current worktree
- `git status --short`
- recent commits
- existing lock file if the project uses one
- whether Claude Code, Codex, or another agent is likely active on the same branch or files

If a collision appears likely, stop and report the risk before writing.

## Optional Lock File Protocol

Projects may use `.ai/LOCK.md` for coordination.

If present, read it before edits. If creating one, include:

- Agent
- Branch
- Files or area claimed
- Start time
- Expected closeout
- Recovery note

Do not use a lock file as permission to bypass safety gates.

## Session History Compaction

Keep durable state short and factual.

Use `.ai/STATE.md` for current operational truth, not transcripts. Summarize long histories into recent decisions, unresolved risks, next steps, and evidence pointers.

## Safety Override

Safety overrides forward motion.
<!-- AI-OPS-CONTENT-END -->
