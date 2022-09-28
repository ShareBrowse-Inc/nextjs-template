# Next.js Template

ShareBrowse, Inc.の Next.js テンプレート

[デモ](https://nextjs-template.sharebrowse.tech/)

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/ShareBrowse-Inc/nextjs-template.git)

## 技術概要

- Next.js（React フレームワーク）
- TypeScript（型導入）
- Prettier（コードの整形）
- ESLint（構文チェック）
- Storybook（コンポーネントカタログ）

## 依存関係

以下のいずれかの前提環境が必要

- Node.js v18.x
- yarn v1.x

## 開発環境構築

以下の方法で環境構築を行う

### 方法

- 以下のコマンドをターミナルで実行

```shell
git clone git@github.com:ShareBrowse-Inc/nextjs-template.git
yarn
yarn dev
```

### VSCode をエディターとして利用している方へ

開発時に推奨する拡張機能を本リポジトリにて共有しているので、インストールする（方法はこのページを[参照](https://qiita.com/Glavis/items/c3dac07e4bcf5c50db0a#%E8%A8%AD%E5%AE%9A%E3%81%97%E3%81%9F%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B)）

## ブランチ運用

[Gitflow ワークフロー](https://www.atlassian.com/ja/git/tutorials/comparing-workflows/gitflow-workflow)に準じて運用する

## コミットメッセージ

[gitmoji](https://gitmoji.dev/)に準じて絵文字 prefix をつけたコミットメッセージを書くことを推奨（[cli](https://github.com/carloscuesta/gitmoji)もある）
