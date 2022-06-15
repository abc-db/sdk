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
  throw new Error('not implemented yet');
};
