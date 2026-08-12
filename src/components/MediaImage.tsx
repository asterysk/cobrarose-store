import { useState, type ReactNode } from 'react'
import { MEDIA_BASE_URL } from '../data/media'

/**
 * Image loaded from the Bunny media host. If the load fails, the SVG
 * `fallback` renders in its place — the site never shows a broken frame.
 */
export function MediaImage({
  filename,
  alt,
  className,
  eager = false,
  fallback,
}: {
  /** Filename only — the URL is built from MEDIA_BASE_URL. */
  filename: string
  alt: string
  className?: string
  /** Near-fold images only; everything else lazy-loads. */
  eager?: boolean
  fallback: ReactNode
}) {
  const [failed, setFailed] = useState(false)

  if (failed) return <>{fallback}</>

  return (
    <img
      src={`${MEDIA_BASE_URL}/${filename}`}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
