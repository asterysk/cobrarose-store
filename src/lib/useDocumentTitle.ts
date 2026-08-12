import { useEffect } from 'react'

const TITLE_SUFFIX = 'Cobra Rose — UX mockup'

// <title> pattern: optional page prefix, mandatory suffix (AGENTS.md §9).
export function useDocumentTitle(prefix?: string) {
  useEffect(() => {
    document.title = prefix ? `${prefix} — ${TITLE_SUFFIX}` : TITLE_SUFFIX
  }, [prefix])
}
