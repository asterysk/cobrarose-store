import { Link } from 'react-router-dom'
import type { Collection } from '../data/collections'

// Shared collections tile — used by the storefront strip and /collections.
export function CollectionTile({ collection }: { collection: Collection }) {
  return (
    <Link
      to={`/collections/${collection.slug}`}
      className="group flex flex-col gap-3 bg-ground p-8 transition-colors hover:bg-ground-raised"
    >
      <h3 className="font-display text-xl">{collection.name}</h3>
      <p className="text-sm leading-relaxed text-bone-dim">{collection.line}</p>
    </Link>
  )
}
