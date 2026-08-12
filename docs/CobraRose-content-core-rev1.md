# Cobra Rose — Content Core (rev 1)

**Distilled build source for `cobrarose.store`.** Stripped from the owner's Site Content rev4: decisions closed, history removed, enquiry address unified to `connect@cobrarose.store`, legal pages written fresh as site terms, reviews excluded (parked). This file plus `AGENTS.md` is the entire content source of truth. Build agents transcribe; they do not rewrite.

**Hard rules:** no price figure anywhere (`£—`, `£0.00`, `Not priced`, `By enquiry` only) · every product carries Care, Returns and the badge `Mockup — not for sale` · the word "sheqinah" never appears anywhere · disclosure chrome is plain and outside the brand voice · suggestive ceiling, nothing explicit.

---

## 1. The conceit

A shop that does not sell anything. Play it straight — the copy never winks. Vary the register across products. Nothing is purchasable, and the chrome around the shop says so.

## 2. Site map

```
/                          Storefront
├── /about                 What this actually is
├── /collections/[slug]    regulation · desire · rope · power · integration
├── /product/[slug]        ×20
├── /cart                  Empty by design
├── /returns               Consent architecture
├── /aftercare             Care instructions
├── /threshold             Invitation — reached only from the sold-out product
├── /terms                 Site terms
├── /privacy               Site privacy
└── /versions              Release history
```

## 3. Global elements

| Element | Content |
|---|---|
| Disclosure bar | Fixed top, every page, not dismissible, chrome styling outside the palette: `UX MOCKUP — not a real store. Nothing on this site is for sale.` |
| Page title | `Cobra Rose — UX mockup` on every page (suffix pattern acceptable) |
| Wordmark | Cobra Rose |
| Header nav | Collections · Returns · Aftercare · About |
| Header right | Cart (0) — always zero; version stamp (links to `/versions`) |
| Footer line 1 | This site is a UX mockup for an adult educational programme. It is not a storefront. No products are offered, no orders can be placed, and no payment is taken. |
| Footer line 2 | Returns · Aftercare · Terms · Privacy · connect@cobrarose.store |
| Age gate | Interstitial, first load, session-persisted. Copy at §11 |
| Meta description | A design mockup — an illustrative catalogue for an invitation-only programme in sovereign embodiment. Not a store. |
| Robots | `noindex, nofollow` site-wide |

## 4. Product field schema

| Field | Type | Description |
|---|---|---|
| `slug` | string | URL path under `/product/` |
| `name` | string | Product title |
| `collection` | enum \| null | regulation · desire · rope · power · integration (null only for The Sixteen Weeks) |
| `register` | enum | `object` · `capacity` · `returned` — governs tone, not surfaced |
| `price` | string | `£—` · `£0.00` · `Not priced` · `By enquiry` only |
| `stock` | string | Free text |
| `art` | string | SVG slot reference |
| `body[]` | array | 1–3 paragraphs |
| `purpose` | string | Optional. Opens *What it is actually for:* |
| `care` | string | Every product, no exceptions |
| `returns` | string | Every product, no exceptions |
| `badge` | string | Fixed `Mockup — not for sale`, rendered in the buy-button position |
| `cta` | object | Optional. Only The Sixteen Weeks carries one: `{label: "Notify me", action: "/threshold"}` |

## 5. Storefront — `/`

**Hero** — wordmark, one line, one SVG (`coiled-form`, single continuous stroke), full viewport, no product grid above the fold, hero begins below the disclosure bar:

> **Cobra Rose**
>
> A body that is both weaponised sovereignty and undefended openness.

**Standfirst** — directly under the hero, two lines:

A catalogue of what is worked with, and what is handed back.

Nothing here ships.

**Collections strip** — five tiles, name and one line:

| Collection | Line |
|---|---|
| Regulation | The ground everything else is built on |
| Desire | Wanting, distinguished from trained wanting |
| Rope | Constraint as a technical practice |
| Power | Control, given and received, inside an architecture |
| Integration | What follows you home |

