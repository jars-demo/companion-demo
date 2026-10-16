# Example companion: Pebble

A fully commented template for making your own companion. It is not listed in the directory;
it exists to be copied.

## Make your own in five steps

1. Copy this folder to `kit/companions/<your-id>/` (for example `kit/companions/ziggy/`).
2. Rename `example.tsx` to `<your-id>.tsx` and the export `example` to your id.
3. Change `id`, `name`, `tagline`, `personality` and `palette`.
4. Draw your body in the 120 x 160 viewBox and move the face, arm and leg anchors onto it.
5. Import it in `kit/companions/index.ts` and add it to `CHARACTERS`.

Then run `npm test`. The directory test checks every companion: a unique lowercase id, a name,
and every anchor inside the canvas with the left eye on the left.

## The canvas

| Area           | y range   | Who draws it        |
| -------------- | --------- | ------------------- |
| Body           | 10 – 136  | You                 |
| Eyes and mouth | on body   | The kit, at anchors |
| Arms           | on body   | The kit, at anchors |
| Legs           | 136 – 154 | The kit, at anchors |

Workshop chapter 05 walks through drawing a companion from scratch.
