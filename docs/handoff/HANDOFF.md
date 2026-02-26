# Singホールディングス HP - 引き継ぎドキュメント

**最終更新: 2026-02-24**

---

## 🚀 リニューアル計画（2026年2月〜）

### コンセプト転換
**旧**: ホールディングス企業の紹介サイト
**新**: **起業家志望者を集客するサイト**

### ターゲット
- **メイン**: 20-30代の若手起業家志望者
- **ペルソナ**: 独立・起業を目指すが、一人では不安。サポートを受けながらチャレンジしたい人

### 提供価値（バリュープロポジション）
1. **起業支援・インキュベーション**: 事業立ち上げの伴走支援、メンタリング
2. **グループ会社での新規事業立ち上げ**: Singグループ内で新事業を一緒に作る

### コンバージョン
- **メインCTA**: 無料相談・面談予約
- **ゴール**: 起業家志望者からの問い合わせ増加

---

### デザイン方針

| 項目 | 変更内容 |
|------|----------|
| **トーン** | 親しみやすい・カジュアル（気軽に相談できる雰囲気） |
| **カラー** | ブルー系に変更（信頼感・安心感）|
| **現在** | オレンジ `#ea5506` → **ブルー系** `#2563eb` など |
| **スローガン** | 起業・独立を応援系に変更 |
| **現在** | 「未来を変える挑戦に、力を。」 |
| **候補例** | 「あなたの『やりたい』をカタチに」「一緒に、はじめよう」等 |

---

### ページ構成（再構成予定）

**現在の6ページ**:
- TOP / News / Concept / Project / Company / Contact

**新構成案**:
| ページ | 目的 |
|--------|------|
| **TOP** | 起業家志望者向けメインLP。CTA明確化 |
| **起業支援** | サービス内容・支援の流れ・メリット |
| **先輩の声** | 実際に起業した人のストーリー（将来的に追加） |
| **グループ会社** | 参画先の紹介（現Projectページを改修） |
| **会社概要** | Singホールディングスについて（現Companyページ） |
| **無料相談** | お問い合わせフォーム（CTAを「無料相談」に変更） |
| News | 必要に応じて残す |

---

### 実装タスク一覧

#### Phase 1: 基盤変更
- [ ] カラーパレット変更（ブルー系）
- [ ] スローガン・キャッチコピー変更
- [ ] seo.ts のメタデータ更新
- [ ] Header/Footer のCTA文言変更

#### Phase 2: TOPページ改修
- [ ] ヒーローセクション: 起業家向けメッセージに変更
- [ ] 価値提案セクション追加: 「Singで起業する3つのメリット」等
- [ ] CTAセクション強化: 無料相談への誘導
- [ ] 不要セクションの削除/改修

#### Phase 3: 新ページ追加
- [ ] 起業支援ページ作成
- [ ] 先輩の声ページ作成（コンテンツ準備後）

#### Phase 4: 既存ページ改修
- [ ] Projectページ → グループ会社参画先として改修
- [ ] Contactページ → 無料相談フォームに改修
- [ ] Companyページ → 会社概要として維持

#### Phase 5: 仕上げ
- [ ] 画像差し替え（起業家向けイメージ）
- [ ] OGP画像更新
- [ ] SEO最終調整
- [ ] ビルドテスト・デプロイ

---

### グループ会社の扱い
**方針**: そのまま残す
- 現在の4社（Sing、フライトップ、ゆめスタ、Singメディア）の紹介は維持
- 「参画できる事業の例」として見せ方を調整

---

## 1. プロジェクト概要

### 1.1 基本情報
| 項目 | 内容 |
|------|------|
| プロジェクト名 | Singホールディングス コーポレートサイト |
| プロジェクトパス | `/mnt/c/singhp` (Windows: `C:\singhp`) |
| 技術スタック | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| Node.js | 推奨 v20以上 |
| 本番URL（予定） | https://sing-holdings.co.jp |

### 1.2 開発コマンド
```bash
npm run dev    # 開発サーバー起動（localhost:3000）
npm run build  # 本番ビルド
npm run start  # 本番サーバー起動
npm run lint   # ESLint実行
```

---

## 2. 現在の完了状況

### 2.1 完了済み
- [x] Next.js 16 + React 19 + Tailwind CSS 4 セットアップ
- [x] SEO/LLMO基盤（メタデータ、構造化データ、sitemap、robots.txt、ai.txt）
- [x] 共通コンポーネント（Header、Footer、ContactCTA）
- [x] 全6ページ実装（TOP、News、Concept、Project、Company、Contact）
- [x] ワークナビHD風アニメーション（TOPヒーロー、Companyヒーロー）
- [x] グループ会社4社のデータ反映
- [x] Google Analytics 4 / Search Console 設定
- [x] PWA対応（site.webmanifest）

