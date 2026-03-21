# 冒険者ガイド記事の作成

冒険者ガイド（`/recruit/guide/`）に新しい記事を追加する。

---

## 手順

**まず `docs/guide-flow/` 以下のドキュメントを読み込むこと。**

1. `docs/guide-flow/AGENT-CONFIG.md` を読む（ターゲット・ブランドボイス・品質基準）
2. 以下の5段階パイプラインを順に実行する:

| 工程 | ガイド | 内容 | ユーザー承認 |
|------|--------|------|-------------|
| 1. リサーチ | `AGENT-GUIDE-1-research.md` | WebSearch/WebFetchで事実・データを収集・裏どり | 不要 |
| 2. 構成設計 | `AGENT-GUIDE-2-content-design.md` | セクション構成・感情設計・CTA配置を設計 | **必要** |
| 3. 執筆 | `AGENT-GUIDE-3-writing.md` | Markdown形式でコンテンツを執筆 | **必要** |
| 4. 実装 | `AGENT-GUIDE-4-implementation.md` | ファイル配置・画像生成・データ登録 | 不要 |
| 5. QA | `AGENT-GUIDE-5-qa.md` | 品質チェック・修正 | 不要 |

---

## 入力

ユーザーから以下が共有される:

- **テーマ**: 記事の主題（例: 「初めての失敗との向き合い方」）
- **カテゴリ**: 冒険の心得 / スキルの書 / 仲間の絆（指定がなければ提案する）

---

## 更新するファイル

| ファイル | 内容 |
|---------|------|
| `src/content/guide/[slug].md` | 記事本体（Markdown） |
| `src/app/recruit/guide/guide-data.ts` | ハブページのカード情報 |
| `public/img/recruit/guide/[slug].png` | サムネイル画像 |
| `public/ai.txt` | AIクローラー向け情報に記事を追加 |
| `public/llms.txt` | LLM向け情報に記事を追加 |
| `docs/インデックス登録リクエスト手順書.md` | GSC登録用URLを追加 |

※ `src/app/sitemap.ts` は guide-loader から動的に読み込むため手動更新不要。

---

## 注意事項

- 各工程のガイドドキュメントに詳細な手順・基準が記載されている。必ず参照すること
- 画像生成には Nanobanana ツールが必要（`docs/NANOBANANA.md` 参照）
- 構成設計と執筆の2箇所でユーザー承認を取ること
- カテゴリの追加は SEO/LLMO キーワード調査の結果に基づいて行う
