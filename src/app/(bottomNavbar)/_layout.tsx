import React from "react";
import { Tabs } from "expo-router";
import { BottomNavbar } from "@/widgets/bottomNavbar/ui/BottomNavbar";
import { MainPageProvider } from "@/shared/providers/mainPageProvider";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getMeApi } from "@/entities/user/model/userThunk";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Asset } from "expo-asset";

const BottomNavbarLayout = () => {
  const dispatch = useAppDispatch();

  const { isModalOpen } = useAppSelector((state) => state.story);

  React.useEffect(() => {
    dispatch(getMeApi());
  }, []);

  React.useEffect(() => {
    const loadVideo = async () => {
      const videoAsset = Asset.fromURI(
        "https://nonames-front.kalasov.com/assets/assets/videos/second.6e399a76b13e1888c5392d3ce1fba600.mov"
      );

      console.log("loading");
      await videoAsset.downloadAsync();
      console.log("success");
    };
    loadVideo();
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
