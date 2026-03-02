# Singホールディングス HP - 引き継ぎドキュメント

**最終更新: 2026-03-03（セッション2）**

---

## 現在のサイト状況

起業家志望者向けサイトとして大幅リニューアル済み。MIRAIKUページをTRIGGER風インタビューサイトとして再構築完了。

### デザインテーマ
- **ベースカラー**: ネイビー (`#1C2A44`, `#141E30`, `#0D1520`)
- **アクセント**: ティール (`#0E7490`)
- **参考サイト**: TRIGGER（業界トップリーダーのインタビューサイト）- 黒ベースをネイビーベースに変換
- **見出しスタイル**: 英字セリフ体（Times New Roman / 游明朝）+ 小さい日本語サブテキスト
- **背景パターン**: 方眼グリッド（UNIQUE POINTS, INTERVIEWS）、幾何学斜線パターン（PICKUP）
- **明朝体の適用範囲**: インタビュー詳細ページ全体（ヒーローのタグライン・サブタイトル・名前、チャプタータイトル、メッセージ見出し、プロフィール名前、関連インタビューカード）

---

## 今回のセッション（03-03 セッション2）で実施した作業

### 1. インタビュー詳細ページのフォント・レイアウト変更

#### 明朝体（セリフ体）の適用 (`src/app/miraiku/interview/[slug]/page.tsx`)
- ヒーローセクション: タグライン（h1）、サブタイトル、名前を明朝体に
- チャプタータイトル（h3）: `font-bold` → `font-light` + 明朝体
- メッセージセクション見出し: `font-bold` → `font-light` + 明朝体
- プロフィール名前: `font-bold` → `font-medium` + 明朝体
- 関連インタビュー: タグライン・名前に明朝体

#### ヒーローセクション拡大
- テキスト幅: `max-w-xl`(576px) → `max-w-3xl`(768px)
- タグライン: `text-3xl/4xl/5xl` → `text-4xl/5xl/6xl`
- サブタイトル: `text-sm` → `text-base/lg`、トラッキング広め
- 名前: `text-xl` → `text-2xl`
- 英名: `text-xs` → `text-sm`
- 余白全体を拡大（pb-16→pb-24、mb・pt等も増加）

#### タグライン改行ロジック
- `。`（句点）区切り → `、`（読点）区切りに変更

### 2. MIRAIKUページ ヒーローセクション変更 (`src/app/miraiku/page.tsx`)

#### スライドショー画像変更
- `miraiku-hero.jpg`, `miraiku-overview.jpg` を**削除**（パートナー4名の写真のみに）
- 各画像にオブジェクト形式で `position`, `scale` を個別指定可能に
- 屋宜さんは横長画像 `yagi-wide.jpg` を使用

```js
const heroImages = [
  { src: '/img/miraiku/yagi-wide.jpg', position: 'center center', scale: 1 },
  { src: '/img/miraiku/partner-shimishun.jpg', position: 'center center', scale: 1 },
  { src: '/img/miraiku/partner-daiki.jpg', position: 'center center', scale: 1 },
  { src: '/img/miraiku/partner-shion.jpg', position: 'center 20%', scale: 1 },
]
```

#### テキスト位置
- `flex items-center` → `flex items-end` に変更（下寄せ）
- **未完了: テキストを右下に配置する作業が残っている**。現状は中央下。ユーザーは右下配置を希望している。`container mx-auto` の制約でml-autoだけでは右に寄らない問題がある。**次セッションで対応必要**。

#### カード画像のobject-position
- `partnerData` に `imagePosition` フィールド追加
- 屋宜・飯田: `center 20%` で顔見切れ対策

### 3. Interview型の拡張 (`src/data/interviews.ts`)

```typescript
export interface Interview {
  slug: string
  name: string
  subtitle?: string
  nameEn: string
  image: string          // カード/TOP用（partner-*.jpg）
  portraitImage?: string  // インタビュー詳細ヒーロー用
  portraitPosition?: string // ヒーローのobject-position
  profileImage?: string   // プロフィールセクション用
  profilePosition?: string // プロフィールのobject-position
  wideImage?: string      // チャプター間ワイド画像用
  tagline: string
  // ...以下略
}
```

### 4. Q&A画像のフォールバック廃止・バランス配置

#### フォールバック廃止
- `qa.image || interview.image` → `qa.image` がない場合はテキストのみ表示（画像なし）
- `showRight` / `showLeft` は `!!qa.image` の場合のみ有効化

#### Q&A画像の全ページバランス配置
各チャプターに均等に画像を分散（前半集中を解消）:

| 人物 | ch01 | ch02 | ch03 | ch04 |
|------|------|------|------|------|
| 屋宜 | qa-1 | qa-2 | qa-3 | qa-4 |
| 清水 | qa-1 | qa-3 | - | qa-2 |
| 大輝 | qa-1 | - | qa-2 | - |
| 飯田 | qa-1 | - | - | qa-2 |

### 5. 画像の全面入れ替え

