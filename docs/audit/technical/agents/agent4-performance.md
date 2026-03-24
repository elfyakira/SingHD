# Technical Audit — Agent 4: パフォーマンス監査ガイド

## 調査対象
- next.config の最適化設定（画像、圧縮、バンドル）
- Image コンポーネントの使用状況（fill + sizes）
- フォント最適化
- サードパーティスクリプトの読み込み方法
- RSC / Client コンポーネントの比率と妥当性

## next.config 確認項目
- 画像最適化（formats, cache TTL, remotePatterns）
- 圧縮設定（compress）
- poweredByHeader
- バンドル最適化

## Image fill+sizes 監査（誤検知防止・最重要）

### 禁止事項
- 一部のファイルだけを調べて「合計N箇所」と概算すること
- 単一行 grep だけで fill+sizes の有無を判定すること

### JSX multiline props の注意
JSXでは `fill` と `sizes` が別の行に書かれることが多い:
```tsx
<Image
  src={...}
  fill                    // この行だけ見ると sizes がないように見える
  sizes="(max-width: 768px) 100vw, 33vw"   // 次の行にある
/>
```

### 必須手順 — 全数調査

#### Phase 1: fill を含むファイルの特定
`grep -rn "fill" src/ --include="*.tsx"` から:
- SVG の `fill` 属性を除外
- CSS の `fill` プロパティを除外
- next/image の Image コンポーネントで `fill` を使っているファイルのみ抽出

#### Phase 2: 各ファイルの sizes 有無確認
各ファイルについて:
1. `fill` がある Image コンポーネントの前後5行を READ する
2. 同じ Image コンポーネント内に `sizes` prop があるか確認
3. ない場合は「fill without sizes」としてリストに追加

#### Phase 3: .map() 内の処理
コード箇所数とレンダー数の両方を報告する。

## RSC / Client コンポーネント比率監査

### 手順
1. `grep -rl "'use client'" src/app/` で Client コンポーネントの全数を取得
2. `glob` で `src/app/**/*.tsx` の全ファイル数を取得
3. Client 比率 = Client 数 / 全 tsx 数

### 不要な 'use client' の検出
各 Client コンポーネントについて:
1. `useState`, `useEffect`, `useRef` 等のhook import有無
2. `onClick`, `onChange` 等のイベントハンドラ有無
3. `window`, `document`, `localStorage` 等のブラウザAPI使用有無
4. 上記がいずれもない場合 → **不要な 'use client'** として報告

### 評価基準
- Client 比率 5% 以下: 良好
- Client 比率 5-15%: 確認推奨
- Client 比率 15% 以上: 調査必須

## フォント最適化チェック
- next/font の使用有無
- display: 'swap' の設定
- preload 設定

## サードパーティスクリプト
- Google Analytics の読み込み方法
- その他のサードパーティスクリプト

## raw `<img>` の使用
- next/image の代わりに `<img>` を使っている箇所を報告
- OG画像生成ルート内の `<img>` は Satori 用なので除外

## 出力フォーマット
- next.config 設定サマリー
- fill+sizes: 問題箇所数と詳細リスト
- RSC/Client 比率: Client X件 / 全体Y件 (Z%)
- フォント最適化状況
- スクリプト読み込み状況
- raw `<img>` 使用箇所
- 改善推奨事項（ファイルパス・行番号付き）
- スコア: X/10
