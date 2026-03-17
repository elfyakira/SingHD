'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

type FormStep = 'input' | 'confirm' | 'complete'

interface FormData {
  name: string
  companyName: string
  email: string
  phone: string
  message: string
}

export default function ContactSection() {
  const [step, setStep] = useState<FormStep>('input')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'お名前を入力してください（2文字以上）'
    }
    if (!formData.companyName) {
      newErrors.companyName = '会社名を入力してください'
    }
    if (!formData.email) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }
    if (formData.phone && !/^[\d\-+()]+$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号を入力してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submitForm = async () => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.companyName,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || 'カツヤクLPからのお問い合わせ',
        }),
      })
      return res.ok
    } catch (error) {
      console.error('Form submission error:', error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 'input') {
      if (validateForm()) {
        setStep('confirm')
        // 確認画面に移動した時、フォーム上部にスクロール
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (step === 'confirm') {
      setIsSubmitting(true)
      const success = await submitForm()
      setIsSubmitting(false)
      if (success) {
        setStep('complete')
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleBack = () => {
    setStep('input')
  }

  const inputClasses = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-cta transition-colors text-[15px] ${
      errors[field] ? 'border-red-500' : 'border-[#E5E5E5]'
    }`

  return (
    <section id="contact" className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* クロージングテキスト */}
        <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
          <h2 className="text-[22px] lg:text-[32px] font-bold text-white mb-6">
            組織の課題を、一人で抱え続けますか。
          </h2>
          <p className="text-[15px] lg:text-base text-white/80 leading-relaxed">
            人が辞める。育たない。現場が変わらない。
            <br />
            その悩みに、明日も向き合い続ける覚悟はありますか。
          </p>
          <p className="text-[15px] lg:text-base text-white/90 leading-relaxed mt-4">
            まずは30分、御社の話を聞かせてください。
            <br />
            課題を整理し、何から始めるべきか、一緒に考えます。
          </p>
        </div>

        {/* フォーム */}
        <div className="max-w-[560px] mx-auto bg-white rounded-2xl p-6 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <h3 className="text-lg lg:text-xl font-bold text-primary text-center mb-8">
            {step === 'complete' ? 'お問い合わせありがとうございます' : '無料相談のお申し込み'}
          </h3>

          {step === 'complete' ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <p className="text-[15px] text-[#5C5C5C] leading-relaxed mb-6">
                内容を確認次第、担当者よりご連絡いたします。
                <br />
                通常1営業日以内にご連絡します。
              </p>
              <a
                href="/"
                className="inline-block text-sm text-primary underline hover:no-underline"
              >
                トップページへ戻る
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* お名前 */}
              <div className="mb-5">
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">お名前</span>
                  <span className="bg-cta text-white text-[10px] px-1.5 py-0.5 rounded">
                    必須
                  </span>
                </label>
                {step === 'input' ? (
                  <>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="例）田中太郎"
                      className={inputClasses('name')}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </>
                ) : (
                  <p className="py-3 border-b border-[#E5E5E5] text-[15px]">
                    {formData.name}
                  </p>
                )}
              </div>

              {/* 会社名 */}
              <div className="mb-5">
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">会社名</span>
                  <span className="bg-cta text-white text-[10px] px-1.5 py-0.5 rounded">
                    必須
                  </span>
                </label>
                {step === 'input' ? (
                  <>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      placeholder="例）株式会社○○"
                      className={inputClasses('companyName')}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                    )}
                  </>
                ) : (
                  <p className="py-3 border-b border-[#E5E5E5] text-[15px]">
                    {formData.companyName}
                  </p>
                )}
              </div>

              {/* メールアドレス */}
              <div className="mb-5">
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">
                    メールアドレス
                  </span>
                  <span className="bg-cta text-white text-[10px] px-1.5 py-0.5 rounded">
                    必須
                  </span>
                </label>
                {step === 'input' ? (
                  <>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="例）info@example.com"
                      className={inputClasses('email')}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </>
                ) : (
                  <p className="py-3 border-b border-[#E5E5E5] text-[15px]">
                    {formData.email}
                  </p>
                )}
              </div>

              {/* 電話番号 */}
              <div className="mb-5">
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">電話番号</span>
                  <span className="text-[10px] text-[#5C5C5C] border border-[#E5E5E5] px-1.5 py-0.5 rounded">
                    任意
                  </span>
                </label>
                {step === 'input' ? (
                  <>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="例）03-1234-5678"
                      className={inputClasses('phone')}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </>
                ) : (
                  formData.phone && (
                    <p className="py-3 border-b border-[#E5E5E5] text-[15px]">
                      {formData.phone}
                    </p>
                  )
                )}
              </div>

              {/* ご相談内容 */}
              <div className="mb-6">
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">
                    ご相談内容
                  </span>
                  <span className="text-[10px] text-[#5C5C5C] border border-[#E5E5E5] px-1.5 py-0.5 rounded">
                    任意
                  </span>
                </label>
                {step === 'input' ? (
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="例：離職率の改善、管理職の育成、組織全体の活性化 など"
                    rows={3}
                    className={`${inputClasses('message')} resize-none`}
                    maxLength={500}
                  />
                ) : (
                  formData.message && (
                    <p className="py-3 border-b border-[#E5E5E5] text-[15px] whitespace-pre-wrap">
                      {formData.message}
                    </p>
                  )
                )}
              </div>

              {/* マイクロコピー + ボタン */}
              {step === 'input' && (
                <p className="text-[12px] text-[#5C5C5C] text-center mb-4">
                  個人情報は厳重に管理し、ご相談目的以外には使用しません
                </p>
              )}

              <div className="flex flex-col gap-3">
                {step === 'confirm' && (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="w-full py-3 border border-[#E5E5E5] rounded-lg text-sm font-medium text-[#5C5C5C] hover:bg-[#F7F5F2] transition-colors disabled:opacity-50"
                  >
                    入力画面に戻る
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 bg-cta text-white py-4 rounded-lg font-bold text-base hover:bg-cta-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {isSubmitting
                    ? '送信中...'
                    : step === 'input'
                      ? '無料相談に申し込む'
                      : '送信する'}
                  {!isSubmitting && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>

              {step === 'input' && (
                <p className="text-[12px] text-[#5C5C5C] text-center mt-3">
                  通常1営業日以内にご連絡します
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
