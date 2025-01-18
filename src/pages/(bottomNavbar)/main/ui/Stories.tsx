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
            <View key={story.name}>
              <View className="w-[72px] h-[72px] relative rounded-full overflow-hidden flex items-center justify-center p-0.5">
                <LinearGradient
                  colors={["#E5BF85", "#FF5752", "#FFAD01"]}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                  }}
                />
                <View className="w-full h-full bg-white rounded-full p-0.5">
                  <Image
                    source={story.image}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              </View>
              <Text className="text-textPrimary text-[11px] font-normal text-center mt-1">
                {story.name}
              </Text>
            </View>
          );
        })}
      </Flex>
    </Animated.ScrollView>
  );
};
