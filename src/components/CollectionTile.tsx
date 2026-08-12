import { Link } from 'react-router-dom'
import type { Collection } from '../data/collections'
import { MediaImage } from './MediaImage'

// Shared collections tile — used by the storefront strip and /collections.
// Header image with a dark overlay so the one-liner stays legible (v7).
export function CollectionTile({ collection }: { collection: Collection }) {
  return (
    <Link
      to={`/collections/${collection.slug}`}
      className="group relative flex flex-col justify-end gap-3 overflow-hidden bg-ground p-8 pt-24 transition-colors"
    >
      <MediaImage
        filename={collection.headerImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fallback={null}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ground/70 transition-colors group-hover:bg-ground/60"
      />
      <h3 className="relative font-display text-xl">{collection.name}</h3>
      <p className="relative text-sm leading-relaxed text-bone-dim">
        {collection.line}
      </p>
    </Link>
  )
}
