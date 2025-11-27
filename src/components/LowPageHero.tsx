'use client'

import { useEffect, useState } from 'react'

interface LowPageHeroProps {
  titleEn: string
  titleJa: string
  imageSrc: string
  imageAlt?: string
}

export default function LowPageHero({
  titleEn,
  titleJa,
  imageSrc,
  imageAlt = '',
}: LowPageHeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block relative min-h-[400px] lg:min-h-[450px]">
        {/* Title Area */}
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="max-w-xl">
            <h1>
              <span
                className={`block text-6xl lg:text-8xl font-bold italic text-gray-900 tracking-tight transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {titleEn}
              </span>
              <span
                className={`block mt-4 text-lg lg:text-xl text-gray-600 transition-all duration-700 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {titleJa}
              </span>
            </h1>
          </div>
        </div>

        {/* Hero Image with SVG Mask (Desktop) */}
        <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none">
          {/* SVG Mask Definition */}
          <svg className="absolute" width="0" height="0" aria-hidden="true">
            <defs>
              <clipPath id="heroClipPath" clipPathUnits="objectBoundingBox">
                <path d="M0 1C0.14 0.47 0.51 0.02 1 0V1Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Masked Image Container */}
          <div
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 delay-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              clipPath: 'url(#heroClipPath)',
              WebkitClipPath: 'url(#heroClipPath)',
            }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(0, ${scrollY * 0.1}px, 0) scale(1.2)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Title Area */}
        <div className="container mx-auto px-4 pt-8 pb-6">
          <h1>
            <span
              className={`block text-4xl sm:text-5xl font-bold italic text-gray-900 tracking-tight transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {titleEn}
            </span>
            <span
              className={`block mt-2 text-base text-gray-600 transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {titleJa}
            </span>
          </h1>
        </div>

        {/* Hero Image (Mobile - Full Width with curve) */}
        <div className="relative w-full h-48 sm:h-64 overflow-hidden">
          {/* SVG Mask for Mobile */}
          <svg className="absolute" width="0" height="0" aria-hidden="true">
            <defs>
              <clipPath id="heroClipPathMobile" clipPathUnits="objectBoundingBox">
                <path d="M0 0.15C0.3 0 0.7 0 1 0.15V1H0Z" />
              </clipPath>
            </defs>
          </svg>

          <div
            className={`absolute inset-0 transition-opacity duration-1000 delay-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              clipPath: 'url(#heroClipPathMobile)',
              WebkitClipPath: 'url(#heroClipPathMobile)',
            }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              style={{
                transform: 'scale(1.1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
