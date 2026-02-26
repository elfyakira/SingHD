# 比較検証レポート

**作成日**: 2026-02-26
**対象**: 要件定義 vs 現在の実装 / 参照デザイン vs 現在の実装

---

## 1. 要件定義との差分

### メッセージング

| 要件 | 実装状況 | ファイル | 備考 |
|------|---------|---------|------|
| スローガン「夢を、ビジネスに。」 | ❌ 未実装 | seo.ts, page.tsx | 現状: 「未来を変える挑戦に、力を。」「CHALLENGE YOUR DREAM.」 |
| 英語スローガン「Turn Your Vision Into Business.」 | ❌ 未実装 | seo.ts, page.tsx | 現状: 「Shape the future.」「We support entrepreneurs...」 |
| タグライン「起業という選択を、もっと現実的に。」 | ✅ 実装済 | page.tsx | TOPヒーロー左下に表示 |
| ミッション「挑戦する人に、現実的な仕組みと環境を提供する。」 | ⚠️ 部分実装 | Footer.tsx ✅, seo.ts ❌, concept ❌ | Footerのみ正しい |
| ビジョン「起業が特別ではなく、選択肢の一つになる社会へ。」 | ⚠️ 部分実装 | Footer.tsx ✅, seo.ts ❌, concept ❌ | Footerのみ正しい |
| バリュー（Execution, Ownership, Speed, Credibility, Impact） | ❌ 未実装 | seo.ts, concept | 現状: Professional, Challenge, Enjoy, Collaboration, Innovation |

### サービス「ミライク」

| 要件 | 実装状況 | ファイル | 備考 |
|------|---------|---------|------|
| 対象: 22〜35歳、本気で挑戦する人 | ✅ 実装済 | miraiku/page.tsx | |
| 支援内容6つ | ✅ 実装済 | miraiku/page.tsx | 事業設計、収益モデル構築、法人設立支援、営業支援、マーケティング支援、資金計画サポート |
| 支援の流れ4ステップ | ✅ 実装済 | page.tsx, miraiku/page.tsx | 無料相談→事業設計・市場検証→収益モデル構築→実行・伴走支援 |
| 期間: 6ヶ月〜1年 | ✅ 実装済 | miraiku/page.tsx | FAQで言及 |
| 選ばれる理由5つ | ⚠️ 3つに絞り | page.tsx | TOPでは3つ表示（意図的） |

### グループ参画

| 要件 | 実装状況 | ファイル | 備考 |
|------|---------|---------|------|
| 参画形態（新規事業立ち上げ、経営幹部候補、事業責任者） | ✅ 実装済 | miraiku/page.tsx | |
| メリット（給与保証、資金バックアップ、営業基盤共有、経営ノウハウ提供） | ✅ 実装済 | miraiku/page.tsx | |

### 代表メッセージ・FAQ

| 要件 | 実装状況 | ファイル | 備考 |
|------|---------|---------|------|
| 代表メッセージ「起業は才能ではなく、環境で決まる...」 | ✅ 実装済 | page.tsx | |
| FAQ 5つ | ✅ 実装済 | miraiku/page.tsx | 全5問実装 |

### 無料相談

| 要件 | 実装状況 | ファイル | 備考 |
|------|---------|---------|------|
| オンライン・対面対応 | ✅ 実装済 | page.tsx, miraiku/page.tsx | |
| 60分 | ✅ 実装済 | page.tsx, miraiku/page.tsx | |
| 代表が直接対応 | ✅ 実装済 | page.tsx, miraiku/page.tsx | |
| カレンダー予約導入 | ❌ 未実装 | contact/page.tsx | 現在Googleフォーム連携 |
| ページタイトル「無料相談」 | ❌ 未実装 | contact/page.tsx | 現状: 「お問い合わせ」 |
| フォーム項目（年齢・現在の状況） | ❌ 未実装 | contact/page.tsx | 要件の項目が不足 |

---

## 2. 参照デザインとの差分

### デザイン要素

| デザイン要素 | 参照スクショ | 現状 | 対応必要 |
|-------------|-------------|------|---------|
| セクション見出し「\」マーク | TOP-2〜8, page-1 | なし | ⚠️ 検討 |
| ヒーローの文字マスク（SING） | TOP-1 | ✅ 実装済 | - |
| 白黒斜め分割 | TOP-1 | ✅ 実装済 | - |
| ゴールド斜めライン | TOP-1 | ✅ 実装済 | - |
| 下層ページヒーロー（斜めカット画像） | page-1 | ✅ 実装済 | - |
| 右下固定CTA | Footer.png | ✅ 実装済 | FixedCTA.tsx |
| Footerリンク構成 | Footer.png | シンプル版 | 意図的（ページ数が少ない） |
| ボタンスタイル（黒背景+矢印） | 各所 | ✅ 類似実装 | - |

### 参照スクショ一覧

