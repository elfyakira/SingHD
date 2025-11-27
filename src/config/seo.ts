// SEO Configuration for Sing Holdings

export const siteConfig = {
  // 基本情報
  siteName: '株式会社Singホールディングス',
  siteNameEn: 'Sing Holdings Inc.',
  siteUrl: 'https://sing-holdings.co.jp', // TODO: 本番URL確定後に変更

  // 会社情報
  company: {
    name: '株式会社Singホールディングス',
    nameEn: 'Sing Holdings Inc.',
    representative: '笠本慎二',
    representativeEn: 'Shinji Kasamoto',
    foundedDate: '2026年3月1日',
    capital: '300万円',
    postalCode: '486-0918',
    address: '愛知県春日井市如意申町７丁目15−５ アーバンハイツ春日井 302号',
    phone: '', // TODO: 電話番号
    fax: '', // TODO: FAX番号
    email: '', // TODO: メールアドレス
    businessHours: '', // TODO: 営業時間
    access: '勝川駅より車で8分',
  },

  // SNS（ホールディングス自体のSNSがあれば設定）
  social: {
    twitter: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
  },

  // デフォルトSEO設定
  defaultSeo: {
    title: '株式会社Singホールディングス | 未来を変える挑戦に、力を。',
    description:
      '株式会社Singホールディングスは、企業ブランディング支援、人財コンサルティング・採用支援、メディア・出版事業を通じて、次世代にバトンを繋ぎ、誰もが笑顔で活躍できる社会の実現を目指します。',
    keywords: [
      'Singホールディングス',
      '人財コンサルティング',
      '採用支援',
      '企業ブランディング',
      'メディア事業',
      '月刊Sing',
      '愛知県',
      '春日井市',
      'ホールディングス',
      '経営支援',
    ],
  },

  // OG画像設定
  ogImage: {
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: '株式会社Singホールディングス',
  },

  // スローガン・キャッチコピー
  slogan: {
    ja: '未来を変える挑戦に、力を。',
    en: 'Shape the future.',
    tagline: '日本の明日を支え、バトンを繋ぐ',
  },

  // ミッション・ビジョン・バリュー
  mvv: {
    mission:
      '日本の人と企業が挑戦と成長を続ける環境を整備し、次世代に確かな価値を残すことに貢献する。',
    vision:
      '社会に笑顔が溢れ誰もが自らの力を発揮できる社会の実現に貢献する。',
    values: [
      'Professional（プロフェッショナル）：誠実さと高い視座を持ち、成果に責任を持って行動する。',
      'Challenge（挑戦）：主体性を持ち、新しい価値を創るために積極的に挑戦する。',
      'Enjoy（楽しむ）：「頑張る」を楽しむに変え人生を笑って楽しむ。',
      'Collaboration（協働）：仲間・パートナーとのつながりを大切に、感謝と成長を循環させる。',
      'Innovation（革新）：現状に満足せず、常に改善し続け、新しい可能性を生み出す。',
    ],
  },

  // グループ会社
  groupCompanies: [
    {
      id: 'sing',
      name: '株式会社Sing',
      nameEn: 'Sing Inc.',
      category: 'consulting',
      categoryJa: '企業コンサルティング業',
      description:
        '株式会社Singは、人財コンサルティングと採用支援を通じて、企業の成長と次世代リーダーの育成に貢献する会社です。',
      businessContent: '人材確保支援、人事・組織コンサルティング、定着率向上支援、営業支援',
      website: 'https://www.singgroup.biz/',
      sns: {
        instagram: 'https://www.instagram.com/sing.co.ltd',
      },
    },
    {
      id: 'flytop',
      name: '株式会社フライトップ',
      nameEn: 'Flytop Inc.',
      category: 'hr',
      categoryJa: '人財コンサルティング業',
      description:
        '株式会社フライトップは、愛知県を拠点に製造業に特化した人財派遣サービスを提供しています。',
      businessContent: '労働者派遣事業、有料職業紹介事業',
      website: 'https://www.flytop.biz/',
      sns: {},
    },
    {
      id: 'yumesuta',
      name: '株式会社ゆめスタ',
      nameEn: 'Yumesuta Inc.',
      category: 'branding',
      categoryJa: '企業ブランディング事業',
      description:
        '株式会社ゆめスタは、若者と企業・地域をつなぎ、未来を創る支援を行う会社です。',
      businessContent:
        '経営コンサルティング業務、マーケティングリサーチ業務、人材育成コンサルティング業務、広告代理業',
      website: 'https://yumesuta.com/',
      sns: {
        instagram: 'https://www.instagram.com/yumesuta_co.ltd/',
      },
    },
    {
      id: 'singmedia',
      name: '株式会社Singメディア',
      nameEn: 'Sing Media Inc.',
      category: 'media',
      categoryJa: '企業ブランディング事業',
      description:
        '株式会社Singメディアは、月刊Singをはじめとするメディアコンテンツを通じて、企業のブランディングや採用活動を支援する会社です。',
      businessContent:
        '月刊Singの企画・発行、コンテンツ制作・編集、企業ブランディング支援、採用支援サービス',
      website: '',
      sns: {},
    },
  ] as GroupCompany[],

  // 役員情報
  executives: [
    {
      position: '代表取締役社長',
      positionEn: 'CEO',
      name: '笠本慎二',
      nameEn: 'Shinji Kasamoto',
      image: '/img/company/ceo.jpg',
    },
  ] as Executive[],

  // Analytics
  analytics: {
    googleAnalyticsId: '', // TODO: GA4 ID
    googleSearchConsoleId: '', // TODO: Search Console認証
    bingWebmasterId: '', // TODO: Bing認証
  },
}

// 型定義
export interface GroupCompany {
  id: string
  name: string
  nameEn: string
  category: string
  categoryJa: string
  description: string
  businessContent: string
  website: string
  sns: {
    twitter?: string
    instagram?: string
  }
}

export interface Executive {
  position: string
  positionEn: string
  name: string
  nameEn: string
  image?: string
  message?: string
}

// ページ別SEO設定
export const pageSeo = {
  home: {
    title: '株式会社Singホールディングス | 未来を変える挑戦に、力を。',
    description:
      '株式会社Singホールディングスは、企業ブランディング支援、人財コンサルティング・採用支援、メディア・出版事業を展開。次世代にバトンを繋ぎ、誰もが笑顔で活躍できる社会の実現を目指します。',
  },
  news: {
    title: 'ニュース',
    description:
      '株式会社Singホールディングスの最新ニュース、プレスリリース、お知らせをご覧いただけます。',
  },
  concept: {
    title: '企業コンセプト',
    description:
      '株式会社Singホールディングスのミッション・ビジョン・バリュー、スローガン「日本の明日を支え、バトンを繋ぐ」をご紹介します。',
  },
  project: {
    title: 'グループ会社紹介',
    description:
      'Singホールディングスのグループ会社（株式会社Sing、株式会社フライトップ、株式会社ゆめスタ、株式会社Singメディア）をご紹介します。',
  },
  company: {
    title: '会社概要',
    description:
      '株式会社Singホールディングスの会社概要、代表挨拶、所在地情報をご覧いただけます。愛知県春日井市を拠点に事業を展開しています。',
  },
  contact: {
    title: 'お問い合わせ',
    description:
      '株式会社Singホールディングスへのお問い合わせはこちら。採用、サービス、その他ご質問などお気軽にご連絡ください。',
  },
}

export type SiteConfig = typeof siteConfig
export type PageSeo = typeof pageSeo
