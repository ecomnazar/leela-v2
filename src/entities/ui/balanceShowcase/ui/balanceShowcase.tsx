import { Coin } from "@/shared/ui/Coin";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import CoinLightIcon from "assets/icons/coinLight.svg";

export const BalanceShowcase = () => {
  return (
    <Flex className="gap-x-1 pl-1 pr-2.5 h-[30px] rounded-full relative overflow-hidden shadow-md">
      {/* <Coin /> */}
      <View className="w-[22px] h-[22px] relative bg-textPrimary rounded-full">
        <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <CoinLightIcon width={20} height={20} />
        </View>
      </View>
      {/* <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: "#61616D",
          borderRadius: 999,
          position: 're'
        }}
      ></View> */}
      <CustomText weight="bold" size={13} color="white">
        2,250
      </CustomText>
      <LinearGradient
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
        colors={["#A3A7B3", "#5E5E6B"]}
      />
    </Flex>
  );
};
