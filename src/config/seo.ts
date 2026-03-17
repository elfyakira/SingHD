// SEO Configuration for Sing Holdings

export const siteConfig = {
  // 基本情報
  siteName: '株式会社Singホールディングス',
  siteNameEn: 'Sing Holdings Inc.',
  siteNameShort: 'SingHD',
  alternateNames: ['SingHD', '株式会社SingHD', 'Sing Holdings', 'Singホールディングス'],
  siteUrl: 'https://hd.jp-sing.com',

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
    title: '株式会社Singホールディングス（SingHD）| ミライク起業支援【愛知・名古屋・春日井】',
    description:
      '株式会社Singホールディングス（SingHD）の起業支援プログラム「ミライク」。愛知県春日井市・名古屋を拠点に、事業設計から収益化まで伴走支援。本気で挑戦する人に、現実的な仕組みと環境を提供します。無料相談受付中。',
    keywords: [
      '株式会社Singホールディングス',
      'SingHD',
      '株式会社SingHD',
      'Singホールディングス',
      'ミライク',
      'ミライク 愛知',
      'ミライク 名古屋',
      'ミライク Sing',
      'Sing ミライク',
      'Sing 愛知',
      'Sing 名古屋',
      'Sing 春日井',
      '起業支援',
      '起業支援プログラム',
      '起業 相談 無料',
      '20代 起業',
      '若手 起業家',
      '独立 サポート',
      '伴走支援',
      '愛知県',
      '名古屋',
      '春日井',
    ],
  },

  // OG画像設定
  ogImage: {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: '株式会社Singホールディングス',
  },

  // スローガン・キャッチコピー
  slogan: {
    ja: '夢を、ビジネスに。',
    en: 'Turn Your Vision Into Business.',
    tagline: '起業という選択を、もっと現実的に。',
  },

  // ミッション・ビジョン・バリュー
  mvv: {
    mission:
      '挑戦する人に、現実的な仕組みと環境を提供する。',
    vision:
      '起業が特別ではなく、選択肢の一つになる社会へ。',
    values: [
      'Execution（実行）：考えるより動く。行動で結果を出す。',
      'Ownership（当事者意識）：自分ごととして責任を持ち、最後までやり抜く。',
      'Speed（スピード）：素早く決断し、素早く実行する。',
      'Credibility（信頼性）：誠実に、約束を守り、信頼を積み重ねる。',
      'Impact（インパクト）：小さな成功より、大きな変化を生み出す。',
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
      name: '株式会社Sing.nexT',
      nameEn: 'Sing.nexT Inc.',
      category: 'media',
      categoryJa: '企業ブランディング事業',
      description:
        '株式会社Sing.nexTは、月刊Singをはじめとするメディアコンテンツを通じて、企業のブランディングや採用活動を支援する会社です。',
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
    googleAnalyticsId: 'G-GR5S8NKFH3',
    googleSearchConsoleId: '9TTYbM_ARjlyAu4Mo57TSafBV6RBnMKWuy4yPNhOypY',
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
    title: '株式会社Singホールディングス（SingHD）| ミライク起業支援【愛知・名古屋・春日井】',
    description:
      '株式会社Singホールディングス（SingHD）の起業支援プログラム「ミライク」。愛知県春日井市・名古屋を拠点に、事業設計から収益化まで伴走支援。本気で挑戦する人に、現実的な仕組みと環境を提供します。無料相談受付中。',
  },
  miraiku: {
    title: 'ミライク | 愛知・名古屋の起業支援プログラム',
    description:
      'Singホールディングスの起業支援プログラム「ミライク」。愛知県名古屋・春日井を拠点に、事業設計から収益化まで伴走型で支援。若手起業家を応援します。無料相談受付中。',
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
      'Singホールディングスのグループ会社（株式会社Sing、株式会社フライトップ、株式会社ゆめスタ、株式会社Sing.nexT）をご紹介します。',
  },
  company: {
    title: '会社概要',
    description:
      '株式会社Singホールディングス（SingHD）の会社概要、代表挨拶、所在地情報。愛知県春日井市・名古屋を拠点に起業支援・人財コンサルティング事業を展開しています。',
  },
  contact: {
    title: 'お問い合わせ',
    description:
      '株式会社Singホールディングスへのお問い合わせはこちら。採用、サービス、その他ご質問などお気軽にご連絡ください。',
  },
  katsuyaku: {
    title: '人が辞めない会社には、理由がある。｜ カツヤク - 組織活性化プロジェクト',
    description:
      '離職率22%→9%。採用・定着・戦力化を現場で一緒につくる組織活性化プロジェクト「カツヤク」。中小企業の人財・組織課題を、現場伴走型で解決します。無料相談受付中。',
  },
}

export type SiteConfig = typeof siteConfig
export type PageSeo = typeof pageSeo
