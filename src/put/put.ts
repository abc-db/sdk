export interface PutParams {
  key?: string;
  data: object;
}

export interface PutResponse {
  key: string;
}

export const Put = async (
  apiKey: string,
  params: PutParams,
): Promise<PutResponse> => {
  const response = await fetch('https://api.abcdb.dev/api/put', {
    method: 'PUT',
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
        'Failed to perform Put operation due to authentication please check your API key',
      );
    }

    throw new Error(
      `Failed to perform Put operation with code: ${response.status}`,
    );
  }

  const data = await response.json();
  return data;
};
