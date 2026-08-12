export interface VersionEntry {
  version: string
  date: string
  note: string
}

export const versions: VersionEntry[] = [
  {
    version: 'v1',
    date: '2026-08-12',
    note: 'React scaffold, disclosure chrome, age gate, storefront shell, header version stamp, versions page.',
  },
]
