# Cobra Rose — Stories Copy (rev 1)

**Status:** draft for owner review. Nothing here is built until reviewed and a build prompt is issued.
**Scope:** two story surfaces. (1) Counter vignettes — one short narrative on each `returned`-register product page. (2) A `/stories` scenario library — six composite scenarios, each routing to a collection.
**Guardrails (binding):** every story is labelled as a composite/illustrative work — not a testimonial, not a client, not an event. No names, no ages, no places. Suggestive ceiling; restraint over volume; deadpan over arch. If a line makes you smile at its own cleverness, cut it.

---

## Part 1 — Counter vignettes

Placement: a new block on each `returned` product page, after the body, before Care/Returns. Block heading: **At the counter.** Label line, small, beneath: *A composite, not a testimony.*

Schema: add optional `vignette: string[]` (1–2 paragraphs) to the product schema in `src/data/products.ts`. Only the four products below carry one.

### The Apology

She emptied her bag onto the counter without being asked. Sorry for emailing twice. Sorry for the delay, which was not hers. Sorry for sitting down, sorry for the chair being where it was, sorry for taking a moment to find the words she had already found.

We did not count them. We never count them. She watched her hands while it happened, as if they belonged to someone who used to do this.

### The Reflexive Smile

It came off slowly. It had been fitted early and well, by someone who meant something else by it, and the fittings had held for years — through rooms that deserved it and rooms that did not.

She tried to hand it over folded. It does not fold. We took it as it was, and she stood there a moment with her face doing nothing at all, which is harder than it sounds, and which is the beginning.

### The Softened Voice

She brought back most of it. The rise at the end of sentences. The half-step up when asking for what was already hers. The speed, which had once kept her safe and now only kept her vague.

She kept a little. Some rooms still require it, and the work was never to disarm her — only to make the softening a choice she makes rather than a place she lives.

### The Shrink

She had practised it so long she no longer felt it happen. Shoulders first. Then the breath. Then the careful arrangement of herself into the space other people had finished with.

It came in unusually good condition, given the mileage. We checked it in without comment. On her way out she held the door for no one, because no one was behind her, and stood in the doorway a full second longer than she needed to.

---

## Part 2 — The scenario library, `/stories`

New page. Linked from the footer and from `/about`; not in the header nav (keep the nav at four).

**Eyebrow:** Stories
**Heading:** Is this you?
**Standfirst:** Six women who do not exist. Composites, drawn from the questions that arrive at the counter most often. If one of them is familiar, the collection she points to is the beginning.
**Label line, small, above the first scenario:** *Illustrative composites — not testimonials, not clients, not events.*

Each scenario: a title, one short block, and a closing line that names its collection and links to it. Order as below.

### 1. The composed one

You are calm all day. Everyone says so; it is the word they reach for. What they do not see is the ledger — the evening it takes to recover from the afternoon, the way stillness costs you more than it costs people who were never holding anything together.

Calm that has to be manufactured is not a baseline. It is an expenditure.

*This is Regulation work → /collections/regulation*

### 2. The quick answer

Asked what you want, you answer in under a second — fluently, warmly, with exactly what the room was hoping to hear. Asked again, alone, the answer takes longer. Sometimes it does not come at all.

The wanting was never gone. It learned that being quick and agreeable was safer than being accurate.

*This is Desire work → /collections/desire*

### 3. The one who holds

You have been the steady one in every room you have ever entered. You hold the plans, the people, the tone. You have never once been held without also managing how.

The wish to set it down — briefly, safely, by choice — is not weakness asking to be indulged. It is a precise appetite, and it has a practice.

*This is Rope work → /collections/rope*

### 4. The deciding one

You make a hundred decisions before lunch and they are all good ones. By evening the idea of one more choice — any choice, even dinner — lands like a weight.

Control was never the burden. The absence of anywhere to put it down is the burden.

*This is Power work → /collections/power*

### 5. The returning one

You have done the workshop, the retreat, the long weekend. You came home lit up, and the light lasted eleven days — then the kitchen, the inbox, the ordinary Tuesday.

Nothing was wrong with the work. It simply had nowhere to go. Change that cannot survive contact with your own life is tourism.

*This is Integration work → /collections/integration*

### 6. The ready one

You have read everything. You know the vocabulary, the theory, the names of things. What you know has outrun what your body has practised, and some part of you already suspects that the next tier is not a book.

It is not. It is sixteen weeks, in a room, with the same eight to twelve women — and it begins with a conversation, not an enrolment form.

*This is the Threshold → /threshold*

---

## Review notes for the owner

1. Cut freely. Four scenarios would be fine; six is the cap. If any vignette tips into arch, it goes.
2. The labels (`A composite, not a testimony` / `Illustrative composites…`) are part of the compliance layer, not decoration — wording can change, presence cannot.
3. When approved, this becomes build prompt v5: `vignette` field on the four products, `/stories` page + data module, footer link, version v5.