#### 画像ソース（新バージョン）
`C:\Users\tench\Downloads\サイト用画像-20260302T154140Z-1-001\サイト用画像\`

#### 現在の画像配置状況（全配置済み）

**渡邉 大輝（daiki）** - ナンバリング画像①〜⑥:

| 配置先ファイル | ソース | 内容 |
|--------------|--------|------|
| partner-daiki.jpg | ⑥ (縦) | 正面笑顔・額縁背景 |
| daiki-portrait.jpg | ② (横data/縦表示) | 腕組み・木目背景 |
| daiki-profile.jpg | ④ (横data/縦表示) | 見上げ・木目背景 |
| daiki-wide.jpg | ⑤ (横) | PC作業・都市景色 |
| daiki-qa-1.jpg | ① (横) | 手振り語り |
| daiki-qa-2.jpg | ③ (横) | ホワイトボード説明 |

**清水 駿之介（shimishun）** - 提出用 縦/横:

| 配置先ファイル | ソース | 内容 |
|--------------|--------|------|
| partner-shimishun.jpg | 縦/1 | ベージュスーツ正面 |
| shimishun-portrait.jpg | 縦/2 | 屋外・緑背景 |
| shimishun-profile.jpg | 縦/3 | 椅子・額縁背景 |
| shimishun-wide.jpg | 横/4 | 屋外フェンス・横顔 |
| shimishun-qa-1.jpg | 横/1 | 黄色ソファ・語り |
| shimishun-qa-2.jpg | 横/2 | ソファ・手振り |
| shimishun-qa-3.jpg | 横/3 | デスク・PC作業 |

**屋宜 勝正（yagi）** - 縦/横フォルダ:

| 配置先ファイル | ソース | 内容 |
|--------------|--------|------|
| partner-yagi.jpg | 縦/IMG_7916 | 腕組み正面（ブラインド背景） |
| yagi-portrait.jpg | 縦/IMG_7925 | - |
| yagi-profile.jpg | 縦/IMG_7899 | PC作業中 |
| yagi-wide.jpg | 横/IMG_7923 | ネイビーベスト・横顔（黄色ソファ） |
| yagi-qa-1〜5.jpg | 横/IMG_7898,7901,7909,7912,7914 | 各横画像 |

**飯田 思遠（shion）** - ナンバリング画像①〜⑥:
ソース: `C:\Users\tench\Downloads\飯田先生-20260302T161414Z-1-001\飯田先生\`

| 配置先ファイル | ソース | 内容 |
|--------------|--------|------|
| partner-shion.jpg | DSC_8918（旧） | 笑顔・白T全身（**ナンバリングではなく旧画像のまま**） |
| shion-portrait.jpg | ② (縦) | 手組み・柱横（窓背景） |
| shion-profile.jpg | ⑥ (縦) | バストアップ正面（ぼかし背景）**※現在未使用** |
| shion-profile-original.jpg | DSC_8918（旧）| **※現在未使用（partner-shion.jpgと同じ）** |
| shion-wide.jpg | ③ (横) | 全身・廊下中央（引き） |
| shion-qa-1.jpg | ④ (縦) | 手組み・手すり横（街景色） |
| shion-qa-2.jpg | ⑤ (横) | 全身・白Tスーツ（廊下引き） |

### 6. 各人物の画像参照設定（interviews.ts）

| 人物 | image (カード) | portraitImage (ヒーロー) | profileImage (プロフィール) | wideImage |
|------|-------------|-------------------|---------------------|-----------|
| 屋宜 | partner-yagi.jpg | yagi-portrait.jpg | **partner-yagi.jpg** | yagi-wide.jpg |
| 清水 | partner-shimishun.jpg | **partner-shimishun.jpg** | **partner-shimishun.jpg** | shimishun-wide.jpg |
| 大輝 | partner-daiki.jpg | **partner-daiki.jpg** | **daiki-portrait.jpg** | daiki-wide.jpg |
| 飯田 | partner-shion.jpg | shion-portrait.jpg (pos: center 20%) | **partner-shion.jpg** (pos: center 20%) | shion-wide.jpg |

**注意**: 清水・大輝はヒーローとカードが同じ画像。プロフィールもカードと同じ画像を共用しているケースあり。

### 7. Sing.nexT会社情報更新 (`src/app/project/page.tsx`)
- `id`: `media` → `singnext`
- `category`: `企業ブランディング事業` → `人財コンサルティング・採用支援事業`
- `categoryEn`: `Media` → `Human Resources`
- `description`: メディア事業 → 人財コンサルティング・採用支援の説明に全面差し替え
- `businessContent`: `人財コンサルティング、採用支援、組織課題解決支援、人材育成・研修支援`

---

## 残作業・TODO

### 最優先（次セッションで対応）

#### MIRAIKUヒーローのテキスト位置
- [ ] **テキストブロックを右下に配置する**（現状は中央下）
- ユーザーの意図: テキストが画面の右下エリアに配置される
- 問題: `container mx-auto` + `lg:ml-auto` では中央の右寄り止まり
- 対応案: containerを外してabsolute/flexで右下に直接配置する等のアプローチを検討

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

### 連絡事項
- ユーザーは日本語でコミュニケーション
- ビルドチェックは指示がない限り不要
- 不要な変更はしない（指示されたことのみ実装）
- テキストサイズや位置の変更時、他の要素（サイズ等）を勝手に変えない
