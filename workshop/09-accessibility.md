# Kind to everyone

> What the kit does for accessibility, and how to keep it that way.

**Time:** 10 minutes

## Goal

Make sure your companion helps everyone and gets in nobody's way.

## Built in

| Need                | What the kit does                                                  |
| ------------------- | ------------------------------------------------------------------ |
| Keyboard            | The companion is a real `<button>`. Tab to it, press Enter.        |
| Screen readers      | Named "Ask {name}". The panel is a labelled dialog.                |
| Escape              | Closes the panel and returns focus to the companion.               |
| Answers read aloud  | The answer area is an `aria-live` region.                          |
| Reduced motion      | No strolling, peeking, blinking or tricks. It simply stays still.  |
| Decorative drawings | Every `<Figure>` is `aria-hidden`, so screen readers skip the art. |
| Visible focus       | A clear orange outline on the companion and every question.        |

## Your part

- **Do not cover important controls.** Use `avoidRight` to keep clear of a chat or help button.
- **Keep answers short.** Screen-reader users hear every word.
- **Check contrast** if you change the panel colours (`--cmp-surface`, `--cmp-ink`).
- **Test with motion reduced.** It must still be usable, just still.

## Try it yourself

1. **Keyboard:** unplug the mouse. Can you open the companion and read an answer?
2. **Screen reader:** turn on VoiceOver (Mac: Cmd + F5) or NVDA (Windows). Does it announce
   "Ask Recei, button"?
3. **Reduced motion:** turn on "Reduce motion" in your OS settings and reload.

## Check it works

All three checks above pass. The kit's own tests cover Escape, focus return and reduced motion
in `tests/unit/companion.test.tsx`.

## Exercise

Ask a teammate to use your app with only a keyboard for two minutes. Note anything the
companion made harder.
