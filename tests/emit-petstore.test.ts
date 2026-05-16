import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { emitNextJsAppRouter, routePathToAppRouterFile } from "../src/index.js";

describe("emit Next.js App Router", () => {
  it("maps paths to app router files", () => {
    expect(routePathToAppRouterFile("/pets", "GET")).toBe("app/pets/route.ts");
    expect(routePathToAppRouterFile("/pets/{id}", "GET")).toBe("app/pets/{id}/route.ts");
  });

  it("emits stub handlers for petstore IR fixture", () => {
    const ir = JSON.parse(
      readFileSync(
        join(import.meta.dirname, "..", "fixtures", "ir-v0", "petstore-mini.json"),
        "utf8",
      ),
    );
    const out = emitNextJsAppRouter(ir);
    expect(out.skipped.length).toBe(0);
    expect(out.files.length).toBe(2);
    const pets = out.files.find((f) => f.relativePath === "app/pets/route.ts");
    expect(pets?.contents).toContain("export async function GET");
    expect(pets?.contents).toContain("export async function POST");
    expect(pets?.contents).toContain('route: "/pets"');
  });
});
