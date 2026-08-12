import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { ArtMotif } from './art/ArtMotif'

// Catalogue card: art motif, name, price string, stock string, badge.
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group flex flex-col gap-4 border border-bone/10 bg-ground p-8 transition-colors hover:border-bone/25"
    >
      <ArtMotif
        slot={product.art}
        className="h-16 w-16 text-accent transition-colors group-hover:text-bone"
      />
      <h3 className="font-display text-xl leading-snug">{product.name}</h3>
      <p className="text-sm text-bone-dim">
        {product.price} · {product.stock}
      </p>
      <span className="mt-auto inline-block border border-bone/15 px-3 py-1.5 text-center font-[system-ui] text-xs tracking-wide text-bone-dim">
        {product.badge}
      </span>
    </Link>
  )
}
