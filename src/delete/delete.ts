export interface DeleteParams {
  key: string;
}

export interface DeleteResponse {
  deleted_key: string;
}

export const Delete = async (
  apiKey: string,
  params: DeleteParams,
): Promise<DeleteResponse> => {
  const response = await fetch('https://api.abcdb.dev/api/delete', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-ABCDB-TOKEN': apiKey,
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(
        'Failed to perform Delete operation due to authentication please check your API key',
      );
    }

    throw new Error(
      `Failed to perform Delete operation with code: ${response.status}`,
    );
  }

  const data = await response.json();
  return data;
};
