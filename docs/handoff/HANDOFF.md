# Singホールディングス HP - 引き継ぎドキュメント

**最終更新: 2026-03-03（セッション3）**

---

## 現在のサイト状況

起業家志望者向けサイトとして大幅リニューアル済み。MIRAIKUページをTRIGGER風インタビューサイトとして再構築完了。アニメーション導入途中。

### デザインテーマ
- **ベースカラー**: ネイビー (`#1C2A44`, `#141E30`, `#0D1520`)
- **アクセント**: ティール (`#0E7490`)
- **参考サイト**: TRIGGER（業界トップリーダーのインタビューサイト）- 黒ベースをネイビーベースに変換
- **見出しスタイル**: 英字セリフ体（Times New Roman / 游明朝）+ 小さい日本語サブテキスト
- **背景パターン**: 方眼グリッド（UNIQUE POINTS, INTERVIEWS）、幾何学斜線パターン（PICKUP）
- **明朝体の適用範囲**: インタビュー詳細ページ全体（ヒーローのタグライン・サブタイトル・名前、チャプタータイトル、メッセージ見出し、プロフィール名前、関連インタビューカード）

---

## 今回のセッション（03-03 セッション3）で実施した作業

### 1. MIRAIKUヒーローテキストを右下に配置

`src/app/miraiku/page.tsx` のヒーローセクション：
- `container mx-auto` を削除し、`flex justify-end` + `px-8 lg:px-16` で右寄せに変更
- `HeroBackground`コンポーネントでラップ（フェードイン付き）

```jsx
// Before:
<div className="container mx-auto px-4 lg:pl-8 lg:pr-4 relative z-10 pb-40 lg:pb-44">
  <div className="lg:ml-auto lg:max-w-2xl">

// After:
<HeroBackground className="w-full relative z-10 pb-40 lg:pb-44 px-8 lg:px-16 flex justify-end" duration={1200} delay={300}>
  <div className="max-w-2xl">
```

### 2. アニメーションコンポーネント作成

tokiwaリポジトリ (`/tmp/tokiwa`) のアニメーションを参考に、以下のコンポーネントを `src/components/animations/` に作成済み：

| コンポーネント | ファイル | 効果 |
|---|---|---|
| FadeInUp | `FadeInUp.tsx` | スクロールでフェード+スライドアップ（IntersectionObserver） |
| StaggerContainer | `StaggerContainer.tsx` | 子要素が順番にフェードイン（stagger） |
| SectionTitleEntrance | `SectionTitleEntrance.tsx` | セクションタイトルの登場アニメ（CSS keyframe） |
| HeroBackground | `HeroBackground.tsx` | ページ読み込み時フェードイン |
| Parallax | `Parallax.tsx` | スクロール連動パララックス |
| TypingText | `TypingText.tsx` | 1文字ずつタイピング表示 |

全コンポーネントは `prefers-reduced-motion` 対応済み。

### 3. CSS keyframe追加 (`src/app/globals.css`)

`SectionTitleEntrance` 用の3種のkeyframeを追加：
- `titleFromLeft` - 左からスライド+スキュー+ブラー
- `titleFromRight` - 右からスライド+スキュー+ブラー
- `titleScaleUp` - スケールアップ+ブラー（**※バウンスあり、要変更**）

```css
.section-title-entrance.is-visible.from-left { animation: titleFromLeft ... }
.section-title-entrance.is-visible.from-right { animation: titleFromRight ... }
.section-title-entrance.is-visible.from-scale { animation: titleScaleUp ... }
```

### 4. アニメーション適用済みページ

#### `src/app/miraiku/page.tsx`
- ヒーローテキスト: `HeroBackground`（フェードイン）
- PICKUP見出し: `SectionTitleEntrance direction="left"`
- PICKUPカード4枚: `StaggerContainer staggerDelay={150}`
- ABOUT見出し: `SectionTitleEntrance direction="scale"`
- ABOUT「夢を、ビジネスに。」: `TypingText`
- ABOUT本文4段落: 各 `FadeInUp delay={0.1〜0.4}`
- UNIQUE POINTS見出し: `SectionTitleEntrance direction="scale"`
- UNIQUE POINTSカード3枚: `StaggerContainer staggerDelay={200}`
- INTERVIEWS見出し: `SectionTitleEntrance direction="left"`
- INTERVIEWSカード4枚: `StaggerContainer staggerDelay={150}`
- Contact見出し: `SectionTitleEntrance direction="scale"`

