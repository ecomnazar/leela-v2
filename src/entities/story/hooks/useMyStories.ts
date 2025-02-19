import React from "react";

import { useRole } from "@/entities/user/hooks/useRole";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getMyStoriesApi } from "../model/storyThunk";

import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const useMyStories = () => {
  const { role } = useRole();
  const dispatch = useAppDispatch();

  const { data = [], lastReadStoryId = 0 } = useAppSelector(
    (state) => state.story.myStories
  );

  const stories = role === "master" ? data : [];
  const lastRead = role === "master" ? lastReadStoryId : 0;
  const hasUnseenStories =
    stories.length > 0 && stories[stories.length - 1]?.id !== lastRead;

  React.useEffect(() => {
    if (role === "master") {
      dispatch(getMyStoriesApi());
    }
  }, [role]);

  return { stories, lastReadStoryId: lastRead, hasUnseenStories };
};
