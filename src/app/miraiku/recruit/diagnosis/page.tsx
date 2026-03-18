'use client'

import { useState } from 'react'
import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

/* ─── Data ─── */

const questions = [
  {
    question: '新しいことに挑戦するとき、あなたはどちらに近い？',
    choices: [
      { label: 'A', text: 'とにかくやってみる' },
      { label: 'B', text: 'まずは情報を集める' },
      { label: 'C', text: '仲間と相談して決める' },
    ],
  },
  {
    question: 'チームで何かをするときのあなたは？',
    choices: [
      { label: 'A', text: '先頭に立って進める' },
      { label: 'B', text: '仕組みを作って支える' },
      { label: 'C', text: '周りを見ながら調整する' },
    ],
  },
  {
    question: '困難にぶつかったときどうする？',
    choices: [
      { label: 'A', text: '突破口を探して挑む' },
      { label: 'B', text: '原因を分析する' },
      { label: 'C', text: '仲間と一緒に乗り越える' },
    ],
  },
  {
    question: '将来について一番近い考えは？',
    choices: [
      { label: 'A', text: '自分で何かを生み出したい' },
      { label: 'B', text: '社会を良くする仕組みを作りたい' },
      { label: 'C', text: '人の可能性を広げたい' },
    ],
  },
  {
    question: 'あなたが一番ワクワクするのは？',
    choices: [
      { label: 'A', text: 'まだ誰もやっていない挑戦' },
      { label: 'B', text: '新しいアイデアや戦略' },
      { label: 'C', text: '人が成長する瞬間' },
    ],
  },
]

const quizResults: Record<string, { type: string; headline: string; description: string; fit: string }> = {
  A: {
    type: '起業家タイプ',
    headline: 'あなたは世界を切り開くプレイヤー。',
    description:
      '新しいことに挑戦することにワクワクするタイプです。リスクよりも可能性を見ています。',
    fit: 'Singでは起業・事業開発・新規プロジェクトで力を発揮できます。',
  },
  B: {
    type: '戦略家タイプ',
    headline: 'あなたは未来を設計するプレイヤー。',
    description:
      '物事の本質を見て仕組みを作ることが得意です。分析力や構造理解が強み。',
    fit: 'Singではマーケティング・事業設計・戦略分野で活躍できます。',
  },
  C: {
    type: 'リーダータイプ',
    headline: 'あなたは仲間を導くプレイヤー。',
    description:
      '人の強みを引き出しチームを前に進める力があります。人の成長を見ることがあなたの喜びです。',
    fit: 'Singでは組織づくり・教育・マネジメントで力を発揮できます。',
  },
}

/* ─── Component ─── */

export default function DiagnosisPage() {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null))
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (qIndex: number, choice: string) => {
    const newAnswers = [...answers]
    newAnswers[qIndex] = choice
    setAnswers(newAnswers)
  }

  const allAnswered = answers.every((a) => a !== null)

  const getResult = () => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0 }
    answers.forEach((a) => {
      if (a) counts[a]++
    })
    if (counts.A >= counts.B && counts.A >= counts.C) return 'A'
    if (counts.B >= counts.A && counts.B >= counts.C) return 'B'
    return 'C'
  }

  const handleShowResult = () => {
    setShowResult(true)
  }

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null))
    setShowResult(false)
  }

  const resultKey = getResult()
  const result = quizResults[resultKey]

  const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={serifStyle}
            >
              ADVENTURE DIAGNOSIS
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">
              冒険診断 — あなたのプレイヤータイプ
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base max-w-3xl mx-auto text-center">
              人生というゲームにはさまざまなプレイヤーがいます。
              <br />
              誰もが同じ戦い方をするわけではありません。
              <br />
              挑戦する人。道を作る人。仲間を導く人。
              <br />
              あなたはどのプレイヤータイプでしょうか？
              <br />
              5つの質問で診断できます。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Quiz Section ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {questions.map((q, qIndex) => (
              <FadeInUp key={qIndex} delay={qIndex * 80}>
                <div className="bg-[#FAFAF5] border-2 border-[#2563EB]/20 rounded-2xl p-6 md:p-8">
                  <p className="text-[#2563EB] text-xs tracking-[0.3em] font-bold mb-3">
                    Q{qIndex + 1}
                  </p>
                  <p className="text-[#1C2A44] font-bold text-lg mb-6">{q.question}</p>
                  <div className="space-y-3">
                    {q.choices.map((choice) => {
                      const isSelected = answers[qIndex] === choice.label
                      return (
                        <button
                          key={choice.label}
                          onClick={() => handleAnswer(qIndex, choice.label)}
                          className={`w-full text-left px-5 py-4 border-2 rounded-xl transition-all duration-200 ${
                            isSelected
                              ? 'border-[#F59E0B] bg-[#F59E0B]/10 text-[#1C2A44]'
                              : 'border-gray-200 hover:border-[#2563EB]/40 text-gray-700 hover:text-[#1C2A44] bg-white'
                          }`}
                        >
                          <span
                            className={`inline-block w-8 font-bold ${
                              isSelected ? 'text-[#F59E0B]' : 'text-gray-400'
                            }`}
                          >
                            {choice.label}.
                          </span>
                          {choice.text}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Result Button */}
          {allAnswered && !showResult && (
            <FadeInUp>
              <div className="mt-12 text-center">
                <button
                  onClick={handleShowResult}
                  className="inline-block bg-[#F59E0B] text-white px-10 py-4 font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-colors text-lg"
                >
                  診断結果を見る
                </button>
              </div>
            </FadeInUp>
          )}

          {/* Quiz Result */}
          {showResult && (
            <FadeInUp>
              <div className="mt-12 border-2 border-[#2563EB] bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                  YOUR TYPE
                </p>
                <h3
                  className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-4"
                  style={serifStyle}
                >
                  {result.type}
                </h3>
                <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-6" />
                <p
                  className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-6"
                  style={serifStyle}
                >
                  {result.headline}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6 max-w-xl mx-auto">
                  {result.description}
                </p>
                <p className="text-[#2563EB] font-bold text-sm md:text-base mb-10">
                  {result.fit}
                </p>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <div>
                    <button
                      onClick={handleReset}
                      className="inline-block border-2 border-[#2563EB] text-[#2563EB] px-8 py-3 font-bold tracking-wider rounded-full hover:bg-[#2563EB] hover:text-white transition-colors text-sm"
                    >
                      もう一度診断する
                    </button>
                  </div>

                  <div>
                    <Link
                      href="/miraiku/recruit/entry"
                      className="inline-block bg-[#F59E0B] text-white px-10 py-4 font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-colors text-lg"
                    >
                      冒険に参加する（エントリー）
                    </Link>
                  </div>

                  {/* Share Buttons */}
                  <div className="pt-4">
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                      SHARE YOUR RESULT
                    </p>
                    <div className="flex justify-center gap-4">
                      <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-800 transition-colors text-sm font-bold">
                        <span>X</span>
                        <span>でシェア</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full cursor-pointer hover:bg-[#05b34c] transition-colors text-sm font-bold">
                        <span>LINE</span>
                        <span>でシェア</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          )}
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