#### `src/app/page.tsx`（TOPページ）
- ミライク概要: 画像 `FadeInUp` / テキスト `FadeInUp delay={200}`
- 選ばれる理由見出し: `SectionTitleEntrance direction="scale"`
- 選ばれる理由カード3枚: `StaggerContainer staggerDelay={200}`
- 支援の流れ見出し: `SectionTitleEntrance direction="left"`
- 支援の流れカード4枚: `StaggerContainer staggerDelay={150}`
- 代表メッセージ: テキスト `FadeInUp` / 写真 `FadeInUp delay={200}`
- CTA: `FadeInUp`

#### `src/app/miraiku/interview/[slug]/page.tsx`
- ヒーローテキスト: `HeroBackground`
- インタビュー概要見出し: `SectionTitleEntrance direction="left"` 内の `FadeInUp`
- チャプターヘッダー: `FadeInUp`
- 各Q&A: `FadeInUp`
- メッセージ見出し: `SectionTitleEntrance direction="left"` 内の `FadeInUp`
- プロフィール見出し: `SectionTitleEntrance direction="left"`
- プロフィール本体: `FadeInUp`
- 関連インタビュー見出し: `SectionTitleEntrance direction="left"`
- 関連インタビューカード: `StaggerContainer staggerDelay={150}`

---

## 残作業・TODO

### 最優先（次セッションで対応）

#### アニメーション関連（未完了）
- [ ] **`titleScaleUp` のバウンスをシンプルなスライドに変更する**（ユーザーがバウンスは好みではないと明言）。`globals.css` の `@keyframes titleScaleUp` を修正。`titleFromLeft` / `titleFromRight` も同様にバウンス感を抑える方が良い
- [ ] **company/projectページにもアニメーション追加**（miraiku, page.tsx, interview詳細と同じパターンで）
- [ ] **ビルドエラーの確認**（セッション中にdev serverでエラーが出ていた。閉じタグミスの可能性）。`npm run dev` で確認してから作業すること

#### 屋宜さんの画像問題
- [ ] Q&A画像（qa-1〜5）がすべて同じ撮影セッション（ブラインド背景）でプロフィールと似ている。素材不足の可能性あり、クライアントに相談

### コメントアウト中セクション（新バージョン作成待ち）
- [ ] SUPPORT（支援内容）- 新デザインで再実装
- [ ] FLOW（支援の流れ）- 新デザインで再実装
- [ ] グループ参画 - 新デザインで再実装
- [ ] FAQ - 新デザインで再実装

### 機能・コンテンツ
- [ ] ABOUTセクションの「夢を、ビジネスに。」テキスト - クライアント確認
- [ ] スタートアップフォロー3本柱の内容 - 最終確認
- [ ] MIRAIKUヒーローのキャッチコピー最終確認
- [ ] メニュー構成の見直し（後日対応予定）

### 技術的TODO
- [ ] ファビコン未設置
- [ ] Newsページの実データ
- [x] ~~Contactフォーム送信処理~~ → Googleフォーム連携実装済み
- [ ] OGP画像更新
- [ ] 最終ビルドテスト・デプロイ
- [x] ~~Sing.nexTのロゴ画像配置~~ → 完了
- [x] ~~飯田先生の画像配置~~ → ナンバリング画像で配置済み
- [x] ~~Q&A画像のフォールバック問題~~ → テキストのみ表示に修正済み
- [x] ~~画像重複問題~~ → portraitImage/profileImage/wideImage分離済み
- [x] ~~MIRAIKUヒーローテキスト右下配置~~ → flex justify-endで対応済み

---

## アニメーションコンポーネント仕様

### ファイル一覧
```
src/components/animations/
├── FadeInUp.tsx          # スクロールでフェード+スライドアップ
├── StaggerContainer.tsx  # 子要素を順番にフェードイン
├── SectionTitleEntrance.tsx # セクション見出しの登場アニメ（CSS keyframe）
├── HeroBackground.tsx    # ページ読み込みフェードイン
├── Parallax.tsx          # スクロール連動パララックス
└── TypingText.tsx        # タイピングアニメーション
```

### 使い方

```tsx
// import
import FadeInUp from '@/components/animations/FadeInUp'
import StaggerContainer from '@/components/animations/StaggerContainer'
import SectionTitleEntrance from '@/components/animations/SectionTitleEntrance'
import HeroBackground from '@/components/animations/HeroBackground'
import TypingText from '@/components/animations/TypingText'

// FadeInUp: 個別要素を包む
<FadeInUp delay={200} duration={600} distance={30}>
  <div>...</div>
</FadeInUp>

// StaggerContainer: grid等の親を置き換え（子要素が順番に出る）
<StaggerContainer staggerDelay={150} className="grid grid-cols-3 gap-8">
  <div>カード1</div>  {/* 0ms後 */}
  <div>カード2</div>  {/* 150ms後 */}
  <div>カード3</div>  {/* 300ms後 */}
</StaggerContainer>

// SectionTitleEntrance: セクション見出しを包む（direction: left/right/scale）
<SectionTitleEntrance direction="left" className="mb-12">
  <h2>タイトル</h2>
</SectionTitleEntrance>

// HeroBackground: ヒーローテキスト全体を包む
<HeroBackground duration={1200} delay={300}>
  <h1>...</h1>
</HeroBackground>

// TypingText: テキスト1文字ずつ表示
<TypingText text="夢を、ビジネスに。" className="text-xl" delay={300} />
```

