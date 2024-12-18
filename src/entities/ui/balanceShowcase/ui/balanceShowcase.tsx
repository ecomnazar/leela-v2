import { Coin } from "@/shared/ui/Coin";
import { Flex } from "@/shared/ui/Flex";
import React from "react";
import { Text } from "react-native";

export const BalanceShowcase = () => {
  return (
    <Flex className="gap-x-1 pl-1 pr-2.5 h-[28px] rounded-full relative overflow-hidden bg-[#696975]">
      <Coin />
      <Text className="font-bold text-white text-md">2,250</Text>
      {/* <LinearGradient
              className="absolute top-0 left-0 w-full h-[32px] z-[-1]"
              colors={["#9EA1AC", "#63636F"]}
            /> */}
    </Flex>
  );
};
