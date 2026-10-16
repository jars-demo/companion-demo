'use client'

import { findCharacter, recei } from '@kit/companions'

import { CopyButton } from './CopyButton'
import { LiveFigure } from './LiveFigure'
import { chooseCompanion, useChosenCompanion } from './SiteCompanion'

// One companion in the directory: a live figure, who it is, and buttons to adopt or copy it.

export function CompanionCard({ id }: { id: string }) {
  const character = findCharacter(id) ?? recei
  const chosen = useChosenCompanion() === character.id
  const snippet = `import { Companion } from '@/kit/react/Companion'\nimport { ${character.id} } from '@/kit/companions'\n\n<Companion character={${character.id}} answers={answers} />`

  return (
    <li className="glass lift flex flex-col gap-4 rounded-panel p-5">
      <div
        className="flex h-44 items-end justify-center rounded-card"
        style={{
          background: `radial-gradient(60% 70% at 50% 80%, ${character.palette.cheek}22, transparent 70%)`,
        }}
      >
        <LiveFigure id={character.id} className="idle-bob h-40 w-32" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-[2rem] leading-none tracking-[-0.02em]">
          {character.name}
        </h2>
        <p className="text-[15px] text-ink-2">{character.tagline}</p>
        <p className="text-sm text-muted">{character.personality}</p>
      </div>
      <ul className="flex gap-1.5" aria-label={`${character.name} colours`}>
        {Object.entries(character.palette).map(([part, color]) => (
          <li
            key={part}
            title={`${part}: ${color}`}
            className="size-6 rounded-full shadow-[inset_0_0_0_1px_rgb(20_20_18/0.12)]"
            style={{ background: color }}
          >
            <span className="sr-only">
              {part} {color}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => chooseCompanion(character.id)}
          aria-pressed={chosen}
          className={`inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-opacity ${
            chosen ? 'bg-accent text-ink' : 'bg-ink text-canvas hover:opacity-90'
          }`}
        >
          {chosen ? 'Your site companion' : 'Make it my companion'}
        </button>
        <CopyButton text={snippet} label="Copy code" />
      </div>
    </li>
  )
}
