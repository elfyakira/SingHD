'use client'

import Link from 'next/link'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useState, useEffect } from 'react'

type FormStep = 'input' | 'confirm' | 'complete'

interface ContactFormData {
  companyName: string
  name: string
  email: string
  phone: string
  message: string
  privacy: boolean
}

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScaJrsbCOxXPF-jmSvLVH2LW8yzOb1XLzbbAG3-yjF8VatsZg/formResponse'

const FORM_ENTRIES = {
  companyName: 'entry.1304991620',
  name: 'entry.1470871904',
  email: 'entry.1874230916',
  phone: 'entry.823910168',
  message: 'entry.652054077',
  privacy: 'entry.914752406',
}

/**
 * ミライク詳細ページ（TRIGGER風リデザイン・ネイビーベース）
 *
 * セクション構成:
 * 1. ヒーロー（全画面・TRIGGER風）
 * 2. インタビュー PICKUP（4カラム）
 * 3. ABOUT（ミライクについて）
 * 4. UNIQUE POINTS（スタートアップフォロー3本柱・ネイビーカード）
 * 5. インタビュー一覧（3カラムグリッド）
 * 6. パララックス画像ディバイダー
 * 7. 支援内容詳細（6つ）
 * 8. 支援の流れ（4ステップ）
 * 9. グループ参画
 * 10. FAQ
 * 11. CTA / お問い合わせ誘導
 */

const partnerData = [
  {
    slug: 'yagi',
    name: '屋宜 勝正',
    nameEn: 'Katsumasa Yagi',
    company: '株式会社フライトップ',
    image: '/img/miraiku/partner-yagi.jpg',
    imagePosition: 'center 20%',
    tagline: '逃げない選択が、人生を変える',
  },
  {
    slug: 'shimishun',
    name: '清水 駿之介',
    nameEn: 'Shunosuke Shimizu',
    company: '株式会社Sing',
    image: '/img/miraiku/partner-shimishun.jpg',
    tagline: '止まっていた時間を、自分で動かす',
  },
  {
    slug: 'daiki',
    name: '渡邉 大輝',
    nameEn: 'Taiki Watanabe',
    company: '株式会社Sing.nexT',
    image: '/img/miraiku/partner-daiki.jpg',
    tagline: '覚悟は、行動の中で完成する',
  },
  {
    slug: 'shion',
    name: '飯田 思遠',
    nameEn: 'Shien Iida',
    company: '株式会社ゆめスタ',
    image: '/img/miraiku/partner-shion.jpg',
    imagePosition: 'center 20%',
    tagline: '自分の意思で未来を選び続ける',
  },
]

const pillarData = [
  {
    number: '01',
    title: '起業後フェーズ別\n実務伴走',
    subtitle: '迷う前に、止まる前に、横にいる',
    points: [
      '起業後0〜12ヶ月で起きがちな「売れない・決められない・一人で抱える」を前提に設計',
      '営業・価格設計・提案・外注判断まで実務で伴走',
      '机上論ではなく"今この瞬間の一手"を一緒に考える',
    ],
  },
  {
    number: '02',
    title: '経営者の意思決定フォロー',
    subtitle: '正解を教えない。\n判断できる状態をつくる',
    points: [
      '戦略より先に「判断軸」を整理',
      'メンターでもコンサルでもない立ち位置',
      '迷い・不安・葛藤を言語化し、次の行動へつなげる',
    ],
  },
  {
    number: '03',
    title: '挑戦の履歴を次へつなぐ',
    subtitle: '成功も失敗も、すべてが次の挑戦者の資産になる',
    points: [
      'うまくいかなかった施策も含めて共有',
      '挑戦のプロセスを可視化・記録',
      '個の経験を、次のスタートアップの武器へ',
    ],
  },
]

