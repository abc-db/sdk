export interface ListParams {
  prefix: string;
}

export interface ListResponse {
  records: DataRecord[];
}

export interface DataRecord {
  key: string;
  data: object;
}

export const List = async (
  apiKey: string,
  params: ListParams,
): Promise<ListResponse> => {
  throw new Error('not implemented yet');
};