### 2.2 未完了・要確認
- [ ] ファビコン（favicon.ico未設置）
- [ ] 一部のグループ会社URL（Singメディアのwebsite空）
- [ ] 電話番号・FAX・メールアドレス（seo.tsでTODO）
- [ ] Newsページの実データ（現在ダミー）
- [ ] 最終ビルドテスト・本番デプロイ

---

## 3. ディレクトリ構造

```
/mnt/c/singhp/
├── docs/handoff/
│   ├── HANDOFF.md           # この引き継ぎドキュメント
│   └── TECHNICAL_NOTES.md   # 技術詳細
├── public/
│   ├── ai.txt               # AIクローラー向け情報
│   ├── og-image.jpg         # OGP画像
│   ├── site.webmanifest     # PWA設定
│   ├── singhdlogo192.png    # PWAアイコン
│   ├── singhdlogo512.png    # PWAアイコン
│   └── img/
│       ├── hero/            # TOPヒーロー画像（1.jpg, 2.jpg, 3.jpg）
│       ├── company/         # 会社関連画像・ロゴ
│       ├── concept/         # コンセプトページ画像
│       ├── project/         # プロジェクトページ画像
│       └── logo/            # 共通ロゴ
├── src/
│   ├── app/
│   │   ├── layout.tsx       # ルートレイアウト（メタデータ、GA4）
│   │   ├── page.tsx         # TOPページ
│   │   ├── globals.css      # グローバルCSS・アニメーション
│   │   ├── sitemap.ts       # 動的サイトマップ
│   │   ├── robots.txt/route.ts
│   │   ├── news/page.tsx
│   │   ├── concept/page.tsx
│   │   ├── project/page.tsx
│   │   ├── company/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ContactCTA.tsx
│   │   ├── LowPageHero.tsx      # 下層ページ共通ヒーロー
│   │   └── StructuredData.tsx   # JSON-LD構造化データ
│   ├── config/
│   │   └── seo.ts           # ★ SEO・会社情報・グループ会社データ
│   └── lib/
│       └── structured-data.ts
├── SEO_INFO_REQUIRED.md     # 必要情報チェックリスト
└── package.json
```

---

## 4. 変更作業ガイド

### 4.1 デザイン変更

#### カラーパレット
現在のカラー設定（`globals.css`で定義）:
```css
:root {
  --color-primary: #ea5506;     /* オレンジ（メイン） */
  --color-secondary: #22c55e;   /* グリーン */
  --color-accent-blue: #3b82f6; /* ブルー */
}
```

**変更方法**: `src/app/globals.css` のCSS変数を編集

#### フォント
現在: Noto Sans JP（`layout.tsx`で設定）

**変更方法**: `src/app/layout.tsx` の `next/font/google` インポートを変更

#### ヒーローアニメーション
- TOPページ: `src/app/page.tsx` 内の `SLIDE_DURATION` 等の定数
- Companyページ: `src/app/company/page.tsx` 内のSVGマスク・パララックス

#### レイアウト・余白
- セクション間隔: `globals.css` の `.section` クラス
- コンテナ幅: `--container-max-width: 1280px`

---

### 4.2 文言・メタデータ変更

#### 一括管理ファイル: `src/config/seo.ts`

このファイルで以下を一括管理:

| 項目 | 設定場所 |
|------|----------|
| サイト名・URL | `siteName`, `siteUrl` |
| 会社情報 | `company` オブジェクト |
| スローガン | `slogan.ja`, `slogan.en`, `slogan.tagline` |
| ミッション・ビジョン・バリュー | `mvv` オブジェクト |
| グループ会社 | `groupCompanies` 配列 |
| 役員情報 | `executives` 配列 |
| SEOタイトル・説明 | `defaultSeo`, `pageSeo` |
| Analytics ID | `analytics` オブジェクト |

#### 現在の主要文言

**スローガン**:
- 日本語: `未来を変える挑戦に、力を。`
- 英語: `Shape the future.`
- タグライン: `日本の明日を支え、バトンを繋ぐ`

**MVV**:
- Mission: `日本の人と企業が挑戦と成長を続ける環境を整備し、次世代に確かな価値を残すことに貢献する。`
- Vision: `社会に笑顔が溢れ誰もが自らの力を発揮できる社会の実現に貢献する。`
- Values: Professional, Challenge, Enjoy, Collaboration, Innovation

---

### 4.3 サービス内容・グループ会社変更

`src/config/seo.ts` の `groupCompanies` 配列を編集:

```typescript
groupCompanies: [
  {
    id: 'sing',
    name: '株式会社Sing',
    nameEn: 'Sing Inc.',
    category: 'consulting',
    categoryJa: '企業コンサルティング業',
    description: '説明文...',
    businessContent: '事業内容...',
    website: 'https://...',
    sns: { instagram: 'https://...' },
  },
  // 他のグループ会社...
]
```

