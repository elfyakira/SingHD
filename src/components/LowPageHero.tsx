'use client'

import Image from 'next/image'

interface LowPageHeroProps {
  titleEn: string        // 英語タイトル（大きく表示）
  titleJa: string        // 日本語サブタイトル
  imageSrc?: string      // 右側の画像（オプション）
  imageAlt?: string      // 画像のalt
}

/**
 * 各ページ共通のヒーローセクション
 * デザイン: page-1.png 参照
 * - ダーク背景 + 大きな英語タイトル + 日本語サブ
 * - 右側に斜めカットの画像
 * - 左下にグレーの斜め装飾
 */
export default function LowPageHero({
  titleEn,
  titleJa,
  imageSrc,
  imageAlt = '',
}: LowPageHeroProps) {
  return (
    <section className="relative">
      {/* ダーク背景エリア */}
      <div className="relative bg-[#0A0A0A] min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
        {/* テキストコンテンツ */}
        <div className="container mx-auto px-4 lg:px-8 py-10 md:py-14 lg:py-16">
          <div className="max-w-3xl">
            {/* 英語タイトル */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase">
              {titleEn}
            </h1>
            {/* 日本語サブタイトル */}
            <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3 tracking-wider">
              {titleJa}
            </p>
          </div>
        </div>

        {/* 右側の斜めカット画像 */}
        {imageSrc && (
          <div
            className="absolute top-8 md:top-12 lg:top-16 right-0 h-[calc(100%+40px)] md:h-[calc(100%+60px)] lg:h-[calc(100%+80px)] w-[40%] md:w-[38%] lg:w-[35%] overflow-hidden hidden md:block z-10"
            style={{
              clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="40vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* 画像がない場合のプレースホルダー */}
        {!imageSrc && (
          <div
            className="absolute top-8 md:top-12 lg:top-16 right-0 h-[calc(100%+40px)] md:h-[calc(100%+60px)] lg:h-[calc(100%+80px)] w-[40%] md:w-[38%] lg:w-[35%] overflow-hidden hidden md:block bg-gray-800 z-10"
            style={{
              clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
              {'{IMAGE}'}
            </div>
          </div>
        )}
      </div>

      {/* 左下のグレー斜め装飾 */}
      <div className="relative h-6 md:h-10 bg-white">
        <div
          className="absolute -top-12 md:-top-16 left-0 w-[250px] md:w-[350px] lg:w-[400px] h-[60px] md:h-[80px] bg-gray-100"
          style={{
            clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
          }}
        />
      </div>
    </section>
  )
}
