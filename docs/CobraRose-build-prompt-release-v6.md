# Build prompt — cobrarose-store v6 favicons (paste into Kimi Code CLI)

Read `AGENTS.md` first. v1–v5 are built and live. The owner has placed the favicon set in `public/`: `favicon.svg`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`. This prompt wires them in. No copy changes, no page changes, no new dependencies.

## Scope

1. **Verify assets.** Confirm the seven files above exist in `public/`. If any are missing, stop and say so — do not substitute or generate alternatives.

2. **Head tags.** In the HTML entry, replace the Vite default favicon reference (remove `vite.svg` if present, and delete that file from `public/` if it exists) with:
   - `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
   - `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`
   - `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`
   - `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
   - `<link rel="manifest" href="/site.webmanifest">`
   - `<meta name="theme-color" content="#16110f">`

3. **Leave everything else untouched.** Titles, robots meta, disclosure bar, gate, all routes — no changes.

## Acceptance criteria

- `npm run build` passes clean; the seven assets are copied into `dist/`.
- Tab icon shows the coil (hard-refresh to verify); no reference to `vite.svg` remains anywhere.
- No other diff beyond the head tags, asset files, version files.

## Release

Bump `src/version.ts` to "v6" and add the matching entry to the top of `src/data/versions.ts`: `v6 — favicon set: coil mark across svg, png, apple-touch and manifest`.
Commit: `v6: favicon set`
Tag: v6
Do not push.
