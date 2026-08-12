import { lazy, Suspense, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'

// Central route declaration (AGENTS.md §6). Every page route lazy-loaded;
// static routes before the catch-all.
const Storefront = lazy(() => import('./pages/Storefront'))
const CollectionsIndex = lazy(() => import('./pages/CollectionsIndex'))
const CollectionPage = lazy(() => import('./pages/CollectionPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const Versions = lazy(() => import('./pages/Versions'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
      { path: '/versions', element: lazyPage(<Versions />) },
      { path: '*', element: lazyPage(<NotFound />) },
    ],
  },
])
