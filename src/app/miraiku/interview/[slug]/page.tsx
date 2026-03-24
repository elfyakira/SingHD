'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'
import {
  getInterviewBySlug,
  getOtherInterviews,
} from '@/data/interviews'
import FadeInUp from '@/components/animations/FadeInUp'
import StaggerContainer from '@/components/animations/StaggerContainer'
import SectionTitleEntrance from '@/components/animations/SectionTitleEntrance'
import HeroBackground from '@/components/animations/HeroBackground'

/** 画像コンポーネント（読込失敗時にプレースホルダー表示） */
function InterviewImage({
  src,
  alt,
  aspect,
}: {
  src: string
  alt: string
  aspect: 'portrait' | 'wide' | 'square'
}) {
  const [failed, setFailed] = useState(false)
  const aspectClass =
    aspect === 'portrait'
      ? 'aspect-[3/4]'
      : aspect === 'wide'
        ? 'aspect-[16/9] lg:aspect-[21/9]'
        : 'aspect-square'

  return (
    <div className={`${aspectClass} rounded overflow-hidden bg-[#0A1020] relative`}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="280px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-2xl text-white/20">
                {alt?.[0] || ''}
              </span>
            </div>
            <p className="text-xs text-white/15 tracking-wider">PHOTO</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function InterviewDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const interview = getInterviewBySlug(slug)
  const related = getOtherInterviews(slug)

  if (!interview) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-4">インタビューが見つかりません。</p>
            <Link href="/miraiku" className="text-[#0E7490] underline">
              ミライクページへ戻る
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* ========================================
            1. ヒーロー（interview1対応）
           ======================================== */}
        <section className="relative min-h-[60vh] lg:min-h-[80vh] bg-[#0D1520] text-white flex items-end overflow-hidden">
          {/* 右側ポートレート */}
          <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
            <Image
              src={interview.portraitImage || interview.image}
              alt={interview.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={interview.portraitPosition ? { objectPosition: interview.portraitPosition } : undefined}
              priority
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1520] via-[#0D1520]/60 to-transparent lg:via-transparent" />
          </div>

          {/* 装飾ライン */}
          <div className="absolute top-[20%] left-[55%] w-px h-48 bg-[#0E7490]/25 rotate-[30deg] hidden lg:block" />
          <div className="absolute bottom-[15%] left-[50%] w-px h-36 bg-[#0E7490]/20 rotate-[-30deg] hidden lg:block" />

          {/* テキスト（左寄せ） */}
          <HeroBackground className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-24" duration={1200} delay={200}>
            <div className="max-w-3xl">
              {interview.subtitle && (
                <p
                  className="text-base md:text-lg text-gray-400 tracking-[0.15em] mb-8"
                  style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                >
                  ー {interview.subtitle} ー
                </p>
              )}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.6] mb-10"
                style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
              >
                {interview.tagline.split('、').map((part, i, arr) =>
                  part ? (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && '、'}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ) : null
                )}
              </h1>

              <div className="border-t border-white/20 pt-8">
                {interview.company && (
                  <p className="text-base text-gray-400">
                    {interview.company}
                  </p>
                )}
                {interview.role && (
                  <p className="text-sm text-gray-500 mt-1">
                    {interview.role}
                  </p>
                )}
                <p
                  className="text-2xl font-medium mt-3 tracking-wide"
                  style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                >
                  {interview.name}
                </p>
                <p className="text-sm text-gray-500 tracking-wider mt-1">
                  {interview.nameEn}
                </p>
              </div>
            </div>
          </HeroBackground>

          {/* 下部ライン */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#0E7490]/40 via-[#0E7490]/10 to-transparent" />
        </section>

        {/* ========================================
            2. インタビュー概要（interview2対応）
           ======================================== */}
        <section className="py-16 lg:py-24 bg-[#141E30] text-white relative overflow-hidden">
          {/* 方眼背景 */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* 概要ヘッダー */}
              <FadeInUp className="mb-16">
                <SectionTitleEntrance direction="left" className="flex items-baseline gap-3 mb-6">
                  <h2
                    className="text-2xl md:text-3xl font-light tracking-wider"
                    style={{
                      fontFamily:
                        "'Times New Roman', 'YuMincho', 'Yu Mincho', serif",
                    }}
                  >
                    インタビュー概要
                  </h2>
                  <span className="text-xs text-gray-500 tracking-wider uppercase">
                    About
                  </span>
                </SectionTitleEntrance>
                <p className="text-sm md:text-base text-gray-300 leading-[2]">
                  {interview.overview}
                </p>
              </FadeInUp>

              {/* チャプター & Q&A */}
              {interview.chapters.map((chapter, chapterIdx) => {
                // チャプター間にワイド画像を挿入
                // チャプター1→2の間だけワイド画像（1箇所のみ）
                const showWidePhoto = chapterIdx === 0

                return (
                  <div key={chapter.number} className="mb-20 last:mb-0">
                    {/* チャプターヘッダー */}
                    <FadeInUp className="flex items-start gap-6 mb-12 border-t border-white/10 pt-8">
                      <div>
                        <p className="text-xs text-[#0E7490] tracking-[0.2em] font-bold">
                          MIRAIKU
                        </p>
                        <p className="text-3xl md:text-4xl font-light text-[#0E7490]">
                          {chapter.number}
                        </p>
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-light mt-3 leading-relaxed"
                        style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                      >
                        {chapter.title}
                      </h3>
                    </FadeInUp>

                    {/* Q&A */}
                    {chapter.questions.map((qa, qaIdx) => {
                      // qa.imageがある場合のみ画像表示（なければテキストのみ）
                      const hasImage = !!qa.image
                      const qLen = chapter.questions.length
                      const isRightSlot = qaIdx === 1
                      const isLeftSlot = qLen >= 5 && qaIdx === 3
                      const isWideAfter = false
                      const flipSide = chapterIdx % 2 === 1
                      const showRight = hasImage && (flipSide ? isLeftSlot : isRightSlot)
                      const showLeft = hasImage && (flipSide ? isRightSlot : isLeftSlot)

                      return (
                        <FadeInUp key={qaIdx}>
                          <div className="mb-12">
                            {showRight ? (
                              /* テキスト左 + 写真右 */
                              <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
                                <div>
                                  <h4 className="text-lg md:text-xl font-bold mb-6">
                                    <span className="text-[#0E7490] mr-1">Q.</span>
                                    {qa.question}
                                  </h4>
                                  <div className="text-sm md:text-base text-gray-300 leading-[2.2] space-y-4">
                                    {qa.answer.split('\n\n').map((para, pi) => (
                                      <p key={pi}>{para}</p>
                                    ))}
                                  </div>
                                </div>
                                <div className="mt-6 lg:mt-0">
                                  <InterviewImage
                                    src={qa.image!}
                                    alt={interview.name}
                                    aspect="portrait"
                                  />
                                </div>
                              </div>
                            ) : showLeft ? (
                              /* 写真左 + テキスト右 */
                              <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
                                <div className="mb-6 lg:mb-0">
                                  <InterviewImage
                                    src={qa.image!}
                                    alt={interview.name}
                                    aspect="portrait"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-lg md:text-xl font-bold mb-6">
                                    <span className="text-[#0E7490] mr-1">Q.</span>
                                    {qa.question}
                                  </h4>
                                  <div className="text-sm md:text-base text-gray-300 leading-[2.2] space-y-4">
                                    {qa.answer.split('\n\n').map((para, pi) => (
                                      <p key={pi}>{para}</p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              /* テキストのみ */
                              <div>
                                <h4 className="text-lg md:text-xl font-bold mb-6">
                                  <span className="text-[#0E7490] mr-1">Q.</span>
                                  {qa.question}
                                </h4>
                                <div className="text-sm md:text-base text-gray-300 leading-[2.2] space-y-4">
                                  {qa.answer.split('\n\n').map((para, pi) => (
                                    <p key={pi}>{para}</p>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Q&A後のワイド画像（チャプター末尾） */}
                          {isWideAfter && (
                            <div className="mb-12">
                              <InterviewImage
                                src={interview.wideImage || interview.image}
                                alt={interview.name}
                                aspect="wide"
                              />
                            </div>
                          )}
                        </FadeInUp>
                      )
                    })}

                    {/* チャプター間のワイド写真 */}
                    {showWidePhoto && (
                      <div className="my-16">
                        <InterviewImage
                          src={interview.wideImage || interview.image}
                          alt={interview.name}
                          aspect="wide"
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ========================================
            3. メッセージ（interview7対応）
           ======================================== */}
        <section className="relative py-20 lg:py-28 text-white overflow-hidden">
          {/* パララックス背景 */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url('${interview.image}')` }}
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <FadeInUp className="max-w-3xl mx-auto">
              <SectionTitleEntrance direction="left" className="flex items-baseline gap-3 mb-10">
                <h2
                  className="text-xl md:text-2xl font-light tracking-wider"
                  style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                >
                  これから起業を目指す方へ
                </h2>
                <span className="text-xs text-gray-500 tracking-wider uppercase">
                  Message
                </span>
              </SectionTitleEntrance>
              <div className="text-sm md:text-base text-gray-300 leading-[2.2] space-y-4">
                {interview.message.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ========================================
            4. プロフィール（interview8-9対応）
           ======================================== */}
        <section className="py-16 lg:py-24 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* プロフィールヘッダー */}
              <SectionTitleEntrance direction="left" className="mb-8">
                <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
                  Profile
                </p>
                <h2
                  className="text-2xl md:text-3xl font-light tracking-wider mt-1"
                  style={{
                    fontFamily:
                      "'Times New Roman', 'YuMincho', 'Yu Mincho', serif",
                  }}
                >
                  プロフィール
                </h2>
              </SectionTitleEntrance>

              <FadeInUp className="lg:grid lg:grid-cols-[240px_1fr] gap-10">
                {/* 左: 写真 */}
                <div className="mb-6 lg:mb-0 max-w-[240px]">
                  <div className={`aspect-square rounded overflow-hidden bg-[#0A1020] relative`}>
                    <Image
                      src={interview.profileImage || interview.image}
                      alt={interview.name}
                      fill
                      sizes="240px"
                      className="object-cover"
                      style={interview.profilePosition ? { objectPosition: interview.profilePosition } : undefined}
                    />
                  </div>
                </div>

                {/* 右: テキスト */}
                <div>
                  {interview.company && (
                    <p className="text-sm text-gray-500">
                      {interview.company}
                      {interview.role && ` ${interview.role}`}
                    </p>
                  )}
                  <div className="flex items-baseline gap-3 mt-1 mb-6">
                    <p
                      className="text-2xl font-medium"
                      style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                    >
                      {interview.name}
                    </p>
                    <p className="text-sm text-gray-400 tracking-wider">
                      {interview.nameEn}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 leading-[2.2]">
                    {interview.profile}
                  </p>
                </div>
              </FadeInUp>

              {/* 企業情報 */}
              {interview.companyInfo && (
                <div className="mt-16 border-t border-gray-200 pt-10">
                  <div className="flex items-baseline gap-3 mb-8">
                    <h3 className="text-lg font-bold">企業情報</h3>
                    <span className="text-xs text-gray-400 tracking-wider uppercase">
                      Company
                    </span>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {interview.companyInfo.name && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3 pr-8 text-gray-500 w-24">
                            社名
                          </td>
                          <td className="py-3">
                            {interview.companyInfo.name}
                          </td>
                        </tr>
                      )}
                      {interview.companyInfo.founded && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3 pr-8 text-gray-500 w-24">
                            設立日
                          </td>
                          <td className="py-3">
                            {interview.companyInfo.founded}
                          </td>
                        </tr>
                      )}
                      {interview.companyInfo.location && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3 pr-8 text-gray-500 w-24">
                            所在地
                          </td>
                          <td className="py-3">
                            {interview.companyInfo.location}
                          </td>
                        </tr>
                      )}
                      {interview.companyInfo.business && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3 pr-8 text-gray-500 w-24">
                            事業内容
                          </td>
                          <td className="py-3">
                            {interview.companyInfo.business}
                          </td>
                        </tr>
                      )}
                      {interview.companyInfo.url && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3 pr-8 text-gray-500 w-24">
                            HP
                          </td>
                          <td className="py-3">
                            <a
                              href={interview.companyInfo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0E7490] underline"
                            >
                              {interview.companyInfo.url}
                            </a>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================
            5. 関連インタビュー（interview10対応）
           ======================================== */}
        <section className="py-16 lg:py-24 bg-[#141E30] text-white relative overflow-hidden">
          {/* 方眼背景 */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* 関連インタビュー PICKUP */}
            <SectionTitleEntrance direction="left" className="mb-10">
              <div className="flex items-baseline gap-3">
                <h2
                  className="text-xl md:text-2xl font-light tracking-wider"
                  style={{
                    fontFamily:
                      "'Times New Roman', 'YuMincho', 'Yu Mincho', serif",
                  }}
                >
                  関連インタビュー
                </h2>
                <span className="text-xs text-gray-500 tracking-wider uppercase">
                  Pickup
                </span>
              </div>
            </SectionTitleEntrance>

            <StaggerContainer staggerDelay={150} className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/miraiku/interview/${r.slug}`}
                  className="group"
                >
                  <div className="mb-3 group-hover:opacity-90 transition-opacity">
                    <InterviewImage
                      src={r.image}
                      alt={r.name}
                      aspect="portrait"
                    />
                  </div>
                  <p
                    className="text-sm text-gray-300 mb-2"
                    style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                  >
                    {r.tagline}
                  </p>
                  <p
                    className="text-base font-medium"
                    style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                  >
                    {r.name}
                  </p>
                  <p className="text-xs text-gray-500 tracking-wider mt-0.5">
                    {r.nameEn}
                  </p>
                </Link>
              ))}
            </StaggerContainer>

            {/* ミライクページへ戻る */}
            <div className="text-center mt-16">
              <Link
                href="/miraiku"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                ミライクページへ戻る
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
