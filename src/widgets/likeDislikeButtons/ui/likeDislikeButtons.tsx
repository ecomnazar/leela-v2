import React from "react";
import { useThemeReaction } from "@/entities/theme/hooks/useThemeReaction";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Pressable, View } from "react-native";
import { useCheckAuthorization } from "@/features/auth/hooks/useCheckAuthorization";

interface Props {
  id: number;
  likeCount: number | undefined;
  dislikeCount: number | undefined;
  type: "post" | "comment";
  reaction: 1 | 0 | -1;
  single?: boolean;
}

export const LikeDislikeButtons: React.FC<Props> = ({
  id,
  likeCount,
  dislikeCount,
  type = "post",
  reaction,
  single,
}) => {
  const checkAuthorization = useCheckAuthorization();
  const setReaction = useThemeReaction();

  const isLiked = reaction === 1;
  const isDisliked = reaction === -1;

  const handleLike = () => {
    if (!checkAuthorization()) return;

    if (type === "post") {
      setReaction({
        id,
        isDisliked,
        isLiked,
        reactionType: "like",
        single,
      });
    }
  };

  const handleDislike = () => {
    if (!checkAuthorization()) return;

    if (type === "post") {
      setReaction({
        id,
        isDisliked,
        isLiked,
        reactionType: "dislike",
        single,
      });
    }
  };

  return (
    <Flex className="">
      <Flex className="">
        <Pressable onPress={handleLike}>
          <Icon
            type={isLiked ? "likeFilled" : "like"}
            width={25}
            height={25}
            fill={"#616470"}
          />
        </Pressable>
        <View className="w-[25px] flex items-center justify-center">
          <CustomText weight="semibold" size={14}>
            {likeCount || 0}
          </CustomText>
        </View>
      </Flex>
      <Flex className="">
        <Pressable onPress={handleDislike} className="translate-y-[3px]">
          <Icon
            type={isDisliked ? "dislikeFilled" : "dislike"}
            width={25}
            height={25}
            fill={"#616470"}
          />
        </Pressable>
        <View className="w-[25px] flex items-center justify-center">
          <CustomText weight="semibold" size={14}>
            {dislikeCount || 0}
          </CustomText>
        </View>
      </Flex>
    </Flex>
  );
};
