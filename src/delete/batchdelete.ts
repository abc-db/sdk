import APIClient from './../apiclient';

export interface BatchDeleteResponse {
  deleted_keys: string[];
}

export const BatchDelete = async (
  apiClient: APIClient,
  prefix: string,
): Promise<BatchDeleteResponse> => {
  const [res, err] = await apiClient.handle(
    apiClient.private.delete<BatchDeleteResponse>(`/api/batchdelete`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      params: {prefix},
    }),
  );
  if (err) {
    if (err.status === 401) {
      throw new Error(
        'Failed to perform BatchDelete operation due to authentication please check your API key',
      );
    }
    throw new Error(
      `Failed to perform BatchDelete operation with code: ${err.status}`,
    );
  }

  return res!.data;
};
