'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getChapterNav } from '@/data/recruit-chapters'

interface ChapterNavProps {
  currentId: string
}

export default function ChapterNav({ currentId }: ChapterNavProps) {
  const { prev, next } = getChapterNav(currentId)

  return (
    <nav className="border-t border-gray-200 bg-[#FAFAF5]">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="flex items-stretch">
          {/* Previous */}
          <div className="flex-1 border-r border-gray-200">
            {prev ? (
              <Link
                href={prev.href}
                className="flex items-center gap-4 py-8 pr-4 group hover:bg-[#2563EB]/5 transition-colors h-full"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors flex-shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 tracking-wider uppercase">Prev</span>
                  <p className="text-sm text-gray-700 group-hover:text-[#2563EB] transition-colors mt-1">
                    {prev.number} {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="py-8" />
            )}
          </div>

          {/* Next */}
          <div className="flex-1">
            {next ? (
              <Link
                href={next.href}
                className="flex items-center justify-end gap-4 py-8 pl-4 group hover:bg-[#2563EB]/5 transition-colors h-full"
              >
                <div className="text-right">
                  <span className="text-xs text-gray-400 tracking-wider uppercase">Next</span>
                  <p className="text-sm text-gray-700 group-hover:text-[#2563EB] transition-colors mt-1">
                    {next.number} {next.title}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#2563EB] transition-colors flex-shrink-0" />
              </Link>
            ) : (
              <div className="py-8" />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
