'use client'

import { useEffect, useRef, useState } from 'react'

interface TypingTextProps {
  text: string
  className?: string
  interval?: number
  cursorDuration?: number
  delay?: number
}

export default function TypingText({
  text,
  className = '',
  interval = 65,
  cursorDuration = 1000,
  delay = 0,
}: TypingTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [inView, setInView] = useState(false)
  const [started, setStarted] = useState(false)
  const [displayCount, setDisplayCount] = useState(0)
  const [showCursor, setShowCursor] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.innerWidth <= 768) {
      setDisplayCount(text.length)
      setDone(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [text.length])

  useEffect(() => {
    if (!inView || started) return

    if (delay <= 0) {
      setStarted(true)
      return
    }

    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [inView, delay, started])

  useEffect(() => {
    if (!started || done) return

    setShowCursor(true)

    if (displayCount < text.length) {
      const timer = setTimeout(() => {
        setDisplayCount((c) => c + 1)
      }, interval)
      return () => clearTimeout(timer)
    }

    const cursorTimer = setTimeout(() => {
      setShowCursor(false)
      setDone(true)
    }, cursorDuration)
    return () => clearTimeout(cursorTimer)
  }, [started, displayCount, text.length, interval, cursorDuration, done])

  return (
    <p ref={ref} className={className}>
      {done ? (
        text
      ) : (
        <>
          <span>{text.slice(0, displayCount)}</span>
          <span className="invisible">{text.slice(displayCount)}</span>
          {showCursor && (
            <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-px animate-pulse" />
          )}
        </>
      )}
    </p>
  )
}
