import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { isWindow } from "./isWindow";

export const CustomAsyncStorage = {
  getItem: (key: string): string | null => {
    // if (Platform.OS === "web") {
    return localStorage.getItem(key);
    // }
    // return AsyncStorage.getItem(key);
  },

  setItem: async (key: string, value: string): Promise<void> => {
    if (Platform.OS === "web") {
      localStorage.setItem(key, value);
      return Promise.resolve();
    } else {
      await AsyncStorage.setItem(key, value);
    }
  },

  removeItem: async (key: string): Promise<void> => {
    if (Platform.OS === "web") {
      localStorage.removeItem(key);
      return Promise.resolve();
    } else {
      await AsyncStorage.removeItem(key);
    }
  },

  clear: async (): Promise<void> => {
    if (Platform.OS === "web") {
      localStorage.clear();
      return Promise.resolve();
    } else {
      await AsyncStorage.clear();
    }
  },
};
