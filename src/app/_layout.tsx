import React from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "@/shared/global.css";
import { ThemeProvider } from "@/shared/theme/themeProvider";
import { Platform } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: Platform.OS === "ios" ? "fade" : "none",
            presentation: "transparentModal",
          }}
        >
          <Stack.Screen name="(bottomNavbar)" />
          <Stack.Screen name="calendar" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
