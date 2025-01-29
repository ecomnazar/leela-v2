import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Base URL for all requests
  headers: {
    "Content-Type": "application/json", // Default content type for all requests
    "x-company-id": "df31f9f2-b890-4647-80f2-51eae1f2753d",
    "test-role": "master",
  },
});
