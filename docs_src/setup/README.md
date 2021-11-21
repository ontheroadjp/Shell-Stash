# Setup

## Install
Clone this repository at anywhere you want.
```bash
git clone https://github.com/ontheroadjp/Shell-Stash
```

Add line below in ``.bash_profile`` for Bash or ``.zprofile`` for zsh.
```bash
source path/to/Shell-Stash/shell-stash.fnc
```

Finish!
You will be able to use the ss command.

## Uninstall

Delete the cloned repository and the stash directory created in your home directory

```bash
rm -rf path/to/repo/Shell-Stash/
rm -rf ${HOME}/.ShellStash
```

And remove ``source path/to/Shell-Stash/shell-stash.fnc`` from .bash_profile (or .zprofile for zsh)

That's all.
