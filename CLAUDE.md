# CLAUDE.md - SingHD プロジェクト

## プロジェクト概要
株式会社Singホールディングスのコーポレートサイト（https://hd.jp-sing.com）

- **フレームワーク**: Next.js (App Router)
- **デプロイ**: Vercel
- **ドメイン**: hd.jp-sing.com

## 引き継ぎ・進捗
セッション開始時に **docs/handoff/HANDOFF.md** を読むこと。サイトの現状・未着手項目・設計判断の経緯がすべて記載されている。

## 画像生成
画像を生成する際は必ず **docs/NANOBANANA.md** を参照すること。
WSLからの実行方法・クォート問題の回避策・バッチスクリプトのテンプレートがすべて記載されている。

## コンテンツ量産（冒険者ガイド）
「コンテンツを増やして」「冒険者ガイドに記事を追加して」等の指示を受けたら、**docs/guide-flow/README.md** を読み、そこに記載された5段階パイプラインに従うこと。

```
docs/guide-flow/
├── README.md                    ← 全体フロー概要（最初にここを読む）
├── AGENT-CONFIG.md              ← ターゲット・ブランドボイス・品質基準
├── AGENT-GUIDE-1-research.md    ← リサーチ（裏どり）
├── AGENT-GUIDE-2-content-design.md ← 構成設計
├── AGENT-GUIDE-3-writing.md     ← 執筆（Markdown）
├── AGENT-GUIDE-4-implementation.md ← 実装（ファイル配置・画像生成・データ登録）
└── AGENT-GUIDE-5-qa.md          ← 品質チェック
```

コンテンツ追加時に更新が必要なファイル:
- `src/content/guide/[slug].md` — 記事本体
- `src/app/recruit/guide/guide-data.ts` — ハブページのカード情報
- `public/img/recruit/guide/[slug].png` — サムネイル画像
- `public/ai.txt` — AIクローラー向け情報
- `public/llms.txt` — LLM向け情報
- `docs/インデックス登録リクエスト手順書.md` — Google Search Console登録用URL

## SEO/LLMOチェック
「SEOチェックして」「LLMO監査」「コンテンツ戦略を見直して」等の指示を受けたら、 `/seo-check` コマンドを実行すること。

SingHDリクルートサイトに特化した包括的なSEO/LLMO監査を実行する:
- 技術SEO（メタデータ・構造化データ・パフォーマンス）
- LLMO対策（ai.txt/llms.txt品質・AIクローラー設定・セマンティックHTML）
- コンテンツ棚卸し（記事数・カテゴリバランス・内部リンク・CTA導線）
- **キーワード戦略**（狙うべきキーワード・競合ギャップ・ロングテール発掘）
- **AI質問パターン分析**（ターゲットがAIに聞く質問の推定・AI回答に含まれるための戦略）
- **コンテンツ追加提案**（キーワードギャップとAI質問パターンに基づく新規記事提案）

コマンド定義: `.claude/commands/seo-check.md`
