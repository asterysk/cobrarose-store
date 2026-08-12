// coiled-form — hand-authored single-stroke SVG motif (content core §5).
// Abstract coiled rope form: one continuous path, ~1.5px stroke, currentColor.
export function CoiledForm({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M 108 312
           C 108 206, 196 116, 302 116
           C 408 116, 496 206, 496 312
           C 496 398, 428 468, 342 468
           C 262 468, 196 402, 196 322
           C 196 256, 248 202, 312 202
           C 372 202, 420 250, 420 308
           C 420 352, 386 388, 342 388
           C 306 388, 276 360, 276 324
           C 276 296, 296 274, 322 272
           C 342 270, 358 282, 364 300"
      />
    </svg>
  )
}
