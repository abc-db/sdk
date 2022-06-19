export interface GetResponse {
    key: string;
    data: object;
}
export declare const Get: (apiKey: string, key: string) => Promise<GetResponse>;
