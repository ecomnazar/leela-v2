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
import { PortalProvider } from "@/shared/ui/Portal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <PortalProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: Platform.OS === "ios" ? "fade" : "none",
                  presentation: "transparentModal",
                }}
              >
                <Stack.Screen name="(bottomNavbar)" />
                <Stack.Screen name="calendar" />
                <Stack.Screen name="chat" />
              </Stack>
              <StatusBar style="inverted" />
            </PortalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </>
  );
}
