import Link from 'next/link'
import { Suspense } from 'react'

import { SiteCompanion } from './SiteCompanion'

// Navigation, footer and the site companion, shared by every page.

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#141412" />
      <circle cx="11.5" cy="14" r="3.2" fill="#fff" />
      <circle cx="20.5" cy="14" r="3.2" fill="#fff" />
      <circle cx="12.2" cy="13.2" r="1.3" fill="#141412" />
      <circle cx="21.2" cy="13.2" r="1.3" fill="#141412" />
      <path
        d="M11.5 20.5q4.5 3.5 9 0"
        fill="none"
        stroke="#ff5a1f"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

const NAV = [
  { href: '/companions', label: 'Companions' },
  { href: '/playground', label: 'Playground' },
  { href: '/workshop', label: 'Workshop' },
]

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-3 z-30 px-3 sm:top-4 sm:px-4">
        <nav
          aria-label="Main"
          className="glass-strong mx-auto flex h-13 max-w-5xl items-center justify-between gap-2 rounded-full pr-2 pl-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full text-[17px] font-semibold tracking-[-0.02em]"
          >
            <LogoMark />
            <span className="hidden sm:inline">Companion Kit</span>
          </Link>
          <ul className="flex items-center gap-0.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2">
            <LogoMark size={20} />
            Companion Kit, a JARS Demo workshop
          </span>
          <span>
            MIT licensed ·{' '}
            <a className="hover:text-ink" href="https://github.com/jars-demo/companion-demo">
              GitHub
            </a>
          </span>
        </div>
      </footer>
      {/* The companion reads the path to flip on page changes, so it streams in after prerendering. */}
      <Suspense fallback={null}>
        <SiteCompanion />
      </Suspense>
    </>
  )
}
