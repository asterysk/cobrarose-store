import { useParams } from 'react-router-dom'
import { collectionBySlug } from '../data/collections'
import { productsInCollection } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import NotFound from './NotFound'

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
      <h1 className="font-display text-4xl">{collection.name}</h1>
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
