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
    isAnonymous,
    createdAt,
    commentsCount,
    authorName,
    authorProfileImageUrl,
    authorRole,
    attachments,
    reaction,
    likesAndDislikes: { dislikes, likes },
  } = data;

  return (
    <PostCard
      image={authorProfileImageUrl}
      name={authorName}
      role={authorRole ?? "Гость"}
      themeId={id}
      isAnonym={isAnonymous}
      likeCount={likes}
      dislikeCount={dislikes}
      commentCount={commentsCount}
      date={createdAt}
      title={title}
      text={text}
      staplerCount={attachments?.length}
      reaction={reaction}
      single
    />
  );
};
