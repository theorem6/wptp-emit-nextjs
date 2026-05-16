import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { emitNextJsAppRouter } from "../src/index.js";

/**
 * Composed path (matrix): OpenAPI -> IR v0 (see wptp-adapter-openapi) -> Next.js emit.
 * This test uses committed IR; full cross-repo wiring is documented in wptp-matrix.
 */
describe("composed path openapi -> ir -> nextjs", () => {
  it("emits Next.js files from openapi-shaped IR", () => {
    const ir = JSON.parse(
      readFileSync(join(import.meta.dirname, "..", "fixtures", "ir-v0", "petstore-mini.json"), "utf8"),
    );
    const { files } = emitNextJsAppRouter(ir);
    expect(files.map((f) => f.relativePath).sort()).toEqual([
      "app/pets/route.ts",
      "app/pets/{id}/route.ts",
    ].sort());
  });
});
