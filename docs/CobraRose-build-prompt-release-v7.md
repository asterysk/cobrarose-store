# Build prompt — cobrarose-store v7 photography (paste into Kimi Code CLI)

Read `AGENTS.md`, `docs/content-core-rev1.md` and `docs/media-register.md` first. v1–v6 are built and live. The owner has uploaded sixteen webp images to Bunny, served flat at the base URL below. This prompt wires photography into the site. No copy changes. No new dependencies.

## Media base

Create/extend `src/data/media.ts` with a single exported constant:

```ts
export const MEDIA_BASE_URL = 'https://img.cobrarose.store';
```

All image URLs are built from this constant plus a filename from the data layer. No full URLs hardcoded in components. Filenames must match `docs/media-register.md` exactly.

## Schema changes

1. `src/data/products.ts`: add optional `photo?: string` (filename only). Populate for exactly these ten products:
   - `length-of-jute` → `length-of-jute.webp`
   - `blindfold` → `blindfold.webp`
   - `salt` → `salt.webp`
   - `cuff-leather-lined` → `cuff-leather-lined.webp`
   - `candle-low-temperature` → `candle-low-temperature.webp`
   - `oil-unscented` → `oil-unscented.webp`
   - `key` → `key.webp`
   - `silk-2m` → `silk-2m.webp`
   - `cane` → `cane.webp`
   - `cup` → `cup.webp`
   `capacity` and `returned` products get no photo — SVG register motifs only, unchanged.
2. `src/data/collections.ts`: add `headerImage: string` — `collection-regulation.webp`, `collection-desire.webp`, `collection-rope.webp`, `collection-power.webp`, `collection-integration.webp` respectively.
3. Hero image: `hero-coil-wide.webp` referenced from a constant in `media.ts` or the storefront data.

## Rendering

1. **Product pages (the ten).** Photo becomes the primary visual, rendered in the existing art slot position: full width of the content column, 3:2-ish frame, subtle border consistent with the card system. The SVG silhouette is retained, rendered small beside the product name (or omitted on photo products if it clutters — keep whichever is quieter). All other products unchanged.
2. **Cards.** Anywhere a product card renders (collection grids, featured row): use the photo as the card visual when `photo` exists, the SVG motif otherwise. Same frame and aspect for both so grids stay even.
3. **Collection pages.** Header image rendered as a wide quiet band above the product grid, below heading and standfirst — not full-bleed, not a hero. Same treatment on `/collections` tiles and the storefront collections strip: image with a dark overlay so the one-liner text stays legible.
4. **Storefront hero.** Add `hero-coil-wide.webp` as a full-width band between the standfirst and the collections strip: quiet, no text overlay, ~40–50vh max height, object-fit cover centered on the lower third. The SVG hero above it stays as-is.
5. **Performance.** `loading="lazy"` on all below-fold images, explicit width/height or aspect-ratio to prevent layout shift, `decoding="async"`. No preloads beyond the hero band if it sits near the fold.
6. **Fallbacks.** If an image fails to load, render the SVG motif in its place (onError fallback) — the site must never show a broken image frame.

## Compliance, unchanged

Bar, gate, titles, noindex untouched. No figures beyond what the approved images contain (hands, draped forms). No raster files added to the repo — images load from Bunny only. The word "sheqinah" appears nowhere (grep).

## Acceptance criteria

- `npm run build` passes clean.
- Ten product pages show their photos; cards show photos where present; five collection pages show headers; storefront shows the wide band.
- Every image URL resolves from the Bunny base (spot-check network tab: requests go to img.cobrarose.store, never to a Cloudflare domain).
- Grids remain even; no layout shift on load; broken-image fallback works (test by renaming one file in data temporarily, then revert).

## Release

Bump `src/version.ts` to "v7" and add the matching entry to the top of `src/data/versions.ts`: `v7 — photography: product photos, collection headers, hero band; media served from Bunny img. hostname`.
Commit: `v7: photography wired from Bunny media host`
Tag: v7
Do not push.
