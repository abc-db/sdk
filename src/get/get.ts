import APIClient from './../apiclient';

export interface GetResponse {
  key: string;
  data: string;
}

export const Get = async (
  apiClient: APIClient,
  key: string,
): Promise<GetResponse> => {
  const [res, err] = await apiClient.handle(
    apiClient.private.get<GetResponse>(`/api/get`, {params: {key}}),
  );
  if (err) {
    if (err.status === 401) {
      throw new Error(
        'Failed to perform Get operation due to authentication please check your API key',
      );
    }
    throw new Error(`Failed to perform Get operation with code: ${err.status}`);
  }

  return res!.data;
};
