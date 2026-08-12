import { lazy, Suspense, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'

// Central route declaration (AGENTS.md §6). Every page route lazy-loaded;
// static routes before the catch-all.
const Storefront = lazy(() => import('./pages/Storefront'))
const CollectionsIndex = lazy(() => import('./pages/CollectionsIndex'))
const CollectionPage = lazy(() => import('./pages/CollectionPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const StoriesPage = lazy(() => import('./pages/StoriesPage'))
const Versions = lazy(() => import('./pages/Versions'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Furniture pages (v3) — shared lazy chunk.
const furniture = {
  Returns: lazy(() =>
    import('./pages/furniture').then((m) => ({ default: m.Returns })),
  ),
  Aftercare: lazy(() =>
    import('./pages/furniture').then((m) => ({ default: m.Aftercare })),
  ),
  Cart: lazy(() =>
    import('./pages/furniture').then((m) => ({ default: m.Cart })),
  ),
  About: lazy(() =>
    import('./pages/furniture').then((m) => ({ default: m.About })),
  ),
  Threshold: lazy(() =>
    import('./pages/furniture').then((m) => ({ default: m.Threshold })),
  ),
  Terms: lazy(() =>
    import('./pages/furniture').then((m) => ({ default: m.Terms })),
  ),
  Privacy: lazy(() =>
    import('./pages/furniture').then((m) => ({ default: m.Privacy })),
  ),
}

function pending() {
  return <div className="min-h-[50vh]" aria-hidden="true" />
}

function lazyPage(element: ReactNode) {
  return <Suspense fallback={pending()}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: lazyPage(<Storefront />) },
      { path: '/collections', element: lazyPage(<CollectionsIndex />) },
      { path: '/collections/:slug', element: lazyPage(<CollectionPage />) },
      { path: '/product/:slug', element: lazyPage(<ProductPage />) },
      { path: '/stories', element: lazyPage(<StoriesPage />) },
      { path: '/returns', element: lazyPage(<furniture.Returns />) },
      { path: '/aftercare', element: lazyPage(<furniture.Aftercare />) },
      { path: '/cart', element: lazyPage(<furniture.Cart />) },
      { path: '/about', element: lazyPage(<furniture.About />) },
      { path: '/threshold', element: lazyPage(<furniture.Threshold />) },
      { path: '/terms', element: lazyPage(<furniture.Terms />) },
      { path: '/privacy', element: lazyPage(<furniture.Privacy />) },
      { path: '/versions', element: lazyPage(<Versions />) },
      { path: '*', element: lazyPage(<NotFound />) },
    ],
  },
])
