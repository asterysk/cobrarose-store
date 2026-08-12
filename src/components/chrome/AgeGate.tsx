import { useState } from 'react'

const SESSION_KEY = 'cobra-rose-age-confirmed'

// Content core §11 — interstitial, session-persisted, no scroll dismissal,
// no third option. Copy verbatim. Leave navigates to about:blank.
export function AgeGate() {
  const [confirmed, setConfirmed] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true',
  )

  if (confirmed) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-heading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ground px-6"
    >
      <div className="max-w-md space-y-6 text-center">
        <h1 id="age-gate-heading" className="font-display text-3xl leading-snug">
          This site describes an adult educational programme.
        </h1>
        <p className="text-sm text-bone-dim">
          This is a design mockup, not a store. Nothing on it is for sale.
        </p>
        <p className="text-sm leading-relaxed">
          Content is intended for adults aged 18 or over. By continuing, you
          confirm you are 18 or older.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => {
              sessionStorage.setItem(SESSION_KEY, 'true')
              setConfirmed(true)
            }}
            className="border border-bone/40 px-6 py-2.5 text-sm tracking-wide transition-colors hover:border-bone hover:bg-bone hover:text-ground"
          >
            I am 18 or over
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href = 'about:blank'
            }}
            className="border border-bone/15 px-6 py-2.5 text-sm tracking-wide text-bone-dim transition-colors hover:border-bone/40 hover:text-bone"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  )
}
