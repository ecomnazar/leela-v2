import { PostCard } from "@/entities/ui/postCard";
import { COLORS } from "@/shared/constants/colors";
import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Icon } from "@/shared/ui/Icon";
import { Screen } from "@/widgets/_layouts/Screen";
import images from "assets/images";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export const ChatCommentPage = () => {
  const bgGradientColor: [string, string, string, string] = [
    "#FDFEFF",
    "#FDFEFF",
    "#FDFEFF",
    "#FDFEFF",
  ];

  return (
    <Screen customGradientColors={bgGradientColor} disableHeader>
      <CustomScrollView>
        <Container className="pt-6 mt-2">
          <Pressable onPress={() => router.back()}>
            <Icon
              type="chevron"
              fill={COLORS.yellowPrimary}
              width={20}
              height={20}
            />
          </Pressable>
        </Container>

        <PostCard image={images.stories1} name="Алена" role="Гость" />
        <View className="mt-4">
          <Container className="mb-6">
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
        <View className="bg-[#EDF1F6] h-[385px] border border-grayPrimary/40"></View>
        <PostCard
          image={images.stories3}
          name="Александра"
          type="comment"
          isStoriesActive
          role="Эксперт"
        />
      </CustomScrollView>
    </Screen>
  );
};
