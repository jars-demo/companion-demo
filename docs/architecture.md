# Architecture

## Layers

```text
kit/companions/<id>/<id>.tsx   data: who the companion is and how its body looks
          │
kit/core/behaviour.ts          rules: where to walk, when, which trick, where to look (pure)
          │
kit/react/Figure.tsx           drawing: body plus shared parts for a mood and look direction
kit/react/Companion.tsx        life: timers, pointer tracking, panel, keyboard, reduced motion
kit/react/companion.css        motion: peek, hop, walk, blink, wave, tricks, panel pop
          │
src/                           the site: directory, playground, workshop, and its own companion
```

Each layer only depends on the ones above it. The kit never imports from the site.

## How a companion lives

1. It mounts at the bottom-left, translated down so it peeks.
2. Every 12 to 26 seconds (`nextStrollDelay`), unless open, hidden or reduced-motion, it picks a
   target (`pickStrollTarget`) at least 140 px away within `strollBounds`, faces it, and walks
   there with a CSS transform transition lasting `walkDuration` (120 px per second). While
   walking, `Figure` gets `mood="walking"`: legs step, arms swing, body bobs.
3. On arrival, `pickTrick` may play a flip, spin or jump (CSS classes for 900 ms). Then it rests.
4. One `pointermove` listener, throttled with `requestAnimationFrame`, feeds `lookVector` to move
   the pupils.
5. A change of `routeKey` plays the flip, like turning a page.
6. Tapping opens a dialog of fixed answers (or just waves when there are none). Escape closes it
   and returns focus.

## Characters

A `CharacterDefinition` is data plus one render function for the body, in a 120 x 160 viewBox,
with seven anchors (two eyes, mouth, two arms, two legs). `validateCharacter` checks ids, names,
anchor bounds and eye order; the unit tests run it on every companion and on `_example`.

## The site

- Next.js 16 App Router with Cache Components. Every page is static.
- Workshop chapters are Markdown in `workshop/`, read once at build time and rendered with
  `react-markdown` and `remark-gfm`.
- The site companion reads the path (`usePathname`) to flip on navigation, so it renders inside
  `<Suspense>`. The visitor's chosen companion is kept in `localStorage` only.
- Decorative companions around the margins (`CompanionParade`) use fixed positions, not
  random ones, so server and browser render the same markup. They are hidden below `xl`.