**Featured** — six products, spread across registers: Length of Jute · Permission · Salt · The Apology · Blindfold · The Unhurried No.

**Shop notices** — three blocks in the footer band, straight-faced:

| Block | Copy |
|---|---|
| Stock | Eight to twelve. It does not scale and is not intended to. |
| Returns | Accepted at any moment, including mid-use. No reason required. |
| Delivery | Nothing ships. Everything is collected in person, weekly, for sixteen weeks. |

## 6. Collections — standfirsts

| Slug | Standfirst |
|---|---|
| regulation | The body's baseline is not a mood. It is a state that determines what can be felt, what can be chosen, and what will be refused. Most work stops at settling. Settling is the beginning. |
| desire | Wanting is information. The work is separating what she wants from what she was trained to want, and learning to tell the difference in the moment rather than afterwards. |
| rope | Trust made physical. Taught properly or not taught — circulation, nerve pathways, emergency release. There is no casual version of this. |
| power | Control as an architecture rather than something that happens to people. Negotiated, structured, reversible. Drop is physiology, not weakness. |
| integration | The container is not the point. This collection is about the life she returns to, and whether anything actually changed in it. |

## 7. Product catalogue (×20)

Three registers, interleaved: `object` (real things, described straight), `capacity` (abstractions listed as stock), `returned` (the Returns Counter). Care and Returns on every product — the repetition is the point.

---

### 7.1 Length of Jute — 8m
`slug: length-of-jute` · `collection: rope` · `register: object` · `price: £—` · `stock: 8–12 available`

Natural fibre, 6mm, broken in. Holds a knot without slipping and marks skin without breaking it. Coarse enough to be felt through the whole hand.

**What it is actually for:** learning what the body does when movement is removed and nothing else is. Most women find their edge is not where they had assumed.

**Care:** Coil, never fold. Wash by hand, dry flat, out of direct light. Replace at the first fray. This is not the item to be sentimental about.
**Returns:** Accepted mid-use, without explanation.

### 7.2 Permission
`slug: permission` · `collection: desire` · `register: capacity` · `price: £0.00` · `stock: Unlimited`

You already own this. It cannot be sold to you and it was never anyone's to sell.

Listed here because a surprising number of women arrive looking for it, and it seems unhelpful to pretend otherwise.

**Care:** None required. It does not degrade with use.
**Returns:** Not applicable. It does not leave you.

### 7.3 The Apology
`slug: the-apology` · `collection: integration` · `register: returned` · `price: Not priced` · `stock: Returned daily`

Issued reflexively, often before anything has happened. Frequently attached to the front of a sentence that did not need it.

Most women hand over several hundred of these a year without noticing. They are accepted at the counter in any condition.

**Care:** Not applicable — this item is being returned, not kept.
**Returns:** This is the return.

### 7.4 Blindfold
`slug: blindfold` · `collection: regulation` · `register: object` · `price: £—` · `stock: 8–12 available`

Padded silk, no light leak at the bridge. Sits without pressure on the eye.

**What it is actually for:** removing one channel so the others are forced to report. Women who describe themselves as disconnected from the body are usually receiving a great deal of information and discarding it visually first.

**Care:** Hand wash. Air dry. Do not share between participants.
**Returns:** Accepted at any moment. Removing it is always available and is never a failure.

### 7.5 The Unhurried No
`slug: the-unhurried-no` · `collection: power` · `register: capacity` · `price: £—` · `stock: Currently unavailable in most sizes`

A refusal that arrives without an apology attached, without a reason offered, and without the sentence speeding up towards the end.

Cannot be shipped. Built.

**Care:** Use regularly. Degrades quickly when unused.
**Returns:** Refusing to keep this is itself a use of it.

### 7.6 Salt
`slug: salt` · `collection: regulation` · `register: object` · `price: £—` · `stock: In stock`

Coarse, unrefined, grey. For the bath, after.

This one is exactly what it says.

**Care:** Keep dry.
**Returns:** Not accepted once opened.

