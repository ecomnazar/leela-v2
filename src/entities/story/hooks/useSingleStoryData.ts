import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React from "react";

interface Props {
  authorId: number;
}

export const useSingleStoryData = ({ authorId }: Props) => {
  const { stories: allStories, currentStoryIndex } = useAppSelector(
    (state) => state.story.storyModal
  );
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);

  const stories = allStories[authorId]?.stories || [];
  const storyLoading = stories.length === 0;
  const storiesLength = stories.length;

  const [isMediaLoaded, setIsMediaLoaded] = React.useState(
    Array.from({ length: storiesLength }).map(() => false)
  );
  const currentMedia = stories[currentMediaIndex];
  const mediaUrl = currentMedia?.mediaUrl;
  const mediaType = "photo";
  const description = currentMedia?.description;

  return {
    mediaType,
    mediaUrl,
    description,
    stories,
    storiesLength,
    currentMediaIndex,
    setCurrentMediaIndex,
    isMediaLoaded,
    setIsMediaLoaded,
  };
};
