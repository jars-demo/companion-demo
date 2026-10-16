# Eyes, moods and figures

> Use the drawing on its own: on cards, empty states and loading screens.

**Time:** 10 minutes

## Goal

Reuse a companion outside the corner, with eyes that follow the pointer.

## The Figure

`<Figure>` is just the drawing, with no positioning or panel:

```tsx
import { Figure } from '@/kit/react/Figure'
import { mochi } from '@/kit/companions'

;<div style={{ width: 120, height: 160 }}>
  <Figure character={mochi} mood="waving" />
</div>
```

`mood` can be `idle`, `walking` or `waving`.

## Eyes that follow

`lookVector()` turns two points into a direction. Pass it to `look`:

```tsx
const [look, setLook] = useState({ x: 0, y: 0 })

useEffect(() => {
  const onMove = (event: PointerEvent) => {
    const box = ref.current?.getBoundingClientRect()
    if (!box) return
    setLook(lookVector({ x: box.left + box.width / 2, y: box.top + box.height / 3 }, { x: event.clientX, y: event.clientY }))
  }
  window.addEventListener('pointermove', onMove, { passive: true })
  return () => window.removeEventListener('pointermove', onMove)
}, [])

<Figure character={mochi} look={look} />
```

This site's directory cards do exactly this (`src/components/LiveFigure.tsx`).

## Ideas

- **Empty states:** a waving companion with "Nothing here yet."
- **Success screens:** a companion with the `jump` trick class.
- **Loading:** a walking companion instead of a spinner.

## Tricks on demand

The trick animations are plain CSS classes, so you can play one on any figure:

```tsx
<span className="cmp-trick-jump">
  <Figure character={toast} />
</span>
```

Classes: `cmp-trick-flip`, `cmp-trick-spin`, `cmp-trick-jump`.

## Check it works

Open the [Playground](/playground) and press each trick. Then open the
[directory](/companions) and move your pointer around: every companion watches you.

## Exercise

Add a waving companion to your app's empty state.
