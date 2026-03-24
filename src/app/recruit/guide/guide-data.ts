export type GuideCategory = '冒険の心得' | 'スキルの書' | '仲間の絆'

export interface GuideCardData {
  slug: string
  title: string
  desc: string
  tags: string[]
  image: string
  category: GuideCategory
  /** false = 準備中（リンク無効） */
  available?: boolean
}

const IMG = '/img/recruit/guide'

/**
 * 冒険者ガイド コンテンツ定義
 *
 * カテゴリ体系（SEO/LLMOキーワード調査後に拡張）:
 *   冒険の心得 — マインドセット・挑戦哲学
 *   スキルの書 — ビジネススキル・成長ノウハウ
 *   仲間の絆   — チーム・リーダーシップ・カルチャー
 */
export const guideArticles: GuideCardData[] = [
  // ── 冒険の心得 ──
  {
    slug: 'why-challenge',
    title: '「安定」を選ばなかった理由',
    desc: '大企業の内定を蹴って、スタートアップに飛び込んだ20代が語る挑戦の哲学',
    tags: ['マインドセット', '挑戦'],
    image: `${IMG}/why-challenge.png`,
    category: '冒険の心得',
    available: true,
  },
  {
    slug: 'failure-is-exp',
    title: '失敗は経験値 — 負けから学ぶ技術',
    desc: '失敗を「ゲームオーバー」ではなく「経験値獲得」に変えるマインドセット',
    tags: ['マインドセット', '失敗学'],
    image: `${IMG}/failure-is-exp.png`,
    category: '冒険の心得',
    available: true,
  },
  {
    slug: 'venture-vs-corporate',
    title: 'ベンチャーvs大企業 — データで見る20代の選択肢',
    desc: '給与・成長・安定性・働き方を公的データで徹底比較。後悔しない判断軸を解説',
    tags: ['キャリア選択', 'ベンチャー', '大企業', '20代'],
    image: `${IMG}/venture-vs-corporate.png`,
    category: '冒険の心得',
    available: true,
  },

  // ── スキルの書 ──
  {
    slug: 'first-weapon',
    title: '最初の武器の見つけ方',
    desc: '20代で「自分の強み」を見つけるための3つのステップ',
    tags: ['スキル', '自己分析'],
    image: `${IMG}/first-weapon.png`,
    category: 'スキルの書',
    available: true,
  },
  {
    slug: 'level-up-habits',
    title: '毎日レベルアップする習慣術',
    desc: '小さな経験値を積み続ける人が、なぜ大きな差を生むのか',
    tags: ['習慣', '成長'],
    image: `${IMG}/level-up-habits.png`,
    category: 'スキルの書',
    available: true,
  },

  // ── 仲間の絆 ──
  {
    slug: 'party-building',
    title: '最強パーティの作り方',
    desc: '一人では倒せないボスも、仲間となら倒せる。チームで戦う力の身につけ方',
    tags: ['チーム', 'リーダーシップ'],
    image: `${IMG}/party-building.png`,
    category: '仲間の絆',
    available: true,
  },
  {
    slug: 'leader-or-hero',
    title: 'リーダーと勇者は違う',
    desc: '先頭に立つだけがリーダーじゃない。Singが考える「導く力」の正体',
    tags: ['リーダーシップ', 'カルチャー'],
    image: `${IMG}/leader-or-hero.png`,
    category: '仲間の絆',
    available: true,
  },
]

export const GUIDE_CATEGORIES: GuideCategory[] = ['冒険の心得', 'スキルの書', '仲間の絆']

export const categoryMeta: Record<GuideCategory, { color: string; bg: string; pill: string }> = {
  '冒険の心得': { color: 'text-amber-700', bg: 'bg-amber-50', pill: 'bg-amber-100 text-amber-700' },
  'スキルの書': { color: 'text-blue-700', bg: 'bg-blue-50', pill: 'bg-blue-100 text-blue-700' },
  '仲間の絆':  { color: 'text-emerald-700', bg: 'bg-emerald-50', pill: 'bg-emerald-100 text-emerald-700' },
}
