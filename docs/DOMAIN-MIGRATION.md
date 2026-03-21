# ドメイン移行タスク: hd.jp-sing.com → jp-sing.com

**作成日:** 2026-03-21
**目的:** SEO強化のためサブドメイン(hd.jp-sing.com)からapexドメイン(jp-sing.com)へ移行
**理由:** 新規サブドメインでは被リンクゼロ・ドメインオーソリティゼロのため Google検索に表示されない。apexドメインの方がSEO評価が蓄積されやすい。

---

## 完了済み

### 事前修正（コード品質）

- [x] `src/lib/guide-loader.ts` — `_TEMPLATE.md` をサイトマップから除外するフィルタ追加
- [x] `public/robots.txt` 削除 — 動的Route Handler (`src/app/robots.txt/route.ts`) に統一
- [x] `src/app/robots.txt/route.ts` — Amazonbot・CCBot追加、不要なDisallowルール整理

### Phase 1: Vercel ドメイン設定 ✅ 完了

DNS（お名前.com Navi）は既に `jp-sing.com` A → `76.76.21.21`（Vercel）を向いていたため、DNS変更は不要だった。

Vercelでの設定結果:

| ドメイン | 状態 |
|---------|------|
| `jp-sing.com` | Production（プライマリ） |
| `www.jp-sing.com` | 308 → jp-sing.com |
| `hd.jp-sing.com` | 308 → jp-sing.com |
| `sing-hd.vercel.app` | Valid Configuration |

**DNS推奨更新（任意・お名前.com Navi）:**

Vercelが新しいIP範囲への更新を推奨。現在の設定でも動作するが、推奨に合わせる場合:

| ホスト名 | TYPE | 現在 | 推奨 |
|---------|------|------|------|
| jp-sing.com | A | `76.76.21.21` | `216.198.79.1` |
| www.jp-sing.com | CNAME | `cname.vercel-dns.com` | `761e6a146776bcad.vercel-dns-017.com` |

### Phase 2: コード修正 ✅ 完了

**メイン設定（自動で全体に波及）:**
- [x] `src/config/seo.ts:9` — siteUrl を `https://jp-sing.com` に変更

**ハードコードURL:**
- [x] `src/app/recruit/diagnosis/page.tsx:336` — shareUrl 更新
- [x] `public/ai.txt` — 全URL一括置換
- [x] `public/llms.txt` — 全URL一括置換

**ドキュメント:**
- [x] `CLAUDE.md` — ドメイン参照更新
- [x] `docs/インデックス登録リクエスト手順書.md` — 全URL一括置換
- [x] `.claude/commands/seo-check.md` — ドメイン参照更新

**変更しなかったファイル（意図的）:**

| ファイル | 理由 |
|---------|------|
| `src/config/seo.ts:23` (`email: 'info@jp-sing.com'`) | メールアドレスであり、元々正しい |
| `src/app/api/contact/route.ts:47-48` (`noreply@jp-sing.com`) | メールアドレスであり変更不要 |
| `src/components/layout/Footer.tsx:46` (`info@jp-sing.com`) | メールアドレスであり変更不要 |
| `docs/handoff/HANDOFF.md` | 履歴ドキュメント。過去の事実として残す |

---

## 未完了

### Phase 3: Google Search Console

### 3-1. 新プロパティ追加

