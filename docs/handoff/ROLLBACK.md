# 戻し方（ロールバック手順書）

不具合が出たときに、サイトを以前の状態へ戻すための手順。
**急ぎのときは「方法1」、原因の変更だけ取り消したいときは「方法2」** を使う。

---

## 戻し先の一覧（Gitタグ）

| タグ | コミット | 状態 |
|------|---------|------|
| `backup/2026-10-06-before-seo` | `1a42f63` | SEO/LLMO強化の **作業前**（/projectリニューアル完了時点） |
| `backup/2026-10-06-seo-step1` | `d0a55c7` | ステップ1完了：個別ページのcanonical修正・構造化データ・sitemap・llms.txt/ai.txt・Bing認証対応 |
| `backup/2026-10-06-seo-step2` | `bd655c3` | ステップ2完了：カツヤクFAQPage構造化データ・ガイド記事「あわせて読みたい」 |

タグはGitHubにもプッシュ済み（`git tag -l "backup/*"` で一覧表示）。

---

## 方法1：Vercelで即時に戻す（最速・コード操作なし）

表示が崩れた、ページが開かない等、**今すぐ直したいとき**。1〜2分で戻る。

1. https://vercel.com にログイン → SingHD プロジェクトを開く
2. 上部メニュー「Deployments」を開く
3. 戻したい時点のデプロイを探す（コミットメッセージで判別）
   - 今回の変更をすべて取り消す → 「docs: /projectページリニューアル完了をHANDOFF.mdに反映」
   - ステップ2だけ取り消す → 「fix: SEO/LLMO強化 — 個別ページのcanonical修正・構造化データ追加」
4. 右端の「…」メニュー →「**Instant Rollback**」（または「Promote to Production」）を押す

注意：これは本番の表示を戻すだけで、GitHubのコードは新しいまま。
落ち着いたら方法2でコードも戻すこと（戻さないと、次のプッシュで不具合版が再び公開される）。

---

## 方法2：Gitで変更を取り消す（履歴を残したまま戻す）

`git revert` は「取り消しのコミット」を新しく作る方法。履歴が消えないので安全。
プッシュするとVercelが自動で再デプロイする。

### ステップ2（FAQ・関連記事）だけ取り消す

```bash
git revert bd655c3
git push
```

### ステップ1・2の両方（今回の作業すべて）を取り消す

```bash
git revert bd655c3 d0a55c7
git push
```

### 取り消しをさらに取り消す（やっぱり戻したい場合）

`git log` で revert コミットのIDを確認し、それを revert する。

```bash
git log --oneline -5
git revert <revertコミットのID>
git push
```

---

## 今回の変更で影響する範囲（不具合の切り分け用）

| 症状 | 関係する変更 | 該当ファイル |
|------|------------|------------|
| ミライクのインタビューページが開かない・404 | インタビューを静的生成に変更 | `src/app/miraiku/interview/[slug]/layout.tsx` |
| サポートメンバーのページが開かない | メタデータ・構造化データ追加 | `src/app/recruit/stories/support-*/page.tsx`, `src/lib/support-member-seo.ts` |
| 挑戦者ストーリー（飯田・屋宜・清水）が開かない | 構造化データ追加 | `src/app/recruit/stories/{iida,yagi,shimishun}/layout.tsx` |
| カツヤクのFAQが表示されない | FAQデータを別ファイルへ移動 | `src/data/katsuyaku-faqs.ts`, `src/components/katsuyaku/FaqSection.tsx` |
| ガイド記事の下部レイアウトが崩れる | 「あわせて読みたい」追加 | `src/app/recruit/guide/[slug]/GuideArticleContent.tsx` |
| sitemap.xml がエラー | sitemapにニュース・サポートメンバー追加 | `src/app/sitemap.ts` |
| 検索結果のタイトル・説明文がおかしい | ページ別メタデータ | 上記の各 layout / page |

---

## 今後の作業でも同じようにする

大きな変更を本番に出す前に、作業前の地点へタグを付けておく。

```bash
git tag -a backup/YYYY-MM-DD-before-作業名 -m "作業内容の説明"
git push origin backup/YYYY-MM-DD-before-作業名
```
