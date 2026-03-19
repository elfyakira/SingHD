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
    color: '#D97706',
  },
  warrior: {
    name: '戦士',
    tagline: 'やると決めたら、最後までやり抜く',
    strength: '圧倒的な実行力と粘り強さ',
    role: '最前線で結果を出すエース',
    route: '現場リーダー → 事業責任者',
    image: '/img/recruit/characters/warrior-type.jpg',
    color: '#7A2020',
  },
  sage: {
    name: '魔法使い',
    tagline: '考え抜く力が、チームを次のステージへ導く',
    strength: '分析力と仕組みを作る思考力',
    role: '戦略でチームを導く頭脳',
    route: '戦略設計 → 事業設計',
    image: '/img/recruit/characters/sage-type.jpg',
    color: '#C43B6B',
  },
  priest: {
    name: '僧侶',
    tagline: 'あなたがいるから、チームは強くなる',
    strength: '人を支え、引き出す力',
    role: 'チームの土台を作る存在',
    route: '教育・組織づくり → マネジメント',
    image: '/img/recruit/characters/priest-type.jpg',
    color: '#2D8A5E',
  },
}

/* ─── Upper Job Names (上位職) ─── */

const upperJobNames: Record<TypeKey, Record<TypeKey, string>> = {
  hero: {
    hero: '勇者',
    warrior: 'ブレイバー',
    sage: '大将軍',
    priest: 'ホーリーナイト',
  },
  warrior: {
    hero: 'バトルマスター',
    warrior: '戦士',
    sage: '魔法戦士',
    priest: 'パラディン',
  },
  sage: {
    hero: '大英雄',
    warrior: '大軍師',
    sage: '魔法使い',
    priest: '大魔導士',
  },
  priest: {
    hero: '救世主',
    warrior: '守護神',
    sage: '大賢者',
    priest: '僧侶',
  },
}

/* ─── Upper Job Images ─── */

