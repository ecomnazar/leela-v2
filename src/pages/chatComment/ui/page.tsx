import React from "react";
import { View } from "react-native";
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
import { ThemeCard } from "./ThemeCard";
import { Comments } from "./Comments";

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
        <ThemeCard />
        <Comments />
      </CustomScrollView>
    );
  };

  return (
    <View className="w-screen h-screen bg-backgroundTertiary flex-1">
      <PageHeader title="Comment" />
      {loading ? renderLoadingState() : renderDataState()}
      <FixedTypeCommentInput themeId={Number(id)} />
    </View>
  );
};
