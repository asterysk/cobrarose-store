# Build prompt — cobrarose-store v2 catalogue (paste into Kimi Code CLI)

Read `AGENTS.md` and `docs/content-core-rev1.md` first. v1 (scaffold, chrome, age gate, storefront shell, version system) is built and live. This prompt builds v2: the full catalogue as data-driven pages. Furniture pages (/returns, /aftercare, /cart, /about, /threshold) come in v3 — the products exist before the pages they reference. Do not build ahead.

## Scope

1. **Data modules.** Create `src/data/products.ts` and `src/data/collections.ts` implementing the field schema in content core §4 exactly. Transcribe all twenty products from content core §7 verbatim — copy is not rewritten. Transcribe the five collections and standfirsts from §6. Types in strict TypeScript; `collection` is the enum or `null` (null only for The Sixteen Weeks).

2. **Collections pages** `/collections/[slug]`. One per collection: heading, standfirst, product grid of that collection's products (cards: art motif, name, price string, stock string, badge). The Sixteen Weeks belongs to no collection grid — it appears only via Featured (below) and its own product page.

3. **Collections index** `/collections`. Simple page listing the five collection tiles with their one-liners (same tile component as the storefront strip). Point the header nav "Collections" here. The storefront collections strip tiles now link to their collection pages.

4. **Product pages** `/product/[slug]`. All twenty. Layout: eyebrow (collection name, or "Cobra Rose" for The Sixteen Weeks) · name · art motif · price and stock line · body paragraphs · optional "What it is actually for:" purpose block · Care line · Returns line · the badge `Mockup — not for sale` rendered prominently in the position a buy button would occupy. The Sixteen Weeks additionally renders its CTA: label "Notify me" linking to `/threshold` (route may 404 until v3 — acceptable). No other product carries any CTA or link to /threshold.

5. **Featured row on the storefront.** Add the Featured section per content core §5: six products — Length of Jute, Permission, Salt, The Apology, Blindfold, The Unhurried No — as cards linking to their product pages. Below the collections strip, above the shop notices.

6. **Art.** No photography, no raster files. Hand-author a small set of abstract single-stroke SVG motifs (~1.5px stroke, currentColor): one register-level motif each for `object`, `capacity`, `returned`, plus a distinct coil/knot motif for rope-collection items. Object silhouettes only, no figures, restrained. Keyed via each product's `art` field. This is the interim system until the photography decision unparks — keep it minimal and consistent.

7. **Compliance, unchanged.** Every product page shows Care, Returns and the badge — no exceptions. Price strings only from the permitted set (`£—`, `£0.00`, `Not priced`, `By enquiry`). Title suffix `— Cobra Rose — UX mockup` pattern maintained (product name as prefix is good). `noindex, nofollow` untouched. Disclosure bar untouched. No forms, no capture, no figures, no raster, and the word "sheqinah" appears nowhere (grep).

## Acceptance criteria

- `npm run build` passes clean.
- `/collections` plus all five collection pages render; grids contain the right products per §7.
- All twenty `/product/[slug]` pages render with correct copy, badge in buy position, Care and Returns lines present.
- `/threshold` is linked from exactly one place: The Sixteen Weeks product page.
- Storefront: collections tiles link; featured row shows the six specified products.
- Entry chunk stays lean; product and collection pages lazy-load.

## Release

Bump `src/version.ts` to "v2" and add the matching entry to the top of `src/data/versions.ts`: `v2 — full catalogue: five collections, twenty product pages, featured row, SVG art system`.
Commit: `v2: catalogue — collections, product pages, featured row, art motifs`
Tag: v2
Do not push.
