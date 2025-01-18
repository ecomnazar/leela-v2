import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import images from "assets/images";
import { Flex } from "@/shared/ui/Flex";
import { Animated, Text, View } from "react-native";
import { Container } from "@/shared/ui/Container";
import ChevronIcon from "assets/icons/chevron.svg";
import { COLORS } from "@/shared/constants/colors";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { MainPageContext } from "@/shared/providers/mainPageProvider";

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

const MAX = 200;
const MIN = 100;
const DIS = MAX - MIN;

const DynamicHeader = ({ value }: { value: Animated.Value }) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, DIS],
    outputRange: [MAX, MIN],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{ height: animatedHeaderHeight }}
      className={"w-24 bg-red-300"}
    ></Animated.View>
  );
};

export const CardsSection = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);

  return (
    <>
      {/* <DynamicHeader value={scrollOffsetY} /> */}
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
      </Container>
      <View className="h-[1.5px] w-full bg-[#D2D4D5] mt-4" />
      <CustomScrollView
        hasBottomBar
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollOffsetY },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16} // Оптимальная частота обновления
      >
        <View className="gap-y-3 mt-3">
          {cards.map((item, index) => {
            return <Card key={index} image={item.image} name={item.name} />;
          })}
        </View>
      </CustomScrollView>
    </>
  );
};
