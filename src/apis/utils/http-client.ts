import axios, { AxiosRequestConfig } from "axios";

export default class HttpClient {
  static get<R = any>(
    url: string,
    queryParams?: Record<string, string>
  ): Promise<R> {
    const params = new URLSearchParams(queryParams);
    let config: AxiosRequestConfig = {
      params,
    };
    return axios.get(url, config);
  }
}
