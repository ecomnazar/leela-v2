import React from "react";

import { ScrollView, View } from "react-native";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getPublicStoriesApi } from "@/entities/story/model/storyThunk";
import { StoryModal } from "@/entities/story/ui/StoryModal";
import { StoriesList } from "./StoriesList";

export const Stories = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getPublicStoriesApi());
  }, []);

  return (
    <>
      <View style={{ height: 92 }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <StoriesList />
        </ScrollView>
      </View>

      {/* MODALS */}

      <StoryModal />
    </>
  );
};
