import React from "react";
import { View } from "react-native";
import { Container } from "@/shared/ui/Container";
import { CustomText } from "@/shared/ui/CustomText";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { PostCard } from "@/entities/ui/postCard";

export const Comments = () => {
  const { data, total } = useAppSelector((state) => state.theme.themeComments);

  return (
    <View className="mt-4">
      <View>
        <Container className="mb-3">
          <CustomText weight="bold" size={14}>
            Комментарии {total}
          </CustomText>
        </Container>
        {data.map((item) => {
          const {
            id,
            authorName,
            authorProfileImageUrl,
            authorRole,
            text,
            createdAt,
            likesAndDislikes: { dislikes, likes },
          } = item;
          return (
            <PostCard
              themeId={item.authorId}
              key={id}
              image={authorProfileImageUrl}
              name={authorName}
              type="comment"
              isStoriesActive={false}
              role={authorRole}
              likeCount={likes}
              dislikeCount={dislikes}
              text={text}
              date={createdAt}
            />
          );
        })}
        {/* <PostCard
            image={images.stories2}
            name="Евгений"
            type="comment"
            isStoriesActive
            role="Эксперт"
          /> */}
      </View>
      {/* <HorizontalSlider /> */}
      {/* <PostCard
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
        /> */}
    </View>
  );
};
