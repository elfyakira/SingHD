'use client'

import { useEffect, useRef } from 'react'
import RecruitFixedMenu from './RecruitFixedMenu'

export default function RecruitShell({ children }: { children: React.ReactNode }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const imgScrollable = useRef(0)
  const pageScrollable = useRef(0)

  useEffect(() => {
    const cacheLayout = () => {
      const img = imgRef.current
      if (!img || !img.complete || img.naturalHeight === 0) return
      imgScrollable.current = Math.max(img.offsetHeight - window.innerHeight, 0)
      pageScrollable.current = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
    }

    const handleScroll = () => {
      if (pageScrollable.current <= 0 || imgScrollable.current <= 0) return
      const percent = Math.min(window.scrollY / pageScrollable.current, 1)
      const img = imgRef.current
      if (img) {
        img.style.transform = `translateY(${-percent * imgScrollable.current}px)`
      }
    }

    const img = imgRef.current
    if (img && img.complete) {
      cacheLayout()
      handleScroll()
    } else if (img) {
      img.addEventListener('load', () => { cacheLayout(); handleScroll() }, { once: true })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', cacheLayout, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', cacheLayout)
    }
  }, [])

  return (
    <div className="relative">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none pt-14 lg:pt-0">
        <img
          ref={imgRef}
          src="/img/recruit/adventure-map.png"
          srcSet="/img/recruit/adventure-map-sm.png 768w, /img/recruit/adventure-map-md.png 1280w, /img/recruit/adventure-map.png 1920w"
          sizes="100vw"
          alt=""
          className="w-full will-change-transform"
          style={{ transition: 'transform 0.15s ease-out' }}
        />
      </div>
      <div className="relative z-10 pb-12 lg:pb-0">
        {children}
      </div>
      <RecruitFixedMenu />
    </div>
  )
}
