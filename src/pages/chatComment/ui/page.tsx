import React from "react";
import { PostCard } from "@/entities/ui/postCard";
import { Container } from "@/shared/ui/Container";
import images from "assets/images";
import { View } from "react-native";
import HorizontalSlider from "./HorizontalSlider";
import { CustomText } from "@/shared/ui/CustomText";
import { PageHeader } from "@/widgets/pageHeader";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { useLocalSearchParams } from "expo-router";
import {
  getThemeByIdApi,
  getThemeCommentsApi,
} from "@/entities/theme/model/themeThunk";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { FixedTypeCommentInput } from "./FixedTypeCommentInput";
import { ThemeCardSkeleton } from "@/entities/ui/themeCardSkeleton";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const ChatCommentPage = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const { loading: themeLoading } = useAppSelector(
    (state) => state.theme.themeById
  );

  const loading = themeLoading;

  React.useEffect(() => {
    if (id) {
      const themeId = id as string;
      dispatch(getThemeByIdApi(themeId));
      dispatch(getThemeCommentsApi(themeId));
    }
  }, [id]);

  const renderLoadingState = () => {
    return (
      <View className="mt-2">
        <ThemeCardSkeleton length={7} />
      </View>
    );
  };

  const renderDataState = () => {
    return (
      <CustomScrollView className="pb-[80px]">
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
    );
  };

  return (
    <View className="w-screen h-screen bg-backgroundTertiary flex-1">
      <PageHeader title="Comment" />
      {loading ? renderLoadingState() : renderDataState()}
      <FixedTypeCommentInput />
    </View>
  );
};
