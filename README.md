# Companion Kit

Give your app a little friend.

Companion Kit is a small copy-in kit and a hands-on workshop for adding playful, accessible
companions to any React app: little characters that peek from a corner, stroll now and then,
follow the pointer with their eyes, and answer a few questions with honest, fixed answers.

**Live site:** https://companion.jishanahmed.in

## Meet the companions

| Companion | Who they are                          |
| --------- | ------------------------------------- |
| Recei     | A receipt that keeps things honest.   |
| Mochi     | A soft little cloud of encouragement. |
| Bolt      | A battery with energy to spare.       |
| Inky      | A drop of ink with big ideas.         |
| Sprout    | A potted plant that grows with you.   |
| Toast     | Warm, golden and always ready.        |

Each lives in its own folder under [`kit/companions/`](kit/companions/), with a README. To make
your own, copy the fully commented [`_example/`](kit/companions/_example/).

## Use it in three steps

1. Copy the `kit/` folder into your app (for example `src/kit/`).
2. Import the styles once: `import '@/kit/react/companion.css'`.
3. Render it:

```tsx
'use client'

import { Companion } from '@/kit/react/Companion'
import { recei } from '@/kit/companions'

const answers = [{ question: 'What is this app?', answer: 'A short, true answer.' }]

export function AppCompanion() {
  return <Companion character={recei} answers={answers} />
}
```

## What it does for you

- Rests and peeks, strolls every 12 to 26 seconds, and sometimes flips, cartwheels or jumps.
- Eyes follow the pointer; it blinks, waves and smiles.
- Tap it for a frosted panel of your questions and fixed answers. Escape closes it.
- Stays still while open, while the tab is hidden, and always under reduced motion.
- No dependencies beyond React. Plain TypeScript and CSS you can read and change.

## The workshop

Ten short chapters, about two hours in total, from "why a companion?" to drawing your own and
shipping it. Read them at [companion.jishanahmed.in/workshop](https://companion.jishanahmed.in/workshop)
or in [`workshop/`](workshop/). Running a session? See
[docs/running-the-workshop.md](docs/running-the-workshop.md).

## Repository map

```text
kit/                   the copy-in kit (this is the product)
  core/                types and pure behaviour rules (no React)
  react/               <Companion>, <Figure>, companion.css
  companions/          one folder per companion, plus _example/ to copy
workshop/              chapters 01 to 10 (source of truth for the site)
src/                   the Next.js site that teaches and dogfoods the kit
tests/unit/            Vitest: behaviour rules, every companion, the component
tests/e2e/             Playwright: the site on desktop and phones
docs/                  architecture, facilitator guide, changelog
```

## Run the site locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run verify     # lint, typecheck, format, unit tests, production build
npm run test:e2e   # browser tests (starts the dev server if needed)
```

No environment variables or services are needed.

## License

[MIT](LICENSE) © 2026 Jishanahmed AR Shaikh