export default function MiraikuPage() {
  const heroImages = [
    { src: '/img/miraiku/yagi-wide.jpg', position: 'center center', scale: 1 },
    { src: '/img/miraiku/partner-shimishun.jpg', position: 'center center', scale: 1 },
    { src: '/img/miraiku/partner-daiki.jpg', position: 'center center', scale: 1 },
    { src: '/img/miraiku/partner-shion.jpg', position: 'center 20%', scale: 1 },
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formStep, setFormStep] = useState<FormStep>('input')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
    if (!formData.companyName) newErrors.companyName = '会社名を入力してください'
    if (!formData.name) newErrors.name = 'お名前を入力してください'
    if (!formData.email) newErrors.email = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = '正しいメールアドレスを入力してください'
    if (!formData.phone) newErrors.phone = '電話番号を入力してください'
    if (!formData.message) newErrors.message = 'お問い合わせ内容を入力してください'
    if (!formData.privacy) newErrors.privacy = 'プライバシーポリシーに同意してください'
    setFormErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submitToGoogleForm = async () => {
    const formBody = new URLSearchParams()
    formBody.append(FORM_ENTRIES.companyName, formData.companyName)
    formBody.append(FORM_ENTRIES.name, formData.name)
    formBody.append(FORM_ENTRIES.email, formData.email)
    formBody.append(FORM_ENTRIES.phone, formData.phone)
    formBody.append(FORM_ENTRIES.message, formData.message)
    formBody.append(FORM_ENTRIES.privacy, '選択肢 1')
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      })
      return true
    } catch {
      return true
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formStep === 'input') {
      if (validateForm()) setFormStep('confirm')
    } else if (formStep === 'confirm') {
      setIsSubmitting(true)
      const success = await submitToGoogleForm()
      setIsSubmitting(false)
      if (success) setFormStep('complete')
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: '未経験でも可能ですか？',
      answer:
        '可能です。ただし、本気で挑戦する意欲は必要です。経験よりも「やりきる覚悟」を重視しています。',
    },
    {
      question: '資金がありません。',
      answer:
        'まずは収益モデルの設計から支援します。資金調達のサポートや、グループ会社への参画という選択肢もあります。',
    },
    {
      question: '学生でも可能ですか？',
      answer:
        '可能です。年齢や学歴は問いません。本気で起業に挑戦したい方であれば、学生の方も歓迎しています。',
    },
    {
      question: '収益化までどれくらいかかりますか？',
      answer:
        '事業内容や市場環境により異なりますが、6ヶ月〜1年を目安にしています。無理のないペースで着実に進めていきます。',
    },
    {
      question: '途中解約は可能ですか？',
      answer:
        '可能です。契約内容や条件は事前に明示し、ご納得いただいた上でスタートします。',
    },
  ]

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* ========================================
            1. ヒーロー（TOP1対応 - TRIGGER風フルスクリーン）
           ======================================== */}
        <section className="relative min-h-screen bg-[#0D1520] text-white flex items-end overflow-hidden">
          {/* 背景スライドショー（クロスフェード） */}
          <div className="absolute inset-0">
            {heroImages.map((img, index) => (
              <img
                key={img.src}
                src={img.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
                style={{ opacity: index === currentImageIndex ? 1 : 0, objectPosition: img.position, transform: `scale(${img.scale})`, transformOrigin: img.position }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent" />
          </div>

          {/* テキスト（右下寄せ） */}
          <div className="w-full relative z-10 pb-40 lg:pb-44 px-8 lg:px-16 flex justify-end">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] xl:text-5xl font-bold leading-[1.7]">
                挑戦する意志に、
                <br />
                確かな仕組みと実行力を。
                <br />
                未来を、事業として動かす。
              </h1>

              <div className="flex items-center gap-3 mt-14">
                <span
                  className="text-3xl md:text-4xl font-light tracking-[0.15em]"
                  style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
                >
                  MIRAIKU
                </span>
                <span className="text-sm text-gray-400">ミライク</span>
              </div>
            </div>
          </div>

          {/* スクロールインジケーター */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Scroll</span>
            <div className="w-px h-10 relative overflow-hidden">
              <div
                className="w-full h-full bg-white/40 absolute"
                style={{ animation: 'scrollLine 1.5s ease-in-out infinite' }}
              />
            </div>
          </div>
        </section>

        {/* ========================================
            2. インタビュー PICKUP（TOP2対応 - 4カラム）
           ======================================== */}
        <section className="py-20 lg:py-28 bg-[#141E30] text-white relative overflow-hidden">
          {/* 幾何学パターン（斜線交差） */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(60deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(-60deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)',
            }}
          />
          {/* 装飾ライン */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0E7490]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0E7490]/30 to-transparent" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* セクションヘッダー */}
            <div className="mb-12 flex items-center gap-6">
              <h2
                className="text-3xl md:text-4xl font-light tracking-[0.15em] whitespace-nowrap"
                style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
              >
                <span className="text-[#0E7490]">インタビュー</span>
                <span className="text-gray-500 ml-3 text-xl md:text-2xl tracking-wider">Pickup</span>
              </h2>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            {/* 4カラム インタビューカード */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {partnerData.map((partner) => (
                <Link
                  key={partner.nameEn}
                  href={`/miraiku/interview/${partner.slug}`}
                  className="group"
                >
                  {/* 写真 */}
                  <div className="aspect-[4/3] bg-[#0A1020] rounded overflow-hidden mb-4 relative">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      style={partner.imagePosition ? { objectPosition: partner.imagePosition } : undefined}
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const el = target.parentElement?.querySelector(
                          '.placeholder'
                        ) as HTMLElement
                        if (el) el.style.display = 'flex'
                      }}
                    />
                    <div className="placeholder hidden items-center justify-center w-full h-full text-gray-600 text-6xl font-bold absolute inset-0">
                      {partner.name[0]}
                    </div>
                  </div>

                  {/* テキスト */}
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3">
                    {partner.tagline}
                  </p>
                  <div className="w-full h-px bg-white/20 mb-3" />
                  <p className="text-xs text-gray-400 mb-1">{partner.company}</p>
                  <p className="text-lg font-bold">{partner.name}</p>
                  <p className="text-xs text-gray-500 tracking-wider mt-0.5">
                    {partner.nameEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            3. ABOUT（TOP3対応 - センター揃えテキスト）
           ======================================== */}
        <section className="py-20 lg:py-28 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-1"
                style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
              >
                ABOUT
              </h2>
              <p className="text-[11px] text-gray-400 tracking-[0.15em] mb-16">
                ミライクについて
              </p>

              <p className="text-lg md:text-xl font-bold text-[#1C2A44] mb-14">
                夢を、ビジネスに。
              </p>

              <p className="text-gray-600 leading-[2.2] text-sm md:text-base">
                ミライクは、起業を志す人のための実践型支援プログラムです。「いつか挑戦したい」ではなく、"今、動き出す"ための環境を整えます。
              </p>

              <p className="text-gray-600 leading-[2.2] text-sm md:text-base mt-8">
                アイデアだけでは、事業は続かない。情熱だけでも、利益は生まれない。だから私たちは、事業設計から収益モデル構築、営業支援まで、実行フェーズに寄り添います。
              </p>

              <p className="text-gray-600 leading-[2.2] text-sm md:text-base mt-8">
                起業は、才能ではなく仕組みで決まる。
              </p>

              <p className="text-gray-400 leading-[2.2] text-sm md:text-base mt-8">
                ミライクは、挑戦を現実に変えるための伴走者です。
              </p>
            </div>
          </div>
        </section>

        {/* ========================================
            4. UNIQUE POINTS（TOP4対応 - ネイビー背景・3カード）
           ======================================== */}
        <section className="py-20 lg:py-28 bg-[#1C2A44] text-white relative overflow-hidden">
          {/* 方眼背景 */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* セクションヘッダー */}
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-light tracking-[0.2em] mb-1"
                style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
              >
                UNIQUE POINTS
              </h2>
              <p className="text-xs text-gray-400 tracking-wider">
                SingHDのスタートアップフォローの特徴
              </p>
            </div>

            {/* 3カラム カード（ボーダー付き・ダーク） */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {pillarData.map((pillar) => (
                <div
                  key={pillar.number}
                  className="border border-[#0E7490]/30 bg-white/[0.08] p-8 text-center hover:border-[#0E7490]/60 transition-colors duration-300"
                >
                  <span className="text-xs font-bold text-[#0E7490] tracking-[0.2em]">
                    POINT {pillar.number}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3 whitespace-pre-line">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                    {pillar.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            パララックス画像ディバイダー
           ======================================== */}
        <section className="relative h-[30vh] md:h-[40vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/img/miraiku/miraiku-overview.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#1C2A44]/60" />
        </section>

        {/* ========================================
            5. インタビュー一覧（TOP5対応 - 3カラムグリッド）
           ======================================== */}
        <section className="py-20 lg:py-28 bg-[#141E30] text-white relative overflow-hidden">
          {/* 方眼背景 */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* セクションヘッダー */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-2">
                INTERVIEWS
              </h2>
              <p className="text-xs text-gray-400 tracking-wider">
                インタビュー一覧
              </p>
            </div>

            {/* 4カラム */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {partnerData.map((partner) => (
                <Link
                  key={partner.nameEn + '-grid'}
                  href={`/miraiku/interview/${partner.slug}`}
                  className="group"
                >
                  {/* 写真 */}
                  <div className="aspect-[4/3] bg-[#0A1020] rounded overflow-hidden mb-4 relative">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      style={partner.imagePosition ? { objectPosition: partner.imagePosition } : undefined}
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const el = target.parentElement?.querySelector(
                          '.placeholder'
                        ) as HTMLElement
                        if (el) el.style.display = 'flex'
                      }}
                    />
                    <div className="placeholder hidden items-center justify-center w-full h-full text-gray-600 text-5xl font-bold absolute inset-0">
                      {partner.name[0]}
                    </div>
                  </div>

                  {/* テキスト */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">
                    {partner.tagline}
                  </p>
                  <p className="text-base font-bold">{partner.name}</p>
                  <p className="text-xs text-gray-500 tracking-wider mt-0.5">
                    {partner.nameEn}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            7〜10. 支援内容・支援の流れ・グループ参画・FAQ
            （新しいバージョンに置き換え予定のためコメントアウト）
           ======================================== */}
        {/*
        <section className="py-20 lg:py-28 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-2">
                SUPPORT
              </h2>
              <p className="text-xs text-gray-400 tracking-wider mb-4">
                支援内容
              </p>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                起業に必要な6つの領域を包括的にサポートします。
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              ...
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          FLOW - 支援の流れ
        </section>

        <section className="py-20 lg:py-28 bg-[#1C2A44] text-white">
          Join Us - グループ参画
        </section>

        <section className="py-20 lg:py-28 bg-white">
          FAQ - よくある質問
        </section>
        */}

        {/* ========================================
            11. お問い合わせフォーム（ダーク背景）
           ======================================== */}
        <section className="py-20 lg:py-28 bg-[#141E30] text-white relative overflow-hidden">
          {/* 背景装飾 */}
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover opacity-20"
            style={{ backgroundImage: "url('/img/miraiku/miraiku-overview.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* セクションヘッダー */}
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-2"
                style={{ fontFamily: "'Times New Roman', 'YuMincho', 'Yu Mincho', serif" }}
              >
                Contact
              </h2>
              <p className="text-xs text-gray-400 tracking-wider mb-6">
                お問い合わせ
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                ミライクでは、本気で起業に挑戦したい方からのご相談をお待ちしています。
                <br />
                お問い合わせ後、1営業日以内にメールもしくはお電話いたします。
              </p>
            </div>

            {/* ステップインジケーター */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center">
                <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-sm md:text-base ${formStep === 'input' ? 'bg-[#0E7490] text-white' : 'bg-white/10 text-gray-500'}`}>
                  入力
                </div>
                <div className="w-16 md:w-24 h-px bg-white/20" />
                <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-sm md:text-base ${formStep === 'confirm' ? 'bg-[#0E7490] text-white' : 'bg-white/10 text-gray-500'}`}>
                  確認
                </div>
                <div className="w-16 md:w-24 h-px bg-white/20" />
                <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-sm md:text-base ${formStep === 'complete' ? 'bg-[#0E7490] text-white' : 'bg-white/10 text-gray-500'}`}>
                  完了
                </div>
              </div>
            </div>

            {/* フォーム */}
            <div className="max-w-2xl mx-auto">
              {formStep === 'complete' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0E7490] flex items-center justify-center mx-auto mb-6 rounded">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    お問い合わせありがとうございます
                  </h3>
                  <p className="text-gray-400 mb-8 text-sm md:text-base">
                    内容を確認次第、担当者よりご連絡いたします。
                    <br />
                    今しばらくお待ちください。
                  </p>
                  <Link
                    href="/"
                    className="inline-block bg-[#0E7490] text-white px-8 py-4 font-medium hover:bg-[#0C6680] transition-colors rounded text-sm md:text-base"
                  >
                    トップページへ戻る
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  {/* 会社名 */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm md:text-base">会社名</span>
                      <span className="bg-[#0E7490] text-white text-xs px-2 py-0.5">必須</span>
                    </label>
                    {formStep === 'input' ? (
                      <>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="例）株式会社Singホールディングス"
                          className={`w-full px-4 py-3 bg-white/10 border text-white placeholder-gray-500 focus:outline-none focus:border-[#0E7490] text-sm md:text-base ${formErrors.companyName ? 'border-red-500' : 'border-white/20'}`}
                        />
                        {formErrors.companyName && <p className="text-red-400 text-sm mt-1">{formErrors.companyName}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-white/20 text-sm md:text-base">{formData.companyName}</p>
                    )}
                  </div>

                  {/* お名前 */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm md:text-base">お名前</span>
                      <span className="bg-[#0E7490] text-white text-xs px-2 py-0.5">必須</span>
                    </label>
                    {formStep === 'input' ? (
                      <>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="例）田中太郎"
                          className={`w-full px-4 py-3 bg-white/10 border text-white placeholder-gray-500 focus:outline-none focus:border-[#0E7490] text-sm md:text-base ${formErrors.name ? 'border-red-500' : 'border-white/20'}`}
                        />
                        {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-white/20 text-sm md:text-base">{formData.name}</p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm md:text-base">メールアドレス</span>
                      <span className="bg-[#0E7490] text-white text-xs px-2 py-0.5">必須</span>
                    </label>
                    {formStep === 'input' ? (
                      <>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="例）info@example.com"
                          className={`w-full px-4 py-3 bg-white/10 border text-white placeholder-gray-500 focus:outline-none focus:border-[#0E7490] text-sm md:text-base ${formErrors.email ? 'border-red-500' : 'border-white/20'}`}
                        />
                        {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-white/20 text-sm md:text-base">{formData.email}</p>
                    )}
                  </div>

                  {/* 電話番号 */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm md:text-base">電話番号</span>
                      <span className="bg-[#0E7490] text-white text-xs px-2 py-0.5">必須</span>
                    </label>
                    {formStep === 'input' ? (
                      <>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="例）0312345678"
                          className={`w-full px-4 py-3 bg-white/10 border text-white placeholder-gray-500 focus:outline-none focus:border-[#0E7490] text-sm md:text-base ${formErrors.phone ? 'border-red-500' : 'border-white/20'}`}
                        />
                        {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-white/20 text-sm md:text-base">{formData.phone}</p>
                    )}
                  </div>

                  {/* お問い合わせ内容 */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-sm md:text-base">お問い合わせ内容</span>
                      <span className="bg-[#0E7490] text-white text-xs px-2 py-0.5">必須</span>
                    </label>
                    {formStep === 'input' ? (
                      <>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="ご自由にご記入ください。"
                          rows={6}
                          className={`w-full px-4 py-3 bg-white/10 border text-white placeholder-gray-500 focus:outline-none focus:border-[#0E7490] resize-none text-sm md:text-base ${formErrors.message ? 'border-red-500' : 'border-white/20'}`}
                        />
                        {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-white/20 whitespace-pre-wrap text-sm md:text-base">{formData.message}</p>
                    )}
                  </div>

                  {/* プライバシーポリシー */}
                  {formStep === 'input' && (
                    <div className="mb-8 text-center">
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.privacy}
                          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                          className="w-5 h-5 border-white/20 text-[#0E7490] focus:ring-[#0E7490]"
                        />
                        <span className="text-sm md:text-base text-gray-300">
                          プライバシーポリシーに同意の上、送信します。
                        </span>
                      </label>
                      {formErrors.privacy && <p className="text-red-400 text-sm mt-1">{formErrors.privacy}</p>}
                    </div>
                  )}

                  {/* ボタン */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {formStep === 'confirm' && (
                      <button
                        type="button"
                        onClick={() => setFormStep('input')}
                        disabled={isSubmitting}
                        className="px-8 py-4 border border-white/30 font-medium hover:bg-white/10 transition-colors text-sm md:text-base disabled:opacity-50 rounded"
                      >
                        入力画面に戻る
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0E7490] text-white px-12 py-4 font-medium hover:bg-[#0C6680] transition-colors text-sm md:text-base disabled:opacity-50 rounded"
                    >
                      {isSubmitting ? '送信中...' : formStep === 'input' ? '入力内容を確認' : '送信する'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
