export interface BatchDeleteParams {
  prefix: string;
}

export interface BatchDeleteResponse {
  deleted_keys: string[];
}

export const BatchDelete = async (
  apiKey: string,
  params: BatchDeleteParams,
): Promise<BatchDeleteResponse> => {
  throw new Error('not implemented yet');
};
