import React from "react";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Animated, View } from "react-native";
import { PostCard } from "@/entities/ui/postCard";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const ScrollableCardsList = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);
  const { data } = useAppSelector((state) => state.theme.publicThemes);

  console.log(data);

  return (
    <CustomScrollView
      hasBottomBar
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
      scrollEventThrottle={16}
    >
      <View className="relative gap-y-2">
        {data.map((item, index) => {
          return (
            <PostCard
              key={index}
              image={""}
              name={""}
              role="Гость"
              isAnonym={item.isAnonymous}
              likeCount={item.likesAndDislikes.likes}
              dislikeCount={item.likesAndDislikes.dislikes}
              commentCount={item.commentsCount}
              date={item.createdAt}
            />
          );
        })}
      </View>
    </CustomScrollView>
  );
};
