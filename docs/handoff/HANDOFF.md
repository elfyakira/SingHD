# Singホールディングス HP - 引き継ぎドキュメント

**最終更新: 2026-03-17（セッション7）**

---

## 現在のサイト状況

起業家志望者向けサイトとして大幅リニューアル済み。MIRAIKUページをTRIGGER風インタビューサイトとして再構築完了。アニメーション導入途中。カツヤクLP（組織活性化プロジェクト）を新規作成・デプロイ済み。MIRAIKU採用専用サイト（全14ページ）の初期構築完了。完成度は約20%、ページ構成・コンテンツ配置・背景パララックスまで。

### デザインテーマ
- **ベースカラー**: ネイビー (`#1C2A44`, `#141E30`, `#0D1520`)
- **アクセント**: ティール (`#0E7490`)
- **参考サイト**: TRIGGER（業界トップリーダーのインタビューサイト）- 黒ベースをネイビーベースに変換
- **見出しスタイル**: 英字セリフ体（Times New Roman / 游明朝）+ 小さい日本語サブテキスト
- **背景パターン**: 方眼グリッド（UNIQUE POINTS, INTERVIEWS）、幾何学斜線パターン（PICKUP）
- **明朝体の適用範囲**: インタビュー詳細ページ全体（ヒーローのタグライン・サブタイトル・名前、チャプタータイトル、メッセージ見出し、プロフィール名前、関連インタビューカード）

---

## セッション7（03-17）で実施した作業：MIRAIKU採用専用サイト初期構築

