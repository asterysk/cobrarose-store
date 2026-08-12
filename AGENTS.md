# AGENTS.md — cobrarose-store (v2)

**Project:** `cobrarose.store` — UX mockup of a storefront for the Cobra Rose programme.
**Status:** foundation document, owner-ruled. Changes to this file are docs-only commits.
**Doc set (the whole set):** this file + `docs/content-core-rev1.md` + future handover docs. Nothing else is canonical.

---

## 1. Project overview

A static, client-rendered SPA presenting a mock store: storefront, five collections, twenty products, store-furniture pages (returns, aftercare, cart, threshold), legal pages, age gate, and a site-wide mockup disclosure layer. **Nothing is for sale. No checkout, no payment path, no price figure, no data collection.** The only outbound action is a `mailto:` link.

The store format is the delivery mechanism, not decoration. Product copy plays it straight; disclosure chrome is deliberately flat and outside the brand voice.

## 2. Owner, repo, domain, hosting

- Owner: Steve. All accounts, pushes and deployments are owner-performed.
- Repo: `github.com/<owner>/cobrarose-store` · local: `<owner>/sites/cobrarose-store` · Cloudflare project: `cobrarose-store` — names stay aligned.
- Domain: `cobrarose.store`. Hosting: Cloudflare Workers static assets, SPA fallback.

## 3. Stack

React 19 · TypeScript strict · Vite · React Router · Tailwind CSS · shadcn/ui patterns · framer-motion (restrained). No backend, API, database, auth or SSR. No new dependency without owner approval.

## 4. Build and verification

`npm run build` is the primary gate — clean before every commit. `npm run lint` must not add errors beyond baseline. No test framework; do not add one.

## 5. Code organisation

Public copy lives in typed data modules under `src/data/` (`products.ts`, `collections.ts`, `pages.ts`, `media.ts`, `versions.ts`). Content changes are data edits, never strings hardcoded in components. Disclosure chrome (bar, badge, age gate) is a small set of dedicated components. SVG art lives in-repo.

## 6. Routing

Routes declared centrally; every page route lazy-loaded; entry chunk kept lean. Static routes before catch-alls; no two-letter root slugs. Route inventory per content core §2. `/threshold` has **no navigation link** — reached only from the sold-out product and direct URL. `/versions` ships in v1.

## 7. Content/data rules

- The catalogue is `docs/content-core-rev1.md`. Product copy is transcribed, never rewritten by build agents.
- `price` values are limited to `£—`, `£0.00`, `Not priced`, `By enquiry`. **No real figure, ever.**
- Every product renders `care`, `returns` and the badge `Mockup — not for sale` in the buy-button position. No exceptions.
- Media: **parked**. Interim treatment is line-art SVG (object silhouettes, no figures). When photography unparks (blocked on the still-life-vs-figures owner decision): **Bunny** pull zone on an `img.` hostname, Storage origin. Owner ruling 2026-08-12: Bunny, not Backblaze. Never Cloudflare Images/Stream/R2, never a path on the proxied origin, never raster files in the repo. The enquiry address is `connect@cobrarose.store` everywhere.

## 8. Editorial rules

- Voice: direct, sovereign, trained, restrained. Deadpan; the copy never winks. Explicitness ceiling: suggestive — nothing explicit in text or art.
- **HARD RULE: the word "sheqinah" never appears anywhere in this project** — copy, code, data, emails, filenames, commit messages, docs. No exceptions. Owner ruling 2026-08-12.
- Banned patterns: real prices; fake urgency; invented reviews, counts, dates or testimonials; any UI implying a transaction (card fields, payment forms, email capture, order confirmation).
- Reviews: parked, out of scope until an owner ruling.
- Disclosure copy is fixed: bar = `UX MOCKUP — not a real store. Nothing on this site is for sale.`

## 9. Compliance rules

- Age gate on every entry route including deep links; session-persisted; copy per content core §11 verbatim.
- Disclosure layer, all five placements: fixed top bar (not dismissible, chrome styling), product badge, cart first screen, age-gate second line, `Cobra Rose — UX mockup` in every `<title>`.
- `noindex, nofollow` site-wide, test build and successors, unless formally revisited.
- `/terms` and `/privacy` are written fresh in the content core as **site** terms. Never import text from any prior entity's legal documents.
- No personal data collected. No analytics. The age gate stores a session flag only; `/privacy` says exactly that and no more.

## 10. Design principles

**This site does not inherit UIAC's visual language. Own system, crafted here.**

- Line-art SVG and typography only. Visual grammar: shibari rope geometry — knots, tension lines, single continuous strokes. Object silhouettes, no figures.
- Dark editorial ground (warm near-black), bone text, one restrained accent (deep rose/oxblood). Generous whitespace. Serif display headings, self-hosted fonts (no third-party font CDN).
- Restrained motion. No carousels. No hamburger menu — always-visible desktop nav, mobile bottom tab bar.
- Header carries the version stamp (subtle, right side); it links to `/versions`. Required from v1.
- Disclosure chrome is flat, system typeface, outside the palette — scaffolding, not design.
- Do-not-reintroduce: photography (while parked), raster in repo, price figures, buy buttons, star ratings, hamburger menus, hero carousels.

## 11. Versioning and releases

- Visitor-visible change → bump `src/version.ts`, add top entry in `src/data/versions.ts`, tag `vN`. Docs-only/chore commits untagged.
- The header stamp links to `/versions`; stamp and page must never drift.
- Build prompts end: bump, versions entry, commit, tag, **do not push**.

## 12. Deployment

Vite → `dist/`; `wrangler.jsonc` serves it as Workers static assets with `not_found_handling: "single-page-application"`; no `_redirects`. Push to `main` deploys. Agents never push; owner pushes after reviewing commit and tag. Custom domain attaches only on owner decision; until then workers.dev only, also noindexed.

## 13. Agent workflow

Browser agent produces docs and build prompts → owner saves docs into `docs/` (untagged docs commits) → coding agent implements from the build prompt, builds, commits, tags locally → owner pushes. Pull first, push last; never amend/rebase shared commits; fresh-clone when moving machines; one repo per site.

## 14. Parked decisions

| Item | State |
|---|---|
| Photography | Parked on still-life-vs-figures decision; Bunny path when unparked |
| Reviews | Parked out of all current builds |
| Governing entity for legal pages | Moot for now — legal written as site terms, no entity named |
| Disclosure bar on any future live build | Removal needs an owner and a trigger |
| Cane and Cuff | In, as written (2026-08-12) |
| Enquiry route | `mailto:connect@cobrarose.store` (2026-08-12) |
| Bar wording | `UX MOCKUP` (2026-08-12) |
