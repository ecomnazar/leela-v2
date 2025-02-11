import React from "react";
import images from "assets/images";
import { ScrollView, Text, View } from "react-native";

import { Flex } from "@/shared/ui/Flex";
import { StoryAvatar } from "@/entities/ui/storyAvatar";

export const Stories = () => {
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

  const handlePress = () => {
    console.log("press");
  };

  return (
    <View style={{ height: 92 }}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Flex className="gap-x-3">
          {stories.map((story) => {
            return (
              <StoryAvatar
                key={story.name}
                onPress={handlePress}
                image={story.image}
                name={story.name}
                size="medium"
                isActive={true}
              />
            );
          })}
        </Flex>
      </ScrollView>
    </View>
  );
};
