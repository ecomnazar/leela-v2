import { STORAGE } from "../constants/storage";
import { CustomAsyncStorage } from "./customAsyncStorage";

export const getAccessToken = () => {
  const token = CustomAsyncStorage.getItem(STORAGE.ACCESS_TOKEN);
  return token;
};

export const removeAccessToken = () => {
  CustomAsyncStorage.removeItem(STORAGE.ACCESS_TOKEN);
};

export const getRefreshToken = () => {
  const token = CustomAsyncStorage.getItem(STORAGE.REFRESH_TOKEN);
  return token;
};
