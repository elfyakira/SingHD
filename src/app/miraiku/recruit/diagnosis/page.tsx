'use client'

import { useState } from 'react'
import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

/* ─── Types ─── */

type TypeKey = 'hero' | 'warrior' | 'sage' | 'priest'

/* ─── Questions (4択 × 5問) ─── */

const questions = [
  {
    question: '新しいことに挑戦するとき、あなたはどう動く？',
    choices: [
      { type: 'hero' as TypeKey, text: 'とにかくやってみる' },
      { type: 'warrior' as TypeKey, text: '決めたら最後までやり切る' },
      { type: 'sage' as TypeKey, text: 'まずは情報を集めて考える' },
      { type: 'priest' as TypeKey, text: '仲間と相談して決める' },
    ],
  },
  {
    question: 'チームで何かをするとき、あなたの役割は？',
    choices: [
      { type: 'hero' as TypeKey, text: '先頭に立って道を切り開く' },
      { type: 'warrior' as TypeKey, text: '最前線で手を動かし続ける' },
      { type: 'sage' as TypeKey, text: '全体の戦略や仕組みを考える' },
      { type: 'priest' as TypeKey, text: 'メンバーの調子を見て支える' },
    ],
  },
  {
    question: '困難にぶつかったとき、どうする？',
    choices: [
      { type: 'hero' as TypeKey, text: '新しい突破口を探す' },
      { type: 'warrior' as TypeKey, text: '何度でも挑み続ける' },
      { type: 'sage' as TypeKey, text: '原因を分析して対策を立てる' },
      { type: 'priest' as TypeKey, text: '仲間と力を合わせて乗り越える' },
    ],
  },
  {
    question: '将来について、一番近い考えは？',
    choices: [
      { type: 'hero' as TypeKey, text: 'まだ誰もやっていないことに挑戦したい' },
      { type: 'warrior' as TypeKey, text: '圧倒的な結果を出して証明したい' },
      { type: 'sage' as TypeKey, text: '社会を良くする仕組みを設計したい' },
      { type: 'priest' as TypeKey, text: '人の可能性を広げる仕事がしたい' },
    ],
  },
  {
    question: 'あなたが一番ワクワクするのは？',
    choices: [
      { type: 'hero' as TypeKey, text: '未知の領域に飛び込む瞬間' },
      { type: 'warrior' as TypeKey, text: '困難を乗り越えた達成感' },
      { type: 'sage' as TypeKey, text: '複雑な問題の答えが見えた瞬間' },
      { type: 'priest' as TypeKey, text: '誰かが成長する姿を見た瞬間' },
    ],
  },
]

/* ─── Type Data ─── */

const typeData: Record<
  TypeKey,
  {
    name: string
    tagline: string
    strength: string
    role: string
    route: string
    image: string
    color: string
  }
> = {
  hero: {
    name: '勇者',
    tagline: '一歩目を踏み出す勇気が、世界を変える',
    strength: 'リスクを恐れず挑戦する行動力',
    role: '新しい道を切り開くパイオニア',
    route: '新規事業 → 起業家',
    image: '/img/recruit/characters/hero-type.jpg',
    color: '#EF4444',
  },
  warrior: {
    name: '戦士',
    tagline: 'やると決めたら、最後までやり抜く',
    strength: '圧倒的な実行力と粘り強さ',
    role: '最前線で結果を出すエース',
    route: '現場リーダー → 事業責任者',
    image: '/img/recruit/characters/warrior-type.jpg',
    color: '#F59E0B',
  },
  sage: {
    name: '賢者',
    tagline: '考え抜く力が、チームを次のステージへ導く',
    strength: '分析力と仕組みを作る思考力',
    role: '戦略でチームを導く頭脳',
    route: '戦略設計 → 事業設計',
    image: '/img/recruit/characters/sage-type.jpg',
    color: '#2563EB',
  },
  priest: {
    name: '僧侶',
    tagline: 'あなたがいるから、チームは強くなる',
    strength: '人を支え、引き出す力',
    role: 'チームの土台を作る存在',
    route: '教育・組織づくり → マネジメント',
    image: '/img/recruit/characters/priest-type.jpg',
    color: '#10B981',
  },
}