### 7.7 The Reflexive Smile
`slug: the-reflexive-smile` · `collection: integration` · `register: returned` · `price: Not priced` · `stock: Returned in quantity`

Deployed on receipt of something unwelcome. Fitted early, usually by someone else, usually without discussion.

Distinct from a smile, which is not stocked here because it was never surrendered.

**Care:** Not applicable.
**Returns:** Accepted. Bring the whole set.

### 7.8 Cuff — Leather, Lined
`slug: cuff-leather-lined` · `collection: rope` · `register: object` · `price: £—` · `stock: 8–12 available`

Vegetable-tanned, fleece-lined, single buckle. Sized generously — circulation matters more than aesthetics and always will.

Sold in pairs. The single buckle is deliberate: one hand can release it, including the hand wearing it.

**Care:** Condition twice yearly. Inspect stitching before every use. Retire at any sign of stress at the hardware.
**Returns:** Accepted at any moment, including mid-use.

### 7.9 Appetite
`slug: appetite` · `collection: desire` · `register: capacity` · `price: £—` · `stock: Low`

Not hunger. Hunger is a signal about the body. Appetite is a statement about the world — what she will move towards, and how directly.

Most commonly reported as lost. Almost never actually lost. Usually stored somewhere and not looked at.

**Care:** Feed it something occasionally. It responds badly to being reasoned with.
**Returns:** Frequently returned unopened. We accept these back but recommend against it.

### 7.10 Candle — Low Temperature
`slug: candle-low-temperature` · `collection: power` · `register: object` · `price: £—` · `stock: 8–12 available`

Paraffin-free, low melting point, unscented. Burns at a temperature that registers clearly on skin without injuring it.

Unscented is not an omission. Fragrance is an additional variable and this is not the practice to add variables to.

**Care:** Trim the wick. Test on your own forearm first, every single time, regardless of how many times you have used it.
**Returns:** Accepted at any moment.

### 7.11 The Softened Voice
`slug: the-softened-voice` · `collection: integration` · `register: returned` · `price: Not priced` · `stock: Returned daily`

Half a step higher, slightly faster, ending on a rise so that a statement can be mistaken for a question and withdrawn if it lands badly.

An effective piece of equipment. It has kept a lot of women safe in rooms that were not safe. It is being returned because it is now being used in rooms that are.

**Care:** Keep it. Some rooms still require it. The work is choosing, not discarding.
**Returns:** Partial returns accepted.

### 7.12 Oil — Unscented
`slug: oil-unscented` · `collection: desire` · `register: object` · `price: £—` · `stock: In stock`

Cold-pressed, single ingredient, no additives. Warms in the hand.

A straight listing.

**Care:** Store below 25°C. Discard six months after opening.
**Returns:** Not accepted once opened.

### 7.13 Regulation Under Charge
`slug: regulation-under-charge` · `collection: regulation` · `register: capacity` · `price: £—` · `stock: Not available separately`

Distinct from regulation under stress, which is widely taught and much easier.

This is the capacity to stay physiologically present while something significant is happening — while aroused, while under intensity, while the system is reporting that this matters.

Cannot be bought alone. It is the prerequisite for most of the rest of this catalogue and it is built over months.

**Care:** Maintained through practice. Decays without it.
**Returns:** Not returnable. Once built it does not come off.

### 7.14 Key
`slug: key` · `collection: power` · `register: object` · `price: £—` · `stock: 8–12 available`

Steel. Unmarked. Kept within reach of the person restrained, not the person restraining.

**What it is actually for:** the arrangement only works if the person who appears to have no control has, at all times, complete control. Everything else in this collection depends on that fact being physical rather than promised.

**Care:** Check its location before beginning. Every time. Out loud.
**Returns:** The key is the return.

### 7.15 The Shrink
`slug: the-shrink` · `collection: integration` · `register: returned` · `price: Not priced` · `stock: Returned in quantity`

Occupying less room than available. In a doorway, on public transport, in a meeting, in a photograph, in a bed.

Returned in unusually good condition, given how heavily it is used.

**Care:** Not applicable.
**Returns:** Accepted. Expansion is not sold here — it happens on its own once this is handed in.

