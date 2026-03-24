# Technical Audit — Agent 5: セキュリティ監査ガイド

## 調査対象
- セキュリティヘッダー設定
- カスタムエラーページの有無
- 環境変数の露出リスク
- APIルートのセキュリティ
- Edge Runtime ルートの安全性

## セキュリティヘッダー

next.config の headers() セクションを READ し、以下のヘッダーを確認:

| ヘッダー | 推奨値 |
|---------|--------|
| X-Frame-Options | DENY |
| X-Content-Type-Options | nosniff |
| Strict-Transport-Security | max-age=31536000; includeSubDomains |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera=(), microphone=(), geolocation=() |
| Content-Security-Policy | default-src 'self'; ... |
| poweredByHeader | false |

各ヘッダーについて 設定済み/未設定 を表形式で報告。

## エラーページ

以下のファイルの存在を確認:
- `src/app/error.tsx`（ルートエラーバウンダリ）
- `src/app/global-error.tsx`（グローバルエラーバウンダリ）
- `src/app/not-found.tsx`（カスタム404）
- `src/app/loading.tsx`（ローディング状態）

各ファイルについて:
- 存在する場合: エラー詳細が漏洩していないか確認
- 存在しない場合: Next.js デフォルトが使用される旨を報告

## 環境変数

### 確認事項
- `.gitignore` に `.env*` が含まれているか
- git に追跡されている .env ファイルがないか

### 禁止事項
- .env ファイルの具体的な中身（パスワード、トークン等）をレポートに記載しないこと

## APIルートセキュリティ

`src/app/api/**/route.ts` と `src/app/api/**/route.tsx` を glob で全件取得し、各ルートについて:

### チェック項目
1. **入力バリデーション**: リクエストボディのバリデーション有無
2. **スパム対策**: ハニーポット、タイムスタンプ検証等
3. **エラー処理**: エラー詳細がクライアントに漏洩していないか

### Edge Runtime ルートの追加チェック
`runtime = 'edge'` を使用するルート（例: OG画像生成）について:
- 外部URLのfetchがある場合、タイムアウト処理とフォールバックが実装されているか
- ユーザー入力がレスポンスに含まれる場合、XSSリスクがないか

## WSL/Windows環境の考慮（誤検知防止・重要）

### 報告してはならないもの
- `/mnt/` 配下のファイルパーミッション 777 → WSL の Windows filesystem マウント仕様
- lightningcss 等のネイティブバインディングエラー → 環境固有

### 正しい判定方法
- .env のセキュリティは .gitignore での除外状態で判定する
- パーミッションは Linux ネイティブファイルシステム上のもののみ評価対象

## 出力フォーマット
- セキュリティヘッダー: 設定状況の表
- エラーページ: 存在有無の表
- 環境変数: .gitignore 除外状況
- APIルート: 各ルートのセキュリティ状況表
- リスク要約（優先度順）
- 改善推奨事項
- スコア: X/10
