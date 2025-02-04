import { STORAGE } from "../constants/storage";
import { CustomAsyncStorage } from "./customAsyncStorage";

export const getAccessToken = () => {
  const token = CustomAsyncStorage.getItem(STORAGE.ACCESS_TOKEN);
  return token;
};
