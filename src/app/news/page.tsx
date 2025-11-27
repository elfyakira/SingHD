'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactCTA from '@/components/layout/ContactCTA'
import LowPageHero from '@/components/LowPageHero'

// TODO: 実際のニュースデータに置き換え
const newsData = [
  {
    id: 1,
    date: '2023.12.27',
    category: 'ALL',
    title: 'コーポレートサイトを開設しました。',
  },
  {
    id: 2,
    date: '2025.5.9',
    category: 'おしらせ',
    title: 'GOOD CAST社の子会社化について',
  },
  {
    id: 3,
    date: '2025.5.9',
    category: 'おしらせ',
    title: 'MIND WAY社の子会社化について',
  },
]

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

        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-center text-gray-600 mb-4">フリーワード検索</p>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-12 focus:outline-none focus:border-[#ea5506]"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-[#ea5506] text-white rounded-r-lg hover:bg-[#d14800] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#ea5506] text-white border-[#ea5506]'
                    : 'border-gray-300 text-gray-600 hover:border-[#ea5506]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News List */}
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            {filteredNews.length > 0 ? (
              <div className="space-y-6">
                {filteredNews.map((news) => (
                  <article
                    key={news.id}
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 pb-6 border-b border-gray-200 last:border-0"
                  >
                    {/* Logo placeholder */}
                    <div className="w-24 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                      <div className="w-12 h-12">
                        {/* TODO: ロゴ画像に置き換え */}
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <polygon
                            points="25,50 50,25 50,50 25,75"
                            fill="#e5e5e5"
                          />
                          <polygon
                            points="50,25 75,50 50,75 25,50"
                            fill="#f5deb3"
                          />
                          <polygon
                            points="50,50 75,25 100,50 75,75"
                            fill="#ea5506"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-500 text-sm">
                          {news.date}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            news.category === 'ALL'
                              ? 'bg-blue-100 text-blue-600 border border-blue-300'
                              : 'bg-orange-50 text-[#ea5506] border border-[#ea5506]'
                          }`}
                        >
                          {news.category}
                        </span>
                      </div>
                      <h2 className="text-gray-800 font-medium hover:text-[#ea5506] transition-colors cursor-pointer">
                        {news.title}
                      </h2>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">
                該当するニュースがありません。
              </p>
            )}
          </div>
        </div>
      </main>

      <ContactCTA />
      <Footer />
    </>
  )
}
