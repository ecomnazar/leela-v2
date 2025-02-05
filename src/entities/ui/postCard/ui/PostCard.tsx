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
import { LikeDislikeButtons } from "@/widgets/likeDislikeButtons";

interface Props {
  themeId: number;
  image: string | null;
  name: string | null;
  type?: "post" | "comment";
  className?: string;
  isStoriesActive?: boolean;
  role: string;
  isAnonym?: boolean;
  likeCount?: number;
  dislikeCount?: number;
  commentCount?: number;
  date?: string;
  title?: string;
  text?: string;
  tags?: string[];
  staplerCount?: number;
  reaction?: 0 | 1 | -1;
  single?: boolean;
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
  title,
  text,
  tags,
  staplerCount,
  reaction = 0,
  single,
}) => {
  const realName = isAnonym ? "Аноним" : name;

  const renderProfile = () => {
    return (
      <Flex className="gap-x-2.5">
        <StoryAvatar
          image={image || ""}
          size="small"
          isActive={isStoriesActive}
          isAnonym={isAnonym}
        />
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
      !!(type === "post" && tags?.length) && (
        <Flex className="gap-x-2">
          {tags.map((tag, key) => {
            return (
              <Badge key={key} color="#B3A6D3" uppercase>
                {tag}
              </Badge>
            );
          })}
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
            {title}
          </CustomText>
        )}
        <CustomText
          color="description"
          size={13}
          weight="regular"
          className="mt-[1px]"
        >
          {text}
        </CustomText>
      </View>
    );
  };

  const renderStaplerButton = () => {
    return (
      <Flex className="gap-x-1.5">
        <Pressable onPress={() => router.push(`/chat/comment/${themeId}`)}>
          <Icon
            type="stapler"
            width={21}
            height={21}
            fill={COLORS.textPrimary}
          />
        </Pressable>
        <CustomText weight="semibold" size={14}>
          {staplerCount}
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
              <LikeDislikeButtons
                id={themeId}
                likeCount={likeCount}
                dislikeCount={dislikeCount}
                type={type}
                reaction={reaction}
                single={single}
              />
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
