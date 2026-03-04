# Template Monorepo

Minimal Bun monorepo with a shared core library, a web UI, and an HTTP API.

## Quickstart
- Install deps: `bun install`
- Run API + web: `bun dev`
- Typecheck: `bun typecheck`

# Structure

## Root
- `package.json` - workspace root config, workspaces (`core`, `web`, `api`), and scripts (`dev`, `start`, `typecheck`, `ship`)
- `tsconfig.json` - shared TypeScript config used by all workspaces
- `bun.lock` - Bun lockfile for reproducible installs
- `bunfig.toml` - Bun runtime configuration

## Core workspace (`core/`)
- `core/package.json` - package metadata and entrypoint (`main.ts`)
- `core/tsconfig.json` - extends root config and scopes core compilation
- `core/main.ts` - public exports for shared core code
- `core/api/Api.ts` - shared API helpers/types for consumers
- `core/util/AppUtil.ts` - shared utility helpers

## API workspace (`api/`)
- `api/package.json` - API scripts (`dev`, `prod`) and workspace deps
- `api/main.ts` - API package entrypoint
- `api/src/Api.ts` - Bun HTTP server that exposes `/api` on port 5001

## Web workspace (`web/`)
- `web/package.json` - frontend scripts (`dev`, `build`, `dev-compile`, `dev-serve`)
- `web/main.ts` - web package entrypoint
- `web/src/index.tsx` - React frontend source entrypoint
- `web/res/index.html` - static HTML shell
- `web/res/styles.css` - base frontend styles
- `web/res/index.js` - browser bundle output from Bun build

## Generated static site (`docs/`)
- `docs/index.html`, `docs/styles.css`, `docs/index.js`, `docs/app.js` - built files published by `bun run ship`

## Extra
- `readme.md` - project overview and quickstart
- `AGENTS.md` - local coding rules for contributors
- `LICENSE` - license metadata
- `screenshot.png` - UI snapshot for docs
- `.gitignore` - ignored git files
