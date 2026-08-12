export interface CollectionTile {
  slug: string
  name: string
  line: string
}

// Content core §5 — collections strip. Static tiles, no links in v1.
export const collections: CollectionTile[] = [
  { slug: 'regulation', name: 'Regulation', line: 'The ground everything else is built on' },
  { slug: 'desire', name: 'Desire', line: 'Wanting, distinguished from trained wanting' },
  { slug: 'rope', name: 'Rope', line: 'Constraint as a technical practice' },
  { slug: 'power', name: 'Power', line: 'Control, given and received, inside an architecture' },
  { slug: 'integration', name: 'Integration', line: 'What follows you home' },
]
