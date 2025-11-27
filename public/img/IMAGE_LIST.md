# 必要な画像リスト

## ディレクトリ構造
```
public/img/
├── common/      # 共通素材（ロゴ、ファビコン等）
├── hero/        # TOPページヒーローセクション
├── company/     # 会社概要ページ（代表・役員写真等）
├── project/     # グループ会社紹介ページ
├── concept/     # コンセプトページ
└── ogp/         # SNS共有用OGP画像
```

---

## 1. 共通素材 (`public/img/common/`)

| ファイル名 | 用途 | 推奨サイズ | 形式 |
|-----------|------|-----------|------|
| `logo.png` | ヘッダー・フッターのロゴ | 200x80px程度 | PNG（透過） |
| `logo-white.png` | 暗い背景用ロゴ（必要な場合） | 200x80px程度 | PNG（透過） |
| `favicon.ico` | ブラウザタブアイコン | 32x32px | ICO |
| `apple-touch-icon.png` | iOS用アイコン | 180x180px | PNG |

---

## 2. TOPページ - ヒーローセクション (`public/img/hero/`)

| ファイル名 | 用途 | 推奨サイズ | 形式 |
|-----------|------|-----------|------|
| `hero-1.jpg` | ヒーロースライド1（3窓で分割表示） | 1200x800px | JPG/WebP |
| `hero-2.jpg` | ヒーロースライド2（3窓で分割表示） | 1200x800px | JPG/WebP |
| `hero-3.jpg` | ヒーロースライド3（3窓で分割表示） | 1200x800px | JPG/WebP |
| `business.jpg` | Success to Successセクション | 800x600px | JPG/WebP |
| `company-bg.jpg` | Companyセクション背景（ぼかし適用） | 1920x1080px | JPG/WebP |
| `city.jpg` | 代表挨拶セクション背景 | 800x600px | JPG/WebP |

※ヒーロー画像は1枚の大きな画像を3つの縦長窓で分割表示します。3枚の画像が自動でアニメーション切り替えされます。
※company-bg.jpgはぼかし＋青オーバーレイがかかるため、やや暗めの画像でもOK。

---

## 3. 会社概要ページ (`public/img/company/`)

| ファイル名 | 用途 | 推奨サイズ | 形式 |
|-----------|------|-----------|------|
| `ceo.jpg` | 代表取締役の写真 | 400x500px | JPG/WebP |
| `executive-1.jpg` | 役員1の写真 | 300x400px | JPG/WebP |
| `executive-2.jpg` | 役員2の写真 | 300x400px | JPG/WebP |
| `executive-3.jpg` | 役員3の写真（必要な場合） | 300x400px | JPG/WebP |
| `office.jpg` | オフィス外観/内観 | 800x600px | JPG/WebP |

---

## 4. グループ会社紹介ページ (`public/img/project/`)

| ファイル名 | 用途 | 推奨サイズ | 形式 |
|-----------|------|-----------|------|
| `company-1.jpg` | グループ会社1のイメージ | 600x400px | JPG/WebP |
| `company-2.jpg` | グループ会社2のイメージ | 600x400px | JPG/WebP |
| `company-3.jpg` | グループ会社3のイメージ | 600x400px | JPG/WebP |
| `logo-company-1.png` | グループ会社1のロゴ | 200x100px | PNG（透過） |
| `logo-company-2.png` | グループ会社2のロゴ | 200x100px | PNG（透過） |
| `logo-company-3.png` | グループ会社3のロゴ | 200x100px | PNG（透過） |

---

## 5. コンセプトページ (`public/img/concept/`)

| ファイル名 | 用途 | 推奨サイズ | 形式 |
|-----------|------|-----------|------|
| `concept-hero.jpg` | コンセプトページヒーロー画像 | 800x600px | JPG/WebP |

---

## 6. OGP画像 (`public/img/ogp/`)

| ファイル名 | 用途 | 推奨サイズ | 形式 |
|-----------|------|-----------|------|
| `ogp-default.jpg` | デフォルトOGP画像 | 1200x630px | JPG |
| `ogp-news.jpg` | ニュースページ用OGP | 1200x630px | JPG |
| `ogp-company.jpg` | 会社概要ページ用OGP | 1200x630px | JPG |

---

## 注意事項

1. **ファイル形式**: WebP推奨（JPGでも可）。ロゴはPNG（透過）
2. **ファイルサイズ**: 各画像は500KB以下に圧縮推奨
3. **命名規則**: 小文字英数字とハイフンのみ使用
4. **OGP画像**: テキストを含める場合は中央に配置（SNSによりトリミングされるため）

---

## 画像配置後の作業

画像を配置したら、以下のファイルを更新します：
- `src/app/page.tsx` - TOPページの画像パス
- `src/app/company/page.tsx` - 会社概要ページの画像パス
- `src/app/project/page.tsx` - グループ会社ページの画像パス
- `src/app/concept/page.tsx` - コンセプトページの画像パス
- `src/components/layout/Header.tsx` - ロゴ画像
- `src/components/layout/Footer.tsx` - ロゴ画像（必要な場合）
- `src/app/layout.tsx` - OGP画像・ファビコン
