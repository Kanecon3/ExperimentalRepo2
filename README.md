# ExperimentalRepo2

## カスタムnpmコマンド環境

このリポジトリは、カスタムnpmコマンドを開発するための環境を提供します。

### セットアップ方法

1. リポジトリをクローンする
```bash
git clone https://github.com/Kanecon3/ExperimentalRepo2.git
cd ExperimentalRepo2
```

2. 依存関係をインストールする
```bash
npm install
```

3. ローカル環境にコマンドをリンクする
```bash
npm link
```

これにより、`custom-command`コマンドがグローバルに利用可能になります。

### コマンドの使用方法

```bash
custom-command [オプション]
```

例:
```bash
custom-command --help
custom-command --version
```

### 新しいコマンドの作成方法

1. `bin`ディレクトリに新しいコマンドファイルを作成します
2. ファイルの先頭に `#!/usr/bin/env node` を追加します
3. `package.json`の`bin`セクションに新しいコマンドを追加します
4. `chmod +x bin/新しいコマンド.js`で実行権限を付与します
5. `npm link`で再リンクします

### コマンドの公開方法

コマンドを公開する準備ができたら、以下のコマンドを実行します:

```bash
npm publish
```

公開前に`package.json`の情報（名前、バージョン、説明など）を適切に更新してください。
