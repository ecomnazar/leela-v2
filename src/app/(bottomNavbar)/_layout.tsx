import React from "react";
import { Tabs } from "expo-router";
import { BottomNavbar } from "@/widgets/bottomNavbar/ui/BottomNavbar";
import { View } from "react-native";

const BottomNavbarLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <BottomNavbar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="tasks" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default BottomNavbarLayout;
