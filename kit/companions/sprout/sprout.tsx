import type { CharacterDefinition } from '../../core/types'

// Sprout: A potted plant that grows with you.
// Body only; the kit draws the eyes, mouth, arms and legs at the points below.

export const sprout: CharacterDefinition = {
  id: 'sprout',
  name: 'Sprout',
  tagline: 'A potted plant that grows with you.',
  personality: 'Calm and patient. Waves its leaves when you visit.',
  palette: { body: '#e8875c', ink: '#141412', cheek: '#fde68a', accent: '#4caf50' },
  body: (p) => (
    <>
      <path
        d="M60 64C60 46 50 34 34 30c0 18 12 30 26 34Z"
        fill={p.accent}
        stroke={p.ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M60 64c0-22 12-38 30-44 2 22-10 40-30 44Z"
        fill={p.accent}
        stroke={p.ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M36 74h48l-6 60H42Z"
        fill={p.body}
        stroke={p.ink}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <rect
        x="28"
        y="62"
        width="64"
        height="14"
        rx="4"
        fill={p.body}
        stroke={p.ink}
        strokeWidth="3.5"
      />
    </>
  ),
  face: { leftEye: [49, 94], rightEye: [71, 94], mouth: [60, 110] },
  arms: { left: [37, 100], right: [83, 100] },
  legs: { left: [48, 134], right: [72, 134] },
}
