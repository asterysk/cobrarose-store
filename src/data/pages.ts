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

// ---------------------------------------------------------------------------
// Furniture pages — copy transcribed verbatim from content core §8–§13.
// ---------------------------------------------------------------------------

export interface PageTableRow {
  point: string
  detail: string
}

export interface PageClause {
  lead: string
  text: string
}

export interface PageSection {
  heading?: string
  body?: string[]
  items?: PageTableRow[]
  clauses?: PageClause[]
  /** Closing line rendered after a table (e.g. About, five threads). */
  after?: string
  pullquote?: string
  /** Quiet text link rendered at the end of the section (internal path). */
  link?: { label: string; to: string }
}

export interface FurniturePage {
  path: string
  titlePrefix: string
  eyebrow?: string
  heading: string
  standfirst?: string
  sections: PageSection[]
  cta?: { label: string; action: string }
  ctaSubline?: string
}

// §8 — /returns
export const returnsPage: FurniturePage = {
  path: '/returns',
  titlePrefix: 'Returns',
  heading: 'Returns',
  standfirst: 'This is the whole policy. It is not summarised anywhere shorter.',
  sections: [
    {
      body: [
        'Anything may be returned at any moment. Including mid-use. Including immediately after asking for it. Including for no reason, and including for a reason that would not survive being said out loud.',
        'No explanation is required. No explanation will be requested. Nothing is noted, nothing carries forward, and standing is unaffected.',
        'A return is not a failure of the item, a failure of the woman, or a failure of the practice. It is the mechanism by which any of this is possible at all. Everything in this catalogue depends on the return being genuinely available — not permitted, not tolerated, available — at every moment.',
      ],
      pullquote: 'If the return is not real, nothing that precedes it is either.',
    },
    {
      heading: 'How a return is made:',
      items: [
        {
          point: 'Before',
          detail: 'Check-in at the start of every session. Standing item, never skipped',
        },
        {
          point: 'During',
          detail:
            'A signalling protocol that works when speech does not. Taught in week one, used from week one',
        },
        {
          point: 'After',
          detail: 'Structured debrief. Every session, including the ones that went well',
        },
      ],
    },
    {
      heading: 'What is not required:',
      body: [
        'A reason. A justification. A better moment. Certainty. Consistency with what was agreed twenty minutes earlier.',
      ],
    },
  ],
}

// §9 — /aftercare
export const aftercarePage: FurniturePage = {
  path: '/aftercare',
  titlePrefix: 'Aftercare',
  heading: 'Care Instructions',
  standfirst:
    'Every item in this catalogue carries a care line. So does every practice. This page is the long version.',
  sections: [
    {
      heading: 'Why every product has one:',
      body: [
        'Because the aftermath is not an epilogue. What the nervous system does in the hours and days following intensity is part of the practice, and treating it as optional is the single most common failure in this field.',
      ],
    },
    {
      heading: 'Drop:',
      body: [
        'Physiological. Predictable. Not weakness, not regret, and not evidence that something went wrong. A significant neurochemical event has a downslope. It commonly arrives between twelve and seventy-two hours afterwards, often when nothing is happening and the woman is alone. Expecting it removes most of its power. Naming it in advance removes the rest.',
      ],
    },
    {
      heading: 'What care actually consists of:',
      items: [
        {
          point: 'Immediate',
          detail:
            'Warmth, weight, water, a period where nothing is required of her. See Cup',
        },
        {
          point: 'Short-term',
          detail:
            'Someone reachable who already knows what happened and does not need it explained',
        },
        {
          point: 'Days after',
          detail: 'No decisions of consequence. Sleep. Food. Ordinary things',
        },
        {
          point: 'Structural',
          detail: 'A planned debrief, not a spontaneous one. Planned means it happens',
        },
      ],
    },
    {
      heading: 'Storage and retirement:',
      body: [
        'Applies to equipment and to practices equally. Both are inspected before use, both are retired at the first sign of stress, and neither is kept out of sentiment.',
      ],
    },
  ],
}

// §10.1 — /cart. The disambiguation is the first screen content.
export const cartPage: FurniturePage = {
  path: '/cart',
  titlePrefix: 'Cart',
  heading: 'This is a mockup. There is no cart.',
  sections: [
    {
      body: [
        'Nothing on this site is for sale. There is no checkout, no payment path, and no order that can be placed.',
        'Cobra Rose is an invitation-only educational programme in embodiment and erotic sovereignty. This site is a design mockup — a catalogue used to show what the work involves without writing a brochure about it. The objects described are real objects; they are simply not sold here, or anywhere, by us. The rest are not objects at all.',
        'If something on this site is relevant to you, the route is a conversation.',
      ],
    },
  ],
  cta: { label: 'Start a conversation', action: 'mailto:connect@cobrarose.store' },
  ctaSubline:
    'Enquiries are read by a facilitator. Expect a conversation, not a brochure.',
}

