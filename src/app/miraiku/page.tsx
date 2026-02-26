'use client'

import Link from 'next/link'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LowPageHero from '@/components/LowPageHero'
import { useState } from 'react'

/**
 * ミライク詳細ページ
 * セクション構成（HANDOFF準拠）:
 * 1. ヒーロー
 * 2. サービス概要
 * 3. 支援内容詳細（6つ）
 * 4. 支援の流れ（4ステップ）
 * 5. グループ参画
 * 6. FAQ
 * 7. CTA
 */
export default function MiraikuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Header />

      <main>
        {/* ========================================
            1. ヒーローセクション
           ======================================== */}
        <LowPageHero
          titleEn="MIRAIKU"
          titleJa="{MIRAIKU_HERO_SUBTITLE}"
        />

        {/* ========================================
            2. サービス概要セクション
            - ミライクとは何か
            - 対象者
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: 画像 */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {'{MIRAIKU_OVERVIEW_IMAGE}'}
                  </div>
                </div>
              </div>

              {/* 右: テキスト */}
              <div className="space-y-6">
                {/* セクションラベル */}
                <div className="flex items-center gap-4">
                  <span className="text-[#C9A227] text-2xl font-light">\</span>
                  <span className="text-sm tracking-wider text-gray-500 uppercase">
                    {'{MIRAIKU_OVERVIEW_LABEL}'}
                  </span>
                </div>

                {/* タイトル */}
                <h2 className="text-3xl md:text-4xl font-bold">
                  {'{MIRAIKU_OVERVIEW_TITLE}'}
                </h2>

                {/* 説明文 */}
                <p className="text-gray-600 leading-relaxed">
                  {'{MIRAIKU_OVERVIEW_DESCRIPTION}'}
                </p>

                {/* 対象者 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">{'{MIRAIKU_TARGET_TITLE}'}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#0E7490]" />
                      <span>{'{MIRAIKU_TARGET_1}'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#0E7490]" />
                      <span>{'{MIRAIKU_TARGET_2}'}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#0E7490]" />
                      <span>{'{MIRAIKU_TARGET_3}'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            3. 支援内容詳細セクション
            - 6つの支援内容
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[#C9A227] text-3xl font-light">\</span>
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  {'{SUPPORT_LABEL}'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                {'{SUPPORT_TITLE}'}
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {'{SUPPORT_DESCRIPTION}'}
              </p>
            </div>

            {/* 6つの支援内容 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 支援1: 事業設計 */}
              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {'{SUPPORT_1_TITLE}'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {'{SUPPORT_1_DESCRIPTION}'}
                </p>
              </div>

              {/* 支援2: 収益モデル構築 */}
              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {'{SUPPORT_2_TITLE}'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {'{SUPPORT_2_DESCRIPTION}'}
                </p>
              </div>

              {/* 支援3: 法人設立支援 */}
              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {'{SUPPORT_3_TITLE}'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {'{SUPPORT_3_DESCRIPTION}'}
                </p>
              </div>

              {/* 支援4: 営業支援 */}
              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {'{SUPPORT_4_TITLE}'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {'{SUPPORT_4_DESCRIPTION}'}
                </p>
              </div>

              {/* 支援5: マーケティング支援 */}
              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">05</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {'{SUPPORT_5_TITLE}'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {'{SUPPORT_5_DESCRIPTION}'}
                </p>
              </div>

              {/* 支援6: 資金計画サポート */}
              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">06</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {'{SUPPORT_6_TITLE}'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {'{SUPPORT_6_DESCRIPTION}'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            4. 支援の流れセクション
            - 4ステップ詳細
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[#C9A227] text-3xl font-light">\</span>
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  {'{FLOW_DETAIL_LABEL}'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                {'{FLOW_DETAIL_TITLE}'}
              </h2>
            </div>

            {/* 4ステップ（縦並び・詳細版） */}
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {'{FLOW_DETAIL_STEP_1_TITLE}'}
                  </h3>
                  <p className="text-gray-600">
                    {'{FLOW_DETAIL_STEP_1_DESCRIPTION}'}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {'{FLOW_DETAIL_STEP_2_TITLE}'}
                  </h3>
                  <p className="text-gray-600">
                    {'{FLOW_DETAIL_STEP_2_DESCRIPTION}'}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {'{FLOW_DETAIL_STEP_3_TITLE}'}
                  </h3>
                  <p className="text-gray-600">
                    {'{FLOW_DETAIL_STEP_3_DESCRIPTION}'}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {'{FLOW_DETAIL_STEP_4_TITLE}'}
                  </h3>
                  <p className="text-gray-600">
                    {'{FLOW_DETAIL_STEP_4_DESCRIPTION}'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            5. グループ参画セクション
            - 参画形態
            - メリット
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: テキスト */}
              <div className="space-y-6">
                {/* セクションラベル */}
                <div className="flex items-center gap-4">
                  <span className="text-[#C9A227] text-2xl font-light">\</span>
                  <span className="text-sm tracking-wider text-gray-400 uppercase">
                    {'{GROUP_LABEL}'}
                  </span>
                </div>

                {/* タイトル */}
                <h2 className="text-3xl md:text-4xl font-bold">
                  {'{GROUP_TITLE}'}
                </h2>

                {/* 説明文 */}
                <p className="text-gray-300 leading-relaxed">
                  {'{GROUP_DESCRIPTION}'}
                </p>

                {/* 参画形態 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#C9A227]">
                    {'{GROUP_TYPE_TITLE}'}
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#0E7490] rounded-full" />
                      {'{GROUP_TYPE_1}'}
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#0E7490] rounded-full" />
                      {'{GROUP_TYPE_2}'}
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#0E7490] rounded-full" />
                      {'{GROUP_TYPE_3}'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* 右: 参画メリット */}
              <div className="bg-white/5 backdrop-blur p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6 text-[#C9A227]">
                  {'{GROUP_MERIT_TITLE}'}
                </h3>
                <div className="space-y-4">
                  {/* メリット1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{'{GROUP_MERIT_1_TITLE}'}</h4>
                      <p className="text-sm text-gray-400">{'{GROUP_MERIT_1_DESC}'}</p>
                    </div>
                  </div>

                  {/* メリット2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{'{GROUP_MERIT_2_TITLE}'}</h4>
                      <p className="text-sm text-gray-400">{'{GROUP_MERIT_2_DESC}'}</p>
                    </div>
                  </div>

                  {/* メリット3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{'{GROUP_MERIT_3_TITLE}'}</h4>
                      <p className="text-sm text-gray-400">{'{GROUP_MERIT_3_DESC}'}</p>
                    </div>
                  </div>

                  {/* メリット4 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{'{GROUP_MERIT_4_TITLE}'}</h4>
                      <p className="text-sm text-gray-400">{'{GROUP_MERIT_4_DESC}'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            6. FAQセクション
            - 5つのQ&A
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[#C9A227] text-3xl font-light">\</span>
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  {'{FAQ_LABEL}'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                {'{FAQ_TITLE}'}
              </h2>
            </div>

            {/* FAQ リスト */}
            <div className="max-w-3xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold">{'{FAQ_Q1}'}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 0 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-6 text-gray-600">
                    {'{FAQ_A1}'}
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold">{'{FAQ_Q2}'}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 1 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6 text-gray-600">
                    {'{FAQ_A2}'}
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold">{'{FAQ_Q3}'}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 2 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6 text-gray-600">
                    {'{FAQ_A3}'}
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold">{'{FAQ_Q4}'}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 3 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6 text-gray-600">
                    {'{FAQ_A4}'}
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(4)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold">{'{FAQ_Q5}'}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === 4 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-6 text-gray-600">
                    {'{FAQ_A5}'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            7. CTAセクション
            - 無料相談予約
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* タイトル */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {'{MIRAIKU_CTA_TITLE}'}
              </h2>

              {/* サブテキスト */}
              <p className="text-gray-600 mb-8">
                {'{MIRAIKU_CTA_SUBTITLE}'}
              </p>

              {/* CTAボタン */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#1C2A44] text-white px-10 py-5 text-lg font-medium hover:bg-[#141E30] transition-colors"
              >
                {'{MIRAIKU_CTA_BUTTON}'}
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* 補足情報 */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
                <span>{'{MIRAIKU_CTA_INFO_1}'}</span>
                <span>{'{MIRAIKU_CTA_INFO_2}'}</span>
                <span>{'{MIRAIKU_CTA_INFO_3}'}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
