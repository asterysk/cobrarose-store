import { motion } from 'framer-motion'
import { CoiledForm } from '../components/CoiledForm'
import { collections } from '../data/collections'
import { storefront } from '../data/pages'
import { useDocumentTitle } from '../lib/useDocumentTitle'

// Content core §5 — hero, standfirst, collections strip, shop notices.
// No Featured section in v1.
export default function Storefront() {
  useDocumentTitle()

  return (
    <>
      <section className="flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center gap-8"
        >
          <CoiledForm className="h-40 w-40 text-accent md:h-52 md:w-52" />
          <h1 className="font-display text-5xl tracking-wide md:text-7xl">
            Cobra Rose
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-bone-dim">
            {storefront.heroLine}
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-24 text-center md:py-32">
        <div className="space-y-2 font-display text-2xl leading-relaxed md:text-3xl">
          <p>{storefront.standfirst[0]}</p>
          <p>{storefront.standfirst[1]}</p>
        </div>
      </section>

      <section aria-label="Collections" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-5">
          {collections.map((collection) => (
            <div
              key={collection.slug}
              className="flex flex-col gap-3 bg-ground p-8"
            >
              <h2 className="font-display text-xl">{collection.name}</h2>
              <p className="text-sm leading-relaxed text-bone-dim">
                {collection.line}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-label="Shop notices"
        className="border-t border-bone/10 px-6 py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {storefront.notices.map((notice) => (
            <div key={notice.title} className="space-y-3">
              <h2 className="text-xs tracking-widest text-bone-dim uppercase">
                {notice.title}
              </h2>
              <p className="text-sm leading-relaxed">{notice.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
