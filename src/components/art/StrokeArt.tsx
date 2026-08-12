import { useEffect, useRef, useState } from 'react'

/**
 * Single-stroke SVG with draw-on animation (v4 art pass).
 * Draws itself once when it enters the viewport (stroke-dashoffset,
 * ease-out, once only — no repeat, no scroll re-trigger). Fully respects
 * prefers-reduced-motion: renders the static final state, no animation.
 */
export function StrokeArt({
  d,
  viewBox = '0 0 100 100',
  duration = 1.4,
  className,
}: {
  /** Single continuous path — one stroke per motif. */
  d: string
  viewBox?: string
  /** Seconds, kept within 1.2–1.8 per the art-pass spec. */
  duration?: number
  className?: string
}) {
  const [drawn, setDrawn] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (drawn) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setDrawn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [drawn])

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path
        d={d}
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={drawn ? 0 : 1}
        style={
          drawn
            ? { transition: `stroke-dashoffset ${duration}s ease-out` }
            : undefined
        }
      />
    </svg>
  )
}