1. [Google Search Console](https://search.google.com/search-console) にログイン
2. 左上「プロパティを追加」
3. 「URLプレフィックス」→ `https://jp-sing.com` を入力
4. 認証方法: HTMLタグ（既にコードに `verification.google` が設定済みなのでデプロイ後に自動認証される）
5. 認証完了を確認

### 3-2. サイトマップ送信

1. 左メニュー「サイトマップ」
2. `https://jp-sing.com/sitemap.xml` を送信
3. ステータスが「成功」になることを確認

### 3-3. 主要ページのインデックス登録リクエスト

上部検索バーにURLを入力 → 「インデックス登録をリクエスト」を1ページずつ実行:

**最優先（必ず実行）:**
```
https://jp-sing.com
https://jp-sing.com/recruit
https://jp-sing.com/miraiku
https://jp-sing.com/company
https://jp-sing.com/katsuyaku
https://jp-sing.com/recruit/entry
```

**次点（余裕があれば）:**
```
https://jp-sing.com/concept
https://jp-sing.com/project
https://jp-sing.com/news
https://jp-sing.com/contact
https://jp-sing.com/recruit/guide
https://jp-sing.com/recruit/about
https://jp-sing.com/recruit/mission
https://jp-sing.com/recruit/diagnosis
```

### 3-4. 旧プロパティの処理

- `hd.jp-sing.com` のプロパティは**削除しない**（リダイレクト元としてデータが残る）
- GSCの「アドレス変更」ツールがあれば使用（旧→新の移行をGoogleに通知）

---

### Phase 4: 被リンク構築（SEO効果の加速）

### 4-1. グループ会社サイトからのリンク追加

各サイトのフッターまたは会社情報ページに以下を追加依頼:

| サイト | URL | 追加するリンク |
|--------|-----|-------------|
| 株式会社Sing | https://www.singgroup.biz/ | 「グループ企業: [株式会社Singホールディングス](https://jp-sing.com)」 |
| 株式会社フライトップ | https://www.flytop.biz/ | 同上 |
| 株式会社ゆめスタ | https://yumesuta.com/ | 同上 |

### 4-2. 外部サービスのURL更新

| サービス | 作業 |
|---------|------|
| en-gage.net（Engage求人） | 会社URL欄を `https://jp-sing.com` に更新 |
| Google Business Profile | 新規登録（住所: 愛知県春日井市如意申町7丁目15-5、URL: https://jp-sing.com） |
| gBizINFO | 会社URLの登録・更新を確認 |

### 4-3. SNSプロフィール（将来的に）

`src/config/seo.ts` の `social` セクションが全て空欄。企業SNSを開設した場合はURLを設定する。

---

### Phase 5: デプロイ後の動作確認チェックリスト

### 5-1. リダイレクト確認

```
https://hd.jp-sing.com          → https://jp-sing.com にリダイレクト
https://hd.jp-sing.com/recruit  → https://jp-sing.com/recruit にリダイレクト
http://jp-sing.com              → https://jp-sing.com にリダイレクト
```

### 5-2. ページ表示確認

```
https://jp-sing.com              — トップページ表示
https://jp-sing.com/recruit      — リクルートページ表示
https://jp-sing.com/miraiku      — ミライクページ表示
https://jp-sing.com/contact      — お問い合わせフォーム動作
```

### 5-3. SEOメタデータ確認（ページソースで確認）

- [ ] `<link rel="canonical" href="https://jp-sing.com/...">` になっている
- [ ] `<meta property="og:url" content="https://jp-sing.com">` になっている
- [ ] `<meta name="robots" content="index, follow">` がある
- [ ] `<meta name="google-site-verification" content="9TTYbM_...">` がある

### 5-4. サイトマップ・robots確認

- [ ] `https://jp-sing.com/sitemap.xml` — 全URLが `jp-sing.com` ドメイン
- [ ] `https://jp-sing.com/sitemap.xml` — `_TEMPLATE` が含まれていない
- [ ] `https://jp-sing.com/robots.txt` — Sitemap行が `https://jp-sing.com/sitemap.xml`

### 5-5. 構造化データ確認

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) で `https://jp-sing.com` を検査
- [ ] Organization / WebSite / LocalBusiness のURLが全て `jp-sing.com`

### 5-6. メール動作確認

- [ ] お問い合わせフォームから送信テスト → `info@jp-sing.com` に届くことを確認

---

## 失敗時のロールバック手順

万が一問題が発生した場合:

1. **コード:** `src/config/seo.ts` の siteUrl を `'https://hd.jp-sing.com'` に戻してデプロイ
2. **Vercel:** `hd.jp-sing.com` をプライマリドメインに戻す
3. **Vercel:** `jp-sing.com` のリダイレクト設定を解除
4. **GSC:** 旧プロパティ `hd.jp-sing.com` はそのまま残っているので影響なし

---

## DNS参考情報（お名前.com Navi 2026-03-21時点）

コントロールパネルに「初期レコード」が残っているが、NSレコードが `dnsv.jp` を向いているため **Navi側のレコードが有効**。コントロールパネルの初期レコードは使われていない。

メール関連（変更なし）:
- MX: `smtp.google.com`（Google Workspace）
- DKIM: `google._domainkey`, `resend._domainkey` 設定済み
- SPF: `send.jp-sing.com` に `amazonses.com` 設定済み
- DMARC: `_dmarc.jp-sing.com` 設定済み
