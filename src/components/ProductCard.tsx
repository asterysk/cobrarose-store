import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { ArtMotif } from './art/ArtMotif'
import { MediaImage } from './MediaImage'

// Catalogue card: art motif, name, price string, stock string, badge.
// Photo products use their photo as the visual (v7); the SVG motif
// otherwise — same frame and aspect either way, so grids stay even.
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group flex flex-col gap-4 border border-bone/10 bg-ground p-8 transition-colors hover:border-bone/25"
    >
      <div className="flex aspect-[3/2] w-full items-center justify-center overflow-hidden border border-bone/10">
        {product.photo ? (
          <MediaImage
            filename={product.photo}
            alt={product.name}
            className="h-full w-full object-cover"
            fallback={
              <ArtMotif
                slot={product.art}
                className="h-16 w-16 text-accent transition-colors group-hover:text-bone"
              />
            }
          />
        ) : (
          <ArtMotif
            slot={product.art}
            className="h-16 w-16 text-accent transition-colors group-hover:text-bone"
          />
        )}
      </div>
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