### 7.16 Silk — 2m
`slug: silk-2m` · `collection: rope` · `register: object` · `price: £—` · `stock: In stock`

Habotai, 8mm, hemmed. Soft enough to be used where jute should not be, and unsuitable for anything load-bearing.

Included in the catalogue because women reach for rope before they need rope. This is the correct answer for roughly the first two months.

**Care:** Hand wash cold. Iron on the reverse if it matters to you.
**Returns:** Accepted at any moment.

### 7.17 The Direct Look
`slug: the-direct-look` · `collection: desire` · `register: capacity` · `price: £—` · `stock: Low`

Held a beat longer than is comfortable, without softening at the end and without a joke to release the pressure.

Reported as the single most difficult item in the catalogue. It requires no equipment.

**Care:** Practise on people you are not trying to persuade of anything.
**Returns:** Accepted, though it tends to return on its own.

### 7.18 Cane
`slug: cane` · `collection: power` · `register: object` · `price: £—` · `stock: 8–12 available`

Rattan, 8mm, 60cm, unlacquered. Flexible along its length.

Listed with its technical specification and nothing else, because the technique matters more than the object and the technique is not something a catalogue can teach. It is taught in weeks nine through twelve, in person, with supervision.

**Care:** Inspect for splinters before every use. Sand or retire. Never share between participants.
**Returns:** Accepted at any moment, without explanation.

### 7.19 Cup
`slug: cup` · `collection: integration` · `register: object` · `price: £—` · `stock: In stock`

Stoneware, unglazed exterior, holds 300ml. Heavy for its size.

**What it is actually for:** afterwards. Something warm, held in two hands, while the nervous system does what it does over the following forty minutes. The weight is deliberate — an object that requires two hands is an object that stops you doing anything else.

**Care:** Hand wash. It will craze. That is the material behaving correctly.
**Returns:** Keep it.

### 7.20 The Sixteen Weeks
`slug: the-sixteen-weeks` · `collection: null` · `register: capacity` · `price: By enquiry` · `stock: Sold out`

Eight to twelve women. The same eight to twelve for the full duration. Weekly, live, facilitated.

Not restocking. Entry to the next cohort is by invitation.

**Care:** See Aftercare.
**Returns:** See Returns.

`cta: {label: "Notify me", action: "/threshold"}` — **the only product that links to `/threshold`.**

---

## 8. Returns — `/returns`

**Heading:** Returns
**Standfirst:** This is the whole policy. It is not summarised anywhere shorter.

Anything may be returned at any moment. Including mid-use. Including immediately after asking for it. Including for no reason, and including for a reason that would not survive being said out loud.

No explanation is required. No explanation will be requested. Nothing is noted, nothing carries forward, and standing is unaffected.

A return is not a failure of the item, a failure of the woman, or a failure of the practice. It is the mechanism by which any of this is possible at all. Everything in this catalogue depends on the return being genuinely available — not permitted, not tolerated, available — at every moment.

**Pullquote:** If the return is not real, nothing that precedes it is either.

**How a return is made:**

| Point | Detail |
|---|---|
| Before | Check-in at the start of every session. Standing item, never skipped |
| During | A signalling protocol that works when speech does not. Taught in week one, used from week one |
| After | Structured debrief. Every session, including the ones that went well |

**What is not required:** A reason. A justification. A better moment. Certainty. Consistency with what was agreed twenty minutes earlier.

## 9. Aftercare — `/aftercare`

**Heading:** Care Instructions
**Standfirst:** Every item in this catalogue carries a care line. So does every practice. This page is the long version.

**Why every product has one:** Because the aftermath is not an epilogue. What the nervous system does in the hours and days following intensity is part of the practice, and treating it as optional is the single most common failure in this field.

**Drop:** Physiological. Predictable. Not weakness, not regret, and not evidence that something went wrong. A significant neurochemical event has a downslope. It commonly arrives between twelve and seventy-two hours afterwards, often when nothing is happening and the woman is alone. Expecting it removes most of its power. Naming it in advance removes the rest.