### 参考元
- tokiwaリポジトリ: `https://github.com/elfyakira/tokiwa.git`
- 全コンポーネントはtokiwaから移植・調整済み

---

## インタビュー詳細ページ仕様

### ルート・ファイル
- **ルート**: `/miraiku/interview/[slug]`
- **ファイル**: `src/app/miraiku/interview/[slug]/page.tsx`
- **データ**: `src/data/interviews.ts`

### ページ構成（TRIGGER準拠）:
| セクション | 内容 | 画像参照 |
|-----------|------|---------|
| ヒーロー | タグライン(左) + ポートレート(右) + サブタイトル + 名前 | `portraitImage` (+ `portraitPosition`) |
| インタビュー概要 | 導入文 + チャプター番号付きQ&A | `qa.image`（ある場合のみ） |
| ワイド画像 | チャプター01→02間 | `wideImage` |
| メッセージ | ダーク背景パララックス + 起業家へのメッセージ | `image`（パララックスBG） |
| プロフィール | 写真 + 経歴 + 企業情報テーブル | `profileImage` (+ `profilePosition`) |
| 関連インタビュー | 方眼背景 + PICKUPカード | 各人の `image` |

### 画像配置ロジック:
- `qa.image` がある場合のみ画像レイアウト（right/left）を適用
- `qa.image` がない場合はテキストのみ（フォールバックなし）
- 奇数チャプター: 2問目=右画像, 4問目=左画像
- 偶数チャプター: 2問目=左画像, 4問目=右画像
- チャプター01→02の間のみ横長ワイド画像

### インタビューデータ（4名分）

| slug | 名前 | 会社 | 役職 |
|------|------|------|------|
| `yagi` | 屋宜 勝正 | 株式会社フライトップ | 代表取締役 |
| `shimishun` | 清水 駿之介 | 株式会社Sing | 代表取締役会長 |
| `daiki` | 渡邉 大輝 | 株式会社Sing.nexT | 代表取締役社長 |
| `shion` | 飯田 思遠 | 株式会社ゆめスタ | 代表取締役 |

各インタビューは4チャプター構成（起業前 → Singとの出会い → 起業後の変化 → これからの想い）

---

## Googleフォーム連携

| 項目 | エントリーID |
|------|------------|
| 会社名 | `entry.1304991620` |
| お名前 | `entry.1470871904` |
| メールアドレス | `entry.1874230916` |
| 電話番号 | `entry.823910168` |
| お問い合わせ内容 | `entry.652054077` |
| プライバシーポリシー | `entry.914752406` |

**送信先URL**: `https://docs.google.com/forms/d/e/1FAIpQLScaJrsbCOxXPF-jmSvLVH2LW8yzOb1XLzbbAG3-yjF8VatsZg/formResponse`

使用箇所: `/contact` ページ、`/miraiku` ページ（CTAセクション）

---

## グループ会社一覧（最新）

| 会社名 | 代表 | 事業 |
|--------|------|------|
| 株式会社Singホールディングス | 笠本 慎二 | グループ経営管理 |
| 株式会社Sing | 清水 駿之介 | 企業コンサルティング |
| 株式会社フライトップ | 屋宜 勝正 | 人財コンサルティング |
| 株式会社ゆめスタ | 飯田 思遠 | 教育事業 |
| 株式会社Sing.nexT | 渡邉 大輝 | 人財コンサルティング・採用支援 |

---

## 技術情報

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 16, React 19, TypeScript |
| CSS | Tailwind CSS 4 |
| Node.js | v20以上推奨 |
| 開発サーバー | `npm run dev` (localhost:3000) |
| プロジェクトパス | `/mnt/c/singhd` |

### デザイン参考
- **TRIGGER**: 業界トップリーダーのインタビューサイト（黒ベース→ネイビーに変換）
- **JETRO スタートアップ**: カード型レイアウト参考
- **tokiwa**: アニメーションパターンの参考元

### 連絡事項
- ユーザーは日本語でコミュニケーション
- ビルドチェックは指示がない限り不要
- 不要な変更はしない（指示されたことのみ実装）
- テキストサイズや位置の変更時、他の要素（サイズ等）を勝手に変えない
- **アニメーションはバウンス（弾む動き）NG。シンプルなスライドを好む**
