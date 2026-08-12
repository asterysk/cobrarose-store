import type { CollectionSlug } from './collections'

// Field schema per content core §4. Copy transcribed verbatim from §7 —
// build agents transcribe, they do not rewrite (AGENTS.md §7).

export type Register = 'object' | 'capacity' | 'returned'

/** Permitted price strings only — no real figure, ever. */
export type Price = '£—' | '£0.00' | 'Not priced' | 'By enquiry'

/**
 * SVG slot reference — interim line-art system while photography is parked.
 * Register motifs ('object', 'capacity', 'returned', 'rope') plus one unique
 * silhouette slot per `object` product (v4 art pass).
 */
export type ArtSlot =
  | 'object'
  | 'capacity'
  | 'returned'
  | 'rope'
  | 'length-of-jute'
  | 'blindfold'
  | 'salt'
  | 'cuff-leather-lined'
  | 'candle-low-temperature'
  | 'oil-unscented'
  | 'key'
  | 'silk-2m'
  | 'cane'
  | 'cup'

export interface ProductCta {
  label: string
  action: string
}

export interface Product {
  slug: string
  name: string
  collection: CollectionSlug | null
  register: Register
  price: Price
  stock: string
  art: ArtSlot
  body: string[]
  /** Optional. Opens "What it is actually for:" */
  purpose?: string
  care: string
  returns: string
  badge: 'Mockup — not for sale'
  /** Only The Sixteen Weeks carries one. */
  cta?: ProductCta
}

const BADGE = 'Mockup — not for sale' as const

