# 技術的な詳細ノート

## 1. SEO/LLMO実装詳細

### 1.1 メタデータ設定（layout.tsx）
```typescript
export const metadata: Metadata = {
  title: {
    default: 'デフォルトタイトル',
    template: '%s | サイト名'  // 各ページでtitleを設定すると自動でサフィックス付与
  },
  // ... その他の設定
}
```

### 1.2 構造化データ（JSON-LD）
各ページで必要なスキーマを選択してStructuredDataコンポーネントで出力：
```typescript
import StructuredData from '@/components/StructuredData'
import { generateWebSiteSchema, generateOrganizationSchema } from '@/lib/structured-data'

// ページ内で
<StructuredData data={[generateWebSiteSchema(), generateOrganizationSchema()]} />
```

### 1.3 robots.txt
動的に生成：`/src/app/robots.txt/route.ts`
- AIクローラー（GPTBot, Claude-Web等）を許可
- /api/, /admin/ 等をブロック

### 1.4 LLMO対策（ai.txt）
`/public/ai.txt` にAIクローラー向けの情報を記載
- サイト概要
- ページマッピング
- キーワード紐付け

---

## 2. コンポーネント詳細

### 2.1 Header.tsx
- `useState` でスクロール状態とモバイルメニュー状態を管理
- `useEffect` でスクロールイベントを監視
- ナビゲーション: News, Concept, Project, Company + CONTACTボタン

### 2.2 Footer.tsx
- siteConfigからスローガンを取得
- カラフルなドット背景（装飾的）

### 2.3 ContactCTA.tsx
- お問い合わせボタンのみ
- お問い合わせページ以外で使用

---

## 3. ページ別実装

### 3.1 TOPページ（page.tsx）
セクション構成：
1. Hero（3枚の画像カード + スローガン）
2. News（1件の最新ニュース表示）
3. Success to Success（コンセプト導線）
4. Company（青いぼかし背景）
5. Project（緑の円3つ）
6. CEO Message（代表挨拶導線）

### 3.2 Newsページ
- 検索機能（フリーワード）
- カテゴリフィルター（ALL, おしらせ）
- ニュースデータは現在ハードコード（TODO: CMS連携等）

### 3.3 Conceptページ
セクション構成：
1. Hero + サイドナビ
2. MVV（Mission/Vision/Value）
3. スローガン
4. ロゴマーク

### 3.4 Projectページ
- グループ会社一覧
- 各社の詳細（ロゴ、説明、事業内容、HP、SNS）

### 3.5 Companyページ
セクション構成：
1. Hero + サイドナビ
2. 代表挨拶（青背景）
3. 役員紹介
4. 会社概要（テーブル + 地図）
5. 組織図

### 3.6 Contactページ
- 3ステップフォーム（入力→確認→完了）
- バリデーション実装済み
- ContactCTA非表示

---

## 4. データ構造

### 4.1 siteConfig（seo.ts）
```typescript
export const siteConfig = {
  siteName: '',
  siteUrl: '',
  company: {
    name: '',
    representative: '',
    foundedDate: '',
    capital: '',
    address: '',
    // ...
  },
  social: { twitter: '', instagram: '' },
  defaultSeo: { title: '', description: '', keywords: [] },
  slogan: { ja: '', en: '', tagline: '' },
  mvv: { mission: '', vision: '', values: [] },
  groupCompanies: [],  // GroupCompany[]
  executives: [],      // Executive[]
  analytics: { googleAnalyticsId: '', googleSearchConsoleId: '' },
}
```

### 4.2 GroupCompany型
```typescript
interface GroupCompany {
  id: string
  name: string
  nameEn: string
  category: string
  categoryJa: string
  description: string
  businessContent: string
  website: string
  sns: { twitter?: string; instagram?: string }
}
```

### 4.3 Executive型
```typescript
interface Executive {
  position: string
  positionEn: string
  name: string
  nameEn: string
  image?: string
  message?: string
}
```

---

## 5. スタイリング

### 5.1 カスタムCSS変数（globals.css）
```css
:root {
  --color-primary: #ea5506;
  --color-secondary: #22c55e;
  --color-accent-blue: #3b82f6;
  --section-padding: 80px;
  --container-max-width: 1280px;
}
```

### 5.2 よく使うクラス
- `.container`: 最大幅1280px、左右パディング
- `.section`: 上下パディング80px（モバイル60px）
- `.btn-primary`: オレンジボタン
- `.section-title`: イタリック太字タイトル

---

## 6. 画像配置ガイド

### 6.1 必要な画像と配置場所
```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── og-image.jpg (1200x630)
└── img/
    ├── logo.png              # ヘッダーロゴ
    ├── hero/                 # TOPページヒーロー画像
    │   ├── hero1.jpg
    │   ├── hero2.jpg
    │   └── hero3.jpg
    ├── company/              # 会社関連画像
    │   ├── building.jpg      # 社屋外観
    │   ├── ceo.jpg           # 代表写真
    │   └── executives/       # 役員写真
    │       ├── coo.jpg
    │       ├── cfo.jpg
    │       └── auditor.jpg
    ├── project/              # グループ会社関連
    │   ├── company1-logo.png
    │   ├── company1-image.jpg
    │   └── ...
    └── concept/              # コンセプトページ
        └── hero.jpg
```

---

## 7. 今後の拡張ポイント

### 7.1 CMS連携
- ニュース記事のCMS化（microCMS、Contentful等）
- 動的サイトマップ生成

### 7.2 アナリティクス
- Google Analytics 4の遅延ロード（Core Web Vitals対策）
- Microsoft Clarity連携

### 7.3 フォーム送信
- 現在はフロントエンドのみ
- API Routes または外部サービス（Formspree等）で送信処理追加
