import APIClient from './../apiclient';

export interface DeleteResponse {
  deleted_key: string;
}

export const Delete = async (
  apiClient: APIClient,
  key: string,
): Promise<DeleteResponse> => {
  const [res, err] = await apiClient.handle(
    apiClient.private.delete<DeleteResponse>(`/api/delete`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      params: {key},
    }),
  );
  if (err) {
    if (err.status === 401) {
      throw new Error(
        'Failed to perform Delete operation due to authentication please check your API key',
      );
    }
    throw new Error(
      `Failed to perform Delete operation with code: ${err.status}`,
    );
  }

  return res!.data;
};
