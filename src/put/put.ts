export interface PutParams {
  key: string;
  data: object;
}

export interface PutResponse {
  key: string;
}

export const Put = async (
  apiKey: string,
  params: PutParams,
): Promise<PutResponse> => {
  throw new Error('not implemented yet');
};
