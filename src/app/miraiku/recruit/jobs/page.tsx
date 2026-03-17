'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

const jobDetails = [
  {
    label: '職種',
    value: '営業、営業事務、クリエーター、コンサルタント など',
  },
  {
    label: '仕事内容',
    value: 'あなたに合わせて決めます',
  },
  {
    label: '給与',
    value: 'あなたに合わせて決めます',
  },
  {
    label: '福利厚生',
    value:
      '退職金あり、賞与あり、大型連休あり、有給あり、ウォーターサーバーあり、駐車場有',
  },
  {
    label: '応募方法',
    value: '電話、メール、DM など何でもOK',
  },
]

const contactMethods = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#2563EB]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    title: '電話',
    description: 'お電話でのお問い合わせ',
    sub: 'お気軽にご連絡ください',
    href: null,
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#2563EB]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: 'メール',
    description: 'お問い合わせフォーム',
    sub: 'フォームから送信できます',
    href: '/contact',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#2563EB]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
    title: 'DM',
    description: 'SNSのDMでもOK',
    sub: 'Instagram・X など',
    href: null,
  },
]

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 13
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              RECRUIT
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">募集要項</p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Job Details Table ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-px bg-[#2563EB]" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44]"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                募集要項
              </h2>
            </div>
          </FadeInUp>

          <div className="border-2 border-[#2563EB]/20 rounded-2xl overflow-hidden">
            {jobDetails.map((item, index) => (
              <FadeInUp key={index} delay={index * 80}>
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF5]'
                  } ${
                    index < jobDetails.length - 1
                      ? 'border-b border-gray-200'
                      : ''
                  }`}
                >
                  <div className="md:w-40 lg:w-48 flex-shrink-0 px-6 py-4 md:py-5 bg-[#2563EB]/5 border-b md:border-b-0 md:border-r border-gray-200">
                    <span className="text-sm text-[#2563EB] font-medium">
                      {item.label}
                    </span>
                  </div>
                  <div className="px-6 py-4 md:py-5 flex-1">
                    <span className="text-sm md:text-base text-[#1C2A44] leading-relaxed">
                      {item.value}
                    </span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Application Section ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-[#2563EB] mb-4">
                JOIN THE ADVENTURE
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                冒険に参加する
              </h2>
              <div className="w-16 h-px bg-[#2563EB] mx-auto mb-6" />
              <p className="text-gray-600 text-sm md:text-base">
                あなたの物語を、ここから始めよう。
              </p>
            </div>
          </FadeInUp>

          {/* Contact method cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <FadeInUp key={index} delay={index * 150}>
                {method.href ? (
                  <Link href={method.href} className="block group">
                    <div className="border-2 border-[#2563EB]/20 hover:border-[#2563EB]/50 bg-white rounded-2xl p-8 text-center transition-all duration-300 h-full shadow-sm hover:shadow-md">
                      <div className="flex justify-center mb-5">
                        {method.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#1C2A44] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {method.description}
                      </p>
                      <p className="text-xs text-gray-500">{method.sub}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="border-2 border-[#2563EB]/20 bg-white rounded-2xl p-8 text-center h-full shadow-sm">
                    <div className="flex justify-center mb-5">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#1C2A44] mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {method.description}
                    </p>
                    <p className="text-xs text-gray-500">{method.sub}</p>
                  </div>
                )}
              </FadeInUp>
            ))}
          </div>

          {/* Main CTA button */}
          <FadeInUp delay={500}>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-[#F59E0B] text-white px-12 py-5 text-lg font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-colors shadow-md"
              >
                エントリーする
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Final Closing ===== */}
      <section className="py-24 lg:py-36 px-4 bg-[#2563EB] relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeInUp>
            <div className="w-16 h-px bg-white/50 mx-auto mb-12" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="text-lg md:text-2xl text-white/90 font-bold mb-16"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの冒険をSingホールディングスで。
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
            <div className="w-12 h-px bg-white/30 mx-auto mb-8" />
            <Link
              href="/"
              className="inline-block text-sm text-white/50 hover:text-white/80 transition-colors tracking-wider"
            >
              コーポレートサイトへ
            </Link>
          </FadeInUp>
        </div>
      </section>

      <ChapterNav currentId="jobs" />
      <RecruitCTA />
    </div>
  )
}
