import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'

// Central route declaration (AGENTS.md §6). Every page route lazy-loaded;
// static routes before the catch-all.
const Storefront = lazy(() => import('./pages/Storefront'))
const Versions = lazy(() => import('./pages/Versions'))
const NotFound = lazy(() => import('./pages/NotFound'))

function pending() {
  return <div className="min-h-[50vh]" aria-hidden="true" />
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={pending()}>
            <Storefront />
          </Suspense>
        ),
      },
      {
        path: '/versions',
        element: (
          <Suspense fallback={pending()}>
            <Versions />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={pending()}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
])
