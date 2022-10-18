import axios, { AxiosResponse, AxiosError } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);
export default axiosInstance;
