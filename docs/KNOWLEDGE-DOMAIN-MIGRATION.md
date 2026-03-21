# ドメイン移行ナレッジ: Vercelプロジェクトへのドメイン設定・移行手順

**作成日:** 2026-03-21
**実績:** jp-sing.com（SingHDプロジェクト）で実施・動作確認済み

---

## このドキュメントの目的

以下のケースで再利用できる実践的なナレッジ:

- 新規ドメインをVercelプロジェクトに紐付ける
- サブドメイン → apexドメインへ移行する
- 他プロバイダ（Wix, レンタルサーバー等）からVercelへ移行する
- ドメインレジストラ（お名前.com等）のDNS設定手順

---

## 全体の作業フロー

```
1. Vercelでドメイン追加・リダイレクト設定
    ↓
2. ドメインレジストラでDNS設定（Aレコード/CNAME）
    ↓
3. SSL証明書の自動発行を待つ（数分）
    ↓
4. コードベースのURL参照を更新
    ↓
5. デプロイ
    ↓
6. Google Search Console 再設定
    ↓
7. 動作確認
```

---

## Step 1: Vercel側の設定

### 1-1. ドメイン追加

Vercelダッシュボード > プロジェクト > **Settings** > **Domains**

1. 追加したいドメインを入力して **Add**
2. apex（例: `example.com`）とwww（例: `www.example.com`）の両方を追加
3. **どちらをプライマリにするか決める**（SEO的にはapexドメイン推奨）

### 1-2. リダイレクト設定

プライマリ以外のドメインは全てリダイレクトに設定:

| ドメイン | 設定 |
|---------|------|
| `example.com` | **Production**（プライマリ） |
| `www.example.com` | **308 Permanent Redirect** → `example.com` |
| 旧ドメイン | **308 Permanent Redirect** → `example.com` |

**308 vs 307:**
- **308 Permanent**: 恒久的な移行。SEO評価が引き継がれる。通常はこちら
- **307 Temporary**: 一時的な転送。元に戻す予定がある場合のみ

**リダイレクト設定時の注意:**
- 「Redirect to Another Domain」を選択
- リダイレクトの種類（308）を選択
- **右側のドロップダウンでリダイレクト先ドメインを選択**（「No Redirect」のままだと保存できない）

### 1-3. Vercelが表示するDNS推奨値をメモ

ドメイン追加後、Vercelが必要なDNSレコードを表示する:

| ドメインタイプ | レコード種類 | 典型的な値 |
|-------------|-----------|-----------|
| apex（@） | A | `76.76.21.21` または `216.198.79.1` |
| www | CNAME | `cname.vercel-dns.com` または プロジェクト固有の値 |

※ VercelはIP範囲を拡張中。推奨値は時期によって変わる可能性がある。

---

## Step 2: ドメインレジストラ側のDNS設定

### お名前.com（Navi）の場合

