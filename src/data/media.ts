// Media served from the Bunny pull zone on the img. hostname (owner ruling
// 2026-08-12, AGENTS.md §7). Images load from Bunny only — never raster in
// the repo, never a path on the proxied origin. All URLs are built from this
// constant plus a filename from the data layer.
export const MEDIA_BASE_URL = 'https://img.cobrarose.store'

/** Storefront hero band image (full-width, between standfirst and strip). */
export const HERO_IMAGE = 'hero-coil-wide.webp'
