# Anatomy of a companion

> A companion is a body plus seven anchor points. The kit draws everything else.

**Time:** 10 minutes

## Goal

Understand how a character is described, so drawing your own in chapter 05 is easy.

## The canvas

Every companion is drawn in the same **120 x 160** box:

```
x: 0 ──────────── 60 ──────────── 120
y: 0    top
   10   ┌── the body lives here ──┐
   136  └── the legs start here ──┘
   160  bottom
```

## The definition

```tsx
export const recei: CharacterDefinition = {
  id: 'recei', // lowercase, used in props and URLs
  name: 'Recei',
  tagline: 'A receipt that keeps things honest.',
  personality: 'Tidy and curious.',
  palette: { body: '#fffdf8', ink: '#141412', cheek: '#ff5a1f', accent: '#ff5a1f' },
  body: (p) => <path d="..." fill={p.body} stroke={p.ink} />, // you draw this
  face: { leftEye: [47, 50], rightEye: [73, 50], mouth: [60, 68] },
  arms: { left: [24, 80], right: [96, 78] },
  legs: { left: [48, 134], right: [72, 134] },
}
```

## Who draws what

| Part             | Drawn by | Animated by the kit                   |
| ---------------- | -------- | ------------------------------------- |
| Body and details | You      | Bobs while walking                    |
| Eyes             | The kit  | Blink, and follow the pointer         |
| Mouth and cheeks | The kit  | Smile wider while waving              |
| Arms             | The kit  | Swing while walking, wave when tapped |
| Legs             | The kit  | Step while walking                    |

That is why all six companions move the same way even though they look nothing alike.

## The palette

Four colours, always used by name:

- `body`: the main fill.
- `ink`: outlines, eyes, mouth, limbs.
- `cheek`: the blush beside the smile.
- `accent`: your own details (Recei's tick, Bolt's charge).

Drawing with `p.body` instead of `'#fffdf8'` means anyone can re-theme a companion by changing
four values.

## Check it works

Open the [Playground](/playground), pick a companion and switch between **Resting**,
**Walking** and **Waving**. Watch which parts move.

## Exercise

Open `kit/companions/bolt/bolt.tsx`. Find its seven anchor points and picture where each one
sits on the battery.
