import type { CharacterDefinition } from '../core/types'

import { bolt } from './bolt/bolt'
import { inky } from './inky/inky'
import { mochi } from './mochi/mochi'
import { recei } from './recei/recei'
import { sprout } from './sprout/sprout'
import { toast } from './toast/toast'

// The companion directory. One folder per companion, each with its definition and a README.
// To add yours, copy _example/ to a new folder, rename it, draw it, and list it here.

export { bolt, inky, mochi, recei, sprout, toast }

export const CHARACTERS: readonly CharacterDefinition[] = [recei, mochi, bolt, inky, sprout, toast]

export function findCharacter(id: string): CharacterDefinition | undefined {
  return CHARACTERS.find((character) => character.id === id)
}
