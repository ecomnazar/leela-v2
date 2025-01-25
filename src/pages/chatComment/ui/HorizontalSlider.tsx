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

const { width } = Dimensions.get("window");

const DATA = [
  { id: "1", title: "Пост 1", color: "#FF6347" },
  { id: "2", title: "Пост 2", color: "#1E90FF" },
  { id: "3", title: "Пост 3", color: "#32CD32" },
  { id: "4", title: "Пост 4", color: "#FFD700" },
];

const ITEM_WIDTH = width * 0.85; // 85% ширины экрана
const ITEM_MARGIN = width * 0.02; // 2% отступа с каждой стороны

export default function CustomSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (ITEM_WIDTH + ITEM_MARGIN * 2));
    setCurrentIndex(index);
  };

  const renderItem = () => (
    <RecommendPostCard
      style={{ width: ITEM_WIDTH, marginHorizontal: ITEM_MARGIN }}
    />
  );

  return (
    <View>
      <View className="bg-[#EDF1F6] py-4 border border-grayPrimary/40">
        <View style={{ flex: 1 }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            snapToInterval={ITEM_WIDTH + ITEM_MARGIN * 2}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: ITEM_MARGIN }}
          />
        </View>
      </View>
      <Container>
        <Flex className="gap-x-1 justify-center border-b border-grayPrimary/40 py-8">
          {DATA.map((_, index) => {
            const active = currentIndex === index;
            return (
              <View
                key={index}
                className={clsx("w-2 h-2 rounded-full", {
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
}
