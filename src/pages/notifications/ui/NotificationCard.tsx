import React from "react";
import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "react-native";

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
    return <Text className="text-[#5F616F60] text-"> 1 дн.</Text>;
  };

  const renderNotificationText = () => {
    if (notificationType === "newPost") {
      return (
        <Text className="text-[#5F616F] text-sm" style={{ flexShrink: 1 }}>
          <Text className="font-semibold">{names}</Text>
          {notificationText()}
          {renderHours()}
        </Text>
      );
    }
    return (
      <Text className="text-[#5F616F] text-sm" style={{ flexShrink: 1 }}>
        {notificationText()}
        <Text className="font-semibold"> {names}</Text>
        {renderHours()}
      </Text>
    );
  };

  return (
    <Flex className="gap-x-3">
      <StoryAvatar size="small" image={avatar} isActive={hasStory} />
      {renderNotificationText()}
    </Flex>
  );
};
