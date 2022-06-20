import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

class APIClient {
  baseUrl: string;
  token: string;
  private: AxiosInstance;

  constructor(token: string, baseUrlOverride?: string) {
    this.token = token;
    this.baseUrl = 'https://api.abcdb.dev';
    if (baseUrlOverride) {
      this.baseUrl = baseUrlOverride;
    }

    // Auth API client
    this.private = axios.create({
      baseURL: this.baseUrl,
      withCredentials: false,
      headers: {
        'X-ABCDB-TOKEN': this.token,
      },
    });
  }

  handle = <T>(
    promise: Promise<AxiosResponse<T>>,
  ): Promise<
    [AxiosResponse<T> | undefined, AxiosResponse<any> | undefined]
  > => {
    return promise
      .then(
        (data: AxiosResponse<T>) =>
          [data, undefined] as [AxiosResponse<T>, undefined],
      )
      .catch(
        (error: AxiosError<AxiosResponse<any>>) =>
          [undefined, error.response] as [undefined, AxiosResponse<any>],
      );
  };
}

export default APIClient;
