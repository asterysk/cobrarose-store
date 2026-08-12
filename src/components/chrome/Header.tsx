import { NavLink, Link } from 'react-router-dom'
import { VERSION } from '../../version'
import { cn } from '../../lib/cn'

export const navItems = [
  { label: 'Collections', to: '/collections' },
  { label: 'Returns', to: '/returns' },
  { label: 'Aftercare', to: '/aftercare' },
  { label: 'About', to: '/about' },
] as const

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'text-sm tracking-wide transition-colors hover:text-bone',
    isActive ? 'text-bone' : 'text-bone-dim',
  )

export function Header() {
  return (
    <header className="border-b border-bone/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="font-display text-2xl tracking-wide">
          Cobra Rose
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <NavLink to="/cart" className={navLinkClass}>
            Cart (0)
          </NavLink>
          <Link
            to="/versions"
            className="text-xs text-bone-dim/70 transition-colors hover:text-bone-dim"
          >
            {VERSION}
          </Link>
        </div>
      </div>
    </header>
  )
}
