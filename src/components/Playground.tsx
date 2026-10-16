'use client'

import { useState } from 'react'

import { CHARACTERS, recei } from '@kit/companions'
import type { Mood, Trick } from '@kit/core/types'
import { Figure } from '@kit/react/Figure'

import { CodeBlock } from './CopyButton'

// Try a companion's moods and tricks, set its options, and copy the exact code to use.

const MOODS: { id: Mood; label: string }[] = [
  { id: 'idle', label: 'Resting' },
  { id: 'walking', label: 'Walking' },
  { id: 'waving', label: 'Waving' },
]

const TRICK_LIST: { id: Trick; label: string }[] = [
  { id: 'flip', label: 'Page flip' },
  { id: 'spin', label: 'Cartwheel' },
  { id: 'jump', label: 'Squash jump' },
]

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
        active ? 'bg-ink text-canvas' : 'bg-surface text-ink-2 shadow-soft hover:bg-surface-2'
      }`}
    >
      {children}
    </button>
  )
}

export function Playground() {
  const [character, setCharacter] = useState(recei)
  const [mood, setMood] = useState<Mood>('idle')
  const [trick, setTrick] = useState<Trick | null>(null)
  const [stroll, setStroll] = useState(true)
  const [tricks, setTricks] = useState(true)
  const [greeting, setGreeting] = useState('')

  function play(next: Trick) {
    setTrick(null)
    window.requestAnimationFrame(() => setTrick(next))
    window.setTimeout(() => setTrick(null), 1000)
  }

  const props = [
    `character={${character.id}}`,
    'answers={answers}',
    greeting.trim() ? `greeting=${JSON.stringify(greeting.trim())}` : null,
    stroll ? null : 'stroll={false}',
    tricks ? null : 'tricks={false}',
    'routeKey={pathname}',
  ].filter(Boolean)
  const code = `import { usePathname } from 'next/navigation'
import { Companion } from '@/kit/react/Companion'
import { ${character.id} } from '@/kit/companions'

const answers = [
  { question: 'What is this?', answer: 'A short, true answer.' },
]

export function AppCompanion() {
  const pathname = usePathname()
  return <Companion ${props.join(' ')} />
}`

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <section
        aria-label="Preview"
        className="glass flex min-w-0 flex-col items-center justify-end gap-4 rounded-panel p-6"
      >
        <div className="flex h-72 w-full items-end justify-center rounded-card bg-surface/60">
          <div className="h-60 w-48">
            <span className={`block h-full w-full ${trick ? `cmp-trick-${trick}` : ''}`}>
              <Figure character={character} mood={mood} />
            </span>
          </div>
        </div>
        <p className="text-sm text-muted">
          {character.name}: {character.personality}
        </p>
      </section>

      <section aria-label="Options" className="flex min-w-0 flex-col gap-6">
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-[13px] font-medium text-muted">Companion</legend>
          <div className="flex flex-wrap gap-2">
            {CHARACTERS.map((c) => (
              <Chip key={c.id} active={c.id === character.id} onClick={() => setCharacter(c)}>
                {c.name}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-[13px] font-medium text-muted">Mood</legend>
          <div className="flex flex-wrap gap-2">
            {MOODS.map((m) => (
              <Chip key={m.id} active={m.id === mood} onClick={() => setMood(m.id)}>
                {m.label}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-[13px] font-medium text-muted">Play a trick</legend>
          <div className="flex flex-wrap gap-2">
            {TRICK_LIST.map((t) => (
              <Chip key={t.id} active={false} onClick={() => play(t.id)}>
                {t.label}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-[13px] font-medium text-muted">Behaviour</legend>
          <div className="flex flex-wrap gap-2">
            <Chip active={stroll} onClick={() => setStroll((v) => !v)}>
              Strolls now and then
            </Chip>
            <Chip active={tricks} onClick={() => setTricks((v) => !v)}>
              Does tricks
            </Chip>
          </div>
        </fieldset>
        <label className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-muted">Greeting (optional)</span>
          <input
            value={greeting}
            onChange={(event) => setGreeting(event.target.value)}
            maxLength={80}
            placeholder={`Hi, I’m ${character.name}.`}
            className="glass h-11 rounded-full px-4 text-[15px] outline-none focus-visible:outline-2 focus-visible:outline-accent"
          />
        </label>
        <CodeBlock code={code} />
      </section>
    </div>
  )
}