const upperJobImages: Record<TypeKey, Record<TypeKey, string>> = {
  hero: {
    hero: '/img/recruit/characters/hero-type.png',
    warrior: '/img/recruit/characters/upper/braver.png',
    sage: '/img/recruit/characters/upper/great-general.png',
    priest: '/img/recruit/characters/upper/holy-knight.png',
  },
  warrior: {
    hero: '/img/recruit/characters/upper/battle-master.png',
    warrior: '/img/recruit/characters/warrior-type.png',
    sage: '/img/recruit/characters/upper/magic-warrior.png',
    priest: '/img/recruit/characters/upper/paladin.png',
  },
  sage: {
    hero: '/img/recruit/characters/upper/great-hero.png',
    warrior: '/img/recruit/characters/upper/great-strategist.png',
    sage: '/img/recruit/characters/sage-type.png',
    priest: '/img/recruit/characters/upper/great-archmage.png',
  },
  priest: {
    hero: '/img/recruit/characters/upper/savior.png',
    warrior: '/img/recruit/characters/upper/guardian-deity.png',
    sage: '/img/recruit/characters/upper/great-sage.png',
    priest: '/img/recruit/characters/priest-type.png',
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

/* ─── Flavor Texts (ビジネス特性 + 将来性) ─── */

const flavorTexts: Record<TypeKey, Record<TypeKey, string>> = {
  hero: {
    hero: '',
    warrior:
      'あなたは未知の領域に飛び込む勇気と、決めたことを最後までやり抜く粘り強さを併せ持っています。新規事業の立ち上げから軌道に乗せるまで、一貫して先頭に立てる存在です。',
    sage:
      '直感的に動ける行動力と、戦略を描ける思考力の両方を持っています。ただ飛び込むだけでなく、勝ち筋を見据えて挑戦できる。事業を構想し、自ら実現に動けるリーダーです。',
    priest:
      '自ら先頭に立ちながらも、周囲の人を置いていかない強さがあります。挑戦の中でも仲間を巻き込み、一緒に成長していける。人がついてくるタイプのリーダーです。',
  },
  warrior: {
    hero:
      '圧倒的な実行力に加えて、新しいことにも臆さず挑めます。困難な局面で逃げずに立ち向かい、結果で道を切り開く。現場のエースから事業を率いるリーダーへと成長できる人材です。',
    warrior: '',
    sage:
      '手を動かしながらも頭で考えられる。がむしゃらに走るだけでなく、効率的な方法を見つけて成果を最大化できます。実行と戦略の両輪で事業を加速させる存在です。',
    priest:
      '自ら結果を出しながら、チームの力も引き出せます。個人の成果だけでなく、組織全体の底上げに貢献できる。プレイングマネージャーとして最も信頼される存在です。',
  },
  sage: {
    hero:
      '深い分析力と大胆な行動力を併せ持っています。緻密な戦略を描きながらも、必要な場面では自らリスクを取れる。知識と勇気で組織を未知の領域へ導ける稀有な存在です。',
    warrior:
      '戦略を考えるだけでなく、自ら現場に立って実行までやり切れます。机上の空論で終わらせない実践的な知性の持ち主。参謀でありながら、前線でも戦える人材です。',
    sage: '',
    priest:
      '高い分析力で本質を見抜き、その知見を惜しみなくチームに共有できます。人の成長を仕組みとして設計できる。教育者・メンターとして組織の知的基盤を築く存在です。',
  },
  priest: {
    hero:
      '人を支える力をベースに持ちながら、自らも挑戦できます。困っている人のために一歩を踏み出せる勇気がある。組織の危機に最も頼りにされる存在です。',
    warrior:
      'チームを支えるだけでなく、自ら手を動かし粘り強く結果を出せます。縁の下の力持ちでありながら、いざという時に頼れる実行力を持つ。組織の揺るがない土台となる存在です。',
    sage:
      '人を見る力と物事を分析する力を併せ持っています。一人ひとりの強みを見抜き、最適な役割を設計できる。人と組織の可能性を最大化するマネジメントの要です。',
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

  // スコア計算 → メインタイプー＋サブタイプー
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
  const upperJob = upperJobNames[result.primary][result.secondary]
  const upperImage = upperJobImages[result.primary][result.secondary]
  const flavor = flavorTexts[result.primary][result.secondary]

  // シェア
  const shareUrl = 'https://hd.jp-sing.com/recruit/diagnosis'
  const shareText = `冒険診断の結果は「${upperJob}」でした！\nあなたのタイプは？`

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
            <p className="text-lg md:text-xl text-white">
              冒険診断 — あなたのプレイヤータイプ
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Intro Phase ===== */}
      {phase === 'intro' && (
        <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <p className="text-gray-700 leading-loose text-sm md:text-base mb-14">
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

            {/* 4 Type Preview */}
            <FadeInUp delay={150}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                {(Object.keys(typeData) as TypeKey[]).map((key) => {
                  const t = typeData[key]
                  return (
                    <div key={key} className="flex flex-col items-center">
                      <div
                        className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden mb-3 border-3 shadow-lg"
                        style={{ borderColor: t.color }}
                      >
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p
                        className="text-sm font-bold text-[#1C2A44]"
                        style={serifStyle}
                      >
                        {t.name}
                      </p>
                    </div>
                  )
                })}
              </div>
            </FadeInUp>

            <FadeInUp delay={300}>
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
        <section className="py-16 lg:py-24 px-4 bg-[#FAFAF5]">
          <div className="max-w-sm mx-auto">

            {/* ── Result Card ── */}
            <FadeInUp>
              <div
                className="rounded-[2px] overflow-hidden shadow-xl"
                style={{ background: 'radial-gradient(ellipse 100% 80% at center, #F5ECD2 0%, #F5ECD2 40%, #E4D4AA 75%, #D4C08A 100%)', border: '2px solid #C8B88A' }}
              >
                {/* Header bar */}
                <div className="py-2 text-center" style={{ background: `radial-gradient(ellipse 200% 60% at center, ${primary.color}BB 0%, ${primary.color} 50%, ${primary.color} 100%)` }}>
                  <p className="text-xs tracking-[0.3em] text-white font-bold" style={serifStyle}>
                    ▶ {upperJob}
                  </p>
                </div>

                {/* Top section — 複合キャラ画像(左) + ステータス(右) */}
                <div className="flex p-4 pb-3">
                  {/* 複合キャラ画像（縦長） — 将来的に上位職画像に差し替え */}
                  <div
                    className="w-[45%] shrink-0 aspect-[3/4] rounded-[2px] overflow-hidden border-2"
                    style={{ borderColor: '#C8B88A' }}
                  >
                    <img
                      src={upperImage}
                      alt={upperJob}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* タイプ名 + ステータス */}
                  <div className="flex flex-col justify-between pl-4 min-w-0 py-1">
                    <div className="flex gap-1.5">
                      <div className="flex-1 rounded-[2px] border overflow-hidden" style={{ borderColor: '#C8B88A' }}>
                        <p className="text-[10px] font-bold text-white px-2 py-0.5 text-center" style={{ ...serifStyle, background: `linear-gradient(90deg, ${primary.color} 0%, ${primary.color}BB 50%, ${primary.color} 100%)` }}>メインタイプ</p>
                        <p className="text-base font-bold text-[#1C2A44] px-2 py-1 text-center" style={serifStyle}>
                          {primary.name}
                        </p>
                      </div>
                      <div className="flex-1 rounded-[2px] border overflow-hidden" style={{ borderColor: '#C8B88A' }}>
                        <p className="text-[10px] font-bold text-white px-2 py-0.5 text-center" style={{ ...serifStyle, background: `linear-gradient(90deg, ${primary.color} 0%, ${primary.color}BB 50%, ${primary.color} 100%)` }}>サブタイプ</p>
                        <p className="text-base font-bold text-[#1C2A44] px-2 py-1 text-center" style={serifStyle}>
                          {secondary.name}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 rounded-[2px] border overflow-hidden" style={{ borderColor: '#C8B88A' }}>
                      <div style={{ borderBottom: '1px solid #C8B88A' }}>
                        <p className="text-[10px] font-bold text-white px-2 py-0.5 text-center" style={{ ...serifStyle, background: `linear-gradient(90deg, ${primary.color} 0%, ${primary.color}BB 50%, ${primary.color} 100%)` }}>強み</p>
                        <p className="text-xs text-[#1C2A44] px-2 py-1.5 text-center">{primary.strength}</p>
                      </div>
                      <div style={{ borderBottom: '1px solid #C8B88A' }}>
                        <p className="text-[10px] font-bold text-white px-2 py-0.5 text-center" style={{ ...serifStyle, background: `linear-gradient(90deg, ${primary.color} 0%, ${primary.color}BB 50%, ${primary.color} 100%)` }}>役割</p>
                        <p className="text-xs text-[#1C2A44] px-2 py-1.5 text-center">{primary.role}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white px-2 py-0.5 text-center" style={{ ...serifStyle, background: `linear-gradient(90deg, ${primary.color} 0%, ${primary.color}BB 50%, ${primary.color} 100%)` }}>ルート</p>
                        <p className="text-xs text-[#1C2A44] px-2 py-1.5 text-center">{primary.route}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* P×S 画像 + 素質（2段） */}
                {composite && (
                  <div className="px-4 -mt-1 pb-3">
                    <div className="flex justify-center items-center gap-4 mb-3">
                      <div
                        className="w-24 h-24 rounded-[2px] overflow-hidden border-2 shrink-0"
                        style={{ borderColor: primary.color }}
                      >
                        <img src={primary.image} alt={primary.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-base text-[#1C2A44] font-bold">×</p>
                      <div
                        className="w-24 h-24 rounded-[2px] overflow-hidden border-2 shrink-0"
                        style={{ borderColor: secondary.color }}
                      >
                        <img src={secondary.image} alt={secondary.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="rounded-[2px] border overflow-hidden" style={{ borderColor: '#C8B88A' }}>
                      <p className="text-[10px] font-bold text-white px-2.5 py-1 text-center" style={{ ...serifStyle, background: `linear-gradient(90deg, ${primary.color} 0%, ${primary.color}BB 50%, ${primary.color} 100%)` }}>素質</p>
                      <p className="text-sm font-bold text-[#1C2A44] px-2.5 py-1.5 text-center">{composite}</p>
                    </div>
                  </div>
                )}

                {/* Flavor text */}
                {flavor && (
                  <div className="pb-5 pt-3 mx-4" style={{ borderTop: '1px solid #C8B88A' }}>
                    <p className="text-sm text-[#1C2A44] leading-relaxed pl-1">
                      {flavor}
                    </p>
                  </div>
                )}
              </div>
            </FadeInUp>

            {/* ── Actions（カード外） ── */}
            <FadeInUp delay={150}>
              <div className="mt-8 space-y-4 text-center">
                <div>
                  <Link
                    href="/recruit/entry"
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

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={shareOnX}
                    className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-bold"
                  >
                    X でシェア
                  </button>
                  <button
                    onClick={shareOnLine}
                    className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-full hover:bg-[#05b34c] transition-colors text-sm font-bold"
                  >
                    LINE でシェア
                  </button>
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
