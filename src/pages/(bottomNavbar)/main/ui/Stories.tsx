import { Flex } from "@/shared/ui/Flex";
import images from "assets/images";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";

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
export const Stories = () => {
  return (
    <ScrollView
      className="mt-6"
      contentContainerClassName="px-4"
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <Flex className="gap-x-3">
        {stories.map((story) => {
          return (
            <View key={story.image}>
              <View className="w-[72px] h-[72px] relative rounded-full overflow-hidden flex items-center justify-center p-0.5">
                <LinearGradient
                  colors={["#E5BF85", "#FF5752", "#FFAD01"]}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    right: 0,
                  }}
                />
                <View className="w-full h-full bg-white rounded-full p-0.5">
                  <Image
                    source={story.image}
                    className="w-full h-full object-cover object-center"
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
    </ScrollView>
  );
};
