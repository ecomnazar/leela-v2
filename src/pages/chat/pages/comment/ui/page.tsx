import { PostCard } from "@/entities/ui/postCard";
import { COLORS } from "@/shared/constants/colors";
import { Badge } from "@/shared/ui/Badge";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Screen } from "@/widgets/_layouts/Screen";
import images from "assets/images";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export const ChatCommentPage = () => {
  const bgGradientColor: [string, string, string, string] = [
    "#FDFEFF",
    "#FDFEFF",
    "#FDFEFF",
    "#FDFEFF",
  ];

  return (
    <Screen customGradientColors={bgGradientColor} showBackButton enableScroll>
      <PostCard image={images.stories1} name="Алена" role="Гость" />
      <View className="mt-4">
        <Container className="mb-6">
          <Text className="font-medium text-textPrimary">Комментарии 2</Text>
        </Container>
        <PostCard
          image={images.stories2}
          name="Евгений"
          type="comment"
          isStoriesActive
          role="Эксперт"
        />
      </View>
      <View className="bg-[#EDF1F6] p-8 border border-grayPrimary/40">
        <View className=" bg-[#FEFBF6] rounded-[18px] border border-grayPrimary/40 p-5 pb-4">
          <Flex justify="between" className="mb-3">
            <Flex className="gap-x-3">
              <Image
                source={images.stories5}
                className="rounded-full"
                style={{ width: 46, height: 46 }}
              />
              <View className="-space-y-0.5">
                <Text className="text-textPrimary text-lg font-semibold">
                  Алена
                </Text>
                <Text className="text-grayPrimary text-[12px]">Эксперт</Text>
              </View>
            </Flex>
            <Text
              className="text-darkGreen font-semibold text-base"
              style={{ transform: [{ translateY: -4 }] }}
            >
              Открыть
            </Text>
          </Flex>
          <Flex>
            <Badge color="#96BFAD" className="w-fit">
              ПРАКТИКА - ДЕНЕЖНАЯ ТЕНЬ
            </Badge>
          </Flex>
          <Text className="text-textPrimary text-[13px] mt-3">
            Деньги воспроизводят ваши привычные доминирующие эмоции. Денежная...
            еще
          </Text>

          <View className="bg-[#ABA2A0] h-[130px] rounded-2xl mt-3"></View>
          <Flex justify="between" className="mt-3">
            <Flex className="gap-x-2.5">
              <Flex className="gap-x-2">
                <Icon type="like" width={25} height={25} />
                <Text className="text-textPrimary font-semibold text-sm">
                  2
                </Text>
              </Flex>
              <Pressable className="translate-y-[3px]">
                <Icon type="dislike" width={25} height={25} />
              </Pressable>
            </Flex>
            <Flex className="gap-x-2.5">
              <Flex className="gap-x-2">
                <Icon
                  type="stapler"
                  width={21}
                  height={21}
                  fill={COLORS.textPrimary}
                />
                <Text className="text-textPrimary font-semibold text-sm">
                  1
                </Text>
              </Flex>
              <Flex className="gap-x-2">
                <Pressable onPress={() => router.push("/chat/comment/1")}>
                  <Icon
                    type="comment"
                    width={21}
                    height={21}
                    fill={COLORS.textPrimary}
                  />
                </Pressable>
                <Text className="text-textPrimary font-semibold text-sm">
                  2
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </View>
      </View>
      <PostCard
        image={images.stories3}
        name="Александра"
        type="comment"
        isStoriesActive
        role="Эксперт"
      />
    </Screen>
  );
};
