import { BalanceShowcase } from "@/entities/ui/balanceShowcase";
import { EnergyShowcase } from "@/entities/ui/energyShowcase";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";
import { Platform } from "react-native";

export const BasicPageHeader = () => {
  return (
    <Container
      className={clsx("absolute w-full z-[10]", {
        "top-[70px]": Platform.OS === "ios",
        "top-14": Platform.OS === "android",
        "top-6": Platform.OS === "web",
      })}
    >
      <Flex justify="between">
        <EnergyShowcase />
        <BalanceShowcase />
      </Flex>
    </Container>
  );
};
