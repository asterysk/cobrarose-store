# Build prompt — cobrarose-store v3 furniture pages (paste into Kimi Code CLI)

Read `AGENTS.md` and `docs/content-core-rev1.md` first. v1 (scaffold, chrome, age gate, storefront, version system) and v2 (catalogue: collections index, five collection pages, twenty product pages, featured row, SVG motifs) are built and live. This prompt builds v3: the store-furniture pages. All copy is transcribed verbatim from the content core — never rewritten. This completes the site; do not invent additional pages.

## Scope

1. **Page data.** Add the furniture pages to the data layer (`src/data/pages.ts` or equivalent), implementing content core §3.4-style structure: eyebrow, heading, standfirst, sections with body arrays, items tables, pullquotes, optional CTA. Sources:
   - `/returns` — content core §8 (heading "Returns", standfirst, three body paragraphs, pullquote, "How a return is made" table, "What is not required" list)
   - `/aftercare` — §9 (heading "Care Instructions", standfirst, four sections: why every product has one / drop / what care consists of table / storage and retirement)
   - `/cart` — §10.1 (heading "This is a mockup. There is no cart.", all three body paragraphs, CTA `{label: "Start a conversation", action: "mailto:connect@cobrarose.store"}`, sub-line). The disambiguation must be the first screen content — nothing decorative above the heading.
   - `/about` — §10.2 (heading "About this shop", standfirst, sections: Plainly / What the work is + pullquote / Five threads table + closing line / How it is held table + pullquote / Why it is not open)
   - `/threshold` — §10.3 (eyebrow "Restock notification", heading "The Threshold", standfirst, four sections incl. "What is assessed" table, CTA `{label: "Begin the conversation", action: "mailto:connect@cobrarose.store"}`). **No navigation link anywhere** — reached only from The Sixteen Weeks product page and direct URL.
   - `/terms` — §12 (heading, standfirst, nine numbered clauses, verbatim)
   - `/privacy` — §13 (heading, standfirst, seven numbered clauses, verbatim)

2. **Shared page template.** One furniture-page component driven by the data: eyebrow, H1, standfirst, sections with prose, clean tables (styled, quiet borders, generous padding), pullquotes (large serif, accent rule), optional CTA button (understated outline style, not a buy button). Keep the dark editorial system; restrained.

3. **Wire the navigation.** Header nav items Returns / Aftercare / About now resolve. Footer links Returns / Aftercare / Terms / Privacy / connect@cobrarose.store all live (email is a mailto). Cart (0) in header resolves to /cart.

4. **Compliance, unchanged.** Title suffix pattern maintained per page (e.g. `Returns — Cobra Rose — UX mockup`). `noindex, nofollow` untouched. Disclosure bar on all new pages. Age gate covers all new routes including direct entry. No forms, no capture, no figures, no raster, and the word "sheqinah" appears nowhere (grep to confirm).

## Acceptance criteria

- `npm run build` passes clean.
- All seven routes render with verbatim copy; tables and pullquotes styled per template.
- `/cart` disambiguates within the first screen.
- `/threshold` has no incoming nav links; reachable from The Sixteen Weeks product page.
- Header and footer links all resolve; no 404s remain in the navigation.
- All new routes lazy-load.

## Release

Bump `src/version.ts` to "v3" and add the matching entry to the top of `src/data/versions.ts`: `v3 — furniture pages: returns, aftercare, cart, about, threshold, terms, privacy. Site complete.`
Commit: `v3: furniture pages — returns, aftercare, cart, about, threshold, terms, privacy`
Tag: v3
Do not push.
