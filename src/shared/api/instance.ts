import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Base URL for all requests
  headers: {
    "Content-Type": "application/json", // Default content type for all requests
  },
});
