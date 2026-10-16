// The companion kit. Copy the whole kit/ folder into your app, import companion.css once, and
// render <Companion character={recei} answers={...} />. See workshop chapter 02.

export * from './core/behaviour'
export type * from './core/types'
export { CHARACTERS, findCharacter, recei, mochi, bolt, inky, sprout, toast } from './companions'
export { Companion, type CompanionProps } from './react/Companion'
export { Figure } from './react/Figure'
