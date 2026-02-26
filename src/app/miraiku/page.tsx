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

  const faqData = [
    {
      question: '未経験でも可能ですか？',
      answer: '可能です。ただし、本気で挑戦する意欲は必要です。経験よりも「やりきる覚悟」を重視しています。',
    },
    {
      question: '資金がありません。',
      answer: 'まずは収益モデルの設計から支援します。資金調達のサポートや、グループ会社への参画という選択肢もあります。',
    },
    {
      question: '学生でも可能ですか？',
      answer: '可能です。年齢や学歴は問いません。本気で起業に挑戦したい方であれば、学生の方も歓迎しています。',
    },
    {
      question: '収益化までどれくらいかかりますか？',
      answer: '事業内容や市場環境により異なりますが、6ヶ月〜1年を目安にしています。無理のないペースで着実に進めていきます。',
    },
    {
      question: '途中解約は可能ですか？',
      answer: '可能です。契約内容や条件は事前に明示し、ご納得いただいた上でスタートします。',
    },
  ]

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* ========================================
            1. ヒーローセクション
           ======================================== */}
        <LowPageHero
          titleEn="MIRAIKU"
          titleJa="起業支援プログラム"
          imageSrc="/img/miraiku/miraiku-hero.jpg"
        />

        {/* ========================================
            2. サービス概要セクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: 画像 */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/img/miraiku/miraiku-overview.jpg"
                    alt="ミライク サービス概要"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </div>

              {/* 右: テキスト */}
              <div className="space-y-6">
                <div className="mb-4">
                  <span className="text-sm tracking-wider text-gray-500 uppercase">
                    About
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">
                  ミライクとは
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  ミライクは、22〜35歳の起業志望者を対象とした起業支援プログラムです。
                  事業設計から収益化まで、一貫して伴走支援を行います。
                  「挑戦する人に、現実的な仕組みと環境を提供する」をミッションに、
                  本気で起業を目指す方をサポートします。
                </p>

                {/* 対象者 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3">こんな方におすすめ</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#0E7490]" />
                      <span>22〜35歳の起業志望者</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#0E7490]" />
                      <span>本気で挑戦したい方</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#0E7490]" />
                      <span>半年以内に動きたい方</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            3. 支援内容詳細セクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Support
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                支援内容
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                起業に必要な6つの領域を包括的にサポートします。
              </p>
            </div>

            {/* 6つの支援内容 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">事業設計</h3>
                <p className="text-gray-600 text-sm">
                  ビジネスアイデアを具体的な事業計画に落とし込みます。市場分析、競合調査、ターゲット設定など、成功の土台を築きます。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">収益モデル構築</h3>
                <p className="text-gray-600 text-sm">
                  持続可能な収益モデルを一緒に構築します。価格設定、販売チャネル、コスト構造など、稼ぐ仕組みを設計します。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">法人設立支援</h3>
                <p className="text-gray-600 text-sm">
                  会社設立に必要な手続きをサポートします。登記、届出、契約書作成など、専門家と連携して対応します。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-3">営業支援</h3>
                <p className="text-gray-600 text-sm">
                  顧客獲得のための営業戦略を支援します。グループ会社のネットワークを活用した紹介や、営業ノウハウの提供も行います。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">05</span>
                </div>
                <h3 className="text-xl font-bold mb-3">マーケティング支援</h3>
                <p className="text-gray-600 text-sm">
                  ブランディング、Web集客、SNS運用など、認知拡大と集客のためのマーケティング施策をサポートします。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#1C2A44] text-white rounded flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">06</span>
                </div>
                <h3 className="text-xl font-bold mb-3">資金計画サポート</h3>
                <p className="text-gray-600 text-sm">
                  資金調達や財務計画の策定を支援します。融資、補助金、投資家紹介など、資金面での課題解決をサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            4. 支援の流れセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  Flow
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                支援の流れ
              </h2>
            </div>

            {/* 4ステップ（縦並び・詳細版） */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">無料相談</h3>
                  <p className="text-gray-600">
                    まずはお気軽にご相談ください。現在の状況や目標をお聞かせいただき、最適な支援プランをご提案します。オンライン・対面どちらでも対応可能です。
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">事業設計・市場検証</h3>
                  <p className="text-gray-600">
                    ビジネスアイデアを具体化し、市場での実現可能性を検証します。ターゲット顧客、競合分析、差別化ポイントを明確にしていきます。
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">収益モデル構築</h3>
                  <p className="text-gray-600">
                    持続的に稼ぐ仕組みを構築します。価格設定、販売チャネル、コスト管理など、ビジネスとして成り立つモデルを一緒に作り上げます。
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1C2A44] text-white flex items-center justify-center text-2xl md:text-3xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">実行・伴走支援</h3>
                  <p className="text-gray-600">
                    計画を実行に移し、成果が出るまで伴走します。営業支援、マーケティング支援、資金調達支援など、必要に応じてサポートを提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            5. グループ参画セクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左: テキスト */}
              <div className="space-y-6">
                <div className="mb-4">
                  <span className="text-sm tracking-wider text-gray-400 uppercase">
                    Join Us
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">
                  グループ会社への参画
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  ミライクでは、独立起業だけでなく、グループ会社への参画という選択肢も用意しています。
                  給与を得ながら事業経験を積み、将来の独立に向けた準備ができます。
                </p>

                {/* 参画形態 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#0E7490]">参画形態</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#0E7490] rounded-full" />
                      新規事業立ち上げ
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#0E7490] rounded-full" />
                      経営幹部候補
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#0E7490] rounded-full" />
                      事業責任者
                    </li>
                  </ul>
                </div>
              </div>

              {/* 右: 参画メリット */}
              <div className="bg-white/5 backdrop-blur p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6 text-[#0E7490]">参画メリット</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">給与保証</h4>
                      <p className="text-sm text-gray-400">安定した収入を得ながら起業準備ができます。</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">資金バックアップ</h4>
                      <p className="text-sm text-gray-400">事業に必要な資金をグループがサポートします。</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">営業基盤共有</h4>
                      <p className="text-sm text-gray-400">グループの顧客基盤やネットワークを活用できます。</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E7490] text-white rounded flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">経営ノウハウ提供</h4>
                      <p className="text-sm text-gray-400">経営に必要な知識やスキルを実践で学べます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            6. FAQセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm tracking-wider text-gray-500 uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                よくある質問
              </h2>
            </div>

            {/* FAQ リスト */}
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            7. CTAセクション
           ======================================== */}
        <section className="py-20 lg:py-32 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                まずは無料相談から
              </h2>

              <p className="text-gray-600 mb-8">
                起業に関するお悩み、何でもお気軽にご相談ください。
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#1C2A44] text-white px-10 py-5 text-lg font-medium hover:bg-[#141E30] transition-colors"
              >
                無料相談を予約する
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
                <span>オンライン・対面対応</span>
                <span>60分</span>
                <span>代表が直接対応</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
