# Running the workshop

A facilitator guide for teaching Companion Kit to a group, in person or online.

## At a glance

|            |                                                            |
| ---------- | ---------------------------------------------------------- |
| Length     | About 2 hours (10 chapters, plus breaks)                   |
| Audience   | Developers comfortable with React basics                   |
| Group size | 5 to 40                                                    |
| Outcome    | Everyone leaves with their own companion running in an app |

## Before the session

- Share the repository link and ask people to install Node.js 22 and run `npm ci`.
- Have a starter app ready (a fresh Vite or Next.js app is fine).
- Open the live site and the playground in a browser tab to demo from.
- Test your projector at 125% zoom so the code is readable.

## Agenda

| Time | Chapter                 | Format                                |
| ---- | ----------------------- | ------------------------------------- |
| 0:00 | 01 Why a companion?     | Talk and demo. Everyone taps Recei.   |
| 0:08 | 02 Set up the kit       | Hands-on. Pair people who get stuck.  |
| 0:18 | 03 Your first companion | Hands-on. First "it moved!" moment.   |
| 0:28 | 04 Anatomy              | Talk with the playground on screen.   |
| 0:38 | Break                   |                                       |
| 0:45 | 05 Draw your own        | The big exercise. Walk the room.      |
| 1:05 | 06 Behaviour            | Hands-on. Everyone tunes their own.   |
| 1:17 | 07 Eyes and moods       | Quick demo, optional exercise.        |
| 1:27 | 08 Teach it to talk     | Writing exercise in pairs.            |
| 1:39 | 09 Kind to everyone     | Live keyboard and screen-reader test. |
| 1:49 | 10 Theme, test, ship    | Wrap up and show-and-tell.            |

## Tips that work

- **Start with the playful bit.** Let people tap the companion before you explain anything.
- **Draw on paper first** in chapter 05. A 120 x 160 sketch takes two minutes and saves twenty.
- **Show-and-tell at the end.** Three volunteers share their companion on screen. It is always
  the best part.
- **Keep chapter 09 live.** Turning on a screen reader in the room makes accessibility real.

## Common snags

| Symptom                              | Fix                                                        |
| ------------------------------------ | ---------------------------------------------------------- |
| Nothing appears                      | `companion.css` was not imported.                          |
| "window is not defined" in Next.js   | Add `'use client'` to the component that renders it.       |
| Build error about `usePathname`      | Wrap the companion in `<Suspense>`.                        |
| Companion is invisible but focusable | The body is drawn outside y 10 to 136, or has no fill.     |
| It never moves                       | Reduced motion is on in the OS. That is correct behaviour. |
| `npm test` fails on a new companion  | Read the message: it names the point or field to fix.      |
