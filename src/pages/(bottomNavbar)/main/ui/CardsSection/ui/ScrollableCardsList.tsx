import React from "react";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Animated, View } from "react-native";
import { PostCard } from "@/entities/ui/postCard";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const ScrollableCardsList = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);
  const { data } = useAppSelector((state) => state.theme.publicThemes);

  return (
    <CustomScrollView
      hasBottomBar
      scrollEventThrottle={16}
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
    >
      <View className="relative gap-y-2">
        {data.map((item, index) => {
          const {
            id,
            text,
            title,
            isAnonymous,
            createdAt,
            commentsCount,
            authorName,
            authorProfileImageUrl,
            likesAndDislikes: { dislikes, likes },
          } = item;
          return (
            <PostCard
              key={index}
              image={authorProfileImageUrl}
              name={authorName}
              role="Гость"
              themeId={id}
              isAnonym={isAnonymous}
              likeCount={likes}
              dislikeCount={dislikes}
              commentCount={commentsCount}
              date={createdAt}
              title={title}
              text={text}
            />
          );
        })}
      </View>
    </CustomScrollView>
  );
};
