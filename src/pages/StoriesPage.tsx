import { Link } from 'react-router-dom'
import { stories, storiesPageCopy } from '../data/stories'
import { useDocumentTitle } from '../lib/useDocumentTitle'

// /stories — scenario library (stories copy Part 2). Editorial links only;
// /threshold gains no navigation link from here.
export default function StoriesPage() {
  useDocumentTitle('Stories')

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-widest text-bone-dim uppercase">
        {storiesPageCopy.eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
        {storiesPageCopy.heading}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-dim">
        {storiesPageCopy.standfirst}
      </p>
      <p className="mt-10 text-xs text-bone-dim/70 italic">
        {storiesPageCopy.label}
      </p>

      <div className="mt-16 space-y-20">
        {stories.map((story) => (
          <section key={story.title}>
            <h2 className="font-display text-2xl">{story.title}</h2>
            <div className="mt-6 space-y-6 leading-relaxed">
              {story.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link
              to={story.target}
              className="mt-8 inline-block text-sm text-bone-dim transition-colors hover:text-bone"
            >
              {story.closing} →
            </Link>
          </section>
        ))}
      </div>
    </div>
  )
}
