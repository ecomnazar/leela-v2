import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { Flex } from "@/shared/ui/Flex";
import images from "assets/images";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Animated, Platform, ScrollView, Text, View } from "react-native";

const stories = [
  {
    viewed: false,
    name: "Алена",
    image: images.stories1,
  },
  {
    viewed: true,
    name: "Евгений",
    image: images.stories2,
  },
  {
    viewed: false,
    name: "Анжелика",
    image: images.stories3,
  },
  {
    viewed: false,
    name: "Юрий",
    image: images.stories4,
  },
  {
    viewed: true,
    name: "Оксана",
    image: images.stories5,
  },
];

const STORIES_MIN_HEIGHT = 0;
const STORIES_MAX_HEIGHT = Platform.OS === "web" ? 700 : 200;
const DIS = STORIES_MAX_HEIGHT - STORIES_MIN_HEIGHT;

export const Stories = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);
  const animatedHeight = scrollOffsetY.interpolate({
    inputRange: [0, DIS],
    outputRange: [STORIES_MAX_HEIGHT, STORIES_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <Animated.ScrollView
      style={{
        height: animatedHeight,
        marginTop: Platform.select({
          android: 84,
          web: 64,
          ios: 105,
        }),
      }}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <Flex className="gap-x-3">
        {stories.map((story) => {
          return (
            <StoryAvatar
              key={story.name}
              image={story.image}
              name={story.name}
              size="medium"
              isActive={true}
            />
          );
        })}
      </Flex>
    </Animated.ScrollView>
  );
};
