export interface DeleteParams {
    key: string;
}
export interface DeleteResponse {
    deleted_key: string;
}
export declare const Delete: (apiKey: string, params: DeleteParams) => Promise<DeleteResponse>;
