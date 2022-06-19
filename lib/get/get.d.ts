export interface GetParams {
    key: string;
}
export interface GetResponse {
    key: string;
    data: object;
}
export declare const Get: (apiKey: string, params: GetParams) => Promise<GetResponse>;
