// Disclosure bar — fixed top of viewport on every page, above the header,
// not dismissible. Flat chrome: system-ui, high contrast, outside the palette.
// Copy fixed per content core §3 / AGENTS.md §8.
export function DisclosureBar() {
  return (
    <div
      role="note"
      className="fixed inset-x-0 top-0 z-40 bg-neutral-200 font-[system-ui] text-center text-[13px] leading-5 font-medium tracking-wide text-neutral-900 px-4 py-2"
    >
      UX MOCKUP — not a real store. Nothing on this site is for sale.
    </div>
  )
}
