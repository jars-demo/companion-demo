# Teach it to talk

> Write short, true answers, and keep the companion honest.

**Time:** 12 minutes

## Goal

Give your companion answers people actually need, in your own voice.

## How answers work

```tsx
const answers = [
  { question: 'Is my data stored?', answer: 'Only your saved lists, in your browser. Nothing else.' },
]

<Companion character={recei} answers={answers} greeting="Hi! Ask me anything." />
```

- Each question is a button. Tapping it shows its answer.
- `greeting` is the first line. It defaults to "Hi, I'm {name}."
- With no answers at all, tapping just makes the companion wave.

## Writing good answers

| Do                                  | Avoid                                  |
| ----------------------------------- | -------------------------------------- |
| One or two sentences.               | Paragraphs.                            |
| Plain words a newcomer understands. | Jargon and internal names.             |
| True today.                         | Promises about future features.        |
| "Yes, free for personal use."       | "We believe in accessibility for all." |

Aim for 3 to 6 questions. More than that and nobody reads them.

## Why fixed answers?

A companion that makes things up is worse than no companion. Fixed answers can be reviewed,
tested and trusted. That is why the kit has no AI built in.

## If you add AI later

Some apps will want free-form questions. If you add a model, keep these rules:

1. **Answer only from your own docs.** Pass them in; tell the model to say "I don't know" when
   the answer is not there.
2. **Show where the answer came from.** Link the page it used.
3. **Keep the fixed answers too.** The most common questions should never depend on a model.

The [Receipts](https://wispr.jishanahmed.in) app follows the same idea: every AI answer must
point to real lines, or it is shown as "Can't tell".

## Check it works

Tap your companion. Every question shows its answer, and the text reads naturally out loud.

## Exercise

Read your answers aloud to someone who has never seen your app. Rewrite any they had to ask
about.
