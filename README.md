# コミットメッセージに絵文字が付くヤツ

毎回コピペでするのに面倒だったため作りました。
個人用ですが、大きな修正はしないと思うのでどなたでも使っても大丈夫です。

## 導入の仕方

husky とか simple-git-hooks などの git hooks が必要です。
ここでは simple-git-hooks を例に上げます。

### パッケージのインストール

```bash
npm i -D syakoo/emoji-prefix-commit
# or
npm i -D git+https://github.com/syakoo/emoji-prefix-commit
# yarn だと後者のように直接指定しないといけないらしい
```

```bash
npm i -D simple-git-hooks
```

### package.json に hook を追加

```json
{
  // ...
  "simple-git-hooks": {
    "commit-msg": "npx emoji-prefix-commit"
  }
}
```

### git hooks に反映

```bash
npx simple-git-hooks
```