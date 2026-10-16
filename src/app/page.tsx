import Link from 'next/link'

import { CHARACTERS } from '@kit/companions'
import { CompanionParade } from '@/components/CompanionParade'
import { CodeBlock } from '@/components/CopyButton'
import { LiveFigure } from '@/components/LiveFigure'
import { CHAPTERS } from '@/lib/workshop'

const STEPS = [
  {
    title: 'Copy',
    em: 'the kit.',
    body: 'One folder, kit/. No package to install, no build step. It is yours to change.',
  },
  {
    title: 'Pick',
    em: 'a friend.',
    body: 'Choose one of six companions, or copy the commented example and draw your own.',
  },
  {
    title: 'Drop',
    em: 'it in.',
    body: 'One component. Give it a few true answers about your app and it is ready.',
  },
]

const PROMISES = [
  {
    title: 'Calm, not constant',
    body: 'It strolls now and then, rests the rest of the time, and stays still while you read its answers.',
  },
  {
    title: 'Honest answers',
    body: 'It only says what you wrote for it. No guessing, no made-up replies.',
  },
  {
    title: 'Kind to everyone',
    body: 'Keyboard friendly, screen-reader labelled, and fully still for people who prefer reduced motion.',
  },
  {
    title: 'Tiny and yours',
    body: 'Plain TypeScript, React and CSS. No dependencies beyond React.',
  },
]

const SNIPPET = `import { Companion } from '@/kit/react/Companion'
import { recei } from '@/kit/companions'

const answers = [
  { question: 'What is this app?', answer: 'A short, true answer.' },
]

<Companion character={recei} answers={answers} />`

export default function HomePage() {
  return (
    <div className="relative">
      <CompanionParade layout="home" />

      <section className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-16 pb-16 text-center sm:pt-24">
        <span className="rise text-[12px] font-medium tracking-[0.18em] text-muted uppercase">
          A JARS Demo workshop
        </span>
        <h1
          className="rise mt-5 font-display text-[3.4rem] leading-[0.95] tracking-[-0.03em] text-balance sm:text-[5.5rem]"
          style={{ '--delay': '80ms' } as React.CSSProperties}
        >
          Give your app a <em className="text-gradient italic">little friend.</em>
        </h1>
        <p
          className="rise mt-6 max-w-xl text-[17px] leading-relaxed text-ink-2"
          style={{ '--delay': '160ms' } as React.CSSProperties}
        >
          Companion Kit is a small, copy-in kit and a hands-on workshop for adding playful,
          accessible companions to any React app, like the little friend in the corner of this page.
        </p>
        <div
          className="rise mt-8 flex flex-col items-center gap-3 sm:flex-row"
          style={{ '--delay': '240ms' } as React.CSSProperties}
        >
          <Link
            href="/companions"
            className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-[15px] font-medium text-canvas transition-opacity hover:opacity-90"
          >
            Meet the companions
          </Link>
          <Link
            href="/workshop"
            className="glass inline-flex h-12 items-center rounded-full px-6 text-[15px] font-medium text-ink"
          >
            Start the workshop
          </Link>
        </div>
      </section>

      <section aria-label="The companions" className="relative mx-auto max-w-5xl px-4 pb-24">
        <div className="glass-strong flex items-end justify-center gap-1 overflow-hidden rounded-[2.5rem] px-4 pt-10 sm:gap-4">
          {CHARACTERS.map((character, index) => (
            <Link
              key={character.id}
              href="/companions"
              aria-label={`Meet ${character.name}`}
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[13px] font-medium text-muted opacity-0 transition-opacity group-hover:opacity-100">
                {character.name}
              </span>
              <div
                className="idle-bob h-24 w-16 sm:h-36 sm:w-28"
                style={{ animationDelay: `${index * 350}ms` }}
              >
                <LiveFigure
                  id={character.id}
                  className="h-full w-full transition-transform duration-300 group-hover:-translate-y-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="how-heading" className="relative mx-auto max-w-5xl px-4 pb-24">
        <h2
          id="how-heading"
          className="mb-10 text-center font-display text-5xl tracking-[-0.025em] sm:text-6xl"
        >
          Three steps, <em className="text-gradient italic">no setup.</em>
        </h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="glass lift flex flex-col gap-3 rounded-panel p-7">
              <span className="font-mono text-[13px] text-accent-text">0{index + 1}</span>
              <h3 className="font-display text-[2rem] leading-tight tracking-[-0.02em]">
                {step.title} <em className="italic">{step.em}</em>
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-8 max-w-2xl">
          <CodeBlock code={SNIPPET} />
        </div>
      </section>

      <section aria-labelledby="promise-heading" className="relative mx-auto max-w-5xl px-4 pb-24">
        <h2
          id="promise-heading"
          className="mb-10 text-center font-display text-5xl tracking-[-0.025em] sm:text-6xl"
        >
          Friendly <em className="text-gradient italic">by design.</em>
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {PROMISES.map((promise) => (
            <li key={promise.title} className="glass flex flex-col gap-2 rounded-panel p-6">
              <span className="text-[17px] font-semibold tracking-tight">{promise.title}</span>
              <span className="text-[15px] leading-relaxed text-muted">{promise.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="workshop-heading" className="relative mx-auto max-w-5xl px-4 pb-28">
        <div className="flex flex-col items-center gap-8 rounded-panel bg-ink px-6 py-14 text-center text-canvas sm:py-16">
          <h2
            id="workshop-heading"
            className="font-display text-5xl leading-[1.02] tracking-[-0.025em] text-balance sm:text-6xl"
          >
            Ten short chapters. <em className="italic text-accent">One new friend.</em>
          </h2>
          <ol className="grid w-full max-w-3xl gap-2 text-left sm:grid-cols-2">
            {CHAPTERS.map((chapter) => (
              <li key={chapter.slug}>
                <Link
                  href={`/workshop/${chapter.slug}`}
                  className="flex items-center gap-3 rounded-card bg-white/5 px-4 py-3 text-[15px] transition-colors hover:bg-white/10"
                >
                  <span className="font-mono text-[13px] text-accent">{chapter.number}</span>
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
