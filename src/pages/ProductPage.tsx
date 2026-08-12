import { Link, useParams } from 'react-router-dom'
import { collectionBySlug } from '../data/collections'
import { productBySlug } from '../data/products'
import { ArtMotif } from '../components/art/ArtMotif'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import NotFound from './NotFound'

// /product/[slug] — eyebrow, name, art motif, price and stock, body,
// optional purpose block, Care, Returns, badge in the buy-button position.
// Only The Sixteen Weeks renders a CTA (to /threshold).
export default function ProductPage() {
  const { slug } = useParams()
  const product = productBySlug(slug)
  useDocumentTitle(product?.name ?? 'Not found')

  if (!product) return <NotFound />

  const eyebrow = product.collection
    ? collectionBySlug(product.collection)!.name
    : 'Cobra Rose'

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-widest text-bone-dim uppercase">
        {product.collection ? (
          <Link
            to={`/collections/${product.collection}`}
            className="transition-colors hover:text-bone"
          >
            {eyebrow}
          </Link>
        ) : (
          eyebrow
        )}
      </p>

      <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
        {product.name}
      </h1>

      <ArtMotif
        slot={product.art}
        className="mt-12 h-28 w-28 text-accent md:h-36 md:w-36"
      />

      <p className="mt-8 text-sm text-bone-dim">
        {product.price} · {product.stock}
      </p>

      <div className="mt-10 space-y-6 leading-relaxed">
        {product.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {product.purpose && (
        <p className="mt-10 border-l-2 border-accent pl-6 leading-relaxed">
          <span className="font-display">What it is actually for: </span>
          {product.purpose}
        </p>
      )}

      <dl className="mt-12 space-y-6 border-t border-bone/10 pt-10 text-sm leading-relaxed">
        <div>
          <dt className="inline font-display text-base">Care: </dt>
          <dd className="inline text-bone-dim">{product.care}</dd>
        </div>
        <div>
          <dt className="inline font-display text-base">Returns: </dt>
          <dd className="inline text-bone-dim">{product.returns}</dd>
        </div>
      </dl>

      <div className="mt-12 space-y-4">
        <span className="block border border-bone/30 px-6 py-4 text-center font-[system-ui] text-sm tracking-wide text-bone-dim">
          {product.badge}
        </span>
        {product.cta && (
          <Link
            to={product.cta.action}
            className="block border border-accent px-6 py-4 text-center text-sm tracking-wide text-accent transition-colors hover:bg-accent hover:text-bone"
          >
            {product.cta.label}
          </Link>
        )}
      </div>
    </article>
  )
}
