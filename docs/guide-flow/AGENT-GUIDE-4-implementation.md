# 実装ガイド — 冒険者ガイド

**このドキュメントは、実装工程を担当するエージェントが読むもの。**
**目的: 執筆済みコンテンツを受け取り、既存のパターンに従ってページを実装する。**

**大前提: オリジナルデザインは作らない。**
**シリーズ設定は `AGENT-CONFIG.md` を参照すること。**

---

## このガイドの使い方

1. 執筆済みMarkdownテキストを受け取る
2. **AGENT-CONFIG.md を読み、データ登録先・画像生成ルールを確認する**
3. このガイドの手順に従って実装する
4. 新しいデザインを発明しない。ここにないパターンが必要な場合はユーザーに相談する

---

## 実装手順

### Step 1: Markdownファイルを配置

```bash
# src/content/guide/[slug].md として保存
```

frontmatter + 本文のMarkdownファイルを配置する。

### Step 2: guide-data.ts にカード情報を追加

```typescript
// src/app/recruit/guide/guide-data.ts
{
  slug: '[slug]',
  title: '[タイトル]',
  desc: '[概要（カード表示用・50文字程度）]',
  tags: ['タグ1', 'タグ2'],
  image: '/img/recruit/guide/[slug].png',
  category: '[カテゴリ]',
  available: true,  // ← 公開する場合はtrue
},
```

### Step 3: 画像を生成

AGENT-CONFIG.md の「画像生成」セクションに従う。

**手順:**

1. tmpスクリプトを書く:

```python
# /mnt/c/Nanobanana/tmp_generate.py
import sys
sys.path.insert(0, r"C:\Nanobanana")
from generate_image_pro import generate_with_reference_pro

STYLE = (
    "Fantasy RPG illustration, painterly style with soft lighting, "
    "warm parchment-like atmosphere, "
    "young Japanese adventurer characters (early 20s) in modern-fantasy hybrid clothing, "
    "natural black hair, determined expressions, "
    "muted jewel-tone palette: deep blue (#2563EB), warm amber (#D97706), "
    "forest green (#059669), crimson (#DC2626), ivory (#FAFAF5), "
    "subtle texture like aged paper or canvas, "
    "cinematic composition, depth of field, "
    "professional and inspiring mood, "
    "no text, no watermark, no border."
)

PROMPT = (
    f"{STYLE} "
    "[ここに記事テーマに合った具体的な描写を英語で書く] "
    "No text, no words, no letters."
)

OUTPUT = r"C:\singhd\public\img\recruit\guide\[slug].png"

generate_with_reference_pro(PROMPT, [], OUTPUT, aspect_ratio="3:2")
```

2. 出力先ディレクトリを確認:

```bash
mkdir -p /mnt/c/singhd/public/img/recruit/guide
```

3. 実行:

```bash
cmd.exe /c "cd /d C:\Nanobanana && C:\Nanobanana\venv\Scripts\python.exe tmp_generate.py"
```

4. 画像を目視確認（Read ツールで開く）

5. tmpスクリプトを削除:

```bash
rm /mnt/c/Nanobanana/tmp_generate.py
```

### Step 4: sitemap.ts を更新

```typescript
// 既存のrecruitガイドエントリーの後に追加
{
  url: `${baseUrl}/recruit/guide/[slug]`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
},
```

### Step 5: ai.txt を更新

`public/ai.txt` の「冒険者ガイド」セクションにコンテンツ情報を追記:

```
### [slug] (/recruit/guide/[slug])
- タイトル: [タイトル]
- カテゴリ: [カテゴリ]
- 概要: [excerpt]
```

### Step 6: llms.txt を更新

`public/llms.txt` にコンテンツ情報を追記。

### Step 7: 型チェック

```bash
npx tsc --noEmit
```

既知のエラー（gray-matter型宣言）以外のエラーがないことを確認。

---

## データ登録チェックリスト

- [ ] `src/content/guide/[slug].md` — Markdownファイル配置済み
- [ ] `src/app/recruit/guide/guide-data.ts` — カード追加、`available: true`
- [ ] `public/img/recruit/guide/[slug].png` — サムネイル画像配置済み
- [ ] `src/app/sitemap.ts` — URLエントリー追加済み
- [ ] `public/ai.txt` — コンテンツ情報追記済み
- [ ] `public/llms.txt` — コンテンツ情報追記済み

---

## 禁止事項（厳守）

- **bounce アニメーション:** 使用禁止（クライアントが嫌い）
- **同色の薄いテキスト:** `text-white/70` 等禁止（コントラスト不足）
- **グラデーション:** 全面禁止
- **装飾的サイドライン:** `border-l-4` 等禁止（引用ブロック内は例外）
- **絵文字アイコン:** 禁止（Lucideアイコンを使う）
