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
- do not use `class`. instead create a `type` and corresponding function (with the same name) to return an instance of the type
- do not end lines with semicolons
- do not use `function`. instead create arrow functions

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
