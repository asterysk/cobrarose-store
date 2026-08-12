import { useParams } from 'react-router-dom'
import { collectionBySlug, type CollectionSlug } from '../data/collections'
import { productsInCollection, type ArtSlot } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { ArtMotif } from '../components/art/ArtMotif'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import NotFound from './NotFound'

// Small register-appropriate stroke motif beside each collection heading
// (v4 art pass) — register motifs reused, no new artwork.
const headerMotifs: Record<CollectionSlug, ArtSlot> = {
  regulation: 'object',
  desire: 'capacity',
  rope: 'rope',
  power: 'object',
  integration: 'returned',
}

// /collections/[slug] — heading, standfirst (§6), product grid.
// The Sixteen Weeks belongs to no collection grid (content core, v2 prompt).
export default function CollectionPage() {
  const { slug } = useParams()
  const collection = collectionBySlug(slug)
  useDocumentTitle(collection?.name ?? 'Not found')

  if (!collection) return <NotFound />

  const items = productsInCollection(collection.slug)

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-center gap-5">
        <ArtMotif
          slot={headerMotifs[collection.slug]}
          className="h-10 w-10 shrink-0 text-accent"
        />
        <h1 className="font-display text-4xl">{collection.name}</h1>
      </div>
      <p className="mt-6 max-w-2xl leading-relaxed text-bone-dim">
        {collection.standfirst}
      </p>
      <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
