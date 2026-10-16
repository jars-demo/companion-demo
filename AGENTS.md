# AGENTS.md

Guidance for AI coding agents and developers working in this repository. Humans: start with
[README.md](README.md).

## What this is

Companion Kit: a copy-in kit for adding small, accessible companions to React apps, plus a
ten-chapter workshop and a Next.js 16 site that teaches it and uses it. **The kit is the
product.** The site exists to demonstrate it and must never shape the kit's API.

## Map

```text
kit/core/types.ts              CharacterDefinition, CompanionAnswer, Trick, Mood
kit/core/behaviour.ts          pure rules: strollBounds, pickStrollTarget, walkDuration,
                               lookVector, nextStrollDelay, pickTrick, validateCharacter
kit/react/Companion.tsx        the roaming, tappable companion (client component)
kit/react/Figure.tsx           the drawing only: legs, arms, body, eyes, mouth for a mood
kit/react/companion.css        all kit styles and motion, prefixed cmp-, reduced-motion safe
kit/companions/<id>/           one folder per companion: <id>.tsx and README.md
kit/companions/_example/       the commented template people copy (not in the directory)
kit/companions/index.ts        the registry: CHARACTERS and findCharacter
workshop/NN-slug.md            chapters; the site reads them at build time
src/lib/workshop.ts            chapter loader; src/lib/site.ts site answers and storage keys
src/components/                site UI (Shell, SiteCompanion, CompanionCard, Playground, ...)
tests/unit/, tests/e2e/        Vitest (jsdom) and Playwright
docs/                          architecture.md, running-the-workshop.md, CHANGELOG.md
```

## Commands

```bash
npm ci
npm run dev
npm run check      # lint + typecheck + format:check + unit tests
npm run verify     # check + production build: run before every push
npm run test:e2e
```

## Rules

1. **The kit stays small.** No runtime dependency beyond React. Nothing in `kit/` may import
   from `src/` or from Next.js.
2. **Behaviour rules are pure.** New movement logic goes in `kit/core/behaviour.ts` with
   injected randomness and a unit test.
3. **Companions draw bodies only.** The kit draws eyes, mouth, arms and legs at anchors. Every
   companion must pass `validateCharacter` (a test enforces it, including `_example`).
4. **Honest answers.** The kit has no AI and never invents replies. Do not add one to the kit.
5. **Calm and accessible.** Movement only now and then; still while open, when the tab is hidden
   and under reduced motion. The companion is a real button; the panel is a labelled dialog;
   Escape closes it and returns focus.
6. **Docs follow code.** A changed prop, class or file path means updating the workshop chapter
   that teaches it and the README.
7. **Writing style.** Plain English, short sentences, no em dashes in code, docs or commits.
8. **Git.** Conventional Commits, one logical change per commit, no AI attribution trailers.
   Never push, tag or deploy unless asked.

## Skills

Follows the [JARS Skills](https://github.com/jars-demo/jars-skills) playbooks: `write-tests`,
`accessibility`, `code-review`, `commit-style`, `changelog` and `release`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
