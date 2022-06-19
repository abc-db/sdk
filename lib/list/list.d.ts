export interface ListParams {
    prefix?: string;
}
export interface ListResponse {
    records: DataRecord[];
}
export interface DataRecord {
    key: string;
    data: object;
}
export declare const List: (apiKey: string, prefix?: string) => Promise<ListResponse>;
