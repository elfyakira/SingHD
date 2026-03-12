import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/config/seo'
import FixedCTA from '@/components/layout/FixedCTA'
import { generateOrganizationSchema, generateWebSiteSchema, generateLocalBusinessSchema } from '@/lib/structured-data'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultSeo.title || 'Sing Holdings',
    template: `%s | ${siteConfig.siteName || 'Sing Holdings'}`,
  },
  description: siteConfig.defaultSeo.description,
  keywords: siteConfig.defaultSeo.keywords,
  metadataBase: new URL(siteConfig.siteUrl || 'https://example.com'),
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.defaultSeo.title,
    description: siteConfig.defaultSeo.description,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultSeo.title,
    description: siteConfig.defaultSeo.description,
    images: [siteConfig.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: siteConfig.analytics.googleSearchConsoleId,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generateOrganizationSchema(),
              generateWebSiteSchema(),
              generateLocalBusinessSchema(),
            ]),
          }}
        />
        {siteConfig.analytics.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.analytics.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        {children}
        <FixedCTA />
      </body>
    </html>
  )
}
