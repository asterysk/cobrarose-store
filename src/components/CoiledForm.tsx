import { StrokeArt } from './art/StrokeArt'

// coiled-form — hand-authored single-stroke hero motif (content core §5,
// v4 art pass). Reads as a coiled rope: spacing varies organically and one
// end escapes the coil. One continuous stroke, ~1.5px, currentColor.
// Draws itself on first view.
const COILED_FORM =
  'M 545 468 C 505 522, 420 545, 338 522 C 248 497, 178 428, 170 338 C 162 248, 212 158, 300 128 C 380 101, 472 130, 512 206 C 546 270, 528 356, 468 400 C 414 440, 336 438, 292 394 C 252 354, 250 284, 286 244 C 318 209, 374 208, 404 242 C 430 272, 426 318, 398 341 C 376 359, 344 356, 331 335 C 321 318, 327 297, 343 289'

export function CoiledForm({ className }: { className?: string }) {
  return (
    <StrokeArt
      d={COILED_FORM}
      viewBox="0 0 600 600"
      duration={1.8}
      className={className}
    />
  )
}
