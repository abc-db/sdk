export interface BatchDeleteResponse {
    deleted_keys: string[];
}
export declare const BatchDelete: (apiKey: string, prefix: string) => Promise<BatchDeleteResponse>;
