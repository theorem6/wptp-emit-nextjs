import type { IrDocumentV0 } from "@wptp/ir";
export interface EmittedFile {
    readonly relativePath: string;
    readonly contents: string;
}
export interface EmitNextJsResult {
    readonly files: ReadonlyArray<EmittedFile>;
    readonly skipped: ReadonlyArray<{
        readonly nodeId: string;
        readonly reason: string;
    }>;
}
/** Map IR route path to Next.js App Router file path (bronze stub handlers). */
export declare function routePathToAppRouterFile(path: string, method: string): string;
/** Emit one route.ts per IR request/route node (bronze). */
export declare function emitNextJsAppRouter(doc: IrDocumentV0): EmitNextJsResult;
