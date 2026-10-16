import type { CompanionAnswer } from '@kit/core/types'

// Site-wide content: what the site's own companion answers, and the workshop chapter order.

export const SITE_ANSWERS: CompanionAnswer[] = [
  {
    question: 'What is this?',
    answer:
      'Companion Kit: a small copy-in kit for adding a friendly character to your app, plus a workshop that shows you how to draw your own.',
  },
  {
    question: 'How do I add one?',
    answer:
      'Copy the kit/ folder into your project, import companion.css once, and render <Companion character={recei} />. Chapter 02 walks you through it.',
  },
  {
    question: 'Can I make my own?',
    answer:
      'Yes. Draw a body in a 120 x 160 box and say where the eyes, mouth, arms and legs go. The kit does the rest. See chapter 05.',
  },
  {
    question: 'Will it annoy people?',
    answer:
      'It only strolls now and then, stays still while open or when the tab is hidden, and stops moving entirely for people who prefer reduced motion.',
  },
  {
    question: 'Does it make things up?',
    answer:
      'No. It only shows the answers you give it. If you add an AI answer later, chapter 08 explains how to keep it honest.',
  },
]

export const CHOICE_KEY = 'companion-kit:choice'
export const CHOICE_EVENT = 'companion-kit:choose'
