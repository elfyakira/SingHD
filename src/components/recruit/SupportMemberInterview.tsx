'use client'

import Link from 'next/link'
import Image from '@/components/QImage'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import type { SupportMember } from '@/data/support-members'
import { getOtherSupportMembers } from '@/data/support-members'

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

/** チャプター番号からRPGアイコン */
const chapterIcons: Record<string, string> = {
  '01': '🗡️',
  '02': '🤝',
  '03': '⚔️',
  '04': '🔮',
  '05': '📜',
}

export default function SupportMemberInterview({ member }: { member: SupportMember }) {
  const related = getOtherSupportMembers(member.slug)

  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={member.journeyImage}
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1C2A44]/70" />
        </div>
        <div className="relative text-center">
          <FadeInUp delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={serifStyle}>
              SUPPORT MEMBER
            </h1>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-[#F59E0B] rounded-full mx-auto mb-6" />
          </FadeInUp>
          {member.tagline && (
            <FadeInUp delay={400}>
              <p className="text-xl md:text-2xl text-[#F59E0B] font-bold leading-relaxed" style={serifStyle}>
                {member.tagline}
              </p>
            </FadeInUp>
          )}
        </div>
      </section>

      {/* ===== Profile Card ===== */}
      <section className="py-16 md:py-16 -mt-12 md:mt-0 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="md:flex md:flex-row md:items-stretch bg-white rounded-2xl shadow-lg relative overflow-hidden min-h-[380px] md:h-[200px]">
              {/* モバイル: 全面画像 */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                unoptimized
                sizes="100vw"
                className="object-cover md:hidden"
                priority
              />
              {/* PC: 左側画像 */}
              <div className="hidden md:block w-64 rounded-l-2xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              {/* テキスト */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm p-6 md:relative md:bg-transparent md:backdrop-blur-none md:p-8 md:py-12 md:text-left text-center md:flex md:flex-col md:justify-center">
                <p className="text-xs tracking-[0.3em] text-[#2563EB] mb-2">
                  {member.role || 'サポートメンバー'}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-2" style={serifStyle}>
                  {member.name}
                </h2>
                {member.tagline && (
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {member.tagline}
                  </p>
                )}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Interview Q&A — chapter by chapter ===== */}
      {member.chapters.map((chapter, chapterIdx) => {
        const isEven = chapterIdx % 2 === 0
        const bgClass = isEven ? 'bg-white' : 'bg-[#FAFAF5]'

        return (
          <section key={chapter.number} className={`py-20 lg:py-28 px-4 ${bgClass}`}>
            <div className="max-w-4xl mx-auto">
              {/* Chapter Header */}
              <FadeInUp>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-2 border-[#2563EB] bg-white rotate-45 mb-6">
                    <span className="text-[#2563EB] text-xl md:text-2xl font-bold -rotate-45" style={serifStyle}>
                      {chapter.number}
                    </span>
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase text-[#2563EB] mb-3">
                    CHAPTER {chapter.number}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1C2A44]" style={serifStyle}>
                    {chapter.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4" />
                </div>
              </FadeInUp>

              {/* Q&A Cards */}
              <div className="space-y-8">
                {chapter.questions.map((qa, qaIdx) => (
                  <FadeInUp key={qaIdx} delay={qaIdx < 4 ? qaIdx * 60 : 0}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center">
                          Q
                        </span>
                        <h4 className="text-base md:text-lg font-bold text-[#1C2A44] leading-relaxed pt-0.5">
                          {qa.question}
                        </h4>
                      </div>
                      <div className="pl-12 text-gray-600 leading-loose text-sm md:text-base space-y-4">
                        {qa.answer.split('\n\n').map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ===== MESSAGE (if available) ===== */}
      {member.message && member.message !== '（準備中）' && (
        <section className="py-20 lg:py-32 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-12">
                <p className="text-xs tracking-[0.3em] uppercase text-[#1C2A44] mb-4">MESSAGE</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-4" style={serifStyle}>
                  これから入社を考える方へ
                </h3>
                <div className="w-16 h-1 bg-[#F59E0B] rounded-full mx-auto" />
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="text-gray-700 leading-loose text-sm md:text-base space-y-6">
                {member.message.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>
      )}

      {/* ===== Related Members ===== */}
      <section className="py-20 lg:py-28 px-4 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1C2A44] mb-4">OTHER MEMBERS</p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1C2A44]" style={serifStyle}>
                他のサポートメンバー
              </h3>
              <div className="w-12 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4" />
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <FadeInUp key={r.slug} delay={i * 100}>
                <Link href={`/recruit/stories/${r.slug}`} className="group block">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-[#2563EB]/20 transition-all">
                    <div className="relative h-48">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="font-bold text-[#1C2A44] group-hover:text-[#2563EB] transition-colors" style={serifStyle}>
                        {r.name}
                      </p>
                      {r.tagline && (
                        <p className="text-sm text-gray-500 mt-1">{r.tagline}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/recruit" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2563EB] transition-colors">
              採用サイトTOPへ戻る →
            </Link>
          </div>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
