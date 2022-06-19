export interface BatchDeleteResponse {
  deleted_keys: string[];
}

export const BatchDelete = async (
  apiKey: string,
  prefix: string,
): Promise<BatchDeleteResponse> => {
  const response = await fetch('https://api.abcdb.dev/api/batchdelete', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-ABCDB-TOKEN': apiKey,
    },
    body: JSON.stringify({prefix}),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(
        'Failed to perform BatchDelete operation due to authentication please check your API key',
      );
    }

    throw new Error(
      `Failed to perform BatchDelete operation with code: ${response.status}`,
    );
  }

  const data = await response.json();
  return data;
};