**ログイン:** [お名前.com Navi](https://navi.onamae.com/)

**操作:** ドメイン > 対象ドメイン > DNS設定/転送設定 > DNSレコード設定を利用する

**設定するレコード:**

| ホスト名 | TYPE | VALUE | TTL |
|---------|------|-------|-----|
| （空欄=@） | A | Vercel指定のIP | 3600 |
| www | CNAME | Vercel指定の値 | 3600 |

### 絶対に触ってはいけないレコード

| TYPE | 用途 | 触ると何が壊れるか |
|------|------|----------------|
| **MX** | メール受信 | メールが届かなくなる |
| **TXT** (SPF/DKIM/DMARC) | メール認証 | 送信メールが迷惑メール判定される |
| **NS** | ネームサーバー | DNS全体が機能しなくなる |

### お名前.comの注意点: 2つの管理画面

お名前.comには **Navi** と **コントロールパネル（レンタルサーバー）** の2つがある:

- **Navi**: メインのDNS管理。NSレコードが `dnsv.jp` を向いている場合、こちらが有効
- **コントロールパネル**: レンタルサーバー用の初期レコードが残っていることがある。**通常は無視してよい**

**どちらが有効かの判断:** NSレコードの向き先で決まる
- `01.dnsv.jp` 〜 `04.dnsv.jp` → **Navi側が有効**
- レンタルサーバーのNS → コントロールパネル側が有効

### 他プロバイダからの移行時

**Wixの場合:**
1. WixのDNS設定を確認（通常Wix固有のAレコード/CNAMEが設定されている）
2. AレコードをVercelのIPに変更
3. CNAMEをVercelの値に変更
4. Wix側のドメイン紐付けを解除

**一般的なレンタルサーバーの場合:**
1. 現在のAレコード（レンタルサーバーのIP）をVercelのIPに変更
2. サーバー側の設定は残しておいてOK（DNSが向かなくなるだけ）

---

## Step 3: SSL証明書

**Vercelが自動で行う（手動作業なし）:**
1. DNSがVercelを向いていることを検知
2. Let's Encrypt でSSL証明書を自動発行
3. 通常数分で完了

**確認方法:** Vercelダッシュボードの Domains で「Generating SSL Certificate」→「Valid Configuration」に変われば完了

**トラブルシューティング:**
- 数時間経っても「Generating」のまま → DNS設定が正しくない可能性。Aレコード/CNAMEを再確認
- 「Invalid Configuration」→ DNSがVercelを向いていない

---

## Step 4: コードベースの更新

### Next.js プロジェクトで変更が必要な箇所

**必ず変更:**

| ファイル | 内容 |
|---------|------|
| SEO設定ファイル（`siteUrl`等） | ベースURLの定義元 |
| sitemap.ts | siteUrlを参照していれば自動更新 |
| robots.txt（動的生成の場合） | siteUrlを参照していれば自動更新 |
| 構造化データ（JSON-LD） | siteUrlを参照していれば自動更新 |

**grep で漏れを探す:**
```bash
# 旧ドメインのハードコード参照を全検索
grep -r "旧ドメイン" --include="*.ts" --include="*.tsx" --include="*.txt" --include="*.md"
```

**変更しないもの:**
- メールアドレス（`info@example.com`等）はウェブドメインとは別
- 履歴・ログ系ドキュメント（過去の事実として残す）

### 本プロジェクトで変更したファイル一覧

| ファイル | 変更内容 |
|---------|---------|
| `src/config/seo.ts` | `siteUrl` を `https://jp-sing.com` に変更 |
| `src/app/recruit/diagnosis/page.tsx` | ハードコードされたシェアURL |
| `public/ai.txt` | AIクローラー向けURL |
| `public/llms.txt` | LLM向けURL |
| `CLAUDE.md` | プロジェクト説明のドメイン |
| `docs/インデックス登録リクエスト手順書.md` | 全URL一括置換 |
| `.claude/commands/seo-check.md` | 監査対象ドメイン |

---

## Step 5: Google Search Console

### 新ドメインのプロパティ追加

1. GSC > プロパティを追加 > URLプレフィックス > `https://新ドメイン`
2. 所有権の確認（HTMLメタタグ / DNS TXTレコード）
3. サイトマップ送信: `https://新ドメイン/sitemap.xml`
4. 主要ページのインデックス登録リクエスト（1日10〜20件まで）

### 旧プロパティの処理

- **削除しない**（リダイレクト元のデータが参照できる）
- 「アドレス変更」ツールがあれば使用（旧→新の移行通知）

### 本プロジェクトのGSC情報

- 認証コード: `9TTYbM_...PNhOypY`（HTMLメタタグ方式、`src/app/layout.tsx` に設定済み）
- GA4: `G-GR5...KFH3`
- 旧プロパティ: `hd.jp-sing.com`（削除しない）
- 新プロパティ: `jp-sing.com`

---

## Step 6: 動作確認チェックリスト

### リダイレクト

- [ ] `https://旧ドメイン` → `https://新ドメイン` にリダイレクト
- [ ] `https://旧ドメイン/任意のパス` → `https://新ドメイン/任意のパス` にリダイレクト
- [ ] `http://新ドメイン` → `https://新ドメイン` にリダイレクト（SSL強制）
- [ ] `https://www.新ドメイン` → `https://新ドメイン` にリダイレクト

### SEOメタデータ（ページソースで確認）

- [ ] `<link rel="canonical" href="https://新ドメイン/...">` になっている
- [ ] `<meta property="og:url" content="https://新ドメイン">` になっている
- [ ] `<meta name="robots" content="index, follow">` がある（noindexでないこと）

### sitemap / robots

- [ ] `https://新ドメイン/sitemap.xml` が返る
- [ ] sitemap内の全URLが新ドメインになっている
- [ ] `https://新ドメイン/robots.txt` が返る
- [ ] robots.txt内のSitemap行が新ドメインを指している

### 構造化データ

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) で新ドメインを検査
- [ ] JSON-LD内のURL（Organization, WebSite等）が新ドメイン

