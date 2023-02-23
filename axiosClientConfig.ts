import axios, { AxiosInstance, RawAxiosRequestHeaders } from "axios";

const axiosClientConfig = {
  baseURL: "http://127.0.0.1:3200/api/v1",
  headers: { "Content-Type": "application/json" } as RawAxiosRequestHeaders
};

const axiosClient: AxiosInstance = axios.create(axiosClientConfig);

export default axiosClient;