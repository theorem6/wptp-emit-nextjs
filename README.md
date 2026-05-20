# wptp-emit-nextjs

## Purpose

**D4 emit family:** turn [WPTP IR v0](https://github.com/theorem6/wptp-ir) **request/route** nodes into **Next.js App Router** `route.ts` stubs. **Bronze** — structural handlers with contract verification via [wptp-matrix](https://github.com/theorem6/wptp-matrix) (`openapi-ir-nextjs`, `har-ir-nextjs`); Chrysalis CI **`wptp-d4-harness`**. **Silver** — OpenAPI/HAR → IR → Chrysalis WebIR bundle → this package (`openapi-ir-nextjs-chrysalis`, `har-ir-nextjs-chrysalis`); CI **`wptp-silver-nextjs-harness`** on [AgenticOp-io/chrysalis](https://github.com/AgenticOp-io/chrysalis).

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

OpenAPI → IR (`wptp-adapter-openapi`) → Next.js (`this repo`). **Silver:** same adapters → `@wptp/ir` → Chrysalis `export-webir-bundle` → `emit-webir-bundle-nextjs.mjs` → this repo. Paths in [wptp-matrix `data/composer-paths.v0.json`](https://github.com/theorem6/wptp-matrix).
