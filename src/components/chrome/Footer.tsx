import { Link } from 'react-router-dom'
import { footerCopy } from '../../data/pages'

const footerLinks = [
  { label: 'Returns', to: '/returns' },
  { label: 'Aftercare', to: '/aftercare' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
] as const

// Content core §3 — two lines: mockup disclosure, then link row.
export function Footer() {
  return (
    <footer className="border-t border-bone/10 pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl space-y-4 px-6 py-10">
        <p className="max-w-3xl text-sm leading-relaxed text-bone-dim">
          {footerCopy.line1}
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-bone-dim">
          {footerLinks.map((link) => (
            <span key={link.to} className="flex items-center gap-2">
              <Link
                to={link.to}
                className="transition-colors hover:text-bone"
              >
                {link.label}
              </Link>
              <span aria-hidden="true">·</span>
            </span>
          ))}
          <a
            href={`mailto:${footerCopy.email}`}
            className="transition-colors hover:text-bone"
          >
            {footerCopy.email}
          </a>
        </p>
      </div>
    </footer>
  )
}
