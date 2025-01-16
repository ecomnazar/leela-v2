import React from "react";
import { Container } from "@/shared/ui/Container";
import { Text, View } from "react-native";
import { Flex } from "@/shared/ui/Flex";
import ChevronIcon from "assets/icons/chevron.svg";
import { COLORS } from "@/shared/constants/colors";
import { Image } from "expo-image";
import images from "assets/images";
import { Icon } from "@/shared/ui/Icon";
import { Card } from "./Card";

const cards = [
  {
    name: "Алена",
    image: images.stories1,
  },
  {
    name: "Евгений",
    image: images.stories2,
  },
  {
    name: "Анжелика",
    image: images.stories3,
  },
  {
    name: "Юрий",
    image: images.stories4,
  },
  {
    name: "Оксана",
    image: images.stories5,
  },
];
export const CardsSection = () => {
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
                fill={COLORS.yellow}
                className="-rotate-90 translate-y-[1px]"
              />
              <Text className="text-grayPrimary text-[12.8px] font-semibold">
                сначала новые
              </Text>
            </Flex>
          </Flex>
        </View>
      </Container>
      <View className="h-[1.5px] w-full bg-[#D2D4D5] mt-4 mb-3" />
      <View className="gap-y-3">
        {cards.map((item) => {
          return <Card image={item.image} name={item.name} />;
        })}
      </View>
    </>
  );
};
