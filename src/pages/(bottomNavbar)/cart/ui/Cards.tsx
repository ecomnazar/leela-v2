import React from "react";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Text, View } from "react-native";
import ChevronIcon from "assets/icons/chevron.svg";
import { COLORS } from "@/shared/constants/colors";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <>
      <Container className="mt-6">
        <View className="gap-y-2.5">
          <Flex justify="between">
            <Text className="text-grayPrimary text-[12.8px] font-semibold">
              12567 обсуждений
            </Text>
            <Flex className="gap-x-1.5">
              <ChevronIcon
                width={12}
                height={12}
                fill={COLORS.yellowPrimary}
                className="-rotate-90 translate-y-[1px]"
                style={{
                  transform: [{ rotate: "-90deg" }, { translateY: -1 }],
                }}
              />
              <Text className="text-grayPrimary text-[12.8px] font-semibold">
                сначала новые
              </Text>
            </Flex>
          </Flex>
        </View>
        <View className="h-[1.5px] w-full bg-[#D2D4D5] mt-4 mb-3" />
        <View className="gap-y-2">
          {Array.from({ length: 10 }).map((_, index) => {
            return <Card key={index} />;
          })}
        </View>
      </Container>
    </>
  );
};
