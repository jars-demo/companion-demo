import type { CharacterDefinition } from '../../core/types'

// Toast: Warm, golden and always ready.
// Body only; the kit draws the eyes, mouth, arms and legs at the points below.

export const toast: CharacterDefinition = {
  id: 'toast',
  name: 'Toast',
  tagline: 'Warm, golden and always ready.',
  personality: 'Cheerful and a bit dramatic. Pops up to say hi.',
  palette: { body: '#fbe3ad', ink: '#141412', cheek: '#fb923c', accent: '#c98a3b' },
  body: (p) => (
    <>
      <path
        d="M28 54C14 28 40 12 60 18c20-6 46 10 32 36v74a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6Z"
        fill={p.accent}
        stroke={p.ink}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M36 56C26 36 44 26 60 30c16-4 34 6 24 26v68a3 3 0 0 1-3 3H39a3 3 0 0 1-3-3Z"
        fill={p.body}
      />
    </>
  ),
  face: { leftEye: [47, 70], rightEye: [73, 70], mouth: [60, 88] },
  arms: { left: [28, 92], right: [92, 92] },
  legs: { left: [46, 134], right: [74, 134] },
}
