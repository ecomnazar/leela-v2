import React from "react";
import { useThemeReaction } from "@/entities/theme/hooks/useThemeReaction";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Pressable } from "react-native";
import { useCheckAuthorization } from "@/features/auth/hooks/useCheckAuthorization";

interface Props {
  id: number;
  likeCount: number | undefined;
  dislikeCount: number | undefined;
  type: "post" | "comment";
  reaction: 1 | 0 | -1;
}

export const LikeDislikeButtons: React.FC<Props> = ({
  id,
  likeCount,
  dislikeCount,
  type = "post",
  reaction,
}) => {
  const checkAuthorization = useCheckAuthorization();
  const setReaction = useThemeReaction();

  const isLiked = reaction === 1;
  const isDisliked = reaction === -1;

  console.log(isLiked);
  console.log(isDisliked);
  console.log(reaction);

  const handleLike = () => {
    if (!checkAuthorization()) return;

    if (type === "post") {
      setReaction({ id, isDisliked, isLiked, reactionType: "like" });
    }
  };

  const handleDislike = () => {
    if (!checkAuthorization()) return;

    if (type === "post") {
      setReaction({ id, isDisliked, isLiked, reactionType: "dislike" });
    }
  };

  return (
    <Flex className="gap-x-2.5">
      <Flex className="gap-x-2">
        <Pressable onPress={handleLike}>
          <Icon
            type="like"
            width={25}
            height={25}
            fill={isLiked ? "red" : "#616470"}
          />
        </Pressable>
        <CustomText weight="semibold" size={14}>
          {likeCount || 0}
        </CustomText>
      </Flex>
      <Flex className="gap-x-2">
        <Pressable onPress={handleDislike} className="translate-y-[3px]">
          <Icon
            type="dislike"
            width={25}
            height={25}
            fill={isDisliked ? "red" : "#616470"}
          />
        </Pressable>
        <CustomText weight="semibold" size={14}>
          {dislikeCount || 0}
        </CustomText>
      </Flex>
    </Flex>
  );
};
