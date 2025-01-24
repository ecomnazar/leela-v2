import React from "react";
import { PostCard } from "@/entities/ui/postCard";
import { Container } from "@/shared/ui/Container";
import images from "assets/images";
import { View } from "react-native";
import HorizontalSlider from "./HorizontalSlider";
import { CustomText } from "@/shared/ui/CustomText";
import { PageHeader } from "@/widgets/pageHeader";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";

export const ChatCommentPage = () => {
  return (
    <View className="w-screen h-screen bg-backgroundTertiary flex-1">
      <PageHeader title="Comment" />
      <CustomScrollView>
        <PostCard image={images.stories1} name="Алена" role="Гость" />
        <View className="mt-4">
          <Container className="mb-3">
            <CustomText weight="bold" size={14}>
              Комментарии 2
            </CustomText>
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
        <PostCard
          image={images.stories3}
          name="Александра"
          type="comment"
          isStoriesActive
          role="Эксперт"
        />
        <PostCard
          image={images.stories3}
          name="Александра"
          type="comment"
          isStoriesActive
          role="Эксперт"
        />
      </CustomScrollView>
    </View>
  );
};
