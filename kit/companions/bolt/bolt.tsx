import type { CharacterDefinition } from '../../core/types'

// Bolt: A battery with energy to spare.
// Body only; the kit draws the eyes, mouth, arms and legs at the points below.

export const bolt: CharacterDefinition = {
  id: 'bolt',
  name: 'Bolt',
  tagline: 'A battery with energy to spare.',
  personality: 'Quick and upbeat. Never walks when it can cartwheel.',
  palette: { body: '#f5f9ec', ink: '#141412', cheek: '#f97316', accent: '#65a30d' },
  body: (p) => (
    <>
      <rect x="48" y="14" width="24" height="12" rx="3" fill={p.ink} />
      <rect
        x="28"
        y="24"
        width="64"
        height="110"
        rx="12"
        fill={p.body}
        stroke={p.ink}
        strokeWidth="3.5"
      />
      <rect x="35" y="96" width="50" height="31" rx="6" fill={p.accent} opacity="0.85" />
      <path
        d="M63 100 55 112h8l-4 11 12-15h-8l4-8Z"
        fill="#fff"
        stroke={p.ink}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </>
  ),
  face: { leftEye: [47, 56], rightEye: [73, 56], mouth: [60, 74] },
  arms: { left: [28, 84], right: [92, 84] },
  legs: { left: [46, 134], right: [74, 134] },
}
