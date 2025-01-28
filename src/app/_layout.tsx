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
import { ReduxProvider } from "@/shared/store/provider";
import { EventProvider } from "react-native-outside-press";
import { Telegram } from "@twa-dev/types";
import { GoogleOAuthProvider } from "@react-oauth/google";

// @ts-ignore
import wixRegular from "assets/fonts/wixMadeforDisplay/WixMadeforDisplay-Regular.ttf";
// @ts-ignore
import wixMedium from "assets/fonts/wixMadeforDisplay/WixMadeforDisplay-Medium.ttf";
// @ts-ignore
import wixSemiBold from "assets/fonts/wixMadeforDisplay/WixMadeforDisplay-SemiBold.ttf";
// @ts-ignore
import wixBold from "assets/fonts/wixMadeforDisplay/WixMadeforDisplay-Bold.ttf";
// @ts-ignore
import wixExtraBold from "assets/fonts/wixMadeforDisplay/WixMadeforDisplay-ExtraBold.ttf";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

const App = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === "ios" ? "fade" : "none",
        presentation: "transparentModal",
      }}
    >
      <Stack.Screen name="(bottomNavbar)" />
      <Stack.Screen name="calendar" />
      {/* <Stack.Screen name="chat" /> */}
      <Stack.Screen name="chat/comment/[id]" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="mainFilter" />
    </Stack>
  );
};

const RootLayoutProvider = () => {
  return (
    <GoogleOAuthProvider
      clientId={
        "1050890406153-7cb24c1nabhn2grvr3gsms4avm72s5ik.apps.googleusercontent.com"
      }
    >
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ReduxProvider>
            <BottomSheetModalProvider>
              <EventProvider>
                <PortalProvider>
                  <StatusBar style="inverted" />
                  <App />
                </PortalProvider>
              </EventProvider>
            </BottomSheetModalProvider>
          </ReduxProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default function RootLayout() {
  const [loaded] = useFonts({
    "wix-regular": wixRegular,
    "wix-medium": wixMedium,
    "wix-semi-bold": wixSemiBold,
    "wix-bold": wixBold,
    "wix-extra-bold": wixExtraBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  React.useEffect(() => {
    if (Platform.OS === "web" && window?.Telegram) {
      window?.Telegram?.WebApp?.disableVerticalSwipes();
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return <RootLayoutProvider />;
}
