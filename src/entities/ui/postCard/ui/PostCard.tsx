import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Badge } from "@/shared/ui/Badge";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { StoryAvatar } from "../../storyAvatar";
import clsx from "clsx";
import { CustomText } from "@/shared/ui/CustomText";
import { formattedDate } from "@/shared/lib/formattedDate";

interface Props {
  themeId?: number;
  image: string;
  name: string;
  type?: "post" | "comment";
  className?: string;
  isStoriesActive?: boolean;
  role: string;
  isAnonym?: boolean;
  likeCount?: number;
  dislikeCount?: number;
  commentCount?: number;
  date?: string;
}

export const PostCard: React.FC<Props> = ({
  themeId,
  image,
  name,
  type = "post",
  className,
  isStoriesActive = false,
  role,
  isAnonym,
  likeCount,
  dislikeCount,
  commentCount,
  date,
}) => {
  const realName = isAnonym ? "Аноним" : name;

  const renderProfile = () => {
    return (
      <Flex className="gap-x-2.5">
        {image ? (
          <StoryAvatar image={image} size="small" isActive={isStoriesActive} />
        ) : (
          <View className="w-[52px] h-[52px] p-0.5">
            <View className="rounded-full bg-backgroundTertiary w-full h-full" />
          </View>
        )}
        <View className="-space-y-0.5">
          <CustomText weight="bold" size={18}>
            {realName}
          </CustomText>
          <CustomText size={13} color="grayPrimary" weight="regular">
            {role}
          </CustomText>
        </View>
      </Flex>
    );
  };

  const renderFavouriteAndDateAndOptions = () => {
    return (
      <Flex
        className="gap-x-3"
        style={{ transform: [{ translateY: type === "post" ? 2 : -12 }] }}
      >
        <CustomText weight="bold" size={14}>
          {date ? formattedDate(date) : "09.05.24"}
        </CustomText>
        {type === "post" && (
          <Flex className="gap-x-1">
            <Icon type="heart" className="" />
            <Icon
              type="verticalTripleDots"
              width={20}
              height={20}
              fill={COLORS.textPrimary}
            />
          </Flex>
        )}
      </Flex>
    );
  };

  const renderBadges = () => {
    return (
      type === "post" && (
        <Flex className="gap-x-2">
          <Badge color="#B3A6D3" uppercase>
            Нутрициология
          </Badge>
          <Badge color="#EDD3CC">КРАСОТА</Badge>
        </Flex>
      )
    );
  };

  const renderContent = () => {
    return (
      <View className="mt-1.5">
        {type === "post" && (
          <CustomText
            weight="bold"
            size={18}
            color="primarySecondary"
            className="mb-0.5"
          >
            Гипотериоз и седина
          </CustomText>
        )}
        <CustomText
          color="description"
          size={13}
          weight="regular"
          className="mt-[1px]"
        >
          Здравствуйте, как связана седина и гипотериоз?{"\n"}Сначала я думала,
          что это просто генетика.
        </CustomText>
      </View>
    );
  };

  const renderLikeAndDislikeButton = () => {
    return (
      <Flex className="gap-x-2.5">
        <Flex className="gap-x-2">
          <Pressable>
            <Icon type="like" width={25} height={25} />
          </Pressable>
          <CustomText weight="semibold" size={14}>
            {likeCount || 0}
          </CustomText>
        </Flex>
        <Flex className="gap-x-2">
          <Pressable className="translate-y-[3px]">
            <Icon type="dislike" width={25} height={25} />
          </Pressable>
          <CustomText weight="semibold" size={14}>
            {dislikeCount || 0}
          </CustomText>
        </Flex>
      </Flex>
    );
  };

  const renderStaplerButton = () => {
    return (
      <Flex className="gap-x-1.5">
        <Icon type="stapler" width={21} height={21} fill={COLORS.textPrimary} />
        <CustomText weight="semibold" size={14}>
          1
        </CustomText>
      </Flex>
    );
  };

  const renderCommentButton = () => {
    return (
      <Flex className="gap-x-2">
        <Pressable onPress={() => router.push(`/chat/comment/${themeId}`)}>
          <Icon
            type="comment"
            width={21}
            height={21}
            fill={COLORS.textPrimary}
          />
        </Pressable>
        <CustomText weight="semibold" size={14}>
          {commentCount || 0}
        </CustomText>
      </Flex>
    );
  };

  return (
    <Container className={clsx("mt-2", className)}>
      <View>
        <Flex align={type === "post" ? "start" : "center"} justify="between">
          {renderProfile()}
          {renderFavouriteAndDateAndOptions()}
        </Flex>
        <View className="mt-2">
          {renderBadges()}
          {renderContent()}
          <View className="mt-4">
            <Flex justify="between" className="mb-4">
              {renderLikeAndDislikeButton()}
              {type === "post" && (
                <Flex className="gap-x-4">
                  {renderStaplerButton()}
                  {renderCommentButton()}
                </Flex>
              )}
            </Flex>
            {type === "post" && (
              <View className="h-[1.5px] bg-grayPrimary/40" />
            )}
          </View>
        </View>
      </View>
    </Container>
  );
};
