# Your first companion

> Put Recei in the corner of your app with three lines of code.

**Time:** 10 minutes

## Goal

See a companion living in your app.

## Steps

### 1. Create a component

```tsx
'use client'

import { Companion } from '@/kit/react/Companion'
import { recei } from '@/kit/companions'

const answers = [
  { question: 'What is this app?', answer: 'A place to plan your week in five minutes.' },
  { question: 'Is it free?', answer: 'Yes, free for personal use.' },
]

export function AppCompanion() {
  return <Companion character={recei} answers={answers} />
}
```

### 2. Render it once, in your root layout

```tsx
<body>
  {children}
  <AppCompanion />
</body>
```

It positions itself (fixed, bottom of the screen), so it does not matter where in the layout it
goes.

## What you get for free

- It rests in the bottom-left corner and peeks up now and then.
- Every 12 to 26 seconds it strolls somewhere new, sometimes doing a trick at the end.
- Its eyes follow your pointer, and it blinks.
- Tap it and a frosted panel opens with your questions. Tap a question to see the answer.
- **Escape** closes the panel and puts focus back on the companion.

## Try another friend

Swap `recei` for `mochi`, `bolt`, `inky`, `sprout` or `toast`. Nothing else changes.

## Check it works

1. Reload. The companion peeks from the bottom-left.
2. Tap it. Your two questions appear.
3. Press **Tab** until it is focused, then **Enter**. It opens from the keyboard too.

## Exercise

Replace the two sample answers with the three questions you wrote in chapter 01.
