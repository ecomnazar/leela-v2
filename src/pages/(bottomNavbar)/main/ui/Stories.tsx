import React from "react";
import { Pressable, ScrollView, View } from "react-native";

import { Flex } from "@/shared/ui/Flex";
import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getPublicStoriesApi } from "@/entities/story/model/storyThunk";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { StoryAvatarSkeleton } from "@/entities/ui/storyAvatar/ui/StoryAvatarSkeleton";
import {
  setSelectedAuthorIndex,
  toggleStoryModal,
} from "@/entities/story/model/storySlice";
import { StoryModal } from "@/entities/story/ui/StoryModal";
import { useRole } from "@/entities/user/hooks/useRole";
import { Icon } from "@/shared/ui/Icon";

export const Stories = () => {
  const dispatch = useAppDispatch();

  const { data: publicStories, loading: publicStoriesLoading } = useAppSelector(
    (state) => state.story.publicStories
  );

  const { data: user, loading: userLoading } = useAppSelector(
    (state) => state.user.user
  );

  const { role } = useRole();

  const loading = publicStoriesLoading || userLoading;

  const openStoryModal = (index: number) => {
    dispatch(setSelectedAuthorIndex(index));
    dispatch(toggleStoryModal("open"));
  };

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
          <Flex className="gap-x-3" align="start">
            {loading &&
              Array.from({ length: 7 }).map((_, index) => (
                <StoryAvatarSkeleton key={index} />
              ))}
            {!loading && role === "master" && (
              <View className="relative">
                <StoryAvatar
                  onPress={() => {}}
                  image={user?.defaultPictureUrl}
                  name={user?.firstName}
                  size="medium"
                  isActive
                />
                <Pressable
                  onPress={() => {}}
                  className="absolute bottom-5 right-1 w-[18px] h-[18px] bg-primary rounded-md flxe items-center justify-center border border-white"
                >
                  <Icon type="plus" fill="#FFF" width={9} height={9} />
                </Pressable>
              </View>
            )}
            {!loading &&
              publicStories?.unseenExperts?.map((story, index) => {
                const isMyStory = story.authorId === user?.id;
                if (isMyStory) return;
                return (
                  <StoryAvatar
                    key={story.name}
                    onPress={() => openStoryModal(index)}
                    image={story.previewMediaUrl}
                    name={story.name}
                    size="medium"
                    isActive={true}
                  />
                );
              })}
          </Flex>
        </ScrollView>
      </View>

      {/* MODALS */}

      <StoryModal />
    </>
  );
};
