import type { ArtSlot } from '../../data/products'

// Interim art system (media parked, AGENTS.md §7): hand-authored abstract
// single-stroke SVG motifs. ~1.5px stroke, currentColor, one continuous
// path each. Object silhouettes only, no figures. `rope` is the distinct
// coil/knot motif for rope-collection items.
const paths: Record<ArtSlot, string> = {
  // vessel silhouette
  object:
    'M 28 24 C 26 50, 30 80, 50 82 C 70 80, 74 50, 72 24 C 60 28, 40 28, 28 24',
  // rising line
  capacity: 'M 14 74 C 30 74, 34 52, 50 52 C 66 52, 70 28, 86 28',
  // returning stroke
  returned:
    'M 78 26 C 52 20, 26 34, 26 56 C 26 74, 44 84, 60 78 C 72 74, 76 62, 68 54 C 62 48, 52 50, 50 58',
  // coil / knot
  rope: 'M 22 68 C 20 40, 44 22, 60 32 C 76 42, 64 68, 48 62 C 36 57, 40 38, 56 36 C 76 33, 86 52, 78 70 C 72 82, 60 84, 52 78',
}

export function ArtMotif({
  slot,
  className,
}: {
  slot: ArtSlot
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[slot]} />
    </svg>
  )
}
