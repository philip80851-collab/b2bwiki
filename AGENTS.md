# Repository Guidelines

## Project Structure & Module Organization

The deployable site lives in `work/helloworld-vitepress/`; run project commands from that directory. Content pages are stored in `docs/`, with the home page at `docs/index.md`. VitePress configuration is in `docs/.vitepress/config.ts`. Generated output, caches, and installed dependencies are excluded through `.gitignore`; do not commit `node_modules/`, `docs/.vitepress/cache/`, or `docs/.vitepress/dist/`. The repository-level `LICENSE` applies to the whole project.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependency versions recorded in `package-lock.json`.
- `npm run docs:dev` starts the local VitePress development server with hot reload.
- `npm run docs:build` creates the production site in `docs/.vitepress/dist/`.
- `npm run docs:preview` serves the production build locally for final review.

Use Node.js 20 or newer. Before submitting changes, run `npm run docs:build`; Cloudflare Pages uses the same build path after pushes to `main`.

## Coding Style & Naming Conventions

Use UTF-8 files and preserve the existing concise style. TypeScript configuration uses two-space indentation, single quotes, and no semicolons. Name Markdown files with lowercase, descriptive names such as `getting-started.md`; use clear sentence-case headings. Keep navigation labels and page links synchronized in `docs/.vitepress/config.ts`. No formatter or linter is configured, so avoid unrelated formatting churn.

## Testing Guidelines

There is no automated test framework or coverage requirement yet. Treat a successful production build as the minimum check. For content or navigation changes, also run `npm run docs:preview` and verify the affected page, links, search, and both light and dark themes. Add automated tests only with an accompanying script in `package.json` and documented run instructions.

## Commit & Pull Request Guidelines

Follow the existing short, imperative commit style, for example `Add deployment guide` or `Update navigation`. Keep each commit focused. Pull requests should explain the user-visible change, list validation commands, link relevant issues, and include screenshots for visual updates. Confirm generated files and dependencies are not staged before requesting review.

## Security & Configuration Tips

Never commit API tokens, Cloudflare credentials, or local environment files. Store deployment secrets in the hosting provider's environment settings, and document only variable names and expected behavior.
