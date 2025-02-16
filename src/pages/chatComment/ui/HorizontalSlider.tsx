import React, { useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { RecommendPostCard } from "./RecommendPostCard";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import { Container } from "@/shared/ui/Container";
import images from "assets/images";

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    title: "Приготовление полезных блюд с минимальным количеством калорий.",
    color: "#FF6347",
    profileImageUrl: images.fullStory,
    name: "Елена",
  },
  {
    id: "2",
    title: "Практические занятия по питанию для похудения",
    color: "#1E90FF",
    profileImageUrl: images.stories1,
    name: "Алена",
  },
  // { id: "3", title: "Пост 3", color: "#32CD32" },
  // { id: "4", title: "Пост 4", color: "#FFD700" },
];

const ITEM_WIDTH = width * 0.85; // 85% ширины экрана
const ITEM_MARGIN = width * 0.04; // 2% отступа с каждой стороны

export const HorizontalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (ITEM_WIDTH + ITEM_MARGIN * 2));
    setCurrentIndex(index);
  };

  const renderItem = (item) => {
    const first = item.id == 1;
    console.log(first);

    return (
      <RecommendPostCard
        style={{
          width: ITEM_WIDTH,
          marginHorizontal: ITEM_MARGIN,
          marginLeft: first ? 25 : 0,
          flex: 1,
          height: 308,
        }}
        profileImageUrl={item.profileImageUrl}
        name={item.name}
        title={item.title}
      />
    );
  };

  return (
    <View>
      <View className="bg-[#EDF1F6] py-4 border border-grayPrimary/40">
        <View style={{ flex: 1, display: "flex" }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            snapToInterval={ITEM_WIDTH + ITEM_MARGIN * 2}
            decelerationRate="fast"
            pagingEnabled
            contentContainerStyle={{ paddingHorizontal: ITEM_MARGIN }}
          />
        </View>
      </View>
      <Container>
        <Flex className="gap-x-1 justify-center border-b border-grayPrimary/40 py-5">
          {DATA.map((_, index) => {
            const active = currentIndex === index;
            return (
              <View
                key={index}
                className={clsx("w-[6px] h-[6px] rounded-full", {
                  "bg-primary": active,
                  "bg-[#D9D9D9]": !active,
                })}
              ></View>
            );
          })}
        </Flex>
      </Container>
    </View>
  );
};
