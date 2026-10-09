# Decisions — preserve the original Legacy design

- The owner's October 9 rejection supersedes the rebuild brief: restore deploy 6ac795afb6dbbe1ac131f88c and preserve the original design, content and motion.
- Explicit owner authorization to restore the previous published version takes precedence over the Netlify skill's general fix-forward convention; the exact ready deploy and site were verified before restoring it.
- Preserve the canonical dirty checkout; recover already-published source into an isolated worktree and verify its initial bundle/CSS against the restored artifact.
- Keep React, Tailwind 3, GSAP, visible pages and assets; no framework swap, image replacement, palette/type changes or copy rewrite.
- Limit the source behavior changes to menu keyboard/navigation fixes and nonvisual metadata corrections.
- Pin the original rendering dependencies and apply compatible tooling patches; the selector-parser override must emit byte-identical CSS.
- Six build-only audit reports remain in the Tailwind chain after compatible fixes; zero production findings. Do not force a stylesheet-compiler migration during a design-preservation task.
- A menu focus race occurred during the existing visibility transition; defer focus until the next painted frame and verify the unchanged transition with browser tests.
- Keep source pushes separate from production and correct the existing review alias with the same tested original-design artifact.
- Mark the rejected redesign's marketing/report package as historical so its images and performance numbers cannot be mistaken for this release.
- Published original-design repair a678f61 on exact site d04515bf-0eb2-45ae-b71b-2a08dc92391a as deploy 6ac8bba15461611aa56c8f05; all 82 public files match and all 13 production browser tests pass; record documentation without redeploying.
