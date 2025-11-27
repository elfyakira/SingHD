'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LowPageHero from '@/components/LowPageHero'
import StructuredData from '@/components/StructuredData'
import {
  generateBreadcrumbSchema,
  generateContactPageSchema,
} from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'

type FormStep = 'input' | 'confirm' | 'complete'

interface FormData {
  companyName: string
  name: string
  email: string
  phone: string
  message: string
  privacy: boolean
}

// GoogleフォームのエントリーID
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

export default function ContactPage() {
  const [step, setStep] = useState<FormStep>('input')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'ホーム', url: siteConfig.siteUrl || '/' },
      { name: 'お問い合わせ', url: `${siteConfig.siteUrl}/contact` },
    ]),
    generateContactPageSchema(),
  ]

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.companyName) {
      newErrors.companyName = '会社名を入力してください'
    }
    if (!formData.name) {
      newErrors.name = 'お名前を入力してください'
    }
    if (!formData.email) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }
    if (!formData.phone) {
      newErrors.phone = '電話番号を入力してください'
    }
    if (!formData.message) {
      newErrors.message = 'お問い合わせ内容を入力してください'
    }
    if (!formData.privacy) {
      newErrors.privacy = 'プライバシーポリシーに同意してください'
    }

    setErrors(newErrors)
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
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      })
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      return true // no-corsモードではエラーが取得できないため、常にtrueを返す
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 'input') {
      if (validateForm()) {
        setStep('confirm')
      }
    } else if (step === 'confirm') {
      setIsSubmitting(true)
      const success = await submitToGoogleForm()
      setIsSubmitting(false)
      if (success) {
        setStep('complete')
      }
    }
  }

  const handleBack = () => {
    setStep('input')
  }

  return (
    <>
      <StructuredData data={schemas} />
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <LowPageHero
          titleEn="Contact"
          titleJa="お問い合わせ"
          imageSrc="/img/hero/city.jpg"
        />

        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Step Indicator */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center">
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base ${
                  step === 'input' ? 'bg-[#ea5506]' : 'bg-gray-300'
                }`}
              >
                入力
              </div>
              <div className="w-16 md:w-24 h-px bg-gray-300" />
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${
                  step === 'confirm'
                    ? 'bg-[#ea5506] text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                確認
              </div>
              <div className="w-16 md:w-24 h-px bg-gray-300" />
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm md:text-base ${
                  step === 'complete'
                    ? 'bg-[#ea5506] text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                完了
              </div>
            </div>
          </div>

          {/* Description */}
          {step === 'input' && (
            <div className="text-center mb-8 text-gray-600 text-sm md:text-base">
              <p>メールフォームからのお問合せは下記をご記入ください。</p>
              <p>お問い合わせ後、1営業日以内にメールもしくはお電話いたします。</p>
            </div>
          )}

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            {step === 'complete' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ea5506] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  お問い合わせありがとうございます
                </h2>
                <p className="text-gray-600 mb-8 text-sm md:text-base">
                  内容を確認次第、担当者よりご連絡いたします。
                  <br />
                  今しばらくお待ちください。
                </p>
                <a
                  href="/"
                  className="inline-block bg-[#ea5506] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-[#d14800] transition-colors text-sm md:text-base"
                >
                  トップページへ戻る
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Company Name */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm md:text-base">会社名</span>
                    <span className="bg-[#ea5506] text-white text-xs px-2 py-0.5 rounded">
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
                        placeholder="例）株式会社Singホールディングス"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ea5506] text-sm md:text-base ${
                          errors.companyName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.companyName}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="py-3 border-b border-gray-200 text-sm md:text-base">
                      {formData.companyName}
                    </p>
                  )}
                </div>

                {/* Name */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm md:text-base">お名前</span>
                    <span className="bg-[#ea5506] text-white text-xs px-2 py-0.5 rounded">
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
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ea5506] text-sm md:text-base ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="py-3 border-b border-gray-200 text-sm md:text-base">{formData.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm md:text-base">メールアドレス</span>
                    <span className="bg-[#ea5506] text-white text-xs px-2 py-0.5 rounded">
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
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ea5506] text-sm md:text-base ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="py-3 border-b border-gray-200 text-sm md:text-base">{formData.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm md:text-base">電話番号</span>
                    <span className="bg-[#ea5506] text-white text-xs px-2 py-0.5 rounded">
                      必須
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
                        placeholder="例）0312345678"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ea5506] text-sm md:text-base ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="py-3 border-b border-gray-200 text-sm md:text-base">{formData.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm md:text-base">お問い合わせ内容</span>
                    <span className="bg-[#ea5506] text-white text-xs px-2 py-0.5 rounded">
                      必須
                    </span>
                  </label>
                  {step === 'input' ? (
                    <>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="ご自由にご記入ください。"
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ea5506] resize-none text-sm md:text-base ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="py-3 border-b border-gray-200 whitespace-pre-wrap text-sm md:text-base">
                      {formData.message}
                    </p>
                  )}
                </div>

                {/* Privacy Policy */}
                {step === 'input' && (
                  <div className="mb-8 text-center">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacy}
                        onChange={(e) =>
                          setFormData({ ...formData, privacy: e.target.checked })
                        }
                        className="w-5 h-5 rounded border-gray-300 text-[#ea5506] focus:ring-[#ea5506]"
                      />
                      <span className="text-sm md:text-base">
                        プライバシーポリシーに同意の上、送信します。
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.privacy}
                      </p>
                    )}
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {step === 'confirm' && (
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={isSubmitting}
                      className="px-6 md:px-8 py-3 md:py-4 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm md:text-base disabled:opacity-50"
                    >
                      入力画面に戻る
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#ea5506] text-white px-10 md:px-12 py-3 md:py-4 rounded-full font-medium hover:bg-[#d14800] transition-colors text-sm md:text-base disabled:opacity-50"
                  >
                    {isSubmitting
                      ? '送信中...'
                      : step === 'input'
                        ? '入力内容を確認'
                        : '送信する'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
