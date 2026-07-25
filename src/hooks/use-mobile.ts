import * as React from "react"

const MOBILE_BREAKPOINT = 768
const mediaQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

export function useIsMobile() {
  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const query = window.matchMedia(mediaQuery)
    query.addEventListener("change", onStoreChange)
    return () => query.removeEventListener("change", onStoreChange)
  }, [])

  const getSnapshot = React.useCallback(
    () => window.matchMedia(mediaQuery).matches,
    [],
  )

  return React.useSyncExternalStore(subscribe, getSnapshot, () => false)
}