### メール

- [ ] お問い合わせフォームの送信テスト → メールが届くことを確認
- [ ] MXレコードが変わっていないことをDNS確認ツールで確認

---

## トラブルシューティング

### サイトが表示されない

| 症状 | 原因 | 対処 |
|------|------|------|
| SSL証明書エラー | Vercelにドメインが追加されていない or DNS未反映 | Vercelでドメイン追加、DNS設定確認 |
| 404 Not Found | Vercelの別プロジェクトに紐付いている | 正しいプロジェクトにドメインを追加 |
| タイムアウト | Aレコードが間違っている | Vercel推奨のIPを確認 |

### メールが届かなくなった

1. MXレコードが削除されていないか確認
2. TXTレコード（SPF/DKIM）が削除されていないか確認
3. DNS変更時にお名前.comが「初期状態に戻す」等を実行していないか確認

### リダイレクトループ

- Vercelで複数ドメインが互いにリダイレクトし合っていないか確認
- 1つだけを「Production」にし、残りは全てそこへの308リダイレクトにする

---

## 所要時間の目安

| 作業 | 時間 |
|------|------|
| Vercelドメイン設定 | 5〜10分 |
| DNS設定（レジストラ） | 5〜10分 |
| DNS反映 | 即時〜48時間（通常30分以内） |
| SSL証明書発行 | 数分（DNS反映後） |
| コード修正 | プロジェクト規模による（SingHDは30分） |
| GSC設定 | 15〜30分 |
| 動作確認 | 15分 |

**合計: 早ければ1〜2時間で完了**（DNS反映待ちを除く）

---

## 今回の実績ログ

### タイムライン（2026-03-21）

| 時刻 | 作業 |
|------|------|
| 調査開始 | `hd.jp-sing.com` のGoogle検索不表示を調査 |
| 調査結果 | コードベースに問題なし。新規サブドメイン＋被リンクゼロが原因と判明 |
| 方針決定 | apexドメイン `jp-sing.com` をプライマリに移行 |
| DNS確認 | お名前.com Naviで既にAレコードがVercel（`76.76.21.21`）を向いていたためDNS変更不要 |
| Vercel設定 | `jp-sing.com` をProduction、`www` と `hd` を308リダイレクトに設定 |
| SSL発行 | 数分で自動完了、サイト表示確認 |
| コード修正 | siteUrl変更 + ハードコードURL7箇所 + ドキュメント3ファイル |
| DNS推奨更新 | Vercel推奨の新IP `216.198.79.1` に更新 |

### Vercel最終状態

```
jp-sing.com          → Production
www.jp-sing.com      → 308 → jp-sing.com
hd.jp-sing.com       → 308 → jp-sing.com
sing-hd.vercel.app   → Valid Configuration
```

### お名前.com Navi 最終DNS状態

```
jp-sing.com          A      216.198.79.1（Vercel）
www.jp-sing.com      CNAME  761e6a...vercel-dns-017.com
hd.jp-sing.com       CNAME  761e6a...vercel-dns-017.com
jp-sing.com          MX     smtp.google.com（変更なし）
jp-sing.com          TXT    SPF/DKIM/DMARC（変更なし）
```

### 事前に修正したコード品質の問題

1. `_TEMPLATE.md` がsitemap.xmlに含まれていた → `guide-loader.ts` にフィルタ追加
2. `robots.txt` が静的ファイルと動的Route Handlerで二重定義 → 動的に統一
