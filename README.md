# Issue #163 reproduction

To reproduce:

1. `pnpm i`
2. `pnpm dev`
3. Open browser, see `I'm static` in the console (plugin worked)
4. `pnpm build`
5. Observe error similar to:

```
error during build:
[vite-plugin-static-copy:build] EROFS: read-only file system, copyfile '/Users/ianvs/code/experiments/rolldown-vite-static-copy/static-file.js' -> '/static-file.js'
Error: EROFS: read-only file system, copyfile '/Users/ianvs/code/experiments/rolldown-vite-static-copy/static-file.js' -> '/static-file.js'
```
