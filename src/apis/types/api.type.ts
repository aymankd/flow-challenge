import { AxiosResponse } from "axios";

export type ApiResponse<T> = {
  data: T;
  message: string;
  statusCode: number;
};

export type CustomAxiosResponse<T> = AxiosResponse<ApiResponse<T>>;
