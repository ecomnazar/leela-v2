import { PostCard } from "@/entities/ui/postCard";
import { Container } from "@/shared/ui/Container";
import { Screen } from "@/widgets/_layouts/Screen";
import images from "assets/images";
import React from "react";
import { Text, View } from "react-native";
import HorizontalSlider from "./HorizontalSlider";

export const ChatCommentPage = () => {
  const bgGradientColor: [string, string, string, string] = [
    "#FDFEFF",
    "#FDFEFF",
    "#FDFEFF",
    "#FDFEFF",
  ];

  return (
    <Screen customGradientColors={bgGradientColor} showBackButton enableScroll>
      <PostCard image={images.stories1} name="Алена" role="Гость" />
      <View className="mt-4">
        <Container className="mb-3">
          <Text className="font-medium text-textPrimary">Комментарии 2</Text>
        </Container>
        <PostCard
          image={images.stories2}
          name="Евгений"
          type="comment"
          isStoriesActive
          role="Эксперт"
        />
      </View>
      <HorizontalSlider />
      <PostCard
        image={images.stories3}
        name="Александра"
        type="comment"
        isStoriesActive
        role="Эксперт"
      />
    </Screen>
  );
};
