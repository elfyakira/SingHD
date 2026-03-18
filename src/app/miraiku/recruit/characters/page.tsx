'use client'

import { useState } from 'react'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

/* ─── Data ─── */

const rpgTypes = [
  {
    number: 'TYPE 01',
    name: '勇者タイプ',
    image: '/img/recruit/characters/hero-type.png',
    subtitle: '未来に向かって挑戦できる人',
    description:
      '勇者は、最初から強いわけではありません。それでも一歩踏み出す勇気がある。失敗してももう一度立ち上がる。そんな挑戦する姿勢が周囲に勇気を与えます。私たちが求めているのは完璧な人ではありません。挑戦する人です。',
  },
  {
    number: 'TYPE 02',
    name: '戦士タイプ',
    image: '/img/recruit/characters/warrior-type.png',
    subtitle: '圧倒的にやり抜く人',
    description:
      '戦士は、チームの最前線で戦います。壁があっても逃げない。困難があっても諦めない。地道な努力を積み重ね、確実に前へ進む。その姿は、チームに大きな安心感を与えます。やり抜く力は、最大の武器です。',
  },
  {
    number: 'TYPE 03',
    name: '賢者タイプ',
    image: '/img/recruit/characters/sage-type.png',
    subtitle: '考え続ける人',
    description:
      '世の中の課題は、力だけでは解決できません。どうすれば良くなるのか。どうすればもっと価値を生めるのか。考え続ける人がチームを次のステージへ導きます。知識や思考は組織を強くします。考えることを楽しめる人を私たちは歓迎します。',
  },
  {
    number: 'TYPE 04',
    name: '僧侶タイプ',
    image: '/img/recruit/characters/priest-type.png',
    subtitle: '仲間を支えられる人',
    description:
      'RPGのパーティーには必ず仲間を支える存在がいます。仲間の挑戦を応援する。困っている人を助ける。チームを強くするのはこうした支え合いです。誰かの成功を自分の喜びにできる人。そんな人は組織にとって欠かせない存在です。',
  },
]

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

const levels = [
  {
    level: 'LEVEL 1',
    title: '冒険者（START）',
    description: '社会人基礎、仕事の考え方、ビジネスの基礎。大切なのは「挑戦する習慣」',
  },
  {
    level: 'LEVEL 10',
    title: 'クエストプレイヤー',
    description: '営業、マーケティング、動画/SNS、採用支援。小さな成功体験を積み重ねる',
  },
  {
    level: 'LEVEL 20',
    title: 'プロジェクトリーダー',
    description: 'プロジェクト管理、メンバー育成、売上責任。ここから「経営視点」',
  },
  {
    level: 'LEVEL 30',
    title: '事業プレイヤー',
    description: '事業設計、戦略設計、組織づくり。「会社を動かす力」',
  },
  {
    level: 'LEVEL 50',
    title: '起業家',
    description: '新規事業、グループ会社設立、経営者育成',
  },
  {
    level: 'FINAL LEVEL',
    title: '社会を変えるプレイヤー',
    description: '最終的な目標は「社会に影響を与える人材」になること',
  },
]

const hiddenQuests = [
  {
    number: 'クエスト1',
    title: '起業家チャレンジ',
    target: '在学中に事業を立ち上げたい人向け。',
    content:
      '内容: 事業アイデア作成、ビジネスモデル構築、実際の事業立ち上げ。優秀者は起業支援・事業化サポートを受けられます。',
  },
  {
    number: 'クエスト2',
    title: '新規事業プロジェクト',
    target: 'Singの新規事業に学生から参加。',
    content: '内容: マーケティング、営業戦略、サービス設計。',
  },
  {
    number: 'クエスト3',
    title: '社会課題プロジェクト',
    target: '教育、地域、若者支援。',
    content: '社会課題をテーマにしたプロジェクトに参加。',
  },
]

const lastBossQuests = [
  '起業家育成',
  '採用支援',
  '教育事業',
  'クリエイティブ',
]

/* ─── Component ─── */

