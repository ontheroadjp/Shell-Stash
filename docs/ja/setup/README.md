# Setup

## インストール
このリポジトリを好きな場所にクローンします。

```bash
git clone https://github.com/ontheroadjp/Shell-Stash
```

Bashの場合は ``.bash_profile``、zshの場合は ``.zprofile`` に以下の行を追加してください。

```bash
source path/to/Shell-Stash/shell-stash.fnc
```

お疲れ様です!
これで ``ss`` コマンドが使えるようになりました。

## アンインストール

``git clone`` してきたリポジトリと、ホームディレクトリに作成された ``stash/`` ディレクトリを削除します。

```bash
rm -rf path/to/repo/Shell-Stash/
rm -rf ${HOME}/.ShellStash
```

そして、``.bash_profile``（zsh の場合は``.zprofile``）から ``path/to/Shell-Stash/shell-stash.fnc`` を削除します。

以上で完了です。

