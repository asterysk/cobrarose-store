import type { FurniturePage } from '../data/pages'
import { useDocumentTitle } from '../lib/useDocumentTitle'

// Shared furniture-page template — driven entirely by the data layer.
// Eyebrow, H1, standfirst, sections (prose, quiet tables, numbered clauses,
// pullquotes), optional understated CTA. Dark editorial system, restrained.
export default function FurniturePageView({ page }: { page: FurniturePage }) {
  useDocumentTitle(page.titlePrefix)

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      {page.eyebrow && (
        <p className="text-xs tracking-widest text-bone-dim uppercase">
          {page.eyebrow}
        </p>
      )}

      <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
        {page.heading}
      </h1>

      {page.standfirst && (
        <p className="mt-6 text-lg leading-relaxed text-bone-dim">
          {page.standfirst}
        </p>
      )}

      <div className="mt-16 space-y-16">
        {page.sections.map((section, index) => (
          <section key={index}>
            {section.heading && (
              <h2 className="font-display text-2xl">{section.heading}</h2>
            )}

            {section.body && (
              <div
                className={`space-y-6 leading-relaxed ${section.heading ? 'mt-6' : ''}`}
              >
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.items && (
              <div
                className={`border-t border-bone/10 ${section.heading ? 'mt-8' : ''}`}
              >
                {section.items.map((row) => (
                  <div
                    key={row.point}
                    className="grid gap-2 border-b border-bone/10 py-6 md:grid-cols-[12rem_1fr] md:gap-8"
                  >
                    <p className="font-display">{row.point}</p>
                    <p className="leading-relaxed text-bone-dim">{row.detail}</p>
                  </div>
                ))}
              </div>
            )}

            {section.clauses && (
              <ol className="space-y-8 [list-style:none]">
                {section.clauses.map((clause, i) => (
                  <li key={i} className="flex gap-6">
                    <span className="w-6 shrink-0 text-sm text-bone-dim">
                      {i + 1}.
                    </span>
                    <p className="leading-relaxed">
                      <span className="font-display">{clause.lead} </span>
                      <span className="text-bone-dim">{clause.text}</span>
                    </p>
                  </li>
                ))}
              </ol>
            )}

            {section.after && (
              <p className="mt-8 leading-relaxed">{section.after}</p>
            )}

            {section.pullquote && (
              <blockquote className="mt-10 border-l-2 border-accent pl-6 font-display text-2xl leading-relaxed">
                {section.pullquote}
              </blockquote>
            )}
          </section>
        ))}
      </div>

      {page.cta && (
        <div className="mt-16 space-y-4">
          <a
            href={page.cta.action}
            className="inline-block border border-bone/40 px-6 py-3 text-sm tracking-wide transition-colors hover:border-bone hover:bg-bone hover:text-ground"
          >
            {page.cta.label}
          </a>
          {page.ctaSubline && (
            <p className="text-sm text-bone-dim">{page.ctaSubline}</p>
          )}
        </div>
      )}
    </article>
  )
}
