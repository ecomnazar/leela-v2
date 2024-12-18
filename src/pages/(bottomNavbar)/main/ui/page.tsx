import React from "react";
import { View } from "react-native";
import { Flex } from "@/shared/ui/Flex";
import { Container } from "@/shared/ui/Container";
import { BalanceShowcase } from "@/entities/ui/balanceShowcase";
import { EnergyShowcase } from "@/entities/ui/energyShowcase";
import { BasicPageHeader } from "@/widgets/basicPageHeader";

export const MainPage = () => {
  return (
    <View className="mt-[80px]">
      <BasicPageHeader />
    </View>
  );
};
