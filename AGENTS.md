# Repository Guidelines

## Project Structure & Module Organization
- `core/` holds the shared library and the Bun HTTP API (`core/api/Api.ts`) that serves `/api` on port 5001.
- `web/` contains the frontend entry (`web/app.ts`) plus static assets in `web/res/`.
- Root configs (`package.json`, `tsconfig.json`, `bun.lock`) define workspace scripts and shared TypeScript settings.
- Documentation and metadata live at the repo root (for example: `readme.md`, `LICENSE`, `screenshot.png`).

## Build, Test, and Development Commands
Run these from the repo root:
- `bun install` installs workspace dependencies.
- `bun run dev` starts the development workflow (per root `package.json`).
- `bun run start` runs the production entrypoints.
- `bun run typecheck` validates TypeScript types across workspaces.

## Coding Style & Naming Conventions
- Use 2-space indentation for TypeScript and CSS.
- Keep filenames and directories lowercase (`core/util/AppUtil.ts` is the exception; preserve existing casing when extending it).
- Prefer explicit, descriptive names for exports (for example, `createApiServer` vs. `server`).
- There is no formatter or linter configured yet; keep changes consistent with existing files.

## Testing Guidelines
- No test framework is configured yet. If you add tests, document the tool and command in this file.
- Use clear test names that describe behavior (for example, `responds_with_200_for_healthcheck`).

## Commit & Pull Request Guidelines
- There is no Git history yet, so no established commit message convention.
- Recommended format: short, imperative summaries (for example, `Add web topology render`).
- PRs should include a concise description, linked issues (if any), and screenshots for UI changes.

## Configuration & Security Notes
- Keep API routes under `/api` and avoid hardcoding secrets into source files.
- Update `bun.lock` whenever dependencies change to keep installs reproducible.
