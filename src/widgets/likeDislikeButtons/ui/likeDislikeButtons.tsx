import React from "react";
import { useThemeReaction } from "@/entities/theme/hooks/useThemeReaction";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Pressable } from "react-native";

interface Props {
  id: number;
  likeCount: number | undefined;
  dislikeCount: number | undefined;
  isLiked: boolean;
  isDisliked: boolean;
  type: "post" | "comment";
}

export const LikeDislikeButtons: React.FC<Props> = ({
  id,
  likeCount,
  dislikeCount,
  isLiked,
  isDisliked,
  type = "post",
}) => {
  const reaction = useThemeReaction();

  const handleLike = () => {
    if (type === "post") {
      reaction({ id, isDisliked, isLiked, reactionType: "like" });
    }
  };
  const handleDislike = () => {
    if (type === "post") {
      reaction({ id, isDisliked, isLiked, reactionType: "dislike" });
    }
  };

  return (
    <Flex className="gap-x-2.5">
      <Flex className="gap-x-2">
        <Pressable onPress={handleLike}>
          <Icon type="like" width={25} height={25} />
        </Pressable>
        <CustomText weight="semibold" size={14}>
          {likeCount || 0}
        </CustomText>
      </Flex>
      <Flex className="gap-x-2">
        <Pressable onPress={handleDislike} className="translate-y-[3px]">
          <Icon type="dislike" width={25} height={25} />
        </Pressable>
        <CustomText weight="semibold" size={14}>
          {dislikeCount || 0}
        </CustomText>
      </Flex>
    </Flex>
  );
};
