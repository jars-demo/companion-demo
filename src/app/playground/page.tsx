import type { Metadata } from 'next'

import { Playground } from '@/components/Playground'

export const metadata: Metadata = { title: 'Playground' }

export default function PlaygroundPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-16 pb-28">
      <header className="rise mb-10 flex flex-col gap-3">
        <span className="text-[12px] font-medium tracking-[0.16em] text-muted uppercase">
          Playground
        </span>
        <h1 className="font-display text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
          Try it, <em className="text-gradient italic">then copy it.</em>
        </h1>
        <p className="max-w-xl text-[17px] leading-relaxed text-ink-2">
          Pick a companion, see its moods and tricks, set its behaviour, and copy the exact code for
          your app.
        </p>
      </header>
      <Playground />
    </div>
  )
}
