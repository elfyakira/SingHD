'use client'

import { useEffect, useRef, useState, ReactNode, ElementType } from 'react'

interface FadeInUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  style?: React.CSSProperties
  as?: ElementType
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 600,
  distance = 30,
  className = '',
  style: externalStyle,
  as: Component = 'div',
}: FadeInUpProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const delayMs = delay < 1 ? delay * 1000 : delay

  const animationStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms ease-out ${delayMs}ms, transform ${duration}ms ease-out ${delayMs}ms`,
    willChange: 'opacity, transform',
  }

  const mergedStyle = externalStyle
    ? { ...externalStyle, ...animationStyle }
    : animationStyle

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={mergedStyle}
    >
      {children}
    </Component>
  )
}
