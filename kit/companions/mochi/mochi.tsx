import type { CharacterDefinition } from '../../core/types'

// Mochi: A soft little cloud of encouragement.
// Body only; the kit draws the eyes, mouth, arms and legs at the points below.

export const mochi: CharacterDefinition = {
  id: 'mochi',
  name: 'Mochi',
  tagline: 'A soft little cloud of encouragement.',
  personality: 'Bouncy and gentle. Loves a squashy jump.',
  palette: { body: '#fff3f6', ink: '#141412', cheek: '#f472b6', accent: '#f9a8d4' },
  body: (p) => (
    <>
      <ellipse cx="60" cy="90" rx="44" ry="44" fill={p.body} stroke={p.ink} strokeWidth="3.5" />
      <path
        d="M38 56c6-6 14-9 22-9"
        fill="none"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </>
  ),
  face: { leftEye: [46, 84], rightEye: [74, 84], mouth: [60, 100] },
  arms: { left: [17, 96], right: [103, 96] },
  legs: { left: [46, 131], right: [74, 131] },
}
