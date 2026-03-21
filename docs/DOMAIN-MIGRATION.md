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

#### 1-1. やったこと（Vercelダッシュボード）

1. [Vercelダッシュボード](https://vercel.com/dashboard) を開く
2. SingHDプロジェクトをクリック
3. 上部メニューの **Settings** をクリック
4. 左メニューの **Domains** をクリック
5. ドメイン入力欄に `jp-sing.com` と入力して **Add** ボタンを押す
   - Vercelが自動で `www.jp-sing.com` も追加を提案 → 追加する
6. `jp-sing.com`（wwwなし）を **Production**（プライマリ）に設定
   - Vercelのデフォルトでは www 付きがプライマリになるので注意
7. `www.jp-sing.com` の **Edit** をクリック → 以下を設定:
   - 「Redirect to Another Domain」を選択
   - 左のドロップダウン: **308 Permanent Redirect**
   - **右のドロップダウン**: **jp-sing.com** を選択（ここが「No Redirect」のままだと保存できない）
   - **Save** をクリック
8. `hd.jp-sing.com` の **Edit** をクリック → 同様に:
   - 「Redirect to Another Domain」→ **308 Permanent Redirect** → **jp-sing.com** → **Save**

#### 1-2. 設定後の状態

| ドメイン | 状態 |
|---------|------|
| `jp-sing.com` | Production（プライマリ） |
| `www.jp-sing.com` | 308 → jp-sing.com |
| `hd.jp-sing.com` | 308 → jp-sing.com |
| `sing-hd.vercel.app` | Valid Configuration |

#### 1-3. DNS設定（お名前.com Navi）

DNS（お名前.com Navi）は既に `jp-sing.com` A → `76.76.21.21`（Vercel）を向いていたため、**DNS変更は不要だった**。

ただし Vercel が新しいIP範囲への更新を推奨していたため、以下を更新:

1. [お名前.com Navi](https://navi.onamae.com/) にログイン
2. **ドメイン** > `jp-sing.com` > **DNS設定/転送設定**
3. **DNSレコード設定を利用する** をクリック
4. 以下の2レコードのみ VALUE を変更:

| ホスト名 | TYPE | 変更前 | 変更後 |
|---------|------|--------|--------|
| jp-sing.com | A | `76.76.21.21` | `216.198.79.1` |
| www.jp-sing.com | CNAME | `cname.vercel-dns.com` | `761e6a146776bcad.vercel-dns-017.com` |

5. **他のレコード（MX, TXT, NS等）は一切触らない**
6. 確認画面で変更箇所が上記2つだけであることを確認して保存

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

### Phase 3: Google Search Console ⏳ 進行中

#### 3-1. 新プロパティ追加 ✅ 完了（認証待ち）

1. [Google Search Console](https://search.google.com/search-console) にログイン
2. 左上のプロパティ選択 → **「プロパティを追加」** をクリック
3. **「ドメイン」** を選択（※「URLプレフィックス」ではない）
4. `jp-sing.com` と入力
5. 確認方法の選択画面が出る

**認証方法: DNS TXTレコード方式（実際に使用した方法）**

※ HTMLタグ方式は `hd.jp-sing.com` 用の認証コードだったため `jp-sing.com` では使えなかった。

6. Googleが表示する TXT レコードの値をコピー（今回の値: `google-site-verification=zndprkZY_BAyXk1NZ0zPrcog2CKU8oxOGiE8UhgtXyk`）
7. お名前.com Navi で TXT レコードを **追加**:

| ホスト名 | TYPE | VALUE | TTL |
|---------|------|-------|-----|
| （空欄=@） | TXT | Googleが指定した `google-site-verification=...` の値 | 3600 |

8. **既存のTXTレコードは削除しない。追加のみ。**
9. 確認画面で「追加」のみであることを確認して保存
10. DNS反映を待つ（30分〜最大数時間。お名前.comは通常30分〜1時間）
11. GSCに戻り、`jp-sing.com` のプロパティを開く → 自動的に再確認される
12. 「所有権を確認しました」と表示されれば完了

**現在のステータス:** DNS TXTレコード追加済み、反映待ち

---

## 未完了

### Phase 3 の残りの手順

#### 3-2. サイトマップ送信

GSCで所有権確認が完了したら:

1. GSCの左メニュー **「サイトマップ」** をクリック
2. 「新しいサイトマップの追加」欄に `https://jp-sing.com/sitemap.xml` と入力
3. **「送信」** をクリック
4. 数分後にページを更新して、ステータスが **「成功しました」** になっていることを確認
5. 検出されたURL数が20件前後であれば正常

#### 3-3. 主要ページのインデックス登録リクエスト

**やり方（1URLずつ繰り返す）:**

1. GSCの画面上部にある **検索バー**（「URL検査」と書かれている場所）をクリック
2. 以下のURLを1つ貼り付けて **Enter** を押す
3. 「URLがGoogleに登録されていません」と表示される
4. **「インデックス登録をリクエスト」** ボタンをクリック
5. 「リクエストを送信しました」と表示されるまで待つ（数秒〜数十秒）
6. 次のURLに進む

**注意:** 1日のリクエスト上限は約10〜20件。1日で全部できなければ翌日に続きをやる。

**最優先（1日目に必ず実行）: ✅ 2026-03-21 完了**
```
https://jp-sing.com              ← 済
https://jp-sing.com/recruit      ← 済
https://jp-sing.com/miraiku      ← 済
https://jp-sing.com/company      ← 済
https://jp-sing.com/katsuyaku    ← 済
https://jp-sing.com/recruit/entry ← 済
```

**次点（2日目以降）:**
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

#### 3-4. 旧プロパティの処理

- `hd.jp-sing.com` のプロパティは **削除しない**（リダイレクト元としてデータが残る）
- GSCの左メニュー **「設定」** → **「アドレス変更」** がもしあれば:
  - 旧アドレス: `hd.jp-sing.com`
  - 新アドレス: `jp-sing.com`
  - を設定する（Googleに「引っ越しました」と正式に通知する機能）
  - なければスキップして問題ない（308リダイレクトが設定済みなのでGoogleは自動で認識する）

---

### Phase 4: 被リンク構築（SEO効果の加速）

#### 4-1. グループ会社サイトからのリンク追加

各社のサイト管理者に以下を依頼する。フッターまたは会社情報ページに「グループ企業」としてリンクを追加してもらう:

| サイト | URL | 追加してもらうリンク |
|--------|-----|-------------------|
| 株式会社Sing | https://www.singgroup.biz/ | 「グループ企業: [株式会社Singホールディングス](https://jp-sing.com)」 |
| 株式会社フライトップ | https://www.flytop.biz/ | 同上 |
| 株式会社ゆめスタ | https://yumesuta.com/ | 同上 |

**なぜ重要か:** Googleは他のサイトからリンクされているサイトを「信頼できる」と判断する。グループ会社からのリンクは最も手軽で効果的な被リンク施策。

#### 4-2. 外部サービスのURL更新

| サービス | やること |
|---------|---------|
| [en-gage.net](https://en-gage.net/jp-sing_saiyo/)（Engage求人ページ） | 管理画面にログイン → 会社情報の「ホームページURL」欄を `https://jp-sing.com` に更新 |
| [Google Business Profile](https://business.google.com/) | 新規登録する。住所: 愛知県春日井市如意申町7丁目15-5、ウェブサイト: `https://jp-sing.com`。Googleマップに表示されるようになり、ブランド検索にも効果大 |
| [gBizINFO](https://info.gbiz.go.jp/) | 法人番号 `2180001170533` で検索 → 会社URLが登録されていれば `https://jp-sing.com` に更新 |

#### 4-3. SNSプロフィール（将来的に）

`src/config/seo.ts` の `social` セクションが全て空欄。企業SNSを開設した場合はURLを設定する。

---

### Phase 5: デプロイ後の動作確認チェックリスト

#### 5-1. リダイレクト確認

ブラウザのアドレスバーに以下を入力して、正しく転送されるか確認:

| 入力するURL | 期待する動作 |
|------------|-------------|
| `https://hd.jp-sing.com` | `https://jp-sing.com` に転送される |
| `https://hd.jp-sing.com/recruit` | `https://jp-sing.com/recruit` に転送される |
| `http://jp-sing.com`（httpで入力） | `https://jp-sing.com` に転送される（SSL強制） |
| `https://www.jp-sing.com` | `https://jp-sing.com` に転送される |

#### 5-2. ページ表示確認

以下のURLを開いて、正常にページが表示されるか確認:

| URL | 確認すること |
|-----|-------------|
| `https://jp-sing.com` | トップページが表示される |
| `https://jp-sing.com/recruit` | リクルートページが表示される |
| `https://jp-sing.com/miraiku` | ミライクページが表示される |
| `https://jp-sing.com/contact` | お問い合わせフォームが表示され、送信できる |

#### 5-3. SEOメタデータ確認

ブラウザで `https://jp-sing.com` を開く → 右クリック → **「ページのソースを表示」** → 以下を検索（Ctrl+F）:

- [ ] `canonical` で検索 → `href="https://jp-sing.com"` になっている（`hd.jp-sing.com` ではない）
- [ ] `og:url` で検索 → `content="https://jp-sing.com"` になっている
- [ ] `robots` で検索 → `content="index, follow"` がある（`noindex` でないこと）
- [ ] `google-site-verification` で検索 → 認証コードが存在する

#### 5-4. サイトマップ・robots確認

| URL | 確認すること |
|-----|-------------|
| `https://jp-sing.com/sitemap.xml` | ブラウザで開いて、全URLが `jp-sing.com` ドメインになっている。`_TEMPLATE` が含まれていない |
| `https://jp-sing.com/robots.txt` | ブラウザで開いて、最後の行の `Sitemap:` が `https://jp-sing.com/sitemap.xml` になっている |

#### 5-5. 構造化データ確認

1. [Google Rich Results Test](https://search.google.com/test/rich-results) を開く
2. `https://jp-sing.com` を入力して **「URLをテスト」** をクリック
3. 結果が表示されたら、検出されたスキーマ（Organization, WebSite, LocalBusiness）のURLが全て `jp-sing.com` であることを確認

#### 5-6. メール動作確認

1. `https://jp-sing.com/contact` を開く
2. テスト内容でお問い合わせフォームを送信
3. `info@jp-sing.com` にメールが届くことを確認

---

## 失敗時のロールバック手順

万が一問題が発生した場合:

1. **コード:** `src/config/seo.ts` の siteUrl を `'https://hd.jp-sing.com'` に戻してデプロイ
2. **Vercel:** Domains設定で `hd.jp-sing.com` の Edit → Production に戻す
3. **Vercel:** `jp-sing.com` の Edit → Redirect to `hd.jp-sing.com`（308）に変更
4. **GSC:** 旧プロパティ `hd.jp-sing.com` はそのまま残っているので影響なし

---

## DNS参考情報（お名前.com Navi 2026-03-21時点）

### 管理画面が2つある問題

お名前.comには **Navi** と **コントロールパネル（レンタルサーバー）** の2つの管理画面があり、それぞれに異なるDNSレコードが表示される。**NSレコードが `dnsv.jp` を向いているため Navi側のレコードが有効**。コントロールパネルの「初期レコード」は使われていない。

### メール関連レコード（変更なし）

| TYPE | ホスト名 | VALUE | 用途 |
|------|---------|-------|------|
| MX | jp-sing.com | smtp.google.com（優先度1） | Google Workspaceメール受信 |
| MX | send.jp-sing.com | feedback-smtp...amazonses.com（優先度10） | Amazon SES送信 |
| TXT | google._domainkey.jp-sing.com | DKIM鍵 | Googleメール認証 |
| TXT | resend._domainkey.jp-sing.com | DKIM鍵 | Resendメール認証 |
| TXT | send.jp-sing.com | v=spf1 include:amazonses.com | SES送信元認証 |
| TXT | _dmarc.jp-sing.com | v=DMARC1; p=none | メール詐称防止 |

### GSC認証用に追加したレコード

| TYPE | ホスト名 | VALUE | 用途 |
|------|---------|-------|------|
| TXT | jp-sing.com | google-site-verification=zndprkZY_BAy... | GSC所有権確認（jp-sing.com用） |
| TXT | jp-sing.com | google-site-verification=B5vFjRwYWDVi... | GSC所有権確認（既存・別アカウント用） |
