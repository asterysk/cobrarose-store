export interface VersionEntry {
  version: string
  date: string
  note: string
}

export const versions: VersionEntry[] = [
  {
    version: 'v7',
    date: '2026-08-12',
    note: 'Photography: product photos, collection headers, hero band; media served from Bunny img. hostname.',
  },
  {
    version: 'v6',
    date: '2026-08-12',
    note: 'Favicon set: coil mark across svg, png, apple-touch and manifest.',
  },
  {
    version: 'v5',
    date: '2026-08-12',
    note: 'Stories: counter vignettes on returned products, /stories scenario library.',
  },
  {
    version: 'v4',
    date: '2026-08-12',
    note: 'Art pass: per-product single-stroke silhouettes, draw-on animation, hero rope coil.',
  },
  {
    version: 'v3',
    date: '2026-08-12',
    note: 'Furniture pages: returns, aftercare, cart, about, threshold, terms, privacy. Site complete.',
  },
  {
    version: 'v2',
    date: '2026-08-12',
    note: 'Full catalogue: five collections, twenty product pages, featured row, SVG art system.',
  },
  {
    version: 'v1',
    date: '2026-08-12',
    note: 'React scaffold, disclosure chrome, age gate, storefront shell, header version stamp, versions page.',
  },
]
