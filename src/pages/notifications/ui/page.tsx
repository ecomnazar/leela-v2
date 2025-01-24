import { Container } from "@/shared/ui/Container";
import { PageHeader } from "@/widgets/pageHeader";
import images from "assets/images";
import React from "react";
import { View } from "react-native";
import { NotificationCard } from "./NotificationCard";
import { CustomText } from "@/shared/ui/CustomText";

export const NotificationsPage = () => {
  return (
    <View className="w-screen h-screen bg-backgroundTertiary flex-1">
      <PageHeader title="Уведомление" />
      <View className="gap-y-4">
        <Container className="mt-4">
          <CustomText weight="bold" size={19} color="primarySecondary">
            Вчера
          </CustomText>
          <View className="mt-6 gap-y-2">
            <NotificationCard
              avatar={images.stories2}
              hasStory={true}
              names="Евгений"
              notificationType="newPost"
            />
            <NotificationCard
              avatar={images.stories3}
              hasStory={true}
              names="Алена"
              notificationType="oneLike"
            />
            <NotificationCard
              avatar={images.stories4}
              hasStory={false}
              names="Алена, Николай, Алиса"
              notificationType="manyLike"
            />
          </View>
        </Container>
        <Container className="mt-4">
          <CustomText weight="bold" size={19} color="primarySecondary">
            Последние 7 дней
          </CustomText>
          <View className="mt-6 gap-y-2">
            <NotificationCard
              avatar={images.stories2}
              hasStory={true}
              names="Евгений"
              notificationType="newPost"
            />
            <NotificationCard
              avatar={images.stories3}
              hasStory={true}
              names="Алена"
              notificationType="oneLike"
            />
            <NotificationCard
              avatar={images.stories4}
              hasStory={false}
              names="Алена, Николай, Алиса"
              notificationType="manyLike"
            />
          </View>
        </Container>
      </View>
    </View>
  );
};