export default function CharactersPage() {
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

  const resultKey = getResult()
  const result = quizResults[resultKey]

  const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 09
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={serifStyle}
            >
              WHO WE ARE LOOKING FOR
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">
              Singホールディングスが求める人物
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Sub-section 1: 求める人物 (4 RPG Types) ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base max-w-3xl mx-auto text-center mb-16">
              人生は、一度きりのRPGです。
              <br />
              人それぞれ、得意なことも違えば戦い方も違います。
              <br />
              大切なのは「自分の戦い方」を見つけること。
              <br />
              Singホールディングスが求めるのは次の4つのタイプです。
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rpgTypes.map((type, index) => (
              <FadeInUp key={type.number} delay={index * 100}>
                <div className="border-l-4 border-[#2563EB] bg-white border-2 border-[#2563EB]/20 rounded-2xl overflow-hidden h-full shadow-sm">
                  <div className="p-4 bg-gradient-to-b from-[#2563EB]/5 to-transparent flex justify-center">
                    <img src={type.image} alt={type.name} className="w-28 h-36 object-contain" />
                  </div>
                  <div className="p-6 md:p-8">
                  <p
                    className="text-[#2563EB] text-xs tracking-[0.3em] font-bold mb-3"
                  >
                    {type.number}
                  </p>
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-2"
                    style={serifStyle}
                  >
                    {type.name}
                  </h3>
                  <p className="text-[#2563EB] text-sm mb-4">{type.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {type.description}
                  </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Most important message */}
          <FadeInUp delay={500}>
            <div className="mt-16 text-center">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">
                最も大切なこと
              </p>
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2563EB] leading-relaxed"
                style={serifStyle}
              >
                一番大切なのはタイプではありません。
                <br />
                主人公として生きる覚悟があるか。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Sub-section 2: 冒険診断 (Interactive Quiz) ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Adventure Diagnosis
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                冒険診断
              </h2>
              <p className="text-[#2563EB] text-lg mb-4">あなたのプレイヤータイプ</p>
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                人生というゲームにはさまざまなプレイヤーがいます。
                <br />
                5つの質問に答えて、あなたのタイプを診断してみましょう。
              </p>
            </div>
          </FadeInUp>

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
                <p className="text-[#2563EB] font-bold text-sm md:text-base">
                  {result.fit}
                </p>
              </div>
            </FadeInUp>
          )}
        </div>
      </section>

      {/* ===== Sub-section 3: プレイヤーレベル ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Player Level
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                プレイヤーレベル
              </h2>
              <p className="text-[#2563EB] text-lg mb-4">Singでの成長ステップ</p>
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                Singでは仕事を「作業」ではなく人生のレベルアップだと考えています。
              </p>
            </div>
          </FadeInUp>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[#2563EB]/20" />

            <div className="space-y-8">
              {levels.map((lvl, index) => (
                <FadeInUp key={lvl.level} delay={index * 100}>
                  <div className="flex gap-6 md:gap-8 relative">
                    {/* Level badge */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#2563EB] flex items-center justify-center shadow-md">
                        <span className="text-white text-[10px] md:text-xs font-bold text-center leading-tight">
                          {lvl.level === 'FINAL LEVEL' ? 'MAX' : lvl.level.replace('LEVEL ', 'Lv.')}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pt-1 pb-4">
                      <p className="text-[#2563EB] text-xs tracking-[0.2em] font-bold mb-1">
                        {lvl.level}
                      </p>
                      <h3 className="text-lg md:text-xl font-bold text-[#1C2A44] mb-2">
                        {lvl.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {lvl.description}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sub-section 4: 隠しクエスト ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Hidden Quest
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                隠しクエスト
              </h2>
              <p className="text-[#2563EB] text-lg mb-4">特別採用ルート</p>
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                Singには通常の採用とは別に「隠しクエスト」があります。
                <br />
                これは特別な挑戦者だけが参加できるルートです。
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-6">
            {hiddenQuests.map((quest, index) => (
              <FadeInUp key={quest.number} delay={index * 120}>
                <div className="border-2 border-dashed border-[#2563EB]/40 bg-[#FAFAF5] rounded-2xl p-6 md:p-8 hover:border-[#2563EB] transition-colors">
                  <p className="text-[#2563EB] text-xs tracking-[0.3em] font-bold mb-2">
                    {quest.number}
                  </p>
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-3"
                    style={serifStyle}
                  >
                    {quest.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">{quest.target}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {quest.content}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={400}>
            <div className="mt-12 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                参加条件
              </p>
              <p
                className="text-2xl md:text-3xl font-bold text-[#2563EB]"
                style={serifStyle}
              >
                「本気で挑戦したい人」
                <br />
                それだけです。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Sub-section 5: ラスボス討伐プロジェクト ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Last Boss Project
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                ラスボス討伐プロジェクト
              </h2>
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto" />
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="border-2 border-[#2563EB] bg-white rounded-2xl p-8 md:p-12 text-center mb-12 shadow-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                LAST BOSS
              </p>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2563EB] mb-6"
                style={serifStyle}
              >
                「挑戦しない社会」
              </h3>
              <p className="text-gray-700 leading-loose text-sm md:text-base max-w-xl mx-auto">
                多くの人が挑戦を諦め、現状に甘んじている。
                <br />
                夢を語れば笑われ、失敗すれば叩かれる。
                <br />
                そんな社会が、私たちのラスボスです。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">
                討伐クエスト
              </p>
              <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
                Singが挑んでいるのは「挑戦者を増やすこと。」
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {lastBossQuests.map((quest, index) => (
                  <div
                    key={quest}
                    className="border-2 border-[#2563EB]/20 bg-white rounded-2xl p-4 text-center hover:border-[#2563EB] transition-colors shadow-sm"
                  >
                    <p className="text-[#1C2A44] font-bold text-sm">{quest}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Closing MESSAGE */}
          <FadeInUp delay={300}>
            <div className="mt-16 text-center">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-10" />
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C2A44] leading-relaxed mb-8"
                style={serifStyle}
              >
                人生は、一度きりです。
                <br />
                だったらただ過ごす人生ではなく
                <br />
                胸を張って生きる人生にしたい。
              </p>
              <p
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2563EB]"
                style={serifStyle}
              >
                人生を、歌え。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="mt-12 text-center">
              <Link
                href="/miraiku/recruit/entry"
                className="inline-block bg-[#F59E0B] text-white px-10 py-4 font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-colors text-lg"
              >
                冒険に参加する（エントリー）
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