export const products: Product[] = [
  {
    slug: 'length-of-jute',
    name: 'Length of Jute — 8m',
    collection: 'rope',
    register: 'object',
    price: '£—',
    stock: '8–12 available',
    art: 'length-of-jute',
    body: [
      'Natural fibre, 6mm, broken in. Holds a knot without slipping and marks skin without breaking it. Coarse enough to be felt through the whole hand.',
    ],
    purpose:
      'learning what the body does when movement is removed and nothing else is. Most women find their edge is not where they had assumed.',
    care: 'Coil, never fold. Wash by hand, dry flat, out of direct light. Replace at the first fray. This is not the item to be sentimental about.',
    returns: 'Accepted mid-use, without explanation.',
    badge: BADGE,
  },
  {
    slug: 'permission',
    name: 'Permission',
    collection: 'desire',
    register: 'capacity',
    price: '£0.00',
    stock: 'Unlimited',
    art: 'capacity',
    body: [
      "You already own this. It cannot be sold to you and it was never anyone's to sell.",
      'Listed here because a surprising number of women arrive looking for it, and it seems unhelpful to pretend otherwise.',
    ],
    care: 'None required. It does not degrade with use.',
    returns: 'Not applicable. It does not leave you.',
    badge: BADGE,
  },
  {
    slug: 'the-apology',
    name: 'The Apology',
    collection: 'integration',
    register: 'returned',
    price: 'Not priced',
    stock: 'Returned daily',
    art: 'returned',
    body: [
      'Issued reflexively, often before anything has happened. Frequently attached to the front of a sentence that did not need it.',
      'Most women hand over several hundred of these a year without noticing. They are accepted at the counter in any condition.',
    ],
    care: 'Not applicable — this item is being returned, not kept.',
    returns: 'This is the return.',
    badge: BADGE,
  },
  {
    slug: 'blindfold',
    name: 'Blindfold',
    collection: 'regulation',
    register: 'object',
    price: '£—',
    stock: '8–12 available',
    art: 'blindfold',
    body: [
      'Padded silk, no light leak at the bridge. Sits without pressure on the eye.',
    ],
    purpose:
      'removing one channel so the others are forced to report. Women who describe themselves as disconnected from the body are usually receiving a great deal of information and discarding it visually first.',
    care: 'Hand wash. Air dry. Do not share between participants.',
    returns:
      'Accepted at any moment. Removing it is always available and is never a failure.',
    badge: BADGE,
  },
  {
    slug: 'the-unhurried-no',
    name: 'The Unhurried No',
    collection: 'power',
    register: 'capacity',
    price: '£—',
    stock: 'Currently unavailable in most sizes',
    art: 'capacity',
    body: [
      'A refusal that arrives without an apology attached, without a reason offered, and without the sentence speeding up towards the end.',
      'Cannot be shipped. Built.',
    ],
    care: 'Use regularly. Degrades quickly when unused.',
    returns: 'Refusing to keep this is itself a use of it.',
    badge: BADGE,
  },
  {
    slug: 'salt',
    name: 'Salt',
    collection: 'regulation',
    register: 'object',
    price: '£—',
    stock: 'In stock',
    art: 'salt',
    body: [
      'Coarse, unrefined, grey. For the bath, after.',
      'This one is exactly what it says.',
    ],
    care: 'Keep dry.',
    returns: 'Not accepted once opened.',
    badge: BADGE,
  },
  {
    slug: 'the-reflexive-smile',
    name: 'The Reflexive Smile',
    collection: 'integration',
    register: 'returned',
    price: 'Not priced',
    stock: 'Returned in quantity',
    art: 'returned',
    body: [
      'Deployed on receipt of something unwelcome. Fitted early, usually by someone else, usually without discussion.',
      'Distinct from a smile, which is not stocked here because it was never surrendered.',
    ],
    care: 'Not applicable.',
    returns: 'Accepted. Bring the whole set.',
    badge: BADGE,
  },
  {
    slug: 'cuff-leather-lined',
    name: 'Cuff — Leather, Lined',
    collection: 'rope',
    register: 'object',
    price: '£—',
    stock: '8–12 available',
    art: 'cuff-leather-lined',
    body: [
      'Vegetable-tanned, fleece-lined, single buckle. Sized generously — circulation matters more than aesthetics and always will.',
      'Sold in pairs. The single buckle is deliberate: one hand can release it, including the hand wearing it.',
    ],
    care: 'Condition twice yearly. Inspect stitching before every use. Retire at any sign of stress at the hardware.',
    returns: 'Accepted at any moment, including mid-use.',
    badge: BADGE,
  },
  {
    slug: 'appetite',
    name: 'Appetite',
    collection: 'desire',
    register: 'capacity',
    price: '£—',
    stock: 'Low',
    art: 'capacity',
    body: [
      'Not hunger. Hunger is a signal about the body. Appetite is a statement about the world — what she will move towards, and how directly.',
      'Most commonly reported as lost. Almost never actually lost. Usually stored somewhere and not looked at.',
    ],
    care: 'Feed it something occasionally. It responds badly to being reasoned with.',
    returns:
      'Frequently returned unopened. We accept these back but recommend against it.',
    badge: BADGE,
  },
  {
    slug: 'candle-low-temperature',
    name: 'Candle — Low Temperature',
    collection: 'power',
    register: 'object',
    price: '£—',
    stock: '8–12 available',
    art: 'candle-low-temperature',
    body: [
      'Paraffin-free, low melting point, unscented. Burns at a temperature that registers clearly on skin without injuring it.',
      'Unscented is not an omission. Fragrance is an additional variable and this is not the practice to add variables to.',
    ],
    care: 'Trim the wick. Test on your own forearm first, every single time, regardless of how many times you have used it.',
    returns: 'Accepted at any moment.',
    badge: BADGE,
  },
  {
    slug: 'the-softened-voice',
    name: 'The Softened Voice',
    collection: 'integration',
    register: 'returned',
    price: 'Not priced',
    stock: 'Returned daily',
    art: 'returned',
    body: [
      'Half a step higher, slightly faster, ending on a rise so that a statement can be mistaken for a question and withdrawn if it lands badly.',
      'An effective piece of equipment. It has kept a lot of women safe in rooms that were not safe. It is being returned because it is now being used in rooms that are.',
    ],
    care: 'Keep it. Some rooms still require it. The work is choosing, not discarding.',
    returns: 'Partial returns accepted.',
    badge: BADGE,
  },
  {
    slug: 'oil-unscented',
    name: 'Oil — Unscented',
    collection: 'desire',
    register: 'object',
    price: '£—',
    stock: 'In stock',
    art: 'oil-unscented',
    body: [
      'Cold-pressed, single ingredient, no additives. Warms in the hand.',
      'A straight listing.',
    ],
    care: 'Store below 25°C. Discard six months after opening.',
    returns: 'Not accepted once opened.',
    badge: BADGE,
  },
  {
    slug: 'regulation-under-charge',
    name: 'Regulation Under Charge',
    collection: 'regulation',
    register: 'capacity',
    price: '£—',
    stock: 'Not available separately',
    art: 'capacity',
    body: [
      'Distinct from regulation under stress, which is widely taught and much easier.',
      'This is the capacity to stay physiologically present while something significant is happening — while aroused, while under intensity, while the system is reporting that this matters.',
      'Cannot be bought alone. It is the prerequisite for most of the rest of this catalogue and it is built over months.',
    ],
    care: 'Maintained through practice. Decays without it.',
    returns: 'Not returnable. Once built it does not come off.',
    badge: BADGE,
  },
  {
    slug: 'key',
    name: 'Key',
    collection: 'power',
    register: 'object',
    price: '£—',
    stock: '8–12 available',
    art: 'key',
    body: [
      'Steel. Unmarked. Kept within reach of the person restrained, not the person restraining.',
    ],
    purpose:
      'the arrangement only works if the person who appears to have no control has, at all times, complete control. Everything else in this collection depends on that fact being physical rather than promised.',
    care: 'Check its location before beginning. Every time. Out loud.',
    returns: 'The key is the return.',
    badge: BADGE,
  },
  {
    slug: 'the-shrink',
    name: 'The Shrink',
    collection: 'integration',
    register: 'returned',
    price: 'Not priced',
    stock: 'Returned in quantity',
    art: 'returned',
    body: [
      'Occupying less room than available. In a doorway, on public transport, in a meeting, in a photograph, in a bed.',
      'Returned in unusually good condition, given how heavily it is used.',
    ],
    care: 'Not applicable.',
    returns:
      'Accepted. Expansion is not sold here — it happens on its own once this is handed in.',
    badge: BADGE,
  },
  {
    slug: 'silk-2m',
    name: 'Silk — 2m',
    collection: 'rope',
    register: 'object',
    price: '£—',
    stock: 'In stock',
    art: 'silk-2m',
    body: [
      'Habotai, 8mm, hemmed. Soft enough to be used where jute should not be, and unsuitable for anything load-bearing.',
      'Included in the catalogue because women reach for rope before they need rope. This is the correct answer for roughly the first two months.',
    ],
    care: 'Hand wash cold. Iron on the reverse if it matters to you.',
    returns: 'Accepted at any moment.',
    badge: BADGE,
  },
  {
    slug: 'the-direct-look',
    name: 'The Direct Look',
    collection: 'desire',
    register: 'capacity',
    price: '£—',
    stock: 'Low',
    art: 'capacity',
    body: [
      'Held a beat longer than is comfortable, without softening at the end and without a joke to release the pressure.',
      'Reported as the single most difficult item in the catalogue. It requires no equipment.',
    ],
    care: 'Practise on people you are not trying to persuade of anything.',
    returns: 'Accepted, though it tends to return on its own.',
    badge: BADGE,
  },
  {
    slug: 'cane',
    name: 'Cane',
    collection: 'power',
    register: 'object',
    price: '£—',
    stock: '8–12 available',
    art: 'cane',
    body: [
      'Rattan, 8mm, 60cm, unlacquered. Flexible along its length.',
      'Listed with its technical specification and nothing else, because the technique matters more than the object and the technique is not something a catalogue can teach. It is taught in weeks nine through twelve, in person, with supervision.',
    ],
    care: 'Inspect for splinters before every use. Sand or retire. Never share between participants.',
    returns: 'Accepted at any moment, without explanation.',
    badge: BADGE,
  },
  {
    slug: 'cup',
    name: 'Cup',
    collection: 'integration',
    register: 'object',
    price: '£—',
    stock: 'In stock',
    art: 'cup',
    body: ['Stoneware, unglazed exterior, holds 300ml. Heavy for its size.'],
    purpose:
      'afterwards. Something warm, held in two hands, while the nervous system does what it does over the following forty minutes. The weight is deliberate — an object that requires two hands is an object that stops you doing anything else.',
    care: 'Hand wash. It will craze. That is the material behaving correctly.',
    returns: 'Keep it.',
    badge: BADGE,
  },
  {
    slug: 'the-sixteen-weeks',
    name: 'The Sixteen Weeks',
    collection: null,
    register: 'capacity',
    price: 'By enquiry',
    stock: 'Sold out',
    art: 'capacity',
    body: [
      'Eight to twelve women. The same eight to twelve for the full duration. Weekly, live, facilitated.',
      'Not restocking. Entry to the next cohort is by invitation.',
    ],
    care: 'See Aftercare.',
    returns: 'See Returns.',
    badge: BADGE,
    cta: { label: 'Notify me', action: '/threshold' },
  },
]

export function productBySlug(slug: string | undefined): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function productsInCollection(slug: CollectionSlug): Product[] {
  return products.filter((product) => product.collection === slug)
}

// Featured row per content core §5 — six products, spread across registers.
export const featuredSlugs = [
  'length-of-jute',
  'permission',
  'salt',
  'the-apology',
  'blindfold',
  'the-unhurried-no',
] as const

export const featuredProducts: Product[] = featuredSlugs.map(
  (slug) => productBySlug(slug)!,
)