**現在のグループ会社（4社）**:
1. 株式会社Sing - 企業コンサルティング業
2. 株式会社フライトップ - 人財コンサルティング業
3. 株式会社ゆめスタ - 企業ブランディング事業
4. 株式会社Singメディア - 企業ブランディング事業

---

### 4.4 画像変更

| 用途 | 保存先 | 推奨サイズ |
|------|--------|-----------|
| TOPヒーロー | `/public/img/hero/1.jpg, 2.jpg, 3.jpg` | 1920x1080以上 |
| 会社ページヒーロー | `/public/img/company/company-hero.jpg` | 1920x1080以上 |
| コンセプトヒーロー | `/public/img/concept/concept-hero.jpg` | 1920x1080以上 |
| プロジェクトヒーロー | `/public/img/project/group-hero.jpg` | 1920x1080以上 |
| 代表写真 | `/public/img/company/ceo.jpg` | 600x800程度 |
| グループ会社ロゴ | `/public/img/company/[会社名]logo.png` | 透過PNG推奨 |
| ヘッダーロゴ | `/public/img/logo/logo-black.png` | 高さ40px程度 |
| OGP画像 | `/public/og-image.jpg` | 1200x630px |

---

## 5. ページ別詳細

### 5.1 TOPページ (`src/app/page.tsx`)

**セクション構成**:
1. Hero - 3枚のスライド + スローガン + スター装飾
2. News - 最新ニュース1件表示
3. Success to Success - コンセプト導線
4. Company - 青いぼかし背景 + 会社概要導線
5. Project - グループ会社導線（緑の円装飾）
6. CEO Message - 代表挨拶導線

**アニメーション定数**:
```typescript
const SLIDE_DURATION = 5800    // スライド切り替え間隔（ms）
const STAR_START_DELAY = 1800  // スター表示開始
const STAR_INTERVAL = 300      // スター表示間隔
```

### 5.2 Newsページ (`src/app/news/page.tsx`)
- 検索・カテゴリフィルター機能
- ニュースデータはハードコード（将来的にCMS連携予定）

### 5.3 Conceptページ (`src/app/concept/page.tsx`)
- MVV表示
- スローガン表示
- 理念セクション

### 5.4 Projectページ (`src/app/project/page.tsx`)
- グループ会社一覧（seo.tsからデータ取得）
- 各社ロゴ・説明・事業内容・リンク表示

### 5.5 Companyページ (`src/app/company/page.tsx`)
- SVGマスク + パララックスヒーロー
- サイドナビゲーション（スクロール連動）
- 代表挨拶
- 会社概要テーブル + Google Map
- ※役員紹介・組織図セクションはコメントアウト中

### 5.6 Contactページ (`src/app/contact/page.tsx`)
- 3ステップフォーム（入力→確認→完了）
- バリデーション実装済み
- ※送信処理は未実装（API Routes/外部サービス連携必要）

---

## 6. 技術的な注意点

### 6.1 Next.js 16 + React 19
- App Router使用
- Server Components デフォルト
- クライアントコンポーネントは `'use client'` 宣言必要

### 6.2 Tailwind CSS 4
- `@tailwindcss/postcss` 使用
- CSS変数ベースのカスタマイズ

### 6.3 SEO/LLMO対策
- 各ページでメタデータ設定（`export const metadata`）
- 構造化データ（JSON-LD）出力
- `ai.txt` でAIクローラー向け情報提供
- サイトマップ自動生成

### 6.4 Analytics
- Google Analytics 4: `G-GR5S8NKFH3`
- Google Search Console: 認証済み

---

## 7. 今後の作業予定

※詳細は冒頭の「🚀 リニューアル計画」を参照

### 直近の作業（Phase 1）
1. カラーパレット変更（オレンジ→ブルー系）
2. スローガン・キャッチコピー決定＆反映
3. Header/Footer/CTAの文言変更

### 次の作業（Phase 2-3）
1. TOPページの大幅改修
2. 起業支援ページの新規作成
3. 既存ページの改修

### 保留タスク
- ファビコン設定
- Newsページ実データ
- コンタクトフォーム送信処理

---

## 8. 連絡事項

- ユーザーは日本語でコミュニケーション
- 不要な変更はしない（指示されたことのみ実装）
- ビルドは指示がない限り毎回実行しない
- **新方針**: 起業家志望者向けサイトへのリニューアル中

### 参考サイト
- デザイン参考: ワークナビホールディングス（https://worknavi-hd.com/）
- 起業支援系サイトも参考に

---

*このドキュメントは起業家志望者向けサイトへのリニューアル作業の引き継ぎ用に作成されました。*
