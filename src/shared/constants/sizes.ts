import { Platform } from "react-native";

export const PADDING_TOP_WITH_SCREEN_HEADER = Platform.select({
  android: 100,
  ios: 120,
  web: 70,
});

export const PADDING_TOP_WITHOUT_SCREEN_HEADER = Platform.select({
  android: 50,
  ios: 65,
  web: 20,
});
