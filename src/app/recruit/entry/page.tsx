'use client'

import { useState } from 'react'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

const careerExamples = [
  {
    path: '営業職入社 → 管理職 → 取締役',
    detail: '入社2年｜年収600万',
  },
  {
    path: '事務職入社 → 完全在宅・管理職 → 部長',
    detail: '入社2年｜年収500万',
  },
  {
    path: '営業職入社 → 管理職 → 起業',
    detail: '入社2年｜年収600万',
  },
  {
    path: '起業支援 → 会社の代表取締役',
    detail: '創業2年目｜年商2億',
  },
]

const jobDetails = [
  {
    label: '職種',
    value: '営業、営業事務、クリエーター、コンサルタント、社長、代表取締役 など',
  },
  {
    label: '仕事内容',
    value: 'あなたに合わせて決めます',
  },
  {
    label: '給与',
    value: 'あなたに合わせて決めます',
  },
  {
    label: '福利厚生',
    value:
      '退職金あり、賞与あり、大型連休あり、有給あり、ウォーターサーバーあり、駐車場有',
  },
  {
    label: '応募資格',
    value: 'この会社で仕事をしたいと思ったあなたの熱量',
  },
  {
    label: '応募方法',
    value: '電話、メール、DM など何でもOK',
  },
]

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

type FormStep = 'input' | 'confirm' | 'complete'

interface EntryFormData {
  name: string
  email: string
  phone: string
  message: string
  privacy: boolean
}

