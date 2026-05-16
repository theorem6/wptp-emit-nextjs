# wptp-emit-nextjs

## Purpose

**D4 emit family (starter):** turn [WPTP IR v0](https://github.com/theorem6/wptp-ir) **request/route** nodes into **Next.js App Router** `route.ts` stubs. **Bronze** — structural handlers only; verify harness is future work.

## Public API

- `emitNextJsAppRouter(irDocument)` → `{ files, skipped }`
- `routePathToAppRouterFile(path, method)` — path mapping helper

## Invariants

- Only emits nodes with `layer: request` and `op: route`.
- Multiple methods on the same path append to one `route.ts`.
- Generated files include provenance comments; handlers return JSON stubs.

## Non-goals

- Server Components, layouts, middleware, or auth in v0.
- Parity with Chrysalis `emit-hono` behavior.

## Quick start

```bash
npm install && npm test
```

## Composed path

OpenAPI → IR (`wptp-adapter-openapi`) → Next.js (`this repo`). Documented in [wptp-matrix `data/composer-paths.v0.json`](https://github.com/theorem6/wptp-matrix).
