import React from "react";
import { Tabs } from "expo-router";
import { BottomNavbar } from "@/widgets/bottomNavbar/ui/BottomNavbar";
import { MainPageProvider } from "@/shared/providers/mainPageProvider";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getMeApi } from "@/entities/user/model/userThunk";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

const BottomNavbarLayout = () => {
  const dispatch = useAppDispatch();

  const { isModalOpen } = useAppSelector((state) => state.story);

  React.useEffect(() => {
    dispatch(getMeApi());
  }, []);

  React.useEffect(() => {
    if (isModalOpen) {
      const metaTag = document.querySelector('meta[name="theme-color"]');
      if (metaTag) {
        metaTag.setAttribute("content", "#000000");
      }
    } else {
      const metaTag = document.querySelector('meta[name="theme-color"]');
      if (metaTag) {
        metaTag.setAttribute("content", "#F2F2F2");
      }
    }
  }, [isModalOpen]);

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
