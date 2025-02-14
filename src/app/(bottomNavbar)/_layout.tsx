import React from "react";
import { Tabs } from "expo-router";
import { BottomNavbar } from "@/widgets/bottomNavbar/ui/BottomNavbar";
import { MainPageProvider } from "@/shared/providers/mainPageProvider";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getMeApi } from "@/entities/user/model/userThunk";

const BottomNavbarLayout = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getMeApi());
  }, []);

  return (
    <MainPageProvider>
      <Tabs
        tabBar={(props) => <BottomNavbar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="plan" />
        <Tabs.Screen name="cart" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </MainPageProvider>
  );
};

export default BottomNavbarLayout;
