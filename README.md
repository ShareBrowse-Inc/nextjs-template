# Next.js Template

Next.js Template from ShareBrowse, Inc.

[DEMO](https://nextjs-template.sharebrowse.tech/)

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/ShareBrowse-Inc/nextjs-template.git)

## Technology

- [Next.js](https://nextjs.org/)
- TypeScript
- Prettier
- ESLint
- Storybook

## Preparation

The following prerequisite environment is required.

- Node.js v18.x
- yarn v1.x

or

docker v20.x

## Development Environment

After preparation, build the environment.

### Method 1

- Execute the following commands in a terminal.

```shell
git clone git@github.com:ShareBrowse-Inc/nextjs-template.git
yarn
yarn dev
```

### Method 2

- Execute the following commands in a terminal.

```shell
git clone git@github.com:ShareBrowse-Inc/nextjs-template.git
yarn docker:build
yarn docker:run
```

### For those who use VSCode as an editor

Recommended extensions are shared in this repository for installation during development.（[reference](https://qiita.com/Glavis/items/c3dac07e4bcf5c50db0a#%E8%A8%AD%E5%AE%9A%E3%81%97%E3%81%9F%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B)）

## Branch Management

Operate according to [Gitflow Workflow](https://www.atlassian.com/ja/git/tutorials/comparing-workflows/gitflow-workflow)

## Commit Message

Recommend writing commit messages with emoji prefixes according to [gitmoji](https://gitmoji.dev/) (also available in [cli](https://github.com/carloscuesta/gitmoji))
