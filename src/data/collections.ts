export type CollectionSlug =
  | 'regulation'
  | 'desire'
  | 'rope'
  | 'power'
  | 'integration'

export interface Collection {
  slug: CollectionSlug
  name: string
  /** §5 collections strip one-liner */
  line: string
  /** §6 collection page standfirst */
  standfirst: string
}

// Transcribed from content core §5 (tiles) and §6 (standfirsts).
export const collections: Collection[] = [
  {
    slug: 'regulation',
    name: 'Regulation',
    line: 'The ground everything else is built on',
    standfirst:
      "The body's baseline is not a mood. It is a state that determines what can be felt, what can be chosen, and what will be refused. Most work stops at settling. Settling is the beginning.",
  },
  {
    slug: 'desire',
    name: 'Desire',
    line: 'Wanting, distinguished from trained wanting',
    standfirst:
      'Wanting is information. The work is separating what she wants from what she was trained to want, and learning to tell the difference in the moment rather than afterwards.',
  },
  {
    slug: 'rope',
    name: 'Rope',
    line: 'Constraint as a technical practice',
    standfirst:
      'Trust made physical. Taught properly or not taught — circulation, nerve pathways, emergency release. There is no casual version of this.',
  },
  {
    slug: 'power',
    name: 'Power',
    line: 'Control, given and received, inside an architecture',
    standfirst:
      'Control as an architecture rather than something that happens to people. Negotiated, structured, reversible. Drop is physiology, not weakness.',
  },
  {
    slug: 'integration',
    name: 'Integration',
    line: 'What follows you home',
    standfirst:
      'The container is not the point. This collection is about the life she returns to, and whether anything actually changed in it.',
  },
]

export function collectionBySlug(
  slug: string | undefined,
): Collection | undefined {
  return collections.find((collection) => collection.slug === slug)
}
