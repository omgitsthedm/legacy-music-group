import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const reveal = () => {
      el.style.opacity = '1'
      el.style.transform = 'translate(0, 0)'
      el.style.willChange = 'auto'
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      reveal()
      return
    }

    el.style.opacity = '0'
    el.style.willChange = 'opacity, transform'
    el.style.transform = {
      up: 'translateY(30px)',
      down: 'translateY(-30px)',
      left: 'translateX(30px)',
      right: 'translateX(-30px)',
    }[direction]
    el.style.transition = `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          window.clearTimeout(revealFallback)
          reveal()
          observer.unobserve(el)
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 8% 0px' },
    )

    const revealFallback = window.setTimeout(reveal, Math.max(1600, delay + 900))
    observer.observe(el)

    return () => {
      window.clearTimeout(revealFallback)
      observer.disconnect()
    }
  }, [delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