export default function EntryPage() {
  const [step, setStep] = useState<FormStep>('input')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<EntryFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof EntryFormData, string>>>({})

  const validateForm = () => {
    const newErrors: Partial<Record<keyof EntryFormData, string>> = {}
    if (!formData.name) newErrors.name = 'お名前を入力してください'
    if (!formData.email) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }
    if (!formData.phone) newErrors.phone = '電話番号を入力してください'
    if (!formData.message) newErrors.message = 'メッセージを入力してください'
    if (!formData.privacy) newErrors.privacy = '同意が必要です'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submitForm = async () => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'recruit',
        }),
      })
      return res.ok
    } catch {
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'input') {
      if (validateForm()) setStep('confirm')
    } else if (step === 'confirm') {
      setIsSubmitting(true)
      const success = await submitForm()
      setIsSubmitting(false)
      if (success) setStep('complete')
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header + Hero Image ===== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/entry/open-door.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              ENTRY
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-px bg-white mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white">
              未来の仲間へ
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Opening Message ===== */}
      <section id="message" className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              ここまで読んでくれて本当にありがとうございます。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              この採用サイトには、私たちの想いをすべて詰め込みました。
              <br />
              人生のこと。挑戦のこと。仲間のこと。
              <br />
              そして、この会社を作った理由。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              もしかすると「少し熱い会社だな」と感じたかもしれません。
              <br />
              でも、それでいいと思っています。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1C2A44] leading-relaxed my-16 text-center"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              なぜなら私たちは本気で
              <br />
              <span className="text-[#F59E0B]">人生は一度きり</span>
              だと思っているからです。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 迷いと答え ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              人は誰でも人生の途中で迷います。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="my-12 space-y-4 text-center">
              <p className="text-gray-600 text-base md:text-lg">
                自分は何がしたいのか。
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                何のために働くのか。
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                どんな人生を生きたいのか。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              私もずっとその答えを探してきました。
              <br />
              何度も悩み、何度も失敗して、
              <br />
              それでも前に進んできました。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              その中で一つだけ分かったことがあります。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Key Revelation ===== */}
      <section className="py-24 lg:py-36 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="py-12 md:py-16 px-8 bg-white rounded-2xl shadow-lg">
              <p
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1C2A44] leading-tight"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                「人生は、
                <br />
                誰かに与えられるものではない。」
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-xl md:text-2xl font-bold text-[#1C2A44] mt-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生は自分で作るものです。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 選択 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center space-y-6 mb-16">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                挑戦するかどうかも。
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                立ち上がるかどうかも。
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                誰と生きるかも。
              </p>
              <p className="text-[#1C2A44] text-xl md:text-2xl font-bold leading-relaxed mt-8">
                すべて自分で選ぶことができます。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 主人公の証拠 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-6">
              もしあなたが
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="my-8 space-y-3 pl-6 bg-[#1C2A44]/5 py-6 rounded-lg">
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold py-1">
                もっと成長したい
              </p>
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold py-1">
                もっと挑戦したい
              </p>
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold py-1">
                自分の可能性を試したい
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-8">
              そう思っているなら、
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p
              className="text-xl md:text-3xl font-bold text-[#1C2A44] text-center my-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              その気持ちはきっとあなたの中にある
              <br />
              「主人公の証拠」です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== RPGの主人公のように ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              Singホールディングスはまだまだ小さな会社です。
              <br />
              これからもたくさんの壁にぶつかるでしょう。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              でも、その壁を越えるたびに
              <br />
              私たちは少しずつ強くなっていきます。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-lg md:text-xl text-[#1C2A44] font-bold text-center my-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              RPGの主人公が仲間と共に冒険するように。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 呼びかけ ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              もしあなたが
              <br />
              ただ仕事をするのではなく
              <br />
              <span className="text-[#1C2A44] font-bold">
                人生を本気で生きたい
              </span>
              <br />
              そう思うなら
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-xl md:text-3xl font-bold text-[#1C2A44] text-center my-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              この冒険にあなたの力を貸してほしい。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== この場所の意味 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-gray-600 leading-[2.2] text-base md:text-lg mb-8">
              この会社はあなたの人生を決める場所ではありません。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1C2A44]"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの人生を
              <span className="text-[#F59E0B]">本気で生きる</span>
              場所です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Closing Statement ===== */}
      <section className="relative py-24 lg:py-40 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/entry/party-welcome.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-px bg-white mx-auto mb-16" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed mb-16"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生は一度きり。
              <br />
              だからこそ胸を張って生きたい。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="w-12 h-px bg-white mx-auto mb-16" />
          </FadeInUp>

          <FadeInUp delay={600}>
            <p
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F59E0B] mb-16"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </p>
          </FadeInUp>

          <FadeInUp delay={800}>
            <div className="w-12 h-px bg-white mx-auto mb-16" />
          </FadeInUp>

          <FadeInUp delay={1000}>
            <p
              className="text-xl md:text-2xl lg:text-3xl text-white font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの冒険を
              <br />
              Singホールディングスで。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Career Possibilities ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                CAREER PATH
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                起業も社長も社員も可能
              </h2>
              <div className="w-16 h-px bg-[#1C2A44] mx-auto mb-6" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Singでは、社員としてのキャリアだけでなく、
                <br />
                起業・経営者への道も全力で支援します。
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerExamples.map((example, index) => (
              <FadeInUp key={index} delay={index * 100}>
                <div className="bg-[#FAFAF5] rounded-2xl p-6 shadow-sm">
                  <p className="text-[#F59E0B] text-xs font-bold mb-2">{example.detail}</p>
                  <p className="text-[#1C2A44] font-bold text-sm leading-relaxed">
                    {example.path}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Job Details Table ===== */}
      <section id="jobs" className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-px bg-[#1C2A44]" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44]"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                募集要項
              </h2>
            </div>
          </FadeInUp>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            {jobDetails.map((item, index) => (
              <FadeInUp key={index} delay={index * 80}>
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF5]'
                  }`}
                >
                  <div className="md:w-40 lg:w-48 flex-shrink-0 px-6 py-4 md:py-5 bg-[#1C2A44]/5">
                    <span className="text-sm text-[#1C2A44] font-medium">
                      {item.label}
                    </span>
                  </div>
                  <div className="px-6 py-4 md:py-5 flex-1">
                    <span className="text-sm md:text-base text-[#1C2A44] leading-relaxed">
                      {item.value}
                    </span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Entry Form ===== */}
      <section id="entry-form" className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#F59E0B] mb-4">
                JOIN THE ADVENTURE
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                冒険に参加する
              </h2>
              <div className="w-16 h-1 bg-[#F59E0B] rounded-full mx-auto mb-6" />
              <p className="text-gray-600 text-sm md:text-base">
                あなたの物語を、ここから始めよう。
              </p>
            </div>
          </FadeInUp>

          {/* ステップ */}
          <FadeInUp delay={100}>
            <div className="flex items-center justify-center mb-12">
              {(['input', 'confirm', 'complete'] as const).map((s, i) => (
                <div key={s} className="flex items-center">
                  {i > 0 && <div className="w-12 md:w-20 h-px bg-gray-300" />}
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-colors ${
                      step === s
                        ? 'bg-[#F59E0B] text-white'
                        : (['input', 'confirm', 'complete'].indexOf(step) > i
                          ? 'bg-[#1C2A44] text-white'
                          : 'bg-gray-200 text-gray-400')
                    }`}
                  >
                    {s === 'input' ? '入力' : s === 'confirm' ? '確認' : '完了'}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="bg-[#FAFAF5] rounded-2xl p-6 md:p-10">
              {step === 'complete' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-4" style={serifStyle}>
                    エントリーありがとうございます
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-8">
                    内容を確認次第、担当者よりご連絡いたします。
                    <br />
                    あなたの冒険の始まりを、楽しみにしています。
                  </p>
                  <Link
                    href="/recruit"
                    className="inline-block bg-[#1C2A44] text-white px-8 py-3 rounded-full font-bold hover:bg-[#141E30] transition-colors text-sm"
                  >
                    TOPに戻る
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {step === 'input' && (
                    <p className="text-center text-gray-600 text-sm mb-8">
                      お問い合わせ後、1営業日以内にご連絡いたします。
                    </p>
                  )}

                  {/* お名前 */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-sm text-[#1C2A44]">お名前</span>
                      <span className="bg-[#F59E0B] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
                    </label>
                    {step === 'input' ? (
                      <>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="例）田中太郎"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-[#F59E0B] text-sm ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-gray-300 text-sm">{formData.name}</p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-sm text-[#1C2A44]">メールアドレス</span>
                      <span className="bg-[#F59E0B] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
                    </label>
                    {step === 'input' ? (
                      <>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="例）example@email.com"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-[#F59E0B] text-sm ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-gray-300 text-sm">{formData.email}</p>
                    )}
                  </div>

                  {/* 電話番号 */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-sm text-[#1C2A44]">電話番号</span>
                      <span className="bg-[#F59E0B] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
                    </label>
                    {step === 'input' ? (
                      <>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="例）09012345678"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-[#F59E0B] text-sm ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-gray-300 text-sm">{formData.phone}</p>
                    )}
                  </div>

                  {/* メッセージ */}
                  <div className="mb-6">
                    <label className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-sm text-[#1C2A44]">メッセージ</span>
                      <span className="bg-[#F59E0B] text-white text-[10px] px-2 py-0.5 rounded">必須</span>
                    </label>
                    {step === 'input' ? (
                      <>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="志望動機、自己PR、質問など自由にご記入ください。"
                          rows={5}
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-[#F59E0B] resize-none text-sm ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </>
                    ) : (
                      <p className="py-3 border-b border-gray-300 text-sm whitespace-pre-wrap">{formData.message}</p>
                    )}
                  </div>

                  {/* プライバシーポリシー同意 */}
                  {step === 'input' && (
                    <div className="mb-8 text-center">
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.privacy}
                          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                          className="w-4 h-4 accent-[#F59E0B]"
                        />
                        <span className="text-sm text-gray-700">
                          プライバシーポリシーに同意の上、送信します。
                        </span>
                      </label>
                      {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy}</p>}
                    </div>
                  )}

                  {/* ボタン */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {step === 'confirm' && (
                      <button
                        type="button"
                        onClick={() => setStep('input')}
                        disabled={isSubmitting}
                        className="px-8 py-3 border border-gray-300 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors disabled:opacity-50"
                      >
                        入力に戻る
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#F59E0B] text-white px-12 py-3 rounded-full font-bold text-sm hover:bg-[#D97706] transition-colors shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? '送信中...' : step === 'input' ? '入力内容を確認' : '▶ エントリーする'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Final Closing ===== */}
      <section className="relative py-24 lg:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/entry/open-door.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-px bg-white mx-auto mb-12" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="text-lg md:text-2xl text-white font-bold mb-16"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの冒険をSingホールディングスで。
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
            <div className="w-12 h-px bg-white mx-auto mb-8" />
            <Link
              href="/"
              className="inline-block text-sm text-white hover:text-[#F59E0B] transition-colors tracking-wider"
            >
              コーポレートサイトへ
            </Link>
          </FadeInUp>
        </div>
      </section>

    </div>
  )
}
