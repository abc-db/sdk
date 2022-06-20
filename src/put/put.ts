import APIClient from './../apiclient';

export interface PutParams {
  key?: string;
  data: object;
}

export interface PutResponse {
  key: string;
}

export const Put = async (
  apiClient: APIClient,
  params: PutParams,
): Promise<PutResponse> => {
  const [res, err] = await apiClient.handle(
    apiClient.private.put<PutResponse>(`/api/put`, params, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }),
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
