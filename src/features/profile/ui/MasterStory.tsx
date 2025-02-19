import React from "react";

import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { useRole } from "@/entities/user/hooks/useRole";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Icon } from "@/shared/ui/Icon";
import { Pressable, View } from "react-native";
import { useMyStories } from "@/entities/story/hooks/useMyStories";
import { usePickImage } from "@/entities/story/hooks/usePickImage";

export const MasterStory = () => {
  const { role } = useRole();
  const { pickImage } = usePickImage();
  const { stories, lastReadStoryId, hasUnseenStories } = useMyStories();

  const { data: user, loading: userLoading } = useAppSelector(
    (state) => state.user.user
  );

  if (role !== "master") return null;

  const addStory = async () => pickImage("story");

  return (
    <View className="relative">
      <StoryAvatar
        onPress={() => {}}
        image={user?.defaultPictureUrl}
        name={user?.firstName}
        size="medium"
        isActive={hasUnseenStories}
      />
      <Pressable
        onPress={addStory}
        className="absolute bottom-5 right-1 w-[18px] h-[18px] bg-primary rounded-md flxe items-center justify-center border border-white"
      >
        <Icon type="plus" fill="#FFF" width={9} height={9} />
      </Pressable>
    </View>
  );
};
