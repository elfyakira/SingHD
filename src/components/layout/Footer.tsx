'use client'

import { siteConfig } from '@/config/seo'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="relative bg-white py-16">
        {/* Decorative Dots Background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute inset-0 blur-xl">
            {/* カラフルなドット背景 */}
            <div className="absolute top-10 right-10 w-16 h-8 bg-blue-400 rounded-full transform rotate-45" />
            <div className="absolute top-20 right-32 w-12 h-6 bg-orange-400 rounded-full transform rotate-45" />
            <div className="absolute top-32 right-16 w-14 h-7 bg-green-400 rounded-full transform rotate-45" />
            <div className="absolute top-44 right-40 w-10 h-5 bg-yellow-400 rounded-full transform rotate-45" />
            <div className="absolute top-16 right-52 w-12 h-6 bg-red-400 rounded-full transform rotate-45" />
            <div className="absolute top-36 right-28 w-8 h-4 bg-cyan-400 rounded-full transform rotate-45" />
            <div className="absolute top-52 right-48 w-14 h-7 bg-purple-400 rounded-full transform rotate-45" />
            <div className="absolute top-8 right-44 w-10 h-5 bg-emerald-400 rounded-full transform rotate-45" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Slogan */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">
              未来を変える挑戦に、力を。
            </p>
            <h2 className="text-4xl md:text-5xl font-bold italic">
              Shape the future.
            </h2>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 mt-8">
            <p>
              © Sing Holdings Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
