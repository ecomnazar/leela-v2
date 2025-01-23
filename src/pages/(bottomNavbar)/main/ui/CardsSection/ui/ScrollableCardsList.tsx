import React from "react";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Animated, View } from "react-native";
import images from "assets/images";
import { PostCard } from "@/entities/ui/postCard";

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

export const ScrollableCardsList = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);

  return (
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
      scrollEventThrottle={16}
    >
      <View className="relative gap-y-2 mt-2">
        {cards.map((item, index) => {
          return (
            <PostCard
              key={index}
              image={item.image}
              name={item.name}
              role="Гость"
            />
          );
        })}
      </View>
    </CustomScrollView>
  );
};
