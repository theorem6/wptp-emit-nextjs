export const IR_V0_SCHEMA_VERSION = "0.1.0" as const;

export interface IrDocumentV0 {
  readonly schemaVersion: typeof IR_V0_SCHEMA_VERSION;
  readonly meta: { readonly sourceApp: string; readonly importedFrom: string };
  readonly roots: ReadonlyArray<string>;
  readonly nodes: ReadonlyArray<{
    readonly id: string;
    readonly layer: string;
    readonly op: string;
    readonly attrs: Readonly<Record<string, unknown>>;
  }>;
  readonly losses: ReadonlyArray<unknown>;
}