**What care actually consists of:**

| Element | Detail |
|---|---|
| Immediate | Warmth, weight, water, a period where nothing is required of her. See *Cup* |
| Short-term | Someone reachable who already knows what happened and does not need it explained |
| Days after | No decisions of consequence. Sleep. Food. Ordinary things |
| Structural | A planned debrief, not a spontaneous one. Planned means it happens |

**Storage and retirement:** Applies to equipment and to practices equally. Both are inspected before use, both are retired at the first sign of stress, and neither is kept out of sentiment.

## 10. Furniture pages

### 10.1 Cart — `/cart`

**Heading:** This is a mockup. There is no cart.

Nothing on this site is for sale. There is no checkout, no payment path, and no order that can be placed.

Cobra Rose is an invitation-only educational programme in embodiment and erotic sovereignty. This site is a design mockup — a catalogue used to show what the work involves without writing a brochure about it. The objects described are real objects; they are simply not sold here, or anywhere, by us. The rest are not objects at all.

If something on this site is relevant to you, the route is a conversation.

`cta: {label: "Start a conversation", action: "mailto:connect@cobrarose.store"}`
**Sub-line:** Enquiries are read by a facilitator. Expect a conversation, not a brochure.

### 10.2 About — `/about`

**Heading:** About this shop
**Standfirst:** Plainly, then at length.

**Plainly.** Cobra Rose is a sixteen-week programme in embodiment and erotic sovereignty, run in cohorts of eight to twelve women, entered by invitation. This site is a catalogue. It sells nothing.

**What the work is.** Most work that touches the erotic body either clinicalises it or sells it — makes it a symptom to be treated, or a performance to be delivered. Both remove the woman from the centre of her own experience. This does neither. It is training. It assumes she arrived by choice, that her body is not a problem to be solved, and that pleasure, power, and refusal are the same faculty expressed at different pressures.

**Pullquote:** This is not therapy. It is practice.

**Five threads:**

| Thread | Line |
|---|---|
| Regulation | The nervous system under charge, not only under stress. The ground everything else is built on |
| Desire | Wanting as intelligence rather than obligation. What the body wants, distinguished from what it was trained to want |
| Rope | Constraint as an embodied trust practice. Technical, held, and taught properly — including what to do when it goes wrong |
| Power | Control given and received inside an architecture of consent. Structured, negotiated, reversible at any moment |
| Integration | The work is worthless if it stays in the container. This thread is the life she returns to |

**Closing line:** These are taught separately elsewhere. Here they meet.

**How it is held:**

| Element | Detail |
|---|---|
| Cohort | Eight to twelve women. The same group for sixteen weeks. No rolling intake, no anonymous audience |
| Live | Weekly facilitated sessions. Attendance is the programme, not a supplement to it |
| Private infrastructure | Self-hosted. Not on any platform that can revoke this work, read it, or train on it |
| Consent architecture | Check-in, in-session signalling, structured debrief. Every session, without exception |
| Aftercare | Named, planned, and taught. Drop is expected, not treated as failure |

**Pullquote:** Nothing here is improvised.

**Why it is not open.** Entry is from inside the programme, after the prior tiers, and after a facilitator has assessed readiness. There is no enrolment page and no waitlist that converts to a purchase. This is not scarcity marketing. The work is only safe in a body that has already built regulation under charge and internalised the consent architecture as reflex. Sequence is a safety requirement, not a sales mechanism. If you have arrived here without that ground, the beginning is elsewhere.

### 10.3 Threshold — `/threshold`

**Eyebrow:** Restock notification
**Heading:** The Threshold
**Standfirst:** Invitation is not a gesture of exclusivity. It is the last checkpoint before work that requires a prepared body.

**How it works.** Invitation comes from a facilitator who has watched the work over months, or from a member who knows a woman personally and stands behind the introduction. Both routes end at the same place: a conversation with the facilitator, who decides.

**What is assessed:**

