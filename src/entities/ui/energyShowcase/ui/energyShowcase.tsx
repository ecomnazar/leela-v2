import { BatteryIcon } from "@/shared/ui/BatteryIcon";
import { Flex } from "@/shared/ui/Flex";
import React from "react";
import { Text } from "react-native";

export const EnergyShowcase = () => {
  return (
    <Flex className="gap-x-0.5">
      <BatteryIcon />
      <Text className="text-textPrimary dark:text-white font-bold text-md">
        50%
      </Text>
    </Flex>
  );
};
