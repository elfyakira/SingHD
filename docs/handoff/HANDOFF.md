# Singホールディングス HP - 引き継ぎドキュメント

## 1. プロジェクト概要

### 1.1 基本情報
- **プロジェクト名**: Singホールディングス コーポレートサイト
- **プロジェクトパス**: `/mnt/c/singhp` (Windows: `C:\singhp`)
- **技術スタック**: Next.js 15, TypeScript, Tailwind CSS
- **srcディレクトリ**: 使用（`/src/app/`, `/src/components/` 等）

### 1.2 デザイン参照
- **UIデザイン画像**: `C:\Users\tench\Downloads\Sing_hd\` に格納
- **アニメーション参考**: ワークナビホールディングス（https://worknavi-hd.com/）

---

## 2. 現在の完了状況

### 2.1 完了済みタスク
1. ✅ Next.js 15プロジェクトセットアップ
2. ✅ SEO/LLMO基盤作成
3. ✅ Header/Footer/ContactCTAコンポーネント作成
4. ✅ TOPページ作成（全セクション実装済み）
5. ✅ Newsページ作成
6. ✅ Conceptページ作成（MVV、スローガン反映済み）
7. ✅ Projectページ作成（グループ会社3社のデータ反映済み）
8. ✅ Companyページ作成（Google Map反映済み）
9. ✅ Contactページ作成
10. ✅ 画像反映（ヒーロー、各ページ画像）
11. ✅ 文言カスタマイズ（スローガン、MVV等）
12. ✅ 各ページのサイドナビ削除
13. ✅ 役員紹介・組織図セクションをコメントアウト
14. ✅ **TOPページヒーローアニメーション改修（ワークナビHD風）**
15. ✅ **Projectページの各社ロゴ追加**
16. ✅ **Companyページヒーローアニメーション改修（SVGマスク・パララックス）**
17. ✅ **Companyページにサイドナビゲーション追加（スクロール連動）**

### 2.2 未完了タスク
1. ⏳ ヘッダーロゴの画像化（現在SVGプレースホルダー）
2. ⏳ ファビコン・OGP画像の設定
3. ⏳ SEO設定の完成（seo.tsの実データ入力）
4. ⏳ Newsページの実データ反映
5. ⏳ 最終的なビルドテスト

---

## 3. ディレクトリ構造

```
/mnt/c/singhp/
├── docs/
│   └── handoff/
│       └── HANDOFF.md          # この引き継ぎドキュメント
├── public/
│   └── img/
│       ├── common/             # 共通素材（未配置）
│       ├── hero/
│       │   ├── 1.jpg, 2.jpg, 3.jpg  # ヒーロースライド
│       │   ├── business.jpg    # Success to Successセクション
│       │   ├── city.jpg        # 代表挨拶セクション
│       │   └── company-bg.jpg  # Companyセクション背景
│       ├── company/
│       │   ├── company-hero.jpg
│       │   ├── ceo.jpg
│       │   ├── singlogo.png      # 株式会社Singロゴ
│       │   ├── flytoplogo.png    # 株式会社フライトップロゴ
│       │   └── yumesutalogo.png  # 株式会社ゆめスタロゴ
│       ├── concept/
│       │   └── concept-hero.jpg
│       ├── project/
│       │   └── group-hero.jpg
│       ├── logo/
│       │   ├── logo-black.png
│       │   └── Instagram_Glyph_Gradient.png
│       └── ogp/                # OGP画像（未配置）
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx            # TOPページ
│   │   ├── globals.css         # アニメーションCSS追加済み
│   │   ├── sitemap.ts
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
│   │   └── StructuredData.tsx
│   ├── config/
│   │   └── seo.ts              # SEO設定（要入力）
│   └── lib/
│       └── structured-data.ts
├── SEO_INFO_REQUIRED.md
└── package.json
```

---

## 4. 重要な実装詳細

### 4.1 TOPページ (`src/app/page.tsx`) - ヒーローアニメーション

**ワークナビHD風アニメーション実装済み:**

| 機能 | 実装内容 |
|------|----------|
| スライド切り替え | 5.8秒間隔で自動切り替え（`SLIDE_DURATION = 5800`） |
| スター装飾 | 1.8秒後に300msごとにポップイン、0.5秒後に消える |
| フェード効果 | scale + opacity のトランジション（1.2秒） |
| プログレスバー | インジケーターに進捗表示 |
| テキストアニメーション | 初期ロード時にスライドアップ |
| 画像ウィンドウ | 順番にスケールイン（0.15秒ずつディレイ） |

**スター装飾の位置設定（`starPositions`配列）:**
- 6つのカラフルな円形要素が画面各所に配置
- カラー: オレンジ(`#ea5506`)、グリーン(`#22c55e`)、ブルー(`#3b82f6`)

**画像分割表示:**
- `backgroundSize: '300% auto'` で画像を3分割
- `backgroundPosition`: 左=`0%`、中央=`50%`、右=`100%`
- モバイル対応: `w-[28vw] max-w-[120px]`

### 4.2 globals.css - 追加されたアニメーション

