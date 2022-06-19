export interface BatchDeleteParams {
    prefix: string;
}
export interface BatchDeleteResponse {
    deleted_keys: string[];
}
export declare const BatchDelete: (apiKey: string, params: BatchDeleteParams) => Promise<BatchDeleteResponse>;
