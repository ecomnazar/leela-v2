import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React from "react";
import { useFetchAuthorMedias } from "./useFetchAuthorMedias";

export const useFetchNearStories = () => {
  const { currentStoryIndex } = useAppSelector(
    (state) => state.story.storyModal
  );
  const { all: allStories } = useAppSelector(
    (state) => state.story.publicStories
  );

  const { fetchAuthorMedias } = useFetchAuthorMedias();

  const allStoriesLength = allStories?.length;

  React.useEffect(() => {
    if (currentStoryIndex === 0) {
      if (allStoriesLength > 1) {
        const nextAuthorId = allStories[currentStoryIndex + 1].authorId;
        fetchAuthorMedias(nextAuthorId);
      }
    }
  }, [currentStoryIndex]);

  return null;
};