| Element | Detail |
|---|---|
| Sequence | The prior tiers, completed rather than skimmed |
| Regulation under charge | Not the same as regulation under stress. This is the distinction the assessment turns on |
| Consent as reflex | Check-in, signalling, debrief — automatic, not remembered |
| Health review | A medical screening, reviewed before anything begins |
| Informed consent | Signed, specific, and explicit about what the content is |

**What is not assessed.** Experience is not a prerequisite. Neither is confidence, nor a particular body, nor a history with any of this. Readiness is about ground, not about how far along someone already is.

**If the answer is not yet.** Not yet is a common answer and it is not a judgement. The facilitator will name what is missing and where to build it. The door does not close.

`cta: {label: "Begin the conversation", action: "mailto:connect@cobrarose.store"}`

## 11. Age gate

Interstitial. First load. Session-persisted. No dismissal by scroll.

> **This site describes an adult educational programme.**
>
> This is a design mockup, not a store. Nothing on it is for sale.
>
> Content is intended for adults aged 18 or over. By continuing, you confirm you are 18 or older.
>
> `[ I am 18 or over ]`   `[ Leave ]`

`Leave` navigates away (to a neutral external page or a blank interstitial state). No third option, no remember-me beyond the session.

## 12. Terms — `/terms` (site terms, written fresh)

**Heading:** Terms
**Standfirst:** These terms govern your use of this website. They are short because the site does very little.

1. **What this site is.** A design mockup and illustrative catalogue for Cobra Rose, an adult educational programme. It is not a shop. No products are offered for sale, no orders can be placed, no payment is taken or processed on this domain, and no price displayed on this site resolves to a transaction.
2. **Age.** This site is intended for adults aged 18 or over. By passing the entry screen you confirm that you are 18 or older.
3. **Content.** The site describes adult educational themes, including erotic practice, in restrained language. It contains no pornographic imagery. The programme described is educational; nothing on this site is medical, psychological or therapeutic advice, and it is not a substitute for professional care.
4. **Accuracy.** The catalogue is a work of design fiction. Stock levels, prices and product listings are illustrative. Descriptions of the programme — cohort size, duration, entry by invitation — describe the programme as intended and are not an offer.
5. **Enquiries.** Contact is by email to connect@cobrarose.store. Sending an email begins a conversation; it does not create an account, a booking, or any obligation on either side.
6. **Intellectual property.** The text, design and artwork on this site are the property of the site operator. Do not reproduce them without permission.
7. **Availability.** The site is provided as is, may change without notice, and may be withdrawn at any time.
8. **Liability.** Nothing in these terms excludes liability that cannot be excluded by law. Otherwise, use of the site is at your own discretion.
9. **Changes.** Changes to these terms take effect when published on this page. The version and date are shown in the site's release history.

## 13. Privacy — `/privacy` (site privacy, written fresh)

**Heading:** Privacy
**Standfirst:** This site collects almost nothing. Here is the complete account.

1. **What this site collects.** Nothing, by default. There are no accounts, no forms, no analytics, no advertising, no tracking pixels, and no cookies set by us.
2. **The one thing stored.** When you pass the age screen, a flag is stored in your browser's session storage so the screen does not reappear during your visit. It is deleted by your browser when the session ends. It is never transmitted anywhere.
3. **Email.** If you choose to email connect@cobrarose.store, we receive your email address and whatever you write. It is used to reply to you and for nothing else. It is not added to a list, not sold, and not shared. You may ask for your emails to be deleted at any time, by email, and they will be.
4. **Hosting.** The site is served through Cloudflare, which processes standard technical request data (such as IP addresses) to deliver pages and protect the service. Cloudflare's own privacy policy governs that processing.
5. **No training.** Nothing you send or do on this site is used to train machine-learning models.
6. **Your rights.** Depending on where you live, you may have rights of access, correction and deletion over personal data. Given sections 1–3, there is very little to exercise them against — but the route is the same email address, and requests will be honoured.
7. **Changes.** Changes to this page are published here and noted in the site's release history.

---

*End of content core. Media (photography) is parked; when unparked, media copy changes will be issued as a new rev of this document.*
