import { collections } from '../data/collections'
import { CollectionTile } from '../components/CollectionTile'
import { useDocumentTitle } from '../lib/useDocumentTitle'

// /collections — the five collection tiles with their one-liners.
export default function CollectionsIndex() {
  useDocumentTitle('Collections')

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="font-display text-4xl">Collections</h1>
      <div className="mt-12 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-5">
        {collections.map((collection) => (
          <CollectionTile key={collection.slug} collection={collection} />
        ))}
      </div>
    </div>
  )
}