```css
/* 主要なkeyframes */
@keyframes heroSlideIn     /* スライドフェードイン */
@keyframes heroSlideOut    /* スライドフェードアウト */
@keyframes starPopIn       /* スター装飾ポップイン */
@keyframes starFadeOut     /* スター装飾フェードアウト */
@keyframes textSlideUp     /* テキストスライドアップ */
@keyframes windowScaleIn   /* 画像ウィンドウスケールイン */
@keyframes scrollBounce    /* スクロールインジケーター */

/* CSSクラス */
.hero-slide, .hero-slide.active, .hero-slide.exiting
.hero-star, .hero-star.show, .hero-star.hide
.hero-window, .hero-window.animate
.hero-text, .hero-text.animate
.scroll-indicator
.slide-progress, .slide-progress.active
```

### 4.3 Projectページ (`src/app/project/page.tsx`)

グループ会社3社のデータ（ロゴ追加済み）:
1. **株式会社Sing** - 企業コンサルティング業 - `/img/company/singlogo.png`
2. **株式会社フライトップ** - 人財コンサルティング業 - `/img/company/flytoplogo.png`
3. **株式会社ゆめスタ** - 企業ブランディング事業 - `/img/company/yumesutalogo.png`

各社のカテゴリ名・ライン・ロゴは左カラム中央揃え

### 4.4 Conceptページ (`src/app/concept/page.tsx`)
- **ミッション**: 日本の人と企業が挑戦と成長を続ける環境を整備し、次世代に確かな価値を残すことに貢献する。
- **ビジョン**: 社会に笑顔が溢れ誰もが自らの力を発揮できる社会の実現に貢献する。
- **バリュー**: Professional, Challenge, Enjoy, Collaboration, Innovation
- **スローガン**: 「日本の明日を支え、バトンを繋ぐ」

### 4.5 Companyページ (`src/app/company/page.tsx`)

**ワークナビHD風アニメーション実装済み:**

| 機能 | 実装内容 |
|------|----------|
| SVGマスク | 曲線的なclipPathで画像をクリッピング |
| パララックス | スクロール連動でtranslate3d + scale変化 |
| タイトルアニメーション | フェードイン + スライドアップ |
| サイドナビ | sticky配置、アクティブセクション連動 |

**SVGマスクのパス:**
```typescript
<clipPath id="svgPath" clipPathUnits="objectBoundingBox">
  <path d="M0 1C0.14 0.47 0.51 0.02 1 0V1Z" />
</clipPath>
```

**サイドナビゲーション:**
- Desktop（lg以上）のみ表示
- スクロール位置に応じてアクティブ状態が切り替わる
- クリックでスムーズスクロール

- 役員紹介セクション: コメントアウト済み
- 組織図セクション: コメントアウト済み
- Google Map: 株式会社Singの地図を埋め込み済み

### 4.6 Footer (`src/components/layout/Footer.tsx`)
- スローガン: 「未来を変える挑戦に、力を。」「Shape the future.」
- コピーライト: 「© Sing Holdings Inc. All Rights Reserved.」

---

## 5. 残りの必要な画像

| 保存先 | ファイル名 | 用途 |
|--------|-----------|------|
| `common/` | `logo.png` | ヘッダーロゴ |
| `common/` | `favicon.ico` | ブラウザタブアイコン |
| `common/` | `apple-touch-icon.png` | iOS用アイコン |
| `ogp/` | `ogp-default.jpg` | SNS共有時サムネイル（1200x630px） |

---

## 6. 次のセッションで行うべきタスク

### 6.1 優先度高
1. ヘッダーロゴを`logo-black.png`に置き換え
2. ファビコン設定

### 6.2 優先度中
1. SEO設定（`src/config/seo.ts`）の実データ入力
2. OGP画像設定
3. Newsページの実データ反映

### 6.3 最終確認
1. ビルドテスト実行
2. レスポンシブ確認
3. リンク動作確認

---

## 7. 技術的な注意点

### 7.1 カラーパレット
- **プライマリ（オレンジ）**: `#ea5506`
- **セカンダリ（グリーン）**: `#22c55e`
- **アクセント（ブルー）**: `#3b82f6`

### 7.2 オレンジボタンの白文字
globals.cssから`color: inherit`を削除済み。Tailwindの`text-white`が正しく適用される。

### 7.3 Companyセクション背景ぼかし
`<img>`タグに直接`blur-md`クラスを適用。z-indexで適切にレイヤリング。

### 7.4 ヒーローアニメーションのタイミング定数
```typescript
const SLIDE_DURATION = 5800    // スライド切り替え間隔（ms）
const STAR_START_DELAY = 1800  // スター表示開始タイミング（ms）
const STAR_INTERVAL = 300      // スター表示間隔（ms）
const STAR_HIDE_DELAY = 500    // スター非表示までの時間（ms）
```

---

## 8. 連絡事項

- ユーザーは日本語でコミュニケーション
- 不要な変更はしない（指示されたことのみ実装）
- ビルドは指示がない限り毎回実行しない

---

*最終更新: 2025-11-28*
