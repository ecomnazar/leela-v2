import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Badge } from "@/shared/ui/Badge";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { StoryAvatar } from "../../storyAvatar";
import clsx from "clsx";

interface Props {
  image: string;
  name: string;
  type?: "post" | "comment";
  className?: string;
  isStoriesActive?: boolean;
  role: string;
}

export const PostCard: React.FC<Props> = ({
  image,
  name,
  type = "post",
  className,
  isStoriesActive = false,
  role,
}) => {
  return (
    <Container className={clsx("mt-4", className)}>
      <View>
        <Flex align={type === "post" ? "start" : "center"} justify="between">
          <Flex className="gap-x-3">
            <StoryAvatar
              image={image}
              size="small"
              isActive={isStoriesActive}
            />
            <View className="-space-y-0.5">
              <Text className="text-textPrimary text-lg font-semibold">
                {name}
              </Text>
              <Text className="text-grayPrimary text-[13.3px]">{role}</Text>
            </View>
          </Flex>
          <Flex className="gap-x-3">
            <Text className="text-textPrimary font-semibold text-[13.8px]">
              09.05.24
            </Text>
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
        </Flex>
        <View className="mt-2">
          {type === "post" && (
            <Flex className="gap-x-2">
              <Badge color="#B3A6D3">Нутрициология</Badge>
              <Badge color="#EDD3CC">КРАСОТА</Badge>
            </Flex>
          )}
          <View className="mt-1.5">
            {type === "post" && (
              <Text className="text-[#353848] opacity-80 text-lg font-semibold">
                Гипотериоз и седина
              </Text>
            )}
            <Text className="text-[#5F616F] text-[12.8px] mt-[1px]">
              Здравствуйте, как связана седина и гипотериоз? Сначала я думала,
              что это просто генетика.
            </Text>
          </View>
          <View className="mt-4">
            <Flex justify="between" className="mb-4">
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
              {type === "post" && (
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
