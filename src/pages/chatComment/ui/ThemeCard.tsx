import React from "react";
import { PostCard } from "@/entities/ui/postCard";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { isEmptyObject } from "@/shared/lib/isEmptyObject";

export const ThemeCard = () => {
  const { data } = useAppSelector((state) => state.theme.themeById);

  if (isEmptyObject(data)) return;

  const {
    id,
    title,
    text,
    tags,
    isAnonymous,
    createdAt,
    commentsCount,
    likesAndDislikes: { dislikes, likes },
  } = data;

  return (
    <PostCard
      image={""}
      name={""}
      role="Гость"
      themeId={id}
      isAnonym={isAnonymous}
      likeCount={likes}
      dislikeCount={dislikes}
      commentCount={commentsCount}
      date={createdAt}
      title={title}
      text={text}
      tags={tags}
    />
  );
};
