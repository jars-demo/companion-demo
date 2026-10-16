'use client'

import { usePathname } from 'next/navigation'
import { useSyncExternalStore } from 'react'

import { findCharacter, recei } from '@kit/companions'
import { Companion } from '@kit/react/Companion'
import { CHOICE_EVENT, CHOICE_KEY, SITE_ANSWERS } from '@/lib/site'

// The site's own companion. Visitors can swap it from the directory; the choice is kept in this
// browser only.

function readChoice(): string {
  try {
    return window.localStorage.getItem(CHOICE_KEY) ?? 'recei'
  } catch {
    return 'recei'
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHOICE_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(CHOICE_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

export function chooseCompanion(id: string) {
  try {
    window.localStorage.setItem(CHOICE_KEY, id)
  } catch {
    // Storage blocked: the change still applies until the page reloads.
  }
  window.dispatchEvent(new Event(CHOICE_EVENT))
}

export function useChosenCompanion(): string {
  return useSyncExternalStore(subscribe, readChoice, () => 'recei')
}

export function SiteCompanion() {
  const pathname = usePathname()
  const id = useChosenCompanion()
  const character = findCharacter(id) ?? recei
  return (
    <Companion
      key={character.id}
      character={character}
      answers={SITE_ANSWERS}
      routeKey={pathname}
    />
  )
}
