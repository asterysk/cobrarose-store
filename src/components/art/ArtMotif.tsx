import type { ArtSlot } from '../../data/products'
import { StrokeArt } from './StrokeArt'

// Interim art system (media parked, AGENTS.md §7). Hand-authored single-stroke
// SVG line studies: one continuous path each, ~1.5px, currentColor, object
// silhouettes only, no figures, no shading. v4: unique silhouette per object
// product; register motifs kept for capacity/returned products and reused as
// collection header motifs.
const paths: Record<ArtSlot, string> = {
  // --- register motifs -------------------------------------------------
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

  // --- per-product silhouettes (object register) -----------------------
  // loose coil, one end trailing
  'length-of-jute':
    'M 92 84 C 78 90, 60 88, 44 78 C 28 68, 24 50, 34 38 C 44 26, 62 24, 72 34 C 82 44, 82 60, 72 68 C 64 75, 52 74, 47 66 C 43 59, 47 51, 55 50 C 61 49, 66 53, 66 59',
  // soft band, gentle curve, ties falling to one side
  blindfold:
    'M 12 46 C 28 38, 72 38, 88 46 C 88 54, 84 58, 76 60 C 58 64, 42 64, 24 60 C 16 58, 12 54, 12 46 C 70 62, 86 66, 88 78 C 89 84, 87 88, 83 91',
  // heap of crystals inside a shallow dish
  salt: 'M 16 60 C 20 74, 36 82, 50 82 C 64 82, 80 74, 84 60 C 70 66, 30 66, 16 60 C 30 58, 34 44, 50 40 C 66 44, 70 58, 84 60',
  // open cuff ring, buckle tongue suggested by a break in the stroke
  'cuff-leather-lined':
    'M 62 22 C 78 30, 86 48, 80 64 C 74 80, 56 88, 40 82 C 26 76, 18 60, 22 46 C 25 34, 36 25, 48 24',
  // low pillar, single flame teardrop, one wax drip
  'candle-low-temperature':
    'M 36 84 L 36 52 C 44 48, 56 48, 64 52 L 64 84 C 56 87, 44 87, 36 84 C 50 46, 50 42, 50 38 C 45 31, 46 22, 50 15 C 54 22, 55 31, 50 38 C 67 54, 70 60, 69 67 C 68 71, 67 73, 66 74',
  // simple bottle, long neck, one drop suspended
  'oil-unscented':
    'M 42 14 C 42 24, 42 29, 40 35 C 36 43, 32 51, 32 61 C 32 75, 40 84, 50 84 C 60 84, 68 75, 68 61 C 68 51, 64 43, 60 35 C 58 29, 58 24, 58 14 C 52 12, 48 12, 42 14 C 50 46, 50 50, 50 54 C 47 57, 47 61, 50 63 C 53 61, 53 57, 50 54',
  // unmarked steel key, plain bow, minimal bit
  key: 'M 82 80 L 44 42 C 50 48, 50 58, 44 64 C 38 70, 28 70, 22 64 C 16 58, 16 48, 22 42 C 28 36, 38 36, 44 42 C 56 54, 64 62, 68 66 L 62 72 C 70 76, 78 79, 82 80',
  // length of cloth mid-fall, one S-curve
  'silk-2m':
    'M 30 10 C 54 22, 46 44, 52 58 C 58 72, 72 78, 70 90 C 56 82, 40 74, 38 56 C 36 40, 44 24, 30 10',
  // single rattan line with a slight flex, handle crook
  cane: 'M 22 86 C 38 66, 58 44, 76 26 C 82 20, 88 17, 91 21 C 94 25, 90 30, 83 30',
  // heavy stoneware cup in profile, one wisp of steam
  cup: 'M 28 42 C 28 62, 32 80, 50 82 C 68 80, 72 62, 72 42 C 58 46, 42 46, 28 42 C 44 34, 42 26, 46 20 C 50 14, 48 10, 46 6',
}

export function ArtMotif({
  slot,
  className,
}: {
  slot: ArtSlot
  className?: string
}) {
  return <StrokeArt d={paths[slot]} className={className} />
}
