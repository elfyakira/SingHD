'use client'

import Link from 'next/link'

// フッターリンク（HANDOFF準拠）
// 文言は後でヒアリングシートで確定
const footerLinks = {
  service: [
    { name: '{FOOTER_MIRAIKU}', href: '/miraiku' },
  ],
  corporate: [
    { name: '{FOOTER_COMPANY}', href: '/company' },
    { name: '{FOOTER_PROJECT}', href: '/project' },
    { name: '{FOOTER_NEWS}', href: '/news' },
    { name: '{FOOTER_CONTACT}', href: '/contact' },
  ],
  legal: [
    { name: '{FOOTER_PRIVACY}', href: '/privacy' },
  ],
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
              <span className="text-2xl font-bold tracking-wider">
                {'{LOGO}'}
              </span>
            </div>
            {/* 会社説明 */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {'{FOOTER_COMPANY_DESCRIPTION}'}
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Service */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4 text-gray-300 uppercase">
                  {'{FOOTER_SERVICE_LABEL}'}
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
                  {'{FOOTER_CORPORATE_LABEL}'}
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

              {/* Legal */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4 text-gray-300 uppercase">
                  {'{FOOTER_LEGAL_LABEL}'}
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
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* SNS Icons */}
            <div className="flex gap-4">
              {/* SNSアイコンは後で追加 */}
              <span className="text-gray-500 text-sm">{'{SNS_ICONS}'}</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              {'{FOOTER_COPYRIGHT}'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