// §10.2 — /about
export const aboutPage: FurniturePage = {
  path: '/about',
  titlePrefix: 'About',
  heading: 'About this shop',
  standfirst: 'Plainly, then at length.',
  sections: [
    {
      heading: 'Plainly.',
      body: [
        'Cobra Rose is a sixteen-week programme in embodiment and erotic sovereignty, run in cohorts of eight to twelve women, entered by invitation. This site is a catalogue. It sells nothing.',
      ],
      link: {
        label: 'Six women who do not exist, and where they begin →',
        to: '/stories',
      },
    },
    {
      heading: 'What the work is.',
      body: [
        'Most work that touches the erotic body either clinicalises it or sells it — makes it a symptom to be treated, or a performance to be delivered. Both remove the woman from the centre of her own experience. This does neither. It is training. It assumes she arrived by choice, that her body is not a problem to be solved, and that pleasure, power, and refusal are the same faculty expressed at different pressures.',
      ],
      pullquote: 'This is not therapy. It is practice.',
    },
    {
      heading: 'Five threads:',
      items: [
        {
          point: 'Regulation',
          detail:
            'The nervous system under charge, not only under stress. The ground everything else is built on',
        },
        {
          point: 'Desire',
          detail:
            'Wanting as intelligence rather than obligation. What the body wants, distinguished from what it was trained to want',
        },
        {
          point: 'Rope',
          detail:
            'Constraint as an embodied trust practice. Technical, held, and taught properly — including what to do when it goes wrong',
        },
        {
          point: 'Power',
          detail:
            'Control given and received inside an architecture of consent. Structured, negotiated, reversible at any moment',
        },
        {
          point: 'Integration',
          detail:
            'The work is worthless if it stays in the container. This thread is the life she returns to',
        },
      ],
      after: 'These are taught separately elsewhere. Here they meet.',
    },
    {
      heading: 'How it is held:',
      items: [
        {
          point: 'Cohort',
          detail:
            'Eight to twelve women. The same group for sixteen weeks. No rolling intake, no anonymous audience',
        },
        {
          point: 'Live',
          detail:
            'Weekly facilitated sessions. Attendance is the programme, not a supplement to it',
        },
        {
          point: 'Private infrastructure',
          detail:
            'Self-hosted. Not on any platform that can revoke this work, read it, or train on it',
        },
        {
          point: 'Consent architecture',
          detail:
            'Check-in, in-session signalling, structured debrief. Every session, without exception',
        },
        {
          point: 'Aftercare',
          detail: 'Named, planned, and taught. Drop is expected, not treated as failure',
        },
      ],
      pullquote: 'Nothing here is improvised.',
    },
    {
      heading: 'Why it is not open.',
      body: [
        'Entry is from inside the programme, after the prior tiers, and after a facilitator has assessed readiness. There is no enrolment page and no waitlist that converts to a purchase. This is not scarcity marketing. The work is only safe in a body that has already built regulation under charge and internalised the consent architecture as reflex. Sequence is a safety requirement, not a sales mechanism. If you have arrived here without that ground, the beginning is elsewhere.',
      ],
    },
  ],
}

// §10.3 — /threshold. No navigation link anywhere; reached only from
// The Sixteen Weeks product page and direct URL.
export const thresholdPage: FurniturePage = {
  path: '/threshold',
  titlePrefix: 'The Threshold',
  eyebrow: 'Restock notification',
  heading: 'The Threshold',
  standfirst:
    'Invitation is not a gesture of exclusivity. It is the last checkpoint before work that requires a prepared body.',
  sections: [
    {
      heading: 'How it works.',
      body: [
        'Invitation comes from a facilitator who has watched the work over months, or from a member who knows a woman personally and stands behind the introduction. Both routes end at the same place: a conversation with the facilitator, who decides.',
      ],
    },
    {
      heading: 'What is assessed:',
      items: [
        { point: 'Sequence', detail: 'The prior tiers, completed rather than skimmed' },
        {
          point: 'Regulation under charge',
          detail:
            'Not the same as regulation under stress. This is the distinction the assessment turns on',
        },
        {
          point: 'Consent as reflex',
          detail: 'Check-in, signalling, debrief — automatic, not remembered',
        },
        {
          point: 'Health review',
          detail: 'A medical screening, reviewed before anything begins',
        },
        {
          point: 'Informed consent',
          detail: 'Signed, specific, and explicit about what the content is',
        },
      ],
    },
    {
      heading: 'What is not assessed.',
      body: [
        'Experience is not a prerequisite. Neither is confidence, nor a particular body, nor a history with any of this. Readiness is about ground, not about how far along someone already is.',
      ],
    },
    {
      heading: 'If the answer is not yet.',
      body: [
        'Not yet is a common answer and it is not a judgement. The facilitator will name what is missing and where to build it. The door does not close.',
      ],
    },
  ],
  cta: {
    label: 'Begin the conversation',
    action: 'mailto:connect@cobrarose.store',
  },
}

