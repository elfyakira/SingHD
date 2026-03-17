'use client'

import { useEffect, useRef } from 'react'
import RecruitFixedMenu from './RecruitFixedMenu'

export default function RecruitShell({ children }: { children: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cloudRef = useRef<HTMLDivElement>(null)
  const mediaScrollable = useRef(0)
  const pageScrollable = useRef(0)

  useEffect(() => {
    const cacheLayout = () => {
      const video = videoRef.current
      if (!video) return
      mediaScrollable.current = Math.max(video.offsetHeight - window.innerHeight, 0)
      pageScrollable.current = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
    }

    const handleScroll = () => {
      if (pageScrollable.current <= 0 || mediaScrollable.current <= 0) return
      const percent = Math.min(window.scrollY / pageScrollable.current, 1)
      const video = videoRef.current
      const translateY = -percent * mediaScrollable.current
      if (video) {
        video.style.transform = `translateY(${translateY}px)`
      }
      if (cloudRef.current) {
        cloudRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    const video = videoRef.current
    if (video) {
      video.addEventListener('loadedmetadata', () => { cacheLayout(); handleScroll() }, { once: true })
      if (video.readyState >= 1) {
        cacheLayout()
        handleScroll()
      }
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
        <video
          ref={videoRef}
          src="/img/recruit/adventure-map.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full will-change-transform"
          style={{ transition: 'transform 0.15s ease-out' }}
        />
      </div>

      {/* Cloud animation layer (scrolls with background) */}
      <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none pt-14 lg:pt-0">
        <div
          ref={cloudRef}
          className="will-change-transform"
          style={{ transition: 'transform 0.15s ease-out' }}
        >
          <div
            style={{
              width: '200vw',
              animation: 'cloudDrift 60s linear infinite',
            }}
          >
            <div style={{ animation: 'cloudFloat 8s ease-in-out infinite' }}>
              <img
                src="/img/recruit/cloud.png"
                alt=""
                style={{ width: '50%', display: 'inline-block' }}
              />
              <img
                src="/img/recruit/cloud.png"
                alt=""
                style={{ width: '50%', display: 'inline-block' }}
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes cloudDrift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes cloudFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
      `}</style>

      {/* Page content */}
      <div className="relative z-10 pb-12 lg:pb-0">
        {children}
      </div>
      <RecruitFixedMenu />
    </div>
  )
}
