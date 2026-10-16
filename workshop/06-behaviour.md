# Behaviour: rest, stroll, tricks

> Tune how often it moves, where it walks, and what it does when the page changes.

**Time:** 12 minutes

## Goal

Make the companion's movement fit your app: lively, or barely there.

## The options

| Prop         | Default | What it does                                                      |
| ------------ | ------- | ----------------------------------------------------------------- |
| `stroll`     | `true`  | Walk to a new spot every 12 to 26 seconds.                        |
| `tricks`     | `true`  | After most strolls, a page flip, a cartwheel or a squash jump.    |
| `routeKey`   | none    | Change it (for example to the path) to make it flip like a page.  |
| `avoidRight` | `80`    | Pixels kept clear on the right, for a back-to-top or chat button. |
| `size`       | `88`    | Width in pixels. Height follows.                                  |

## A calm companion

For a serious tool, keep it in its corner:

```tsx
<Companion character={sprout} answers={answers} stroll={false} tricks={false} />
```

It still peeks, blinks, follows the pointer and opens on tap.

## Flip on every page change (Next.js)

```tsx
'use client'

import { usePathname } from 'next/navigation'

export function AppCompanion() {
  const pathname = usePathname()
  return <Companion character={inky} answers={answers} routeKey={pathname} />
}
```

Render it inside `<Suspense>` in your layout, because `usePathname()` reads the URL.

## Where the rules live

All movement decisions are plain functions in `kit/core/behaviour.ts`, so you can read them and
change them:

- `strollBounds()`: the strip it may walk in.
- `pickStrollTarget()`: where to walk next, never a shuffle on the spot.
- `walkDuration()`: 120 pixels per second.
- `nextStrollDelay()`: 12 to 26 seconds between strolls.
- `pickTrick()`: a trick 70% of the time.

They take randomness as an argument, which is why `tests/unit/behaviour.test.ts` can check them
exactly.

## It always knows when to stop

The companion stays still while its panel is open, while the tab is hidden, and **always** for
people who prefer reduced motion. You do not have to add this; it is built in.

## Check it works

Set `stroll={false}` and reload: it stays in its corner. Change `avoidRight` to `300` and watch
it keep further from the right edge.

## Exercise

Make strolls rarer: change `nextStrollDelay`'s default minimum from 12 to 30 seconds, then run
`npm test` and update the test you broke on purpose.
