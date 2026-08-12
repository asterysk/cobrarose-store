export interface ShopNotice {
  title: string
  copy: string
}

// Content core §3 and §5 — global footer copy, storefront standfirst, shop notices.
export const footerCopy = {
  line1:
    'This site is a UX mockup for an adult educational programme. It is not a storefront. No products are offered, no orders can be placed, and no payment is taken.',
  email: 'connect@cobrarose.store',
}

export const storefront = {
  heroLine: 'A body that is both weaponised sovereignty and undefended openness.',
  standfirst: [
    'A catalogue of what is worked with, and what is handed back.',
    'Nothing here ships.',
  ],
  notices: [
    { title: 'Stock', copy: 'Eight to twelve. It does not scale and is not intended to.' },
    {
      title: 'Returns',
      copy: 'Accepted at any moment, including mid-use. No reason required.',
    },
    {
      title: 'Delivery',
      copy: 'Nothing ships. Everything is collected in person, weekly, for sixteen weeks.',
    },
  ] satisfies ShopNotice[],
}
