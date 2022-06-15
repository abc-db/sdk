export interface GetParams {
  key: string;
}

export interface GetResponse {
  key: string;
  data: object;
}

export const Get = async (
  apiKey: string,
  params: GetParams,
): Promise<GetResponse> => {
  const response = await fetch('https://api.abcdb.dev/api/get', {
    method: 'GET',
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
        'Failed to perform Get operation due to authentication please check your API key',
      );
    }

    throw new Error(
      `Failed to perform Get operation with code: ${response.status}`,
    );
  }

  const data = await response.json();
  return data;
};
