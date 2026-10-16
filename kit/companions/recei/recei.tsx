import type { CharacterDefinition } from '../../core/types'

// Recei: A receipt that keeps things honest.
// Body only; the kit draws the eyes, mouth, arms and legs at the points below.

export const recei: CharacterDefinition = {
  id: 'recei',
  name: 'Recei',
  tagline: 'A receipt that keeps things honest.',
  personality: 'Tidy and curious. Strolls, then checks its tick is still there.',
  palette: { body: '#fffdf8', ink: '#141412', cheek: '#ff5a1f', accent: '#ff5a1f' },
  body: (p) => (
    <>
      <path
        d="M30 14h60a8 8 0 0 1 8 8v112l-7-5-7 5-7-5-7 5-7-5-7 5-7-5-7 5-7-5-7 5-7-5V22a8 8 0 0 1 8-8Z"
        fill={p.body}
        stroke={p.ink}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <rect x="40" y="84" width="40" height="3.5" rx="1.75" fill="#d6d6d3" />
      <rect x="40" y="94" width="26" height="3.5" rx="1.75" fill="#d6d6d3" />
      <path
        d="m70 102 5 5 10-11"
        fill="none"
        stroke={p.accent}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  face: { leftEye: [47, 50], rightEye: [73, 50], mouth: [60, 68] },
  arms: { left: [24, 80], right: [96, 78] },
  legs: { left: [48, 134], right: [72, 134] },
}
