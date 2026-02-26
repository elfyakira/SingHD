'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/**
 * TOPページ
 * セクション構成（HANDOFF準拠）:
 * 1. ヒーロー
 * 2. ミライク概要
 * 3. 3つのメリット（選ばれる理由）
 * 4. 支援の流れ
 * 5. 代表メッセージ
 * 6. 無料相談CTA
 */
export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ========================================
            1. ヒーローセクション
            - 背景: ダーク（黒系）
            - 大きなタイポグラフィ
            - 斜めの切り替えデザイン
           ======================================== */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* 背景: 白黒の斜め切り替え */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white" />
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-[#0A0A0A]"
              style={{
                clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            />
            {/* アクセントライン */}
            <div
              className="absolute top-[10%] right-[45%] w-px h-[80%] bg-[#C9A227] opacity-50"
              style={{
                transform: 'rotate(-15deg)',
              }}
            />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: テキスト */}
              <div className="space-y-6">
                {/* メインコピー */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {'{HERO_MAIN_COPY}'}
                </h1>
                {/* サブコピー */}
                <p className="text-xl md:text-2xl text-gray-600">
                  {'{HERO_SUB_COPY}'}
                </p>
                {/* CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-[#1C2A44] text-white px-8 py-4 font-medium hover:bg-[#141E30] transition-colors"
                  >
                    {'{HERO_CTA_BUTTON}'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* 右: 画像エリア（斜め切り替えの黒部分） */}
              <div className="relative">
                {/* ヒーロー画像: 撮影後に差し替え */}
                <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {'{HERO_IMAGE}'}
                  </div>
                </div>
              </div>
            </div>

            {/* スクロールインジケーター */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400 tracking-wider">SCROLL</span>
              <div className="w-px h-12 bg-gray-300" />
            </div>
          </div>
        </section>

        {/* ========================================
            2. ミライク概要セクション
            - サービス紹介
            - 詳細ページへのリンク
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: 画像 */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {'{MIRAIKU_IMAGE}'}
                  </div>
                </div>
              </div>

              {/* 右: テキスト */}
              <div className="space-y-6">
                {/* セクションラベル + アクセントライン */}
                <div className="flex items-center gap-4">
                  <span className="text-[#C9A227] text-2xl font-light">\</span>
                  <span className="text-sm tracking-wider text-gray-500 uppercase">
                    {'{MIRAIKU_LABEL}'}
                  </span>
                </div>

                {/* 英語タイトル */}
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {'{MIRAIKU_TITLE_EN}'}
                </h2>

                {/* 日本語説明 */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {'{MIRAIKU_DESCRIPTION}'}
                </p>

                {/* リンク */}
                <Link
                  href="/miraiku"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="text-[#1C2A44] font-medium border-b border-[#1C2A44] pb-1">
                    {'{MIRAIKU_LINK_TEXT}'}
                  </span>
                  <span className="w-10 h-10 rounded-full border border-[#1C2A44] flex items-center justify-center group-hover:bg-[#1C2A44] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            3. 選ばれる理由（3つのメリット）
            - 3つに絞って表示
            - 数字 + テキスト
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[#C9A227] text-3xl font-light">\</span>
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  {'{REASONS_LABEL}'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                {'{REASONS_TITLE}'}
              </h2>
            </div>

            {/* 3つのメリット */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* メリット1 */}
              <div className="bg-white p-8 rounded-lg">
                <span className="text-5xl font-bold text-[#0E7490]">01</span>
                <h3 className="text-xl font-bold mt-4 mb-3">
                  {'{REASON_1_TITLE}'}
                </h3>
                <p className="text-gray-600">
                  {'{REASON_1_DESCRIPTION}'}
                </p>
              </div>

              {/* メリット2 */}
              <div className="bg-white p-8 rounded-lg">
                <span className="text-5xl font-bold text-[#0E7490]">02</span>
                <h3 className="text-xl font-bold mt-4 mb-3">
                  {'{REASON_2_TITLE}'}
                </h3>
                <p className="text-gray-600">
                  {'{REASON_2_DESCRIPTION}'}
                </p>
              </div>

              {/* メリット3 */}
              <div className="bg-white p-8 rounded-lg">
                <span className="text-5xl font-bold text-[#0E7490]">03</span>
                <h3 className="text-xl font-bold mt-4 mb-3">
                  {'{REASON_3_TITLE}'}
                </h3>
                <p className="text-gray-600">
                  {'{REASON_3_DESCRIPTION}'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            4. 支援の流れセクション
            - 4ステップ
            - ステップ番号 + タイトル + 説明
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[#C9A227] text-3xl font-light">\</span>
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  {'{FLOW_LABEL}'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                {'{FLOW_TITLE}'}
              </h2>
            </div>

            {/* 4ステップ */}
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {'{FLOW_STEP_1_TITLE}'}
                </h3>
                <p className="text-sm text-gray-600">
                  {'{FLOW_STEP_1_DESCRIPTION}'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {'{FLOW_STEP_2_TITLE}'}
                </h3>
                <p className="text-sm text-gray-600">
                  {'{FLOW_STEP_2_DESCRIPTION}'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {'{FLOW_STEP_3_TITLE}'}
                </h3>
                <p className="text-sm text-gray-600">
                  {'{FLOW_STEP_3_DESCRIPTION}'}
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {'{FLOW_STEP_4_TITLE}'}
                </h3>
                <p className="text-sm text-gray-600">
                  {'{FLOW_STEP_4_DESCRIPTION}'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            5. 代表メッセージセクション
            - 代表写真
            - メッセージ
            - 代表名・肩書
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: テキスト */}
              <div className="space-y-6">
                {/* セクションラベル */}
                <div className="flex items-center gap-4">
                  <span className="text-[#C9A227] text-3xl font-light">\</span>
                  <span className="text-sm tracking-wider text-gray-400 uppercase">
                    {'{MESSAGE_LABEL}'}
                  </span>
                </div>

                {/* タイトル */}
                <h2 className="text-4xl md:text-5xl font-bold">
                  {'{MESSAGE_TITLE}'}
                </h2>

                {/* メッセージ本文 */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  {'{MESSAGE_BODY}'}
                </p>

                {/* 代表名・肩書 */}
                <div className="pt-4">
                  <p className="text-sm text-gray-400">
                    {'{MESSAGE_POSITION}'}
                  </p>
                  <p className="text-xl font-bold">
                    {'{MESSAGE_NAME}'}
                  </p>
                </div>
              </div>

              {/* 右: 代表写真 */}
              <div className="relative">
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {'{MESSAGE_IMAGE}'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            6. 無料相談CTAセクション
            - CTA
            - 補足情報
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* タイトル */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {'{CTA_TITLE}'}
              </h2>

              {/* サブテキスト */}
              <p className="text-gray-600 mb-8">
                {'{CTA_SUBTITLE}'}
              </p>

              {/* CTAボタン */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#1C2A44] text-white px-10 py-5 text-lg font-medium hover:bg-[#141E30] transition-colors"
              >
                {'{CTA_BUTTON}'}
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* 補足情報 */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
                <span>{'{CTA_INFO_1}'}</span>
                <span>{'{CTA_INFO_2}'}</span>
                <span>{'{CTA_INFO_3}'}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
