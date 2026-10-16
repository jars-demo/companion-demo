import { describe, expect, it } from 'vitest'

import {
  lookVector,
  nextStrollDelay,
  pickStrollTarget,
  pickTrick,
  strollBounds,
  validateCharacter,
  walkDuration,
} from '@kit/core/behaviour'
import { CHARACTERS, findCharacter, recei } from '@kit/companions'

const fixed = (value: number) => () => value

describe('strollBounds', () => {
  it('keeps clear of the right corner on desktop', () => {
    expect(strollBounds(1440, 88, 80)).toEqual({ min: 24, max: 1272 })
  })

  it('uses a tighter left margin on phones and never inverts', () => {
    expect(strollBounds(360, 88)).toEqual({ min: 10, max: 192 })
    expect(strollBounds(100, 88)).toEqual({ min: 10, max: 10 })
  })
})

describe('pickStrollTarget', () => {
  const bounds = { min: 24, max: 1272 }

  it('picks a spot inside the bounds', () => {
    const target = pickStrollTarget(24, bounds, fixed(0.5))
    expect(target).toBe(648)
  })

  it('never shuffles on the spot: a near target is moved to the far side', () => {
    const target = pickStrollTarget(640, bounds, fixed(0.495)) ?? 0
    expect(Math.abs(target - 640)).toBeGreaterThanOrEqual(140)
  })

  it('returns null when there is no room to stroll', () => {
    expect(pickStrollTarget(10, { min: 10, max: 100 }, fixed(0.5))).toBeNull()
  })
})

describe('walkDuration', () => {
  it('walks at a steady 120 pixels per second by default', () => {
    expect(walkDuration(0, 240)).toBe(2000)
    expect(walkDuration(240, 0)).toBe(2000)
  })
})

describe('lookVector', () => {
  it('points towards the pointer as a unit vector', () => {
    expect(lookVector({ x: 0, y: 0 }, { x: 30, y: 40 })).toEqual({ x: 0.6, y: 0.8 })
  })

  it('looks straight ahead when the pointer is on top of it', () => {
    expect(lookVector({ x: 5, y: 5 }, { x: 5, y: 5 })).toEqual({ x: 0, y: 0 })
  })
})

describe('timing and tricks', () => {
  it('waits between 12 and 26 seconds before strolling again', () => {
    expect(nextStrollDelay(fixed(0))).toBe(12_000)
    expect(nextStrollDelay(fixed(0.999))).toBeLessThan(26_000)
  })

  it('does a trick most of the time, and sometimes none', () => {
    expect(pickTrick(fixed(0.1))).toBe('flip')
    expect(pickTrick(fixed(0.9))).toBeNull()
  })
})

describe('the companion directory', () => {
  it.each(CHARACTERS.map((c) => [c.name, c] as const))('%s is a valid character', (_n, c) => {
    expect(validateCharacter(c)).toEqual([])
  })

  it('has unique ids and names', () => {
    expect(new Set(CHARACTERS.map((c) => c.id)).size).toBe(CHARACTERS.length)
    expect(new Set(CHARACTERS.map((c) => c.name)).size).toBe(CHARACTERS.length)
  })

  it('finds characters by id', () => {
    expect(findCharacter('recei')).toBe(recei)
    expect(findCharacter('nobody')).toBeUndefined()
  })

  it('reports broken definitions clearly', () => {
    const broken = { ...recei, id: 'Bad Id', face: { ...recei.face, leftEye: [200, 10] as const } }
    expect(validateCharacter(broken)).toEqual([
      'id must be lowercase letters, digits or -',
      'point 200,10 is outside the viewBox',
      'left eye must be left of the right eye',
    ])
  })
})

describe('the example companion template', () => {
  it('is valid, so the template people copy always works', async () => {
    const { example } = await import('@kit/companions/_example/example')
    expect(validateCharacter(example)).toEqual([])
  })

  it('is not listed in the directory', async () => {
    const { example } = await import('@kit/companions/_example/example')
    expect(CHARACTERS.some((c) => c.id === example.id)).toBe(false)
  })
})
