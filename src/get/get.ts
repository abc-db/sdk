export interface GetResponse {
  key: string;
  data: object;
}

export const Get = async (
  apiKey: string,
  key: string,
): Promise<GetResponse> => {
  const response = await fetch(`https://api.abcdb.dev/api/get?key=${key}`, {
    method: 'GET',
    headers: {
      'X-ABCDB-TOKEN': apiKey,
    },
    body: null,
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
