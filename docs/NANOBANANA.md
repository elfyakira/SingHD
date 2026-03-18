# Nanobanana — 画像生成ツール

## 場所
- Windows: `C:\Nanobanana\`
- WSL: `/mnt/c/Nanobanana/`
- venv: `C:\Nanobanana\venv\`
- API: Google Gemini API（`.env` に `GOOGLE_API_KEY` 設定済み）

---

## WSLからの実行方法

### 絶対ルール
WSLから直接 `python.exe` や `python3.exe` を呼んではいけない。
Windows側のvenv内のpython.exeをフルパスで `cmd.exe /c` 経由で実行すること。

### 正しい実行コマンド
```bash
cmd.exe /c "cd C:\Nanobanana && C:\Nanobanana\venv\Scripts\python.exe スクリプト名.py"
```

### NG（動かない）
```bash
python.exe batch_xxx.py                    # venvではないpythonが呼ばれる
python3.exe batch_xxx.py                   # 同上
cd /mnt/c/Nanobanana && python.exe ...     # WSLパスでは動かない
```

### 重要: プロンプトの渡し方
`cmd.exe /c` 経由でプロンプト文字列を直接引数に渡すと**クォートが壊れてプロンプトが途中で切れる**。

**NG: コマンドライン直接**
```bash
cmd.exe /c "... python.exe generate_image_pro.py \"プロンプト\" --out out.png --ratio 16:9"
# → プロンプトが最初の単語だけになる
```

**OK: Pythonスクリプトファイルに書いてから実行**
```python
generate_image_pro(
    "プロンプト全文をここに書く",
    r"C:\出力先\output.png",
    "16:9",
)
```
```bash
cmd.exe /c "cd C:\Nanobanana && C:\Nanobanana\venv\Scripts\python.exe my_script.py"
```

---

## モデル一覧

| スクリプト | モデルID | 用途 |
|-----------|---------|------|
| `generate_image_pro.py` | `gemini-3-pro-image-preview` | 写真・リアル系画像（最大14枚参照、4K対応） |
| `generate_image_flash.py` | `gemini-3.1-flash-image-preview` | 図解・インフォグラフィック向き |

※ `generate_image.py`（旧版）は使わない

---

## 単体生成 API

```python
from generate_image_pro import generate_image_pro, generate_with_reference_pro

# テキストのみ
generate_image_pro("プロンプト", "output.png", "16:9")

# 参照画像あり（スタイル統一用）
generate_with_reference_pro("プロンプト", ["anchor.png"], "output.png", "16:9")

# 4K解像度
generate_image_pro("プロンプト", "output.png", "16:9", use_4k=True)
```

### 対応アスペクト比
`1:1`, `1:4`, `1:8`, `2:3`, `3:2`, `3:4`, `4:1`, `4:3`, `4:5`, `5:4`, `8:1`, `9:16`, `16:9`, `21:9`

---

## バッチスクリプトのテンプレート

```python
"""
用途説明
"""
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from generate_image_pro import generate_image_pro, generate_with_reference_pro

OUTPUT_DIR = r"C:\出力先パス"
os.makedirs(OUTPUT_DIR, exist_ok=True)

IMAGES = {
    # アンカー画像（最初に生成・他の画像のスタイル基準になる）
    "anchor-image": {
        "prompt": "プロンプト（英語ベース、日本語混じりOK）",
        "ratio": "16:9",
        "is_anchor": True,
    },
    # 以降はアンカーを参照して統一感を担保
    "second-image": {
        "prompt": "プロンプト",
        "ratio": "3:2",
    },
}

if __name__ == "__main__":
    anchor_path = None

    # 1. アンカー画像を生成
    for name, cfg in IMAGES.items():
        if cfg.get("is_anchor"):
            out = os.path.join(OUTPUT_DIR, f"{name}.png")
            if os.path.exists(out):
                print(f"SKIP {name}")
                anchor_path = out
                continue
            print(f"Generating anchor: {name}")
            generate_image_pro(cfg["prompt"], out, cfg["ratio"])
            anchor_path = out
            time.sleep(3)

    # 2. 残りをアンカー参照で生成
    for name, cfg in IMAGES.items():
        if cfg.get("is_anchor"):
            continue
        out = os.path.join(OUTPUT_DIR, f"{name}.png")
        if os.path.exists(out):
            print(f"SKIP {name}")
            continue
        print(f"Generating: {name}")
        generate_with_reference_pro(cfg["prompt"], [anchor_path], out, cfg["ratio"])
        time.sleep(3)

    print("Done!")
```

### 実行
```bash
cmd.exe /c "cd C:\Nanobanana && C:\Nanobanana\venv\Scripts\python.exe batch_xxx.py"
```

---

## 注意事項

- 既存ファイルがあればスキップする設計にすること（途中再開可能に）
- `time.sleep(3)` でレート制限回避
- プロンプトは英語ベースだが日本語混じりがベスト（英語100%だと品質落ちることがある）
- インフォグラフィック/図解は `generate_image_flash.py`（flashモデル）を使い、プロンプトは抽象度高めでAIに任せる

---

## 過去のバッチスクリプト例

| スクリプト | プロジェクト | 枚数 |
|-----------|------------|------|
| `batch_generate.py` | kosotsusaiyo | - |
| `batch_generate_saiyou.py` | saiyou-hp Phase 1 | 10枚 |
| `batch_generate_saiyou2.py` | saiyou-hp Phase 2 | 12枚 |
| `batch_generate_saiyou3.py` | saiyou-hp Section 9 | 6枚 |
