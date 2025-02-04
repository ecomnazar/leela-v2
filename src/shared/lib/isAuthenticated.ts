import { getAccessToken } from "./getAccessToken";

export const isAuthenticated = (): boolean => {
  const token = getAccessToken();
  return !!token;
};
