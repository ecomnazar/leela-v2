import { Coin } from "@/shared/ui/Coin";
import { Flex } from "@/shared/ui/Flex";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";

export const BalanceShowcase = () => {
  return (
    <Flex className="gap-x-1 pl-1 pr-2.5 h-[30px] rounded-full relative overflow-hidden shadow-md">
      <Coin />
      <Text className="font-bold text-white text-md">2,250</Text>
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
