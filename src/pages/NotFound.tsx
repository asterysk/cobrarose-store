import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Not found')

  return (
    <div className="flex flex-col items-center gap-6 px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Page not found</h1>
      <p className="max-w-md text-sm leading-relaxed text-bone-dim">
        Nothing lives at this address yet.
      </p>
      <Link
        to="/"
        className="border border-bone/40 px-6 py-2.5 text-sm tracking-wide transition-colors hover:border-bone hover:bg-bone hover:text-ground"
      >
        Back to the storefront
      </Link>
    </div>
  )
}
