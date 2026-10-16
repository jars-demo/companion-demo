import { CHARACTERS } from '@kit/companions'

import { LiveFigure } from './LiveFigure'

// Companions scattered around a page's margins, peeking in at playful angles. Decorative only:
// hidden from assistive tech, and placed by fixed positions (not random) so server and browser
// render the same thing. Shown from wide screens up, so they never cover content on phones.

type Spot = { id: string; className: string; rotate: number; delay: number }

const LAYOUTS: Record<'home' | 'workshop', Spot[]> = {
  home: [
    { id: 'mochi', className: 'top-[18rem] -left-4 h-32 w-24', rotate: 12, delay: 0 },
    { id: 'bolt', className: 'top-[34rem] -right-2 h-36 w-28', rotate: -10, delay: 400 },
    { id: 'inky', className: 'top-[62rem] left-2 h-32 w-24', rotate: -8, delay: 800 },
    { id: 'sprout', className: 'top-[86rem] right-4 h-36 w-28', rotate: 8, delay: 200 },
    { id: 'toast', className: 'top-[112rem] -left-2 h-32 w-24', rotate: 14, delay: 600 },
  ],
  workshop: [
    { id: 'toast', className: 'top-[12rem] -left-2 h-32 w-24', rotate: 10, delay: 0 },
    { id: 'inky', className: 'top-[26rem] -right-3 h-36 w-28', rotate: -12, delay: 500 },
    { id: 'bolt', className: 'top-[48rem] left-0 h-32 w-24', rotate: -6, delay: 300 },
    { id: 'mochi', className: 'top-[70rem] right-2 h-32 w-24', rotate: 9, delay: 700 },
    { id: 'sprout', className: 'top-[92rem] -left-1 h-36 w-28', rotate: 6, delay: 200 },
    { id: 'recei', className: 'top-[112rem] right-0 h-32 w-24', rotate: -9, delay: 900 },
  ],
}

export function CompanionParade({ layout }: { layout: keyof typeof LAYOUTS }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 hidden overflow-hidden xl:block"
    >
      {LAYOUTS[layout].map((spot) => {
        const character = CHARACTERS.find((c) => c.id === spot.id)
        if (!character) return null
        return (
          <div
            key={spot.id + spot.className}
            className={`absolute ${spot.className}`}
            style={{ transform: `rotate(${spot.rotate}deg)` }}
          >
            <div className="idle-bob h-full w-full" style={{ animationDelay: `${spot.delay}ms` }}>
              <LiveFigure id={character.id} className="h-full w-full" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
