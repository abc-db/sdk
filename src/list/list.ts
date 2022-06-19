export interface ListParams {
  prefix?: string;
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
  prefix: string = '',
): Promise<ListResponse> => {
  const response = await fetch(
    `https://api.abcdb.dev/api/list?prefix=${prefix}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-ABCDB-TOKEN': apiKey,
      },
    },
  );

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(
        'Failed to perform List operation due to authentication please check your API key',
      );
    }

    throw new Error(
      `Failed to perform List operation with code: ${response.status}`,
    );
  }

  const data = await response.json();
  return data;
};
