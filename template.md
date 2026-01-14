# repo template (minimum viable layout)

This is the smallest file set needed to build a bun monorepo with a core library, a web UI, a REST API, and a Websocket API.

## Root
- `package.json` - Workspace root, Bun scripts (`dev`, `start`, `typecheck`) and toolchain deps
- `tsconfig.json` - Shared TypeScript config for both workspaces
- `bun.lock` - Bun lockfile (required to reproduce installs reliably)

## Core workspace (`core/`)
- `core/package.json` - Workspace package metadata and entrypoint (`main.ts`)
- `core/tsconfig.json` - Extends root config and scopes compilation to core sources
- `core/main.ts` - Public exports for the core library
- `core/api/Api.ts` - Bun HTTP server that exposes `/api` on port 5001
- `core/util/AppUtil.ts` - core helpers

## Web workspace (`web/`)
- `web/package.json` - Frontend build/serve scripts
- `web/app.ts` - Frontend entrypoint that fetches the API and renders the topology UI
- `web/res/index.html` - Static HTML shell for the UI
- `web/res/styles.css` - Base styling for the UI

## extra
- `readme.md` - Project overview and dev instructions
- `AGENTS.md` - Local coding rules for contributors
- `LICENSE` - License metadata
- `screenshot.png` - UI snapshot for docs
- `.gitignore` - ignored git files
