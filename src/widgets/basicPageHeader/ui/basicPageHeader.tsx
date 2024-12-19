import { BalanceShowcase } from "@/entities/ui/balanceShowcase";
import { EnergyShowcase } from "@/entities/ui/energyShowcase";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";
import { Platform, Pressable, Text, View } from "react-native";
import ChevronIcon from "assets/icons/chevron.svg";
import { Link, router } from "expo-router";

interface Props {
  title?: string;
}

export const BasicPageHeader: React.FC<Props> = ({ title }) => {
  return (
    <Container
      className={clsx("absolute w-full z-[10]", {
        "top-[70px]": Platform.OS === "ios",
        "top-14": Platform.OS === "android",
        "top-6": Platform.OS === "web",
      })}
    >
      <Flex justify="between">
        {!title && <EnergyShowcase />}
        {title && (
          <Flex className="gap-x-2">
            <Pressable onPress={() => router.back()} className="pr-2">
              <ChevronIcon width={20} height={20} fill={"#E5BF85"} />
            </Pressable>
            <Text className="text-xl font-semibold text-textPrimary dark:text-white -translate-y-0.5">
              {title}
            </Text>
          </Flex>
        )}
        <BalanceShowcase />
      </Flex>
    </Container>
  );
};
