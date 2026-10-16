import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { mochi, recei } from '@kit/companions'
import { Companion } from '@kit/react/Companion'

const answers = [
  { question: 'What is this?', answer: 'A friendly demo.' },
  { question: 'Is it free?', answer: 'Yes.' },
]

beforeEach(() => {
  vi.stubGlobal(
    'matchMedia',
    vi
      .fn()
      .mockReturnValue({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }),
  )
})

afterEach(() => {
  cleanup()
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('<Companion>', () => {
  it('starts closed with an accessible button', () => {
    render(<Companion character={recei} answers={answers} />)

    const button = screen.getByRole('button', { name: 'Ask Recei' })
    expect(button.getAttribute('aria-expanded')).toBe('false')
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('opens a panel with a greeting and shows the fixed answer for a question', () => {
    render(<Companion character={recei} answers={answers} />)
    fireEvent.click(screen.getByRole('button', { name: 'Ask Recei' }))

    expect(screen.getByRole('dialog', { name: 'Questions for Recei' }).textContent).toContain(
      'Hi, I’m Recei.',
    )
    fireEvent.click(screen.getByRole('button', { name: 'Is it free?' }))
    expect(screen.getByText('Yes.')).toBeTruthy()
  })

  it('uses a custom greeting', () => {
    render(<Companion character={mochi} answers={answers} greeting="Hello friend!" />)
    fireEvent.click(screen.getByRole('button', { name: 'Ask Mochi' }))
    expect(screen.getByText('Hello friend!')).toBeTruthy()
  })

  it('closes on Escape and returns focus to the companion', () => {
    render(<Companion character={recei} answers={answers} />)
    const button = screen.getByRole('button', { name: 'Ask Recei' })
    fireEvent.click(button)
    fireEvent.keyDown(window, { key: 'Escape' })

    expect(screen.queryByRole('dialog')).toBeNull()
    expect(document.activeElement).toBe(button)
  })

  it('closes with the close button', () => {
    render(<Companion character={recei} answers={answers} />)
    fireEvent.click(screen.getByRole('button', { name: 'Ask Recei' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('just says hi (no panel) when it has no answers', () => {
    render(<Companion character={recei} />)
    fireEvent.click(screen.getByRole('button', { name: 'Say hi to Recei' }))
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('strolls after a while when motion is allowed', () => {
    vi.useFakeTimers()
    const { container } = render(<Companion character={recei} answers={answers} />)
    const root = container.firstElementChild as HTMLElement
    const before = root.style.transform

    act(() => {
      vi.advanceTimersByTime(6_100)
    })
    expect(root.style.transform).not.toBe(before)
  })

  it('stays put when the user prefers reduced motion', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }))
    vi.useFakeTimers()
    const { container } = render(<Companion character={recei} answers={answers} />)
    const root = container.firstElementChild as HTMLElement
    const before = root.style.transform

    act(() => {
      vi.advanceTimersByTime(60_000)
    })
    expect(root.style.transform).toBe(before)
  })
})
