import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { Flex } from "@/shared/ui/Flex";
import images from "assets/images";
import React from "react";
import { Animated, Platform, ScrollView, View } from "react-native";

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

const STORIES_MAX_HEIGHT = Platform.OS === "web" ? 200 : 200;

export const Stories = () => {
  // const { scrollOffsetY } = React.useContext(MainPageContext);
  // const animatedHeight = scrollOffsetY.interpolate({
  //   inputRange: [0, STORIES_MAX_HEIGHT],
  //   outputRange: [STORIES_MAX_HEIGHT, 0],
  //   extrapolate: "clamp",
  // });

  return (
    <View style={{ height: 92 }}>
      <ScrollView
        style={
          {
            // height: 200,
            // marginTop: Platform.select({
            //   android: 84,
            //   web: 64,
            //   ios: 105,
            // }),
          }
        }
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
      </ScrollView>
    </View>
  );
};
