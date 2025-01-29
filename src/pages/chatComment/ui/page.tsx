import React from "react";
import { PostCard } from "@/entities/ui/postCard";
import { Container } from "@/shared/ui/Container";
import images from "assets/images";
import { Pressable, View } from "react-native";
import HorizontalSlider from "./HorizontalSlider";
import { CustomText } from "@/shared/ui/CustomText";
import { PageHeader } from "@/widgets/pageHeader";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { useLocalSearchParams } from "expo-router";
import { getThemeCommentsApi } from "@/entities/theme/model/themeThunk";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { TextInput } from "react-native-gesture-handler";
import PlayIcon from "assets/icons/play.svg";
import { COLORS } from "@/shared/constants/colors";

export const ChatCommentPage = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (id) {
      dispatch(getThemeCommentsApi(id as string));
    }
  }, [id]);

  return (
    <View className="w-screen h-screen bg-backgroundTertiary flex-1">
      <PageHeader title="Comment" />
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
      <View className="absolute bottom-0 w-full h-[80px] border border-grayPrimary/40 rounded-t-xl px-6 flex items-center justify-center bg-white">
        <View className="relative h-[52px] bg-gray-200 w-full rounded-xl">
          <TextInput
            style={{
              fontSize: 18,
              height: "100%",
              outline: "none",
              paddingLeft: 20,
              paddingRight: 50,
              fontWeight: "400",
              textDecorationColor: "red",
              color: `${COLORS.textPrimary}`,
            }}
            placeholderTextColor={COLORS.grayPrimary60}
            placeholder="Сообщение"
          />
          <View className="absolute top-1/2 right-5 -translate-y-1/2">
            <Pressable>
              <PlayIcon width={14} height={14} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
