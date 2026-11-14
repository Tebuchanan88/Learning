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
| 2 Problem | 3.5s | The five archways on hard cuts that speed up, then a move through the doorway. |
| 3 Solution | 9s | Three steps on real product screens, each with a camera push-in. |
| 4 Proof | 20s | The promise, on the night archway. |
| 5 Call to action | 24.5s | Logo, tagline and the early-access link. |

Most scenes change on a hard cut. Only the two moves onto the paper background crossfade (`OVERLAP` in `src/theme.ts`).

The product screenshots are captures from May 2026 test data; recapture before publishing.
