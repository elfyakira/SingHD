# CLAUDE.md - SingHD プロジェクト

## プロジェクト概要
株式会社Singホールディングスのコーポレートサイト（https://jp-sing.com）

- **フレームワーク**: Next.js (App Router)
- **デプロイ**: Vercel
- **ドメイン**: jp-sing.com

## 引き継ぎ・進捗
セッション開始時に **docs/handoff/HANDOFF.md** を読むこと。サイトの現状・未着手項目・設計判断の経緯がすべて記載されている。

## 画像生成
画像を生成する際は必ず **docs/NANOBANANA.md** を参照すること。
WSLからの実行方法・クォート問題の回避策・バッチスクリプトのテンプレートがすべて記載されている。

## コンテンツ量産（冒険者ガイド — 3トラック体系）
「コンテンツを増やして」「冒険者ガイドに記事を追加して」等の指示を受けたら、**docs/guide-flow/README.md** を読み、そこに記載された5段階パイプライン × 3トラック体系に従うこと。

### 3トラック

| トラック | 最適化対象 | 設定ファイル |
|---------|----------|-----------|
| User Track | 感情体験・エンゲージメント | `docs/guide-flow/AGENT-CONFIG.md` |
| SEO Track | Google検索順位 | `docs/guide-flow/configs/seo-track.md` |
| LLMO Track | AI引用・推薦 | `docs/guide-flow/configs/llmo-track.md` |

### ファイル構成

```
docs/guide-flow/
├── README.md                    ← 全体フロー概要（最初にここを読む）
├── AGENT-CONFIG.md              ← User Track設定（ブランドボイス・画像生成ルール）
├── configs/
│   ├── seo-track.md             ← SEO Track設定（検索意図・情報提供型構成）
│   └── llmo-track.md            ← LLMO Track設定（AI引用最適化・因果関係）
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

## 監査・分析フレームワーク

### 監査ドキュメント

```
docs/audit/
├── strategy/                    ← コンテンツ戦略監査（4エージェント並列）
│   ├── README.md
│   └── agents/
│       ├── agent1-llmo-content.md
│       ├── agent2-seo-authority.md
│       ├── agent3-user-content.md
│       └── agent4-synergy.md
└── technical/                   ← 技術SEO/LLMO監査（5エージェント並列）
    ├── README.md
    └── agents/
        ├── agent1-metadata.md
        ├── agent2-structured-data.md
        ├── agent3-llmo.md
        ├── agent4-performance.md
        └── agent5-security.md
```

### 分析フレームワーク

```
docs/analytics/
└── analysis-framework.md        ← ファネル分析（鳥→虫→魚）+ ACTION決定
```

## 運用コマンド一覧

| コマンド | 起動トリガー | 用途 |
|---------|-------------|------|
| `/audit` | 「監査して」「SEOチェック」「LLMO監査」 | 包括監査（戦略+技術+AI推薦テスト） |
| `/analyze` | 「分析して」「月次レポート」 | 月次パフォーマンス分析（ファネル+ACTION） |
| `/guide` | 「記事追加」「コンテンツ増やして」 | 冒険者ガイド記事の5段階パイプライン実行 |
| `/report` | 「活動報告」「ニュース追加」 | 事実ベースの活動報告記事作成 |
| `/seo-check` | — | （旧版。`/audit` を推奨） |

コマンド定義: `.claude/commands/`