| ファイル | 内容 | 確認結果 |
|---------|------|---------|
| TOP-1.png | ヒーロー（文字マスク、斜め分割） | ✅ 実装済 |
| TOP-2.png | SERVICEセクション（「\」マーク、画像多用） | ⚠️ 「\」マーク未実装 |
| TOP-3.png | SERVICEセクション続き | - |
| TOP-4.png | CLIENTセクション | 該当なし（ミライク向けサイトのため） |
| TOP-5.png | RECRUITセクション（両側に写真） | ⚠️ 参考程度 |
| TOP-6.png | BLOGセクション | 該当なし |
| TOP-7.png | BLOGセクション続き | 該当なし |
| TOP-8.png | DOWNLOAD/WORKSセクション | 該当なし |
| page-1.png | 下層ページヒーロー | ✅ LowPageHero実装済 |
| Header.png | ヘッダー | ✅ 実装済 |
| Footer.png | フッター（ダーク、多リンク） | ✅ 実装済（シンプル版） |
| Contact-1.png | お問い合わせフォーム | ✅ 実装済 |

---

## 3. 画像使用状況

| 参照デザインの画像箇所 | 現状 | 対応 |
|---------------------|------|------|
| TOPヒーロー（SING文字マスク） | ✅ /img/hero/1.jpg | 実装済 |
| ミライク概要セクション | ✅ /img/miraiku/miraiku-overview.jpg | 実装済 |
| 代表写真 | ✅ /img/company/ceo.jpg | 実装済 |
| miraikuヒーロー | ✅ /img/miraiku/miraiku-hero.jpg | 実装済 |
| 「選ばれる理由」セクション画像 | ❌ なし | 参照では画像あり（検討） |
| 「支援の流れ」セクション画像 | ❌ なし | 参照では画像あり（検討） |

---

## 4. 優先対応リスト

### 優先度: 高

1. **seo.ts 更新**
   - スローガン: 「未来を変える挑戦に、力を。」→「夢を、ビジネスに。」
   - 英語: 「Shape the future.」→「Turn Your Vision Into Business.」
   - タグライン: 「日本の明日を支え、バトンを繋ぐ」→「起業という選択を、もっと現実的に。」
   - ミッション: →「挑戦する人に、現実的な仕組みと環境を提供する。」
   - ビジョン: →「起業が特別ではなく、選択肢の一つになる社会へ。」
   - バリュー: →「Execution, Ownership, Speed, Credibility, Impact」
   - defaultSeo.title/description: 起業支援向けに変更

2. **TOPヒーローのスローガン修正** (`src/app/page.tsx`)
   - 「CHALLENGE YOUR DREAM.」→「夢を、ビジネスに。」
   - 「We support entrepreneurs to realize their dreams.」→「Turn Your Vision Into Business.」

3. **conceptページのMVV更新 または 削除** (`src/app/concept/page.tsx`)
   - 要件定義に合わせてMVVを更新
   - または、新ページ構成に含まれていないため削除検討

### 優先度: 中

4. **contactページタイトル変更** (`src/app/contact/page.tsx`)
   - LowPageHero: titleJa「お問い合わせ」→「無料相談」
   - セクションヘッダー等も合わせて変更

5. **セクション見出しの「\」マーク追加**
   - GIG風デザイン要素
   - 全セクション見出しの前にゴールドの斜めライン追加

### 優先度: 低（保留）

6. **contactフォーム項目変更**
   - 年齢、現在の状況（選択: 会社員/学生/フリーランス/その他）追加
   - 現在Googleフォーム連携中のため保留

7. **カレンダー予約システム導入**
   - 要検討（システム選定必要）

---

## 5. 確認済みファイル一覧

### ページ

| ファイル | 確認結果 |
|---------|---------|
| `/src/app/page.tsx` | ⚠️ スローガン要修正 |
| `/src/app/miraiku/page.tsx` | ✅ OK |
| `/src/app/company/page.tsx` | ✅ OK |
| `/src/app/project/page.tsx` | ✅ OK |
| `/src/app/contact/page.tsx` | ⚠️ タイトル要変更 |
| `/src/app/news/page.tsx` | ✅ OK |
| `/src/app/concept/page.tsx` | ❌ MVV要更新 or 削除 |

### コンポーネント

| ファイル | 確認結果 |
|---------|---------|
| `/src/components/layout/Header.tsx` | ✅ OK |
| `/src/components/layout/Footer.tsx` | ✅ OK（MVV正しい） |
| `/src/components/LowPageHero.tsx` | ✅ OK |

### 設定

| ファイル | 確認結果 |
|---------|---------|
| `/src/config/seo.ts` | ❌ 要更新（スローガン、MVV、メタデータ） |
| `/src/app/globals.css` | ✅ OK（カラー正しい） |

---

## 6. 次のアクション

このレポートを元に、優先度高の項目から順に対応を進めてください。

1. seo.ts の更新
2. page.tsx のスローガン修正
3. concept/page.tsx の対応決定（更新 or 削除）

---

*このレポートは HANDOFF から参照されます。*
