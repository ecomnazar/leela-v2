import { BatteryIcon } from "@/shared/ui/BatteryIcon";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import React from "react";

export const EnergyShowcase = () => {
  return (
    <Flex className="gap-x-0.5">
      <BatteryIcon />
      <CustomText size={13} weight="bold">
        50%
      </CustomText>
    </Flex>
  );
};
