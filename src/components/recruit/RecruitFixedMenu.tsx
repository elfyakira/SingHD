'use client'

import { Sword, BookOpen, Scroll, Shield } from 'lucide-react'

const menuItems = [
  { label: '出発の広場', desc: 'TOPページに戻る', href: '/recruit', icon: Sword, color: '#2563EB' },
  { label: '冒険者ガイド', desc: '知恵袋コンテンツ', href: '/recruit/guide', icon: BookOpen, color: '#059669' },
  { label: '▶ 冒険診断', desc: 'あなたのタイプは？', href: '/recruit/diagnosis', icon: Scroll, color: '#D97706' },
  { label: '▶ 冒険者ギルド', desc: '冒険者ギルドに相談する', href: '/recruit/entry', icon: Shield, color: '#DC2626' },
]

export default function RecruitFixedMenu() {
  return (
    <>
      {/* Mobile: 下部固定メニュー */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex-1 flex flex-col items-center gap-1 py-2.5 text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: item.color }}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* PC: 右端固定メニュー */}
      <nav className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-1">
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex flex-col items-center gap-2 text-white px-5 py-5 rounded-l-lg transition-opacity hover:opacity-80 whitespace-nowrap"
            style={{ backgroundColor: item.color }}
          >
            <item.icon className="w-8 h-8" />
            <span className="text-sm font-bold">{item.label}</span>
            <span className="text-[10px]">{item.desc}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
