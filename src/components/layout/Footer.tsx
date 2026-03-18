'use client'

import Link from 'next/link'

const footerLinks = {
  service: [
    { name: 'ミライク', href: '/miraiku' },
  ],
  corporate: [
    { name: '会社概要', href: '/company' },
    { name: 'グループ会社', href: '/project' },
    { name: 'ニュース', href: '/news' },
    { name: 'お問い合わせ', href: '/contact' },
  ],
  // legal: [
  //   { name: 'プライバシーポリシー', href: '/privacy' },
  // ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            {/* ロゴ */}
            <div className="mb-6">
              <img
                src="/img/logo/logo-white.png"
                alt="Sing Holdings"
                className="h-10 w-auto"
              />
            </div>
            {/* 会社説明 */}
            <p className="text-gray-400 text-sm leading-relaxed">
              挑戦する人に、現実的な仕組みと環境を提供する。
              起業が特別ではなく、選択肢の一つになる社会へ。
            </p>
            {/* NAP情報 */}
            <div className="mt-4 text-gray-500 text-xs leading-relaxed space-y-1">
              <p>株式会社Singホールディングス</p>
              <p>〒486-0918 愛知県春日井市如意申町７丁目15−５</p>
              <p>アーバンハイツ春日井 302号</p>
              <p>info@jp-sing.com</p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Service */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4 text-gray-300 uppercase">
                  Service
                </h3>
                <ul className="space-y-3">
                  {footerLinks.service.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corporate */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4 text-gray-300 uppercase">
                  Corporate
                </h3>
                <ul className="space-y-3">
                  {footerLinks.corporate.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal - プライバシーポリシー準備後に有効化 */}
              {/* <div>
                <h3 className="text-sm font-medium tracking-wider mb-4 text-gray-300 uppercase">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* SNS Icons - 後で追加 */}
            <div className="flex gap-4">
              {/* SNSアイコンは後で追加 */}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Sing Holdings Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
