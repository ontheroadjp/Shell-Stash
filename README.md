# Shell Stash

This script provides a temporary file / directory stash in the shell.
Files / directories can be moved in and out of this stash from any directory.

[![docs](https://github.com/ontheroadjp/Shell-Stash/actions/workflows/docs.yml/badge.svg)](https://github.com/ontheroadjp/Shell-Stash/actions/workflows/docs.yml)

## Getting Started
Clone this repository at anywhere you want.
```bash
$ git clone https://github.com/ontheroadjp/Shell-Stash
```

Add line below in ``.bash_profile`` for Bash or ``.zprofile`` for zsh.
```bash
source path/to/ShellStash/shell-stash
```

finish!

## Usage
Put files or directories in stash.
```bash
$ ss [file/directory]
```

Extract files / directories from stash
```bash
$ ss pop [file/directory] [directory where to take out]
```

List the contents of stash
```bash
$ ss
```

Empty the contents of stash (contents will be deleted)
```bash
$ ss drop
```
