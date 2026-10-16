'use client'

import { useEffect, useRef, useState } from 'react'

import { lookVector } from '@kit/core/behaviour'
import { findCharacter, recei } from '@kit/companions'
import type { Mood } from '@kit/core/types'
import { Figure } from '@kit/react/Figure'

// A figure on a card or stage whose eyes follow the pointer. Takes an id, not a character,
// because characters hold a draw function, which cannot cross from server to client.

export function LiveFigure({
  id,
  mood = 'idle',
  className = '',
}: {
  id: string
  mood?: Mood
  className?: string
}) {
  const character = findCharacter(id) ?? recei
  const box = useRef<HTMLDivElement>(null)
  const [look, setLook] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let frame = 0
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = box.current?.getBoundingClientRect()
        if (!rect) return
        setLook(
          lookVector(
            { x: rect.left + rect.width / 2, y: rect.top + rect.height / 3 },
            { x: event.clientX, y: event.clientY },
          ),
        )
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={box} className={className}>
      <Figure character={character} mood={mood} look={look} />
    </div>
  )
}
