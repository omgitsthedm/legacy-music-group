import { useEffect } from 'react'

interface JsonLdProps {
  /** Stable id used to dedupe across mounts. Same id → same script tag updated. */
  id: string
  /** Schema.org object (any shape). */
  data: unknown
}

/**
 * Injects a <script type="application/ld+json"> tag into <head>.
 * Reuses the same tag on rerender (keyed by id), removes it on unmount.
 */
export default function JsonLd({ id, data }: JsonLdProps) {
  useEffect(() => {
    const elementId = `jsonld-${id}`
    let script = document.getElementById(elementId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = elementId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)

    return () => {
      const existing = document.getElementById(elementId)
      if (existing) existing.remove()
    }
  }, [id, data])

  return null
}
