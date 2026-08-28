# AGENTS.md

## Project Overview
- **Stack**: Next.js 16 + Tailwind CSS 4 + shadcn/ui + Prisma (SQLite) + Bun
- **Type**: Single-page marketing website for Daniel's Arctic Touch (refrigeration & AC business)
- **Structure**: 19 React components in `src/components/`, one API route (`/api/contact`)

## Commands

```bash
bun run dev          # Dev server on port 3000
bun run build        # Build (standalone output)
bun run lint         # ESLint
bun run db:push      # Push schema to SQLite
bun run db:generate  # Generate Prisma client
bun run db:migrate   # Run migrations
bun run db:reset     # Reset database
```

## Critical Constraints

- **output: "standalone"** in `next.config.ts` is required for deployment. The build script self-heals missing config, but don't remove it.
- **Database**: SQLite at `db/custom.db`. Prisma schema has one model: `ContactEnquiry`.
- **ESLint**: Almost all rules disabled (`@typescript-eslint/no-explicit-any: off`, `no-unused-vars: off`, etc.). Lint passes trivially.
- **TypeScript**: `noImplicitAny: false`. Strict mode is on but lenient.
- **reactStrictMode: false** in `next.config.ts`.

## Architecture

- `src/app/page.tsx` → renders `PageWrapper` (client component) → composes all 19 section components
- `src/lib/db.ts` → Prisma singleton (global cache in dev)
- `src/lib/utils.ts` → shadcn `cn()` helper
- `components.json` → shadcn config (New York style, Lucide icons, `@/` aliases)
- `@/*` path alias → `./src/*`

## Deployment

- Build: `.zscripts/build.sh` → standalone bundle + Caddyfile + database + optional mini-services
- Start: `.zscripts/start.sh` → runs Next.js server + Caddy on port 81 reverse proxying to 3000
- Production database: `/app/db/custom.db` (bundled in deploy artifact)
- Caddy reverse proxy: port 81 → localhost:3000

## Gotchas

- No test framework configured. `tests/` directory contains only shell scripts for build verification.
- Build script logs to `dev.log` / `server.log` (both gitignored).
- `mini-services/` directory exists but is empty (`.gitkeep` only).
- `examples/` directory is eslint-ignored.
- Images/assets are AI-generated (see worklog.md for inventory).
