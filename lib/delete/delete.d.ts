export interface DeleteResponse {
    deleted_key: string;
}
export declare const Delete: (apiKey: string, key: string) => Promise<DeleteResponse>;
