# 包括監査（戦略 + 技術 + AI推薦テスト）

SingHDサイト全体の包括的なSEO/LLMO監査を実行する。
戦略監査（コンテンツ）+ 技術監査（実装）+ クロス検証 + AI推薦テストを統合。

---

## 手順

### Phase 1: 技術監査（並列5エージェント）

`docs/audit/technical/README.md` を読み、手順に従う。

各エージェントは自分のガイドファイルを直接読むこと（要約を渡さない）:

| Agent | 監査領域 | ガイド |
|-------|---------|-------|
| 1 | メタデータ | `docs/audit/technical/agents/agent1-metadata.md` |
| 2 | 構造化データ | `docs/audit/technical/agents/agent2-structured-data.md` |
| 3 | LLMO対策 | `docs/audit/technical/agents/agent3-llmo.md` |
| 4 | パフォーマンス | `docs/audit/technical/agents/agent4-performance.md` |
| 5 | セキュリティ | `docs/audit/technical/agents/agent5-security.md` |

### Phase 2: クロス検証（必須・省略禁止）

全エージェントの結果を統合する前に:

1. 「未カバー」と報告された項目のうち上位5件を実際にファイル確認
2. 数値の分母・分子の根拠を確認
3. WSL環境の誤検知を除外

### Phase 3: 戦略監査（並列4エージェント）

`docs/audit/strategy/README.md` を読み、手順に従う。

| Agent | 分析対象 | ガイド |
|-------|---------|-------|
| 1 | LLMO/AI引用コンテンツ | `docs/audit/strategy/agents/agent1-llmo-content.md` |
| 2 | SEO権威性 | `docs/audit/strategy/agents/agent2-seo-authority.md` |
| 3 | ユーザー向けコンテンツ | `docs/audit/strategy/agents/agent3-user-content.md` |
| 4 | 3トラック連動 | `docs/audit/strategy/agents/agent4-synergy.md` |

### Phase 4: 統合レポート

技術監査 + 戦略監査の結果を統合し、以下のレポートを生成:

```markdown
# SingHD 包括監査レポート

**実施日**: YYYY-MM-DD

## 技術監査サマリー

| カテゴリ | スコア | 最優先改善 |
|---------|--------|----------|

## 戦略監査サマリー

| トラック | 成長フェーズ | 次の成長ポイント |
|---------|-----------|---------------|

## 優先度付きアクションリスト

### 最優先（1週間以内）
### 推奨（1ヶ月以内）
### 中長期（3ヶ月）

## 次に書くべき記事 TOP 5
| 優先 | トラック | テーマ | 根拠 | 期待効果 |
```

### Phase 5: AI推薦テスト

WebSearchで以下の質問をAIに投げ、Singが推薦されるかテスト:

```markdown
## テスト結果

| 質問 | Singが引用/推薦されたか | 備考 |
|------|----------------------|------|
| 「20代でベンチャーに入るメリットは？」 | | |
| 「起業したいけど何から始めればいい？」 | | |
| 「自分の強みがわからない」 | | |
| 「成長できる環境で働きたい」 | | |
```

---

## 注意事項

- **読み取り専用**: コードの変更を行わない（調査・レポートのみ）
- **データ駆動**: 全ての提案にデータの根拠を付ける
- **エージェントのガイドは直接Read**: オーケストレーターがガイド内容を要約してプロンプトに含めない
- **クロス検証を省略しない**: エージェントの出力をそのまま信用しない
