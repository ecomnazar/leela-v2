import { AxiosInstance } from "axios";
import { instance } from "./instance";

type Method = "get" | "put" | "post" | "delete";

interface ApiCallOptions {
  data?: any;
  headers?: Record<string, string>;
}

const apiCallMaker = (axiosInstance: AxiosInstance) => {
  const apiCall = async (
    method: Method,
    url: string,
    options?: ApiCallOptions
  ) => {
    const { data, headers } = options || {};
    try {
      const response = await axiosInstance[method](url, data, { headers });
      return response.data;
    } catch (error: unknown) {
      // const knownError = error as IError;
      // const { message, statusCode } = knownError.response.data;
      // throw { message, status: statusCode };
      throw new Error();
    }
  };

  return apiCall;
};

export const apiCall = apiCallMaker(instance);
