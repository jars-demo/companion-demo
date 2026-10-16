import type { CharacterDefinition } from '../../core/types'

// Inky: A drop of ink with big ideas.
// Body only; the kit draws the eyes, mouth, arms and legs at the points below.

export const inky: CharacterDefinition = {
  id: 'inky',
  name: 'Inky',
  tagline: 'A drop of ink with big ideas.',
  personality: 'Dreamy and thoughtful. Turns like a page between pages.',
  palette: { body: '#8b98f5', ink: '#141412', cheek: '#fda4af', accent: '#c7d2fe' },
  body: (p) => (
    <>
      <path
        d="M60 14C60 14 100 64 100 94a40 40 0 0 1-80 0C20 64 60 14 60 14Z"
        fill={p.body}
        stroke={p.ink}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M44 70c3-8 8-15 12-20"
        fill="none"
        stroke={p.accent}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </>
  ),
  face: { leftEye: [46, 84], rightEye: [74, 84], mouth: [60, 102] },
  arms: { left: [22, 98], right: [98, 98] },
  legs: { left: [48, 131], right: [72, 131] },
}
