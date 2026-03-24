# Technical Audit — Agent 1: メタデータ監査ガイド

## 調査対象
- 全 page.tsx / layout.tsx のメタデータ export（title, description, openGraph, twitter）
- canonical URL の設定状況
- viewport 設定
- favicon / apple-touch-icon 設定
- OGP画像の設定状況（個別化率・動的生成の有無）
- metadataBase の設定
- Google/Bing verification

## メタデータ継承ルール（誤検知防止・最重要）

Next.js App Router では、page.tsx 自体に metadata export がなくても、
同ディレクトリまたは親ディレクトリの layout.tsx で metadata が定義されていれば
そのページはメタデータ「カバー済み」と判定する。

### 判定手順（必ずこの順序で確認）
1. page.tsx に `metadata` / `generateMetadata` があるか確認
2. なければ、同ディレクトリの layout.tsx を確認
3. それもなければ、親ディレクトリの layout.tsx を再帰的に確認
4. ルート layout.tsx まで遡っても title/description がなければ「未設定」と判定

### 禁止事項
- `'use client'` だからメタデータなし、と即断しないこと
- layout.tsx でカバーされているページは「カバー済み」として報告すること
- ルートlayout.tsx のデフォルトメタデータでカバーされるページを「未設定」と報告しないこと

## 調査手順

### Step 1: ルートlayout.tsx の確認
`src/app/layout.tsx` を READ し、以下を記録:
- title（default + template）
- description
- keywords
- metadataBase
- openGraph 設定
- twitter 設定
- robots 設定
- icons 設定
- verification 設定

### Step 2: 全page.tsx の列挙
`glob` で `src/app/**/page.tsx` を全件取得し、ファイル数を記録。

### Step 3: カバレッジ判定
各 page.tsx について:
1. 自身に metadata export があるか → 「直接設定」
2. 同ディレクトリの layout.tsx に metadata があるか → 「layout経由」
3. 親ディレクトリの layout.tsx に metadata があるか → 「親layout経由」
4. ルート layout.tsx のみ → 「ルートlayout経由」
5. どこにもない → 「未設定」（このケースのみ不備として報告）

### Step 4: OG画像個別化率チェック

#### 3層評価
| 層 | 対象 | 期待 |
|----|------|------|
| Tier 2 | セクションTOP・ハブページ | カスタム画像 or 動的OGルート |
| Tier 3 | コンテンツページ（記事・サブページ） | 動的OGルート `/api/og` 経由 |

#### OG画像動的生成の確認
- `src/app/api/og/route.tsx` が存在するか確認
- Next.js ImageResponse (Satori) の利用有無

## 出力フォーマット
- ルートlayout.tsx の設定内容
- メタデータカバレッジ: X/Y ページ (Z%)
- カバー元の内訳（直接 / layout経由 / ルートlayout経由）
- OG画像個別化率
- 真に未設定のページ一覧（あれば）
- 改善推奨事項
- スコア: X/10
