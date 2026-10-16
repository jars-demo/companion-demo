import type { Metadata } from 'next'
import Link from 'next/link'

import { CHARACTERS } from '@kit/companions'
import { CompanionCard } from '@/components/CompanionCard'

export const metadata: Metadata = { title: 'Companions' }

export default function CompanionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-16 pb-28">
      <header className="rise mb-12 flex flex-col gap-3">
        <span className="text-[12px] font-medium tracking-[0.16em] text-muted uppercase">
          The directory
        </span>
        <h1 className="font-display text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
          Meet the <em className="text-gradient italic">companions.</em>
        </h1>
        <p className="max-w-xl text-[17px] leading-relaxed text-ink-2">
          Six friends, ready to drop in. Make one your companion on this site, copy its code, or{' '}
          <Link
            href="/workshop/05-draw-your-own"
            className="text-accent-text underline underline-offset-4"
          >
            draw your own
          </Link>{' '}
          from the example in <code className="font-mono text-[15px]">kit/companions/_example</code>
          .
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHARACTERS.map((character) => (
          <CompanionCard key={character.id} id={character.id} />
        ))}
      </ul>
    </div>
  )
}
