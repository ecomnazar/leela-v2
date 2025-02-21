import React from "react";

import { Flex } from "@/shared/ui/Flex";
import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { StoryAvatarSkeleton } from "@/entities/ui/storyAvatar/ui/StoryAvatarSkeleton";
import { MasterStory } from "@/features/profile/ui/MasterStory";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { openStoryModal } from "@/entities/story/model/storySlice";
import { IStoryAuthor } from "@/entities/story/model/interfaces";
import { useFetchAuthorMedias } from "@/entities/story/hooks/useFetchAuthorMedias";

export const StoriesList = () => {
  const dispatch = useAppDispatch();

  const { all: allStories, loading: publicStoriesLoading } = useAppSelector(
    (state) => state.story.publicStories
  );
  const { data: user, loading: userLoading } = useAppSelector(
    (state) => state.user.user
  );

  const { fetchAuthorMedias } = useFetchAuthorMedias();

  const loading = publicStoriesLoading || userLoading;

  const openStory = (index: number, story: IStoryAuthor) => {
    const { name, authorId, previewMediaUrl } = story;
    dispatch(
      openStoryModal({
        name,
        authorId,
        previewMediaUrl,
        currentStoryIndex: index,
        me: false,
      })
    );

    // if (allStories[authorId]) return;
    fetchAuthorMedias(authorId);
  };

  return (
    <Flex className="gap-x-3" align="start">
      <MasterStory />

      <>
        {loading &&
          Array.from({ length: 7 }).map((_, index) => (
            <StoryAvatarSkeleton key={index} />
          ))}
        {!loading &&
          allStories?.map((story, index) => {
            const isMyStory = story.authorId === user?.id;
            if (isMyStory) return;
            return (
              <StoryAvatar
                key={story.name}
                onPress={() => openStory(index, story)}
                image={story.previewMediaUrl}
                name={story.name}
                size="medium"
                isActive={true}
              />
            );
          })}
      </>
    </Flex>
  );
};
