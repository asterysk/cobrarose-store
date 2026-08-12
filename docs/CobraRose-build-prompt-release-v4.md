# Build prompt — cobrarose-store v4 art pass (paste into Kimi Code CLI)

Read `AGENTS.md` and `docs/content-core-rev1.md` first. v1–v3 are built and live: scaffold and chrome, catalogue, furniture pages. This prompt is the v4 art pass — deepening the single-stroke SVG system. No copy changes except where stated. No new pages. No new dependencies beyond what v1 approved.

## Scope

1. **Per-product silhouettes for the ten `object` products.** Replace their shared register motif with a unique hand-authored single-stroke SVG each. Style rules for all ten: one continuous stroke, ~1.5px, currentColor, object silhouette only, no figures, no shading, abstract and restrained — a line study, not an illustration. The ten:
   - `length-of-jute` — a loose coil with one end trailing
   - `blindfold` — a soft band with a gentle curve, ties falling to one side
   - `salt` — a small heap of crystals inside a shallow dish outline
   - `cuff-leather-lined` — an open cuff ring, buckle tongue suggested by a break in the stroke
   - `candle-low-temperature` — a low pillar, single flame teardrop, one wax drip
   - `oil-unscented` — a simple bottle, long neck, one drop suspended
   - `key` — an unmarked steel key, plain bow, minimal bit
   - `silk-2m` — a length of cloth mid-fall, one S-curve
   - `cane` — a single rattan line with a slight flex, handle crook
   - `cup` — a heavy stoneware cup in profile, one wisp of steam
   Each maps through the product's existing `art` field. `capacity` and `returned` products keep their register motifs; The Sixteen Weeks keeps whatever it has.

2. **Draw-on animation.** Every single-stroke SVG (product silhouettes, register motifs, hero) draws itself once when it enters the viewport: stroke-dasharray/stroke-dashoffset animation, 1.2–1.8s, ease-out, once only — no repeat, no loop, no scroll re-trigger after first play. Must fully respect `prefers-reduced-motion` (static final state, no animation). Keep it subtle; if it draws attention to itself as an effect, slow it down.

3. **Hero refinement.** Rework the hero `coiled-form` so it reads as a coiled rope rather than a flat spiral: vary the line's spacing organically, let one end escape the coil, keep it a single continuous stroke. Same size and position. It gets the draw-on treatment too — the first thing a visitor sees is the line being laid down.

4. **Collection headers.** Each collection page heading gets a small register-appropriate stroke motif beside it (existing motifs are fine). No other layout changes.

5. **Compliance, unchanged.** No raster files. No figures in any artwork. Suggestive ceiling. All v1–v3 compliance intact (bar, gate, titles, noindex). The word "sheqinah" appears nowhere (grep).

## Acceptance criteria

- `npm run build` passes clean.
- The ten listed products each render their own distinct silhouette; nothing else changes on those pages.
- All stroke SVGs animate once on first viewport entry; with reduced-motion enabled they render static and complete.
- Hero coil reads as rope, not a spiral; animates on load.
- No layout regressions on mobile; art stays inside its slots.

## Release

Bump `src/version.ts` to "v4" and add the matching entry to the top of `src/data/versions.ts`: `v4 — art pass: per-product single-stroke silhouettes, draw-on animation, hero rope coil`.
Commit: `v4: art pass — product silhouettes, draw-on animation, hero coil`
Tag: v4
Do not push.
