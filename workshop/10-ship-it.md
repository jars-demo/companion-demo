# Theme it, test it, ship it

> Make it match your brand, prove it works, and launch it with confidence.

**Time:** 12 minutes

## Goal

Finish with a companion that looks like yours and is safe to ship.

## Theme the panel

Set these CSS variables on `:root` (or any parent):

```css
:root {
  --cmp-surface: rgb(255 255 255 / 0.9); /* panel background */
  --cmp-ink: #141412; /* panel text */
  --cmp-muted: #6b675f; /* secondary text */
  --cmp-accent: #ff5a1f; /* focus ring */
  --cmp-chip: #f3efe6; /* question buttons */
  --cmp-z: 40; /* stacking order */
}
```

To re-colour a companion, change its `palette` in its own file.

## Test it

The kit's tests show the pattern; copy them into your project.

```ts
import { validateCharacter } from '@/kit/core/behaviour'
import { ziggy } from '@/kit/companions'

it('ziggy is a valid companion', () => {
  expect(validateCharacter(ziggy)).toEqual([])
})
```

And for behaviour (with Testing Library):

```tsx
render(<Companion character={recei} answers={answers} />)
fireEvent.click(screen.getByRole('button', { name: 'Ask Recei' }))
expect(screen.getByRole('dialog')).toBeTruthy()
```

## Performance notes

- One `pointermove` listener per companion, throttled with `requestAnimationFrame`.
- All motion is CSS transforms, which the browser runs off the main thread.
- No images and no network requests: the drawings are inline SVG.

## Launch checklist

- [ ] Answers are short, true and reviewed.
- [ ] It does not cover any button (check `avoidRight`).
- [ ] Keyboard, screen reader and reduced-motion checks from chapter 09 pass.
- [ ] Tested on a phone: it fits and does not block content.
- [ ] Your tests pass.

## Check it works

Run your full test suite and a production build. Open the app on a phone and on a desktop.

## You did it

You have a companion with a personality, honest answers and good manners. Share it: open an
issue or pull request on
[jars-demo/companion-demo](https://github.com/jars-demo/companion-demo) and it might join the
directory.
