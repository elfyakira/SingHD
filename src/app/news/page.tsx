'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LowPageHero from '@/components/LowPageHero'

// ニュースデータ（記事追加時はここに追加）
const newsData: { id: number; date: string; category: string; title: string }[] = []

const categories = ['ALL', 'おしらせ']

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const filteredNews = newsData.filter((news) => {
    const matchesSearch = news.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'ALL' || news.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <LowPageHero
          titleEn="News"
          titleJa="ニュース"
          imageSrc="/img/hero/business.jpg"
        />

        {/* ========================================
            ニュース一覧セクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="mb-12 lg:mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  News & Topics
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                お知らせ
              </h2>
            </div>

            {/* 検索・フィルター */}
            <div className="max-w-4xl mb-12">
              {/* 検索 */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-3">フリーワード検索</p>
                <div className="relative max-w-md">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="キーワードを入力"
                    className="w-full px-4 py-3 border border-gray-300 pr-12 focus:outline-none focus:border-[#1C2A44] transition-colors"
                  />
                  <button className="absolute right-0 top-0 bottom-0 px-4 bg-[#1C2A44] text-white hover:bg-[#141E30] transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* カテゴリ */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 border text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#1C2A44] text-white border-[#1C2A44]'
                        : 'border-gray-300 text-gray-600 hover:border-[#1C2A44] hover:text-[#1C2A44]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* ニュース一覧 */}
            <div className="max-w-4xl">
              {filteredNews.length > 0 ? (
                <div className="divide-y divide-gray-200 border-t border-gray-200">
                  {filteredNews.map((news) => (
                    <article
                      key={news.id}
                      className="py-6 flex flex-col md:flex-row md:items-center gap-4 group cursor-pointer"
                    >
                      {/* 日付・カテゴリ */}
                      <div className="flex items-center gap-4 md:w-48 shrink-0">
                        <span className="text-gray-500 text-sm">
                          {news.date}
                        </span>
                        <span className="px-3 py-1 bg-[#1C2A44] text-white text-xs">
                          {news.category}
                        </span>
                      </div>

                      {/* タイトル */}
                      <h3 className="text-gray-800 group-hover:text-[#0E7490] transition-colors">
                        {news.title}
                      </h3>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-[#f5f5f5]">
                  <p className="text-gray-500">
                    現在ニュースはありません。
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
