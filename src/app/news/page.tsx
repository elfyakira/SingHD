import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LowPageHero from '@/components/LowPageHero'
import NewsListClient from '@/components/news/NewsListClient'
import { getAllNews } from '@/lib/news'

export default function NewsPage() {
  const newsData = getAllNews()
  const categories = [
    'ALL',
    ...Array.from(new Set(newsData.map((n) => n.category))),
  ]

  return (
    <>
      <Header />

      <main className="pt-20">
        <LowPageHero
          titleEn="News"
          titleJa="ニュース"
          imageSrc="/img/hero/business.jpg"
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 lg:mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  News & Topics
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">お知らせ</h2>
            </div>

            <NewsListClient newsData={newsData} categories={categories} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
