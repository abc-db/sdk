import APIClient from './../apiclient';

export interface ListResponse {
  records: DataRecord[];
}

export interface DataRecord {
  key: string;
  data: string;
}

export const List = async (
  apiClient: APIClient,
  prefix: string = '',
): Promise<ListResponse> => {
  const [res, err] = await apiClient.handle(
    apiClient.private.get<ListResponse>(`/api/list`, {params: {prefix}}),
  );
  if (err) {
    if (err.status === 401) {
      throw new Error(
        'Failed to perform List operation due to authentication please check your API key',
      );
    }
    throw new Error(
      `Failed to perform List operation with code: ${err.status}`,
    );
  }

  return res!.data;
};
