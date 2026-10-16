# Draw your own

> Copy the example, draw a body, place seven points, and add it to the directory.

**Time:** 20 minutes

## Goal

Make a brand-new companion that walks, waves and blinks like the others.

## Steps

### 1. Copy the example

```bash
cp -r kit/companions/_example kit/companions/ziggy
mv kit/companions/ziggy/example.tsx kit/companions/ziggy/ziggy.tsx
```

The example, **Pebble**, is fully commented. Read it once before changing anything.

### 2. Rename it

In `ziggy.tsx`, rename the export and fill in who it is:

```tsx
export const ziggy: CharacterDefinition = {
  id: 'ziggy',
  name: 'Ziggy',
  tagline: 'A lightning-fast sticky note.',
  personality: 'Restless and helpful.',
  palette: { body: '#fef08a', ink: '#141412', cheek: '#fb7185', accent: '#facc15' },
  // ...
}
```

### 3. Draw the body

Replace the pebble path with your own shape. A sticky note is just a rounded square with a
folded corner:

```tsx
body: (p) => (
  <>
    <path d="M24 22h72v86l-24 26H24Z" fill={p.body} stroke={p.ink} strokeWidth="3.5" strokeLinejoin="round" />
    <path d="M96 108H72v26" fill={p.accent} stroke={p.ink} strokeWidth="3.5" strokeLinejoin="round" />
  </>
),
```

**Tips that make it look right**

- Keep the body between `y = 10` and `y = 136`.
- Outline with `p.ink` at `strokeWidth` 3 to 3.5, like the others.
- Sketch on paper first, or draw in Figma at 120 x 160 and copy the SVG path.

### 4. Place the seven points

```tsx
face: { leftEye: [47, 58], rightEye: [73, 58], mouth: [60, 76] },
arms: { left: [24, 80], right: [96, 80] },
legs: { left: [46, 134], right: [70, 134] },
```

- Eyes on the widest, flattest part, about 26 apart.
- Arms where the body is widest.
- Legs on the bottom edge.

### 5. Add it to the directory

In `kit/companions/index.ts`:

```ts
import { ziggy } from './ziggy/ziggy'

export const CHARACTERS = [recei, mochi, bolt, inky, sprout, toast, ziggy]
```

Give it a `README.md` in its folder, like the others.

## Check it works

```bash
npm test
```

The directory test validates every companion: a unique lowercase id, a name, every point inside
the canvas, and the left eye on the left. Then open `/companions` and find Ziggy.

## Exercise

Draw a companion for **your** app's domain: a coffee cup for a café, a ticket for an events app,
a leaf for a gardening tool.
