import { versions } from '../data/versions'
import { useDocumentTitle } from '../lib/useDocumentTitle'

// Release history — newest first, rendered straight from src/data/versions.ts.
export default function Versions() {
  useDocumentTitle('Versions')

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-4xl">Versions</h1>
      <ul className="mt-12 space-y-10">
        {versions.map((entry) => (
          <li key={entry.version} className="border-l-2 border-accent pl-6">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-xl">{entry.version}</span>
              <time className="text-sm text-bone-dim">{entry.date}</time>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-bone-dim">
              {entry.note}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
