# Set up the kit

> Copy one folder into your app and import one stylesheet.

**Time:** 10 minutes

## Goal

Get the kit into a React app, ready to use.

## What you need

- A React 18 or 19 app (Next.js, Vite, Remix and others all work).
- TypeScript is recommended. The kit is written in it.

## Steps

### 1. Copy the kit

Copy the `kit/` folder from this repository into your app, for example to `src/kit/`.

```bash
git clone https://github.com/jars-demo/companion-demo
cp -r companion-demo/kit my-app/src/kit
```

**Why copy instead of install?** The kit is small and meant to be changed. Copying means you own
it: rename things, restyle it, delete what you do not need.

### 2. Import the styles once

In your root stylesheet or root layout:

```css
@import './kit/react/companion.css';
```

or, in a component:

```tsx
import '@/kit/react/companion.css'
```

### 3. Add a path alias (optional)

So imports read `@/kit/...`, add this to `tsconfig.json`:

```json
{ "compilerOptions": { "paths": { "@/*": ["./src/*"] } } }
```

### 4. Next.js only

The companion uses browser APIs, so the file that renders it needs `'use client'` at the top.
If you also read the current path with `usePathname()` (chapter 06), render that component
inside `<Suspense>`.

## What is inside

| Folder            | What it holds                                          |
| ----------------- | ------------------------------------------------------ |
| `kit/core/`       | Plain TypeScript: types and behaviour rules. No React. |
| `kit/react/`      | `<Companion>`, `<Figure>` and `companion.css`.         |
| `kit/companions/` | One folder per companion, plus `_example/` to copy.    |

## Check it works

Run your app. It should build with no errors. Nothing is visible yet; that comes next.

## Exercise

Open `kit/companions/` and read one companion's file. Notice it only draws a body.
