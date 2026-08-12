export interface VersionEntry {
  version: string
  date: string
  note: string
}

export const versions: VersionEntry[] = [
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
