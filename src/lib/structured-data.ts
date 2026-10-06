// Structured Data (JSON-LD) generators for SEO/LLMO
import { siteConfig } from '@/config/seo'

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.name,
    alternateName: [siteConfig.company.nameEn, ...siteConfig.alternateNames],
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/singhdlogo512.png`,
    description: siteConfig.defaultSeo.description,
    foundingDate: siteConfig.company.foundedDate,
    address: {
      '@type': 'PostalAddress',
      postalCode: siteConfig.company.postalCode,
      addressCountry: 'JP',
      addressRegion: '愛知県',
      addressLocality: '春日井市',
      streetAddress: siteConfig.company.address,
    },
    areaServed: [
      { '@type': 'City', name: '春日井市' },
      { '@type': 'City', name: '名古屋市' },
      { '@type': 'State', name: '愛知県' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      ...(siteConfig.company.phone && { telephone: siteConfig.company.phone }),
      email: siteConfig.company.email,
      contactType: 'customer service',
      availableLanguage: ['Japanese'],
    },
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ].filter(Boolean),
  }
}

// WebSite Schema
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    alternateName: [siteConfig.siteNameEn, ...siteConfig.alternateNames],
    url: siteConfig.siteUrl,
    description: siteConfig.defaultSeo.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
  }
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(
  breadcrumbs: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.company.name,
    image: `${siteConfig.siteUrl}${siteConfig.ogImage.url}`,
    '@id': siteConfig.siteUrl,
    url: siteConfig.siteUrl,
    ...(siteConfig.company.phone && { telephone: siteConfig.company.phone }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address,
      postalCode: siteConfig.company.postalCode,
      addressRegion: '愛知県',
      addressLocality: '春日井市',
      addressCountry: 'JP',
    },
    areaServed: [
      { '@type': 'City', name: '春日井市' },
      { '@type': 'City', name: '名古屋市' },
      { '@type': 'State', name: '愛知県' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

// Service Schema
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${siteConfig.company.name} 事業サービス`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
    description: siteConfig.defaultSeo.description,
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'グループ事業一覧',
      itemListElement: siteConfig.groupCompanies.map((company) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: company.categoryJa,
          description: company.description,
        },
      })),
    },
  }
}

// Person Schema (for executives)
export function generatePersonSchema(person: {
  name: string
  nameEn: string
  position: string
  positionEn: string
  image?: string
  description?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    alternateName: person.nameEn,
    jobTitle: person.position,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
    image: person.image,
    description: person.description,
  }
}

// Article Schema (news: NewsArticle / guide: BlogPosting)
export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  type?: 'NewsArticle' | 'BlogPosting' | 'Article'
  keywords?: string[]
  section?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': article.type || 'NewsArticle',
    inLanguage: 'ja',
    ...(article.keywords && { keywords: article.keywords.join(', ') }),
    ...(article.section && { articleSection: article.section }),
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/singhdlogo512.png`,
      },
    },
    image: article.image || `${siteConfig.siteUrl}${siteConfig.ogImage.url}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

// FAQ Schema
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// AboutPage Schema
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `会社概要 | ${siteConfig.siteName}`,
    description: siteConfig.defaultSeo.description,
    url: `${siteConfig.siteUrl}/company`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
  }
}

// ContactPage Schema
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `お問い合わせ | ${siteConfig.siteName}`,
    description: `${siteConfig.company.name}へのお問い合わせはこちらから。`,
    url: `${siteConfig.siteUrl}/contact`,
  }
}

// Interview Schema (ProfilePage + Person + Article) — インタビュー/挑戦者ストーリー用
export function generateInterviewSchemas(interview: {
  name: string
  nameEn: string
  url: string
  title: string
  description: string
  image: string
  jobTitle?: string
  company?: string
  companyUrl?: string
  breadcrumbs: { name: string; url: string }[]
}) {
  const person = {
    '@type': 'Person',
    '@id': `${interview.url}#person`,
    name: interview.name,
    alternateName: interview.nameEn,
    image: interview.image,
    ...(interview.jobTitle && { jobTitle: interview.jobTitle }),
    worksFor: {
      '@type': 'Organization',
      name: interview.company || siteConfig.company.name,
      ...(interview.companyUrl && { url: interview.companyUrl }),
      parentOrganization: {
        '@type': 'Organization',
        name: siteConfig.company.name,
        url: siteConfig.siteUrl,
      },
    },
  }

  return [
    generateBreadcrumbSchema(interview.breadcrumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: interview.title,
      description: interview.description,
      url: interview.url,
      inLanguage: 'ja',
      mainEntity: person,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: interview.title,
      description: interview.description,
      url: interview.url,
      image: interview.image,
      inLanguage: 'ja',
      about: { '@id': `${interview.url}#person` },
      author: { '@type': 'Organization', name: siteConfig.company.name },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.company.name,
        logo: { '@type': 'ImageObject', url: `${siteConfig.siteUrl}/singhdlogo512.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': interview.url },
    },
  ]
}
