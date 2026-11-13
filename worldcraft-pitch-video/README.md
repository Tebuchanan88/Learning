# Worldcraft pitch video

A 30-second pitch video for Worldcraft, built with Remotion: 1920x1080, 30fps, 900 frames.

## Run it

```bash
npm install
npm run dev      # preview and scrub in Remotion Studio (http://localhost:3000)
npm run render   # writes out/worldcraft-pitch.mp4
```

## Where things live

| File | What it holds |
|---|---|
| `src/theme.ts` | All on-screen wording, scene lengths and colours. Edit copy here. |
| `src/Composition.tsx` | The five scenes in order, inside one `<Series>`. |
| `src/scenes/` | One component per scene. |
| `src/components/` | Shared pieces: photo, logo mark, text line, spring helpers. |

| `public/brand/` | Logo, archway mark and the archway artwork. |
| `public/product/` | Real product screenshots, cropped. Replace these to update the product section. |

| Scene | Starts | What it shows |
|---|---|---|
| 1 Hook | 0s | Hall of doorways, with the contradiction. |
| 2 Problem | 4.5s | The five archways, cut as one doorway onto many worlds. |
| 3 Solution | 11s | Three steps on real product screens. |
| 4 Proof | 21s | The promise, on the night archway. |
| 5 Call to action | 25s | Logo, tagline and the early-access link. |

Scenes crossfade by starting 15 frames early (`OVERLAP` in `src/theme.ts`).

The product screenshots are captures from May 2026 test data; recapture before publishing.
