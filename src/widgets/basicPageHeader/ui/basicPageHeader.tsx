import clsx from "clsx";
import React from "react";
import { BalanceShowcase } from "@/entities/ui/balanceShowcase";
import { EnergyShowcase } from "@/entities/ui/energyShowcase";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Platform, Pressable, Text } from "react-native";
import ChevronIcon from "assets/icons/chevron.svg";
import { router } from "expo-router";
import BellIcon from "assets/icons/bell.svg";
import { CustomText } from "@/shared/ui/CustomText";

interface Props {
  title?: string;
  centerTitle?: string;
}

export const BasicPageHeader: React.FC<Props> = ({ title, centerTitle }) => {
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
        {centerTitle && (
          <CustomText
            size={17}
            weight="bold"
            style={{
              position: "absolute",
              left: "50%",
              transform: [{ translateX: "-50%" }],
            }}
          >
            {centerTitle}
          </CustomText>
        )}
        <Flex className="gap-x-2">
          <Pressable onPress={() => router.push("/notifications")}>
            <BellIcon width={23} height={25} fill={"#93989B"} />
          </Pressable>
          <BalanceShowcase />
        </Flex>
      </Flex>
    </Container>
  );
};
