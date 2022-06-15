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
  throw new Error('not implemented yet');
};