// §12 — /terms
export const termsPage: FurniturePage = {
  path: '/terms',
  titlePrefix: 'Terms',
  heading: 'Terms',
  standfirst:
    'These terms govern your use of this website. They are short because the site does very little.',
  sections: [
    {
      clauses: [
        {
          lead: 'What this site is.',
          text: 'A design mockup and illustrative catalogue for Cobra Rose, an adult educational programme. It is not a shop. No products are offered for sale, no orders can be placed, no payment is taken or processed on this domain, and no price displayed on this site resolves to a transaction.',
        },
        {
          lead: 'Age.',
          text: 'This site is intended for adults aged 18 or over. By passing the entry screen you confirm that you are 18 or older.',
        },
        {
          lead: 'Content.',
          text: 'The site describes adult educational themes, including erotic practice, in restrained language. It contains no pornographic imagery. The programme described is educational; nothing on this site is medical, psychological or therapeutic advice, and it is not a substitute for professional care.',
        },
        {
          lead: 'Accuracy.',
          text: 'The catalogue is a work of design fiction. Stock levels, prices and product listings are illustrative. Descriptions of the programme — cohort size, duration, entry by invitation — describe the programme as intended and are not an offer.',
        },
        {
          lead: 'Enquiries.',
          text: 'Contact is by email to connect@cobrarose.store. Sending an email begins a conversation; it does not create an account, a booking, or any obligation on either side.',
        },
        {
          lead: 'Intellectual property.',
          text: 'The text, design and artwork on this site are the property of the site operator. Do not reproduce them without permission.',
        },
        {
          lead: 'Availability.',
          text: 'The site is provided as is, may change without notice, and may be withdrawn at any time.',
        },
        {
          lead: 'Liability.',
          text: 'Nothing in these terms excludes liability that cannot be excluded by law. Otherwise, use of the site is at your own discretion.',
        },
        {
          lead: 'Changes.',
          text: "Changes to these terms take effect when published on this page. The version and date are shown in the site's release history.",
        },
      ],
    },
  ],
}

// §13 — /privacy
export const privacyPage: FurniturePage = {
  path: '/privacy',
  titlePrefix: 'Privacy',
  heading: 'Privacy',
  standfirst: 'This site collects almost nothing. Here is the complete account.',
  sections: [
    {
      clauses: [
        {
          lead: 'What this site collects.',
          text: 'Nothing, by default. There are no accounts, no forms, no analytics, no advertising, no tracking pixels, and no cookies set by us.',
        },
        {
          lead: 'The one thing stored.',
          text: "When you pass the age screen, a flag is stored in your browser's session storage so the screen does not reappear during your visit. It is deleted by your browser when the session ends. It is never transmitted anywhere.",
        },
        {
          lead: 'Email.',
          text: 'If you choose to email connect@cobrarose.store, we receive your email address and whatever you write. It is used to reply to you and for nothing else. It is not added to a list, not sold, and not shared. You may ask for your emails to be deleted at any time, by email, and they will be.',
        },
        {
          lead: 'Hosting.',
          text: "The site is served through Cloudflare, which processes standard technical request data (such as IP addresses) to deliver pages and protect the service. Cloudflare's own privacy policy governs that processing.",
        },
        {
          lead: 'No training.',
          text: 'Nothing you send or do on this site is used to train machine-learning models.',
        },
        {
          lead: 'Your rights.',
          text: 'Depending on where you live, you may have rights of access, correction and deletion over personal data. Given sections 1–3, there is very little to exercise them against — but the route is the same email address, and requests will be honoured.',
        },
        {
          lead: 'Changes.',
          text: "Changes to this page are published here and noted in the site's release history.",
        },
      ],
    },
  ],
}