/* ─── Composite Descriptions ─── */

const compositeDesc: Record<TypeKey, Record<TypeKey, string>> = {
  hero: {
    hero: '',
    warrior: '挑戦し、最後までやり抜く',
    sage: '挑戦に戦略を加えられる',
    priest: '挑戦しながら仲間を大切にする',
  },
  warrior: {
    hero: 'やり抜く力に、新しい道を切り開く勇気',
    warrior: '',
    sage: 'やり抜く力に、考え抜く知恵を持つ',
    priest: 'やり抜きながら、仲間を支えられる',
  },
  sage: {
    hero: '考える力に、行動力を併せ持つ',
    warrior: '考えて、実行もできる',
    sage: '',
    priest: '知恵で仲間を導く',
  },
  priest: {
    hero: '支えながらも、自ら挑戦できる',
    warrior: '支えながらも、粘り強く結果を出す',
    sage: '支える力に、戦略的な視点を持つ',
    priest: '',
  },
}

/* ─── Component ─── */

export default function DiagnosisPage() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<(TypeKey | null)[]>(
    Array(questions.length).fill(null)
  )
  const [isTransitioning, setIsTransitioning] = useState(false)

  const serifStyle = {
    fontFamily: "'Times New Roman', 'Yu Mincho', serif",
  }

  const handleStart = () => {
    setPhase('quiz')
    setCurrentQ(0)
  }

  const handleAnswer = (type: TypeKey) => {
    if (isTransitioning) return
    const newAnswers = [...answers]
    newAnswers[currentQ] = type
    setAnswers(newAnswers)
    setIsTransitioning(true)

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1)
      } else {
        setPhase('result')
      }
      setIsTransitioning(false)
    }, 600)
  }

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null))
    setCurrentQ(0)
    setPhase('intro')
  }

  // スコア計算 → プライマリー＋セカンダリー
  const getResult = () => {
    const scores: Record<TypeKey, number> = {
      hero: 0,
      warrior: 0,
      sage: 0,
      priest: 0,
    }
    answers.forEach((a) => {
      if (a) scores[a]++
    })
    const sorted = (Object.entries(scores) as [TypeKey, number][]).sort(
      (a, b) => b[1] - a[1]
    )
    return { primary: sorted[0][0], secondary: sorted[1][0] }
  }

  const result = getResult()
  const primary = typeData[result.primary]
  const secondary = typeData[result.secondary]
  const composite = compositeDesc[result.primary][result.secondary]

  // シェア
  const shareUrl = 'https://hd.jp-sing.com/miraiku/recruit/diagnosis'
  const shareText = `冒険診断の結果は「${primary.name}×${secondary.name}タイプ」でした！\nあなたのタイプは？`

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  const shareOnLine = () => {
    window.open(
      `https://line.me/R/share?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`,
      '_blank'
    )
  }

  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/top/hero-party.png"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
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

      {/* ===== Intro Phase ===== */}
      {phase === 'intro' && (
        <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInUp>
              <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
                人生というゲームには
                <br />
                さまざまなプレイヤーがいます。
                <br />
                挑戦する人。やり抜く人。考える人。支える人。
                <br />
                あなたはどのタイプでしょうか？
                <br />
                5つの質問で診断できます。
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-3 bg-[#F59E0B] text-white px-10 py-4 font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-colors text-lg"
              >
                <span>▶</span>
                <span>診断をはじめる</span>
              </button>
            </FadeInUp>
          </div>
        </section>
      )}

      {/* ===== Quiz Phase (1問ずつ) ===== */}
      {phase === 'quiz' && (
        <section className="py-20 lg:py-32 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex items-center gap-3 mb-12">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    i <= currentQ ? 'bg-[#2563EB]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <div
              key={currentQ}
              className="animate-[fadeIn_0.3s_ease-out]"
            >
              <p className="text-[#2563EB] text-sm tracking-[0.3em] font-bold mb-4">
                Q{currentQ + 1} / {questions.length}
              </p>
              <p className="text-[#1C2A44] font-bold text-xl md:text-2xl mb-10 leading-relaxed">
                {questions[currentQ].question}
              </p>
              <div className="space-y-3">
                {questions[currentQ].choices.map((choice) => {
                  const isSelected = answers[currentQ] === choice.type
                  return (
                    <button
                      key={choice.type}
                      onClick={() => handleAnswer(choice.type)}
                      disabled={isTransitioning}
                      className={`w-full text-left px-6 py-5 border-2 rounded-xl transition-all duration-200 ${
                        isSelected
                          ? 'border-[#F59E0B] bg-[#F59E0B]/10 text-[#1C2A44]'
                          : 'border-gray-200 hover:border-[#2563EB]/40 text-gray-700 hover:text-[#1C2A44] bg-white'
                      }`}
                    >
                      {choice.text}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(12px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </section>
      )}

      {/* ===== Result Phase ===== */}
      {phase === 'result' && (
        <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
          <div className="max-w-2xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
                  YOUR TYPE
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-2"
                  style={serifStyle}
                >
                  {primary.name} × {secondary.name}
                </h2>
                <p className="text-xs text-gray-400">タイプ</p>
              </div>
            </FadeInUp>

            {/* Character Image */}
            <FadeInUp delay={150}>
              <div className="flex justify-center mb-8">
                <div
                  className="w-40 h-40 rounded-2xl overflow-hidden border-4"
                  style={{ borderColor: primary.color }}
                >
                  <img
                    src={primary.image}
                    alt={primary.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeInUp>

            {/* Tagline */}
            <FadeInUp delay={250}>
              <p
                className="text-center text-lg md:text-xl font-bold text-[#1C2A44] mb-10"
                style={serifStyle}
              >
                「{primary.tagline}」
              </p>
            </FadeInUp>

            {/* Info Cards */}
            <FadeInUp delay={350}>
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                  <p className="text-[10px] tracking-widest text-gray-400 mb-2">
                    強み
                  </p>
                  <p className="text-xs font-bold text-[#1C2A44] leading-relaxed">
                    {primary.strength}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                  <p className="text-[10px] tracking-widest text-gray-400 mb-2">
                    役割
                  </p>
                  <p className="text-xs font-bold text-[#1C2A44] leading-relaxed">
                    {primary.role}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                  <p className="text-[10px] tracking-widest text-gray-400 mb-2">
                    ルート
                  </p>
                  <p className="text-xs font-bold text-[#1C2A44] leading-relaxed">
                    {primary.route}
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Composite */}
            {composite && (
              <FadeInUp delay={450}>
                <div
                  className="rounded-xl p-5 mb-10 text-center border"
                  style={{
                    backgroundColor: `${secondary.color}08`,
                    borderColor: `${secondary.color}20`,
                  }}
                >
                  <p className="text-xs text-gray-500 mb-1">
                    + {secondary.name}の素質
                  </p>
                  <p className="text-sm font-bold text-[#1C2A44]">
                    {composite}
                  </p>
                </div>
              </FadeInUp>
            )}

            {/* Actions */}
            <FadeInUp delay={550}>
              <div className="space-y-4 text-center">
                <div>
                  <Link
                    href="/miraiku/recruit/entry"
                    className="inline-block bg-[#F59E0B] text-white px-10 py-4 font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-colors"
                  >
                    このタイプで冒険に参加する
                  </Link>
                </div>
                <div>
                  <button
                    onClick={handleReset}
                    className="inline-block border-2 border-[#2563EB] text-[#2563EB] px-8 py-3 font-bold tracking-wider rounded-full hover:bg-[#2563EB] hover:text-white transition-colors text-sm"
                  >
                    もう一度診断する
                  </button>
                </div>

                {/* Share */}
                <div className="pt-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-4">
                    SHARE
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={shareOnX}
                      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-sm font-bold"
                    >
                      X でシェア
                    </button>
                    <button
                      onClick={shareOnLine}
                      className="inline-flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full hover:bg-[#05b34c] transition-colors text-sm font-bold"
                    >
                      LINE でシェア
                    </button>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
      )}

      <RecruitCTA />
    </div>
  )
}