**コミット: 0bb7674** / **ルート: /miraiku/recruit/**

### 概要

MIRAIKUに紐づく採用専用サイトを新規構築。概念的には専用サイトを新たに作る規模感。要件定義（13セクション＋サブセクション）の全コンテンツを欠損なく配置。現在の完成度は約20%。

### 要件定義の原本

ユーザーから提供された「要望アイデア書」が全ての基盤。この要件書が最重要であり、実装はすべてこの要件書に基づく。

**要件書が定義しているもの:**
- 13セクション分のコンテンツ（全文テキスト）と順序
- 感情の流れ設計（①感情を動かす → ②共感 → ③成長イメージ → ④応募）
- RPGテーマの世界観（人生＝RPG、自分＝主人公）

**要件書が定義していないもの（実装側で判断が必要）:**
- ページ分割の単位（1ページか複数ページか）
- カラー・デザイン方向
- 画像・イラスト・ギミック

### ターゲット
- 20代前半の若者（新卒・第二新卒・学生）
- スマートフォンが主なデバイス
- 挑戦・成長・起業に興味がある層
- RPG/ゲーム比喩に共感する世代

### 現在のページ構成（全14ページ）

```
/miraiku/recruit/                    ← ① TOP（ハブ＋ヒーロー）
/miraiku/recruit/brand-story         ← ② ブランドストーリー
/miraiku/recruit/founder             ← ③ 創業ストーリー
/miraiku/recruit/letter              ← ④ 子供への手紙
/miraiku/recruit/sing-name           ← ⑤ Singという名前の意味
/miraiku/recruit/mission             ← ⑥ 企業理念（MVV＋社員憲章7つの約束）
/miraiku/recruit/last-boss           ← ⑦ ラスボス
/miraiku/recruit/adventure-map       ← ⑧ 冒険マップ
/miraiku/recruit/characters          ← ⑨ 求める人物（4タイプ＋冒険診断＋プレイヤーレベル＋隠しクエスト＋ラスボス討伐PJ）
/miraiku/recruit/oath                ← ⑩ 冒険者の誓い
/miraiku/recruit/stories/watanabe    ← ⑪-1 渡邉大輝ストーリー
/miraiku/recruit/stories/iida        ← ⑪-2 飯田思遠ストーリー
/miraiku/recruit/message             ← ⑫ 最後のメッセージ
/miraiku/recruit/jobs                ← ⑬ 募集要項
```

### ファイル構成

```
src/app/miraiku/recruit/
  layout.tsx              ← 共通レイアウト（メタデータ＋RecruitShell）
  page.tsx                ← ① TOP
  brand-story/page.tsx    ← ②
  founder/page.tsx        ← ③
  letter/page.tsx         ← ④
  sing-name/page.tsx      ← ⑤
  mission/page.tsx        ← ⑥
  last-boss/page.tsx      ← ⑦
  adventure-map/page.tsx  ← ⑧
  characters/page.tsx     ← ⑨（冒険診断クイズ含む）
  oath/page.tsx           ← ⑩
  stories/watanabe/page.tsx ← ⑪-1
  stories/iida/page.tsx   ← ⑪-2
  message/page.tsx        ← ⑫
  jobs/page.tsx           ← ⑬

src/components/recruit/
  RecruitHeader.tsx       ← 採用サイト専用ヘッダー（RPGテーマ）
  ChapterNav.tsx          ← ページ間ナビゲーション（前後移動）
  RecruitCTA.tsx          ← フローティング「冒険に参加する」ボタン
  RecruitShell.tsx        ← パララックス背景ラッパー（冒険マップ画像）

src/data/recruit-chapters.ts ← チャプター定義・ナビゲーションデータ

public/img/recruit/
  adventure-map.png       ← 冒険マップイラスト（1920x3440）
  adventure-map-md.png    ← タブレット用（1280x2293）
  adventure-map-sm.png    ← モバイル用（768x1376）
```

### デザイン方針

- **テーマ**: ドラクエインスパイアの明るいRPG風（ダークテーマは不採用）
- **メインカラー**: DQブルー `#2563EB`
- **アクセント**: オレンジ `#F59E0B`（CTA・ハイライト）
- **背景**: 白 `#FFFFFF` / クリーム `#FAFAF5`
- **テキスト**: ダークネイビー `#1C2A44`（既存サイトと共通）
- **背景イラスト**: RPG冒険マップがパララックスで全ページ背景に表示（CSSトランジション `0.15s ease-out`）
- **セクションオーバーレイ**: ヒーロー含め `bg-gray-800/50`、冒険の地図セクションは `bg-gray-800/50`、他セクションは `bg-white/70`

### 冒険マップ上の要素

| 名称 | 地域名 |
|------|--------|
| 株式会社Singホールディングス | 王城（上部・スタート） |
| ミライク | 冒険者ギルド（城下町） |
| 冒険診断 | 占いの館（城下町） |
| 冒険のはじまり | 出発の村 |
| 株式会社Sing | 騎士団の砦 |
| フライトップ | 職人の街 |
| ゆめスタ | 勇者の学院 |
| Sing.nexT | 情報の塔 |
| 最初の壁 | 試練の門 |
| 自分の武器を見つける | 冒険者の鍛冶場 |
| 仲間を導く | パーティー絆の広場 |
| チームで挑む | 決戦の大地 |
| 人生の主人公になる | 主役の玉座 |
| 挑戦を奪う者 | 魔王の城（下部・ゴール） |

### 要件定義コンテンツの完全マッピング

全13セクション＋⑨内サブセクション3つ（プレイヤーレベル・隠しクエスト・ラスボス討伐PJ）＋⑪の2名分ストーリー、すべて欠損なく配置済み。ただし現在はテキストの配置のみで、以下が未実装。

---

### 次セッション以降の方針（最重要）

**現在の完成度: 約20%**

残り80%で実現すべきことは以下の通り。すべて「要件定義」を最重要の根拠とし、そこから読み取れる「意図・要望」を形にする。

#### 1. 要件定義の「楽しさ」の実現
- 要件書はRPGの世界観を前提としている。現在はテキストを並べただけで「楽しさ」がない
- スマホでもPCでも**まるでRPGゲームをプレイしているかのような体験**にする
- 読めば読むほど自分のレベルがアップしていく感覚を設計する

#### 1.5. ヒーローのアニメーション演出
- 冒険マップ背景の上に**雲がゆっくりループで流れる**アニメーション
- **鳥が飛ぶ**アニメーション
- レイヤー的に浮いていても違和感のない要素（雲・鳥）を動かす
- 海の波も動かしたいが難易度が高いため優先度は下げる

#### 1.6. 冒険マップ背景のループ動画化（Kling検証中）
冒険マップイラストをAI動画生成（Kling）でループアニメ化する試み。開始フレームと終了フレームに同じ画像を使い、完全ループを目指す。

**Klingプロンプト:**
```
Seamless loop animation. The camera is completely static, no camera movement at all.

The sea area gently waves back and forth in a slow, rhythmic motion like calm ocean tides. The waves rise and fall smoothly in a continuous cycle.

The sea monster floats on the water surface, bobbing up and down gently in sync with the wave rhythm.

Thin volcanic smoke rises slowly from the volcano, drifting upward and dissipating naturally in a continuous loop. Very subtle and atmospheric.

The lava around the volcano area glows and pulses very quietly, a faint slow throb of orange light. Not dramatic, just a subtle living warmth.

The throne area at the bottom center has a very slight, gentle glow that softly breathes - the radiance slowly brightens and dims in a calm cycle. Almost imperceptible.

Everything else in the image remains completely still. No movement in land, buildings, trees, mountains, text, or any other elements. All movements are natural, subtle, and atmospheric.

The animation must loop perfectly - the final frame must match the first frame exactly.
```

成功すれば背景を動画に差し替え、CSSアニメーション（雲・鳥）と組み合わせる。

#### 2. ユーザー体験の設計
- 現在14ページに分かれているが、**多すぎて「一体なに！？」となる**
- ページ構成自体を見直し、ユーザーが迷わず・飽きず・引き込まれる導線にする
- 感情の流れ（①感情→②共感→③成長→④応募）が自然に体験できる構成へ

#### 3. 冒険診断機能の完全実装
- ⑨にある冒険診断クイズ（5問→3タイプ判定）は現在基本実装のみ
- ゲーム的な演出・結果画面・シェア機能など、完全な体験として仕上げる

#### 4. 画像・ギミック・キャラクター配置
- 各セクションに合ったビジュアル・イラスト・RPG的UIギミックを配置
- キャラクター（勇者・戦士・賢者・僧侶タイプ）のビジュアル表現
- サイトコンセプト（RPG冒険）に合った世界観の統一

#### 5. 「応募したくなる」導線・仕掛け・ページ構成
- 訪れた人が最終的に「応募」に至る導線設計
- 各ページ・各セクションに仕掛け（CTA、感情トリガー、成長実感）を配置
- 募集要項ページへの自然な誘導

#### まとめ
- **要件定義が最重要** — すべての判断基準
- **要件定義から読み取れる「意図・要望」を実現する** — テキストの裏にある目的を形に
- **上記の展望を形にする** — 20%→100%への道筋

---

## セッション4〜6（03-03〜03-17）で実施した作業

### セッション4〜5: HP修正・SEO強化・ニュースシステム

1. **HP修正**（コミット: a60fe8e）
   - 「22〜35歳」年齢制限を削除 → ミライクの説明（未来＋make）とキャッチコピーに差替
   - 「代表自身が20代で起業」→「20代で経営に携わった経験を持ち」
   - 会長（清水駿之介 / shimishun）のインタビュー内容を全面差替
   - ヒーローテキスト SING → Sing

2. **各種修正**
   - Resend初期化を遅延してビルドエラー解消（cecc60d）
   - favicon-16x16.png 404解消・Resendエラー詳細をレスポンスに追加（afc15cf）
   - siteUrlを本番ドメイン hd.jp-sing.com に修正（bbdc4af）

3. **SEO強化**（300aa5f）
   - ターゲットキーワード最適化・構造化データ・ページ別メタデータ

4. **Markdownベースのニュースシステム構築**（未コミット）
   - `content/news/` にMDファイルを置くだけで記事追加
   - `src/lib/news.ts` — getAllNews(), getNewsBySlug(), getAllSlugs()
   - `src/components/news/NewsListClient.tsx` — 検索・フィルターUI
   - `src/app/news/[slug]/page.tsx` — 詳細ページ（静的生成）

### セッション6: カツヤクLP新規作成

**コミット: 1f0369d** / **本番URL: https://hd.jp-sing.com/katsuyaku**

組織活性化プロジェクト「カツヤク」のランディングページを新規作成。ヘッダー・フッター・FixedCTA非表示のLP専用レイアウト。

#### LP構成（9セクション）

| # | セクション | コンポーネント | 特徴 |
|---|-----------|-------------|------|
| 1 | ファーストビュー | `HeroSection.tsx` | フルスクリーン、アニメーション付き、スクロールCTA |
| 2 | 課題提起 | `ProblemSection.tsx` | 5つの悩み、番号付きリスト |
| 3 | 解決策 | `SolutionSection.tsx` | ベネフィット3つ、左右交互レイアウト |
| 4 | 特徴・強み | `FeaturesSection.tsx` | 3ブロック各異なるレイアウト（ダーク/白/ウォームグレー背景）、比較表 |
| 5 | 実績・数字 | `StatsSection.tsx` | カウントアップアニメーション、Before/After数値 |
| 6 | お客様の声 | `TestimonialsSection.tsx` | Before/After形式、3業種 |
| 7 | 料金 | `PricingSection.tsx` | カスタマイズ型（要相談） |
| 8 | FAQ | `FaqSection.tsx` | アコーディオン7問 |
| 9 | 最終CTA＋フォーム | `ContactSection.tsx` | 入力→確認→完了の3ステップ、`/api/contact` 再利用 |

#### ファイル構成
```
src/app/katsuyaku/
  layout.tsx             ← LP専用レイアウト（Header/Footer/FixedCTA非表示）
  page.tsx               ← 9セクション組み立て（Server Component）

src/components/katsuyaku/
  HeroSection.tsx        ← 'use client' - スクロールCTA、入場アニメーション
  ProblemSection.tsx     ← Server Component - FadeInUpで各項目表示
  SolutionSection.tsx    ← 'use client' - ベネフィット3つ＋CTA
  FeaturesSection.tsx    ← Server Component - 強み3つ（各異なるレイアウト）
  StatsSection.tsx       ← 'use client' - カウントアップアニメーション
  TestimonialsSection.tsx← Server Component - Before/After形式
  PricingSection.tsx     ← Server Component - 料金説明
  FaqSection.tsx         ← 'use client' - アコーディオン開閉
  ContactSection.tsx     ← 'use client' - 3ステップフォーム
```

#### デザイン仕様
- **CTAカラー**: テラコッタオレンジ `#C85A3D`（globals.cssに `--color-cta` として追加）
- **ウォーム背景**: `#F7F5F2`（`--color-warm-bg`）
- **CTA配置**: 4箇所（FV、解決策後、実績後、最終フォーム）
- **セクション間のリズム**: 各セクション異なるレイアウト・背景色で変化をつける
- **アニメーション**: FadeInUp（既存）、カウントアップ（新規）、アコーディオン

#### 写真素材（未配置・要対応）
`/public/img/katsuyaku/` に以下を配置する必要あり:
- `hero.jpg` — FVキービジュアル（現場で対話している写真）
- `benefit-01.jpg` — 1対1ヒアリング場面
- `benefit-02.jpg` — グループディスカッション場面
- `benefit-03.jpg` — 現場リーダーがチームに説明している場面
- OG画像（1200×630px）も別途必要

---

## セッション3（03-03）で実施した作業

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

### カツヤクLP関連
- [ ] **写真素材の配置** — `/public/img/katsuyaku/` に hero.jpg, benefit-01〜03.jpg を配置
- [ ] **OG画像作成** — カツヤクLP専用（1200×630px）
- [ ] **Facebook/Instagram広告とのメッセージマッチ確認**

### ニュースシステム（未コミット）
- [ ] ニュースシステムをコミット＆プッシュ＆デプロイ
- [ ] `content/news/` に `.gitkeep` または実際の記事を追加

### インフラ・メール
- [ ] **Resendドメイン認証**（`jp-sing.com`）— ユーザー側のDNS設定が必要。現在 `/api/contact` が500エラーを返す
- [ ] api/contactの `detail` フィールドは本番安定後に削除検討

### アニメーション関連（未完了）
- [ ] **`titleScaleUp` のバウンスをシンプルなスライドに変更する**（ユーザーがバウンスは好みではないと明言）
- [ ] **company/projectページにもアニメーション追加**

### コメントアウト中セクション（MIRAIKUページ・新バージョン作成待ち）
- [ ] SUPPORT（支援内容）- 新デザインで再実装
- [ ] FLOW（支援の流れ）- 新デザインで再実装
- [ ] グループ参画 - 新デザインで再実装
- [ ] FAQ - 新デザインで再実装

### 機能・コンテンツ
- [ ] ABOUTセクションの「夢を、ビジネスに。」テキスト - クライアント確認
- [ ] スタートアップフォロー3本柱の内容 - 最終確認
- [ ] MIRAIKUヒーローのキャッチコピー最終確認
- [ ] メニュー構成の見直し（後日対応予定）
- [ ] 屋宜さんのQ&A画像 — 素材不足の可能性あり、クライアントに相談

### 技術的TODO
- [x] ~~ファビコン~~ → favicon.ico設置済み、favicon-16x16.png参照削除済み
- [ ] Newsページの実データ（MDニュースシステム構築済み、コミット待ち）
- [x] ~~Contactフォーム送信処理~~ → Resend API実装済み（ドメイン認証待ち）
- [ ] OGP画像更新（サイト全体 + カツヤクLP）
- [x] ~~SEO強化~~ → ターゲットキーワード最適化・構造化データ・ページ別メタデータ追加済み
- [x] ~~siteUrl修正~~ → hd.jp-sing.com に修正済み
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
