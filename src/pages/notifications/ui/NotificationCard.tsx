import React from "react";
import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "react-native";
import { CustomText } from "@/shared/ui/CustomText";

interface Props {
  avatar: string;
  hasStory: boolean;
  notificationType: "newPost" | "oneLike" | "manyLike";
  names: string;
}

export const NotificationCard: React.FC<Props> = ({
  avatar,
  hasStory,
  notificationType,
  names,
}) => {
  const notificationText = () => {
    if (notificationType === "newPost") {
      return ` опубликовал(-а) публикацию${"\n"}“Седина и стиль”`;
    }
    if (notificationType === "oneLike") {
      return `Ваша публикация нравится${"\n"}пользователю`;
    }
    if (notificationType === "manyLike") {
      return `Ваша публикация нравится${"\n"}пользователям:`;
    }
  };

  const renderHours = () => {
    return (
      <CustomText
        color="description"
        size={13}
        weight="medium"
        className="opacity-40"
      >
        {" "}
        1 дн.
      </CustomText>
    );
  };

  const renderNotificationText = () => {
    if (notificationType === "newPost") {
      return (
        <CustomText
          color="description"
          weight="medium"
          size={13}
          style={{ flexShrink: 1 }}
        >
          <Text className="font-wixBold">{names}</Text>
          {notificationText()}
          {renderHours()}
        </CustomText>
      );
    }
    return (
      <CustomText
        color="description"
        weight="medium"
        size={13}
        style={{ flexShrink: 1 }}
      >
        {notificationText()}
        <Text className="font-wixBold"> {names}</Text>
        {renderHours()}
      </CustomText>
    );
  };

  return (
    <Flex className="gap-x-3">
      <StoryAvatar size="small" image={avatar} isActive={hasStory} />
      {renderNotificationText()}
    </Flex>
  );
};
