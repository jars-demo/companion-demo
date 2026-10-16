import type { CharacterDefinition } from '../../core/types'

/*
  ─────────────────────────────────────────────────────────────────────────────
  Example companion: Pebble, a smooth little stone.
  Copy this folder to kit/companions/<your-id>/, rename the file and the export,
  draw your own body, then add it to kit/companions/index.ts.
  ─────────────────────────────────────────────────────────────────────────────

  The canvas is a 120 x 160 viewBox:

      x: 0 ─────────── 60 ─────────── 120
      y: 0    (top)
         10   ┌─ keep the body between y = 10 and y = 136 ─┐
         136  └─ the legs start here and reach y = 154 ─────┘
         160  (bottom)

  You draw ONLY the body (and any details on it). The kit draws, at the points you give:
    face.leftEye / face.rightEye  eyes that blink and follow the pointer
    face.mouth                    a smile (and cheeks 22 px either side)
    arms.left / arms.right        arms that swing and wave
    legs.left / legs.right        legs that walk

  Tips
    - Draw with the palette, not hard-coded colours, so people can re-theme it.
    - Outline with palette.ink at strokeWidth 3 to 3.5 so it matches the other companions.
    - Put the eyes on the widest, flattest part of the body, about 26 px apart.
    - Attach arms where the body is at its widest, legs near the bottom edge.
    - Run `npm test`: the directory test validates every companion, including this one.
*/

export const example: CharacterDefinition = {
  // Lowercase letters, digits and dashes. Used in URLs and the `character` prop.
  id: 'pebble',
  name: 'Pebble',
  tagline: 'A smooth little stone that keeps you steady.',
  personality: 'Quiet and grounded. Rolls along, then settles.',

  palette: {
    body: '#d9dde3', // main fill
    ink: '#141412', // outline, eyes, mouth, arms, legs
    cheek: '#fb7185', // blush beside the smile
    accent: '#ffffff', // your own details, here a shine
  },

  // The body. Any SVG elements work: paths, ellipses, rects, groups.
  body: (p) => (
    <>
      {/* A pebble: a wide, slightly lopsided oval sitting on the legs. */}
      <path
        d="M22 96c0-30 18-50 40-50s38 18 38 46c0 26-16 42-38 42s-40-12-40-38Z"
        fill={p.body}
        stroke={p.ink}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* A highlight so it reads as smooth and shiny. */}
      <path
        d="M40 66c6-6 13-9 20-9"
        fill="none"
        stroke={p.accent}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </>
  ),

  face: { leftEye: [48, 88], rightEye: [74, 88], mouth: [61, 104] },
  arms: { left: [23, 100], right: [99, 98] },
  legs: { left: [48, 132], right: [74, 132] },
}
