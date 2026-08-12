# Build prompt — cobrarose-store v5 stories (paste into Kimi Code CLI)

Read `AGENTS.md`, `docs/content-core-rev1.md` and `docs/CobraRose-stories-copy-rev1.md` first. v1–v4 are built and live. This prompt builds v5: the two story surfaces. All copy comes verbatim from the stories copy doc, which the owner has approved in full — six scenarios, four vignettes, labels unchanged. No other copy changes. No new dependencies.

## Scope

1. **Schema.** Add optional `vignette: string[]` to the product type in `src/data/products.ts`. Populate it for exactly four products — `the-apology`, `the-reflexive-smile`, `the-softened-voice`, `the-shrink` — with the vignette paragraphs from stories copy Part 1, verbatim.

2. **Vignette block.** On those four product pages only: after the body, before Care/Returns, render a block headed **At the counter.** with the vignette paragraphs, and beneath it in small muted type: *A composite, not a testimony.* Styled quieter than the body — this is an aside, not a feature.

3. **Stories data.** New `src/data/stories.ts`: six entries per stories copy Part 2 — title, body paragraphs, closing line, target path. Order exactly as in the doc.

4. **`/stories` page.** Eyebrow "Stories", H1 "Is this you?", the standfirst verbatim, and the label line *Illustrative composites — not testimonials, not clients, not events.* in small muted type above the first scenario. Six scenarios, each: title, body, and the closing line rendered as a quiet link to its collection (scenario 6 links to `/threshold`). Lazy-loaded route. Title: `Stories — Cobra Rose — UX mockup`.

5. **Links.** Footer gains `Stories` (place it after Aftercare). `/about` gains one quiet text link to `/stories` at the end of the "Plainly" section: `Six women who do not exist, and where they begin → /stories`. Header nav unchanged (stays four items). `/threshold` remains without nav links — the scenario link is editorial, not navigation.

6. **Compliance, unchanged.** Labels are mandatory and rendered exactly as written. No names, no counts of readers, no fake engagement anywhere. Bar, gate, titles, noindex untouched. No raster, no figures, and the word "sheqinah" appears nowhere (grep).

## Acceptance criteria

- `npm run build` passes clean.
- The four listed product pages show the At the counter block with label; no other product does.
- `/stories` renders all six scenarios in order, each with its closing link; labels present.
- Footer links include Stories; about page link present; header nav still four items.
- No layout regressions.

## Release

Bump `src/version.ts` to "v5" and add the matching entry to the top of `src/data/versions.ts`: `v5 — stories: counter vignettes on returned products, /stories scenario library`.
Commit: `v5: stories — counter vignettes and scenario library`
Tag: v5
Do not push.
