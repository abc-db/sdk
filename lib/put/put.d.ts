export interface PutParams {
    key: string;
    data: object;
}
export interface PutResponse {
    key: string;
}
export declare const Put: (apiKey: string, params: PutParams) => Promise<PutResponse>;
export declare const PutRecord: (apiKey: string, params: PutParams) => Promise<PutResponse>;
