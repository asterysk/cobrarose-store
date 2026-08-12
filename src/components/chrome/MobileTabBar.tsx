import { NavLink } from 'react-router-dom'
import { navItems } from './Header'
import { cn } from '../../lib/cn'

// Mobile bottom tab bar — same destinations as the header nav. No hamburger.
export function MobileTabBar() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-bone/10 bg-ground md:hidden"
    >
      <div className="flex items-stretch justify-around">
        {[...navItems, { label: 'Cart', to: '/cart' }].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex-1 py-3 text-center text-xs tracking-wide transition-colors',
                isActive ? 'text-bone' : 'text-bone-dim',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
