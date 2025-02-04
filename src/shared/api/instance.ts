import axios from "axios";
import { getAccessToken } from "../lib/getAccessToken";

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Base URL for all requests
  headers: {
    "Content-Type": "application/json",
    "x-company-id": "df31f9f2-b890-4647-80f2-51eae1f2753d",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers["x-auth-token"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
