# usage

## Moving files or directories

### STEP 1

Put the file or directory you want to move into the stash.

```bash
$ ss [file/directory]
```

### STEP 2

Go to the destination directory.

### STEP 3

Extract a file or directory from the stash from the destination directory.

- Extract a single file or directory
```bash
$ ss pop [file/directory]
```

- Extracts all files and directories in the stash
```bash
$ ss all
```

## Copying files or directories

Copying is almost the same as moving.
Just add the -c option to put the file or directory into the stash.
The rest of the operations are the same as for moving.

```bash
$ ss -c [file/directory]
```


## Other Commands

### ss
List the contents of stash
```bash
$ ss
```

### ss drop

Empty the contents of stash (contents will be deleted)
```bash
$ ss drop
```
