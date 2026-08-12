// Scenario library for /stories — copy transcribed verbatim from
// docs/CobraRose-stories-copy-rev1.md, Part 2. Order fixed as in the doc.

export interface Story {
  title: string
  body: string[]
  /** Closing line, rendered as a quiet link to its target. */
  closing: string
  target: string
}

export const storiesPageCopy = {
  eyebrow: 'Stories',
  heading: 'Is this you?',
  standfirst:
    'Six women who do not exist. Composites, drawn from the questions that arrive at the counter most often. If one of them is familiar, the collection she points to is the beginning.',
  /** Compliance label — mandatory, rendered exactly as written. */
  label: 'Illustrative composites — not testimonials, not clients, not events.',
}

export const stories: Story[] = [
  {
    title: 'The composed one',
    body: [
      'You are calm all day. Everyone says so; it is the word they reach for. What they do not see is the ledger — the evening it takes to recover from the afternoon, the way stillness costs you more than it costs people who were never holding anything together.',
      'Calm that has to be manufactured is not a baseline. It is an expenditure.',
    ],
    closing: 'This is Regulation work',
    target: '/collections/regulation',
  },
  {
    title: 'The quick answer',
    body: [
      'Asked what you want, you answer in under a second — fluently, warmly, with exactly what the room was hoping to hear. Asked again, alone, the answer takes longer. Sometimes it does not come at all.',
      'The wanting was never gone. It learned that being quick and agreeable was safer than being accurate.',
    ],
    closing: 'This is Desire work',
    target: '/collections/desire',
  },
  {
    title: 'The one who holds',
    body: [
      'You have been the steady one in every room you have ever entered. You hold the plans, the people, the tone. You have never once been held without also managing how.',
      'The wish to set it down — briefly, safely, by choice — is not weakness asking to be indulged. It is a precise appetite, and it has a practice.',
    ],
    closing: 'This is Rope work',
    target: '/collections/rope',
  },
  {
    title: 'The deciding one',
    body: [
      'You make a hundred decisions before lunch and they are all good ones. By evening the idea of one more choice — any choice, even dinner — lands like a weight.',
      'Control was never the burden. The absence of anywhere to put it down is the burden.',
    ],
    closing: 'This is Power work',
    target: '/collections/power',
  },
  {
    title: 'The returning one',
    body: [
      'You have done the workshop, the retreat, the long weekend. You came home lit up, and the light lasted eleven days — then the kitchen, the inbox, the ordinary Tuesday.',
      'Nothing was wrong with the work. It simply had nowhere to go. Change that cannot survive contact with your own life is tourism.',
    ],
    closing: 'This is Integration work',
    target: '/collections/integration',
  },
  {
    title: 'The ready one',
    body: [
      'You have read everything. You know the vocabulary, the theory, the names of things. What you know has outrun what your body has practised, and some part of you already suspects that the next tier is not a book.',
      'It is not. It is sixteen weeks, in a room, with the same eight to twelve women — and it begins with a conversation, not an enrolment form.',
    ],
    closing: 'This is the Threshold',
    target: '/threshold',
  },
]
