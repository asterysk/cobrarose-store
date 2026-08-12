# Build prompt — cobrarose-store v1 (paste into Kimi Code CLI)

The repo currently contains v0: a placeholder `index.html` at root and a `wrangler.jsonc` serving the root. Read `AGENTS.md` and `docs/content-core-rev1.md` first and follow them exactly. This prompt replaces the placeholder with the real v1: React scaffold, disclosure chrome, age gate, storefront shell, version system. Catalogue and furniture pages come in later versions — do not build ahead.

## Scope

1. **Scaffold.** Vite + React 19 + TypeScript (strict) + React Router + Tailwind CSS, built in the repo root. Delete the placeholder `index.html`. Approved dependencies: react, react-dom, react-router-dom, tailwindcss + tooling, framer-motion, clsx, tailwind-merge, class-variance-authority, lucide-react, and @fontsource packages for the fonts below. Nothing else without asking.
2. **Wrangler.** Update `wrangler.jsonc`: serve `dist` as Workers static assets with `not_found_handling: "single-page-application"`. Project name stays `cobrarose-store`. No `_redirects` file.
3. **Routing.** Central route declaration. v1 routes: `/`, `/versions`, catch-all 404. All lazy-loaded. Static before catch-all.
4. **Design tokens.** Dark warm near-black ground (~#16110f), bone text (~#ece5dc), one accent deep rose/oxblood (~#8e3b46). Serif display for headings/wordmark (self-hosted via @fontsource — Fraunces or Cormorant Garamond), clean grotesk for body (Inter or Instrument Sans). No third-party font CDN. Generous whitespace, restrained motion.
5. **Disclosure bar.** Fixed top of viewport on every page, above the header, NOT dismissible. Flat chrome: system-ui, solid high-contrast strip, visually outside the palette. Copy exactly: `UX MOCKUP — not a real store. Nothing on this site is for sale.` Page content starts below it.
6. **Header.** Wordmark "Cobra Rose" (serif) left. Nav: Collections · Returns · Aftercare · About (target their future paths; those routes 404 in v1 — acceptable). Right: `Cart (0)` linking `/cart`, and a subtle version stamp reading `src/version.ts`, linking to `/versions`. Mobile: bottom tab bar, same destinations. No hamburger menu.
7. **Footer.** Two lines per content core §3 (mockup disclosure line; Returns · Aftercare · Terms · Privacy · connect@cobrarose.store).
8. **Age gate.** Full-viewport interstitial on every entry route including deep links. Copy verbatim from content core §11. `I am 18 or over` sets a sessionStorage flag and dismisses; `Leave` goes to `about:blank`. No scroll dismissal, no third option. Gate uses the site palette but stays spare.
9. **Storefront `/`.** Per content core §5: full-viewport hero (wordmark; the line "A body that is both weaponised sovereignty and undefended openness."; a hand-authored single-stroke SVG motif `coiled-form` — abstract coiled rope form, ~1.5px stroke, currentColor, restrained). Then the two-line standfirst ("A catalogue of what is worked with, and what is handed back. / Nothing here ships."). Then the collections strip: five tiles with their one-liners — static, no links in v1. Then the three shop notices (Stock / Returns / Delivery) in the footer band. No Featured section in v1.
10. **Versions.** `src/version.ts` exporting `"v1"`. `src/data/versions.ts` with one top entry: `{ version: 'v1', date: '<today>', note: 'React scaffold, disclosure chrome, age gate, storefront shell, header version stamp, versions page.' }`. `/versions` renders the data newest-first in a simple list.
11. **Compliance.** `<title>` pattern: page prefix allowed, suffix `Cobra Rose — UX mockup` mandatory. `<meta name="robots" content="noindex, nofollow">` site-wide. No analytics, cookies, forms or email capture. No raster image files. No price figures. The word "sheqinah" appears nowhere — grep to confirm.

## Acceptance criteria

- `npm run build` passes clean.
- Disclosure bar on every page (any screenshot contains it).
- Age gate on fresh session at `/` and at deep URLs; session flag suppresses until session ends.
- Header stamp shows `v1`, links to working `/versions`.
- Deep route (e.g. `/versions`) resolves after deployment via SPA fallback.

## Release

Bump `src/version.ts` to "v1" and add the matching entry to the top of `src/data/versions.ts`.
Commit: `v1: react scaffold, disclosure chrome, age gate, storefront shell, version system`
Tag: v1
Do not push.
