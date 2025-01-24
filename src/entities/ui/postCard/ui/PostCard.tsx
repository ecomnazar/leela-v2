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
    <Container className={clsx("mt-2", className)}>
      <View>
        <Flex align={type === "post" ? "start" : "center"} justify="between">
          <Flex className="gap-x-2.5">
            <StoryAvatar
              image={image}
              size="small"
              isActive={isStoriesActive}
            />
            <View className="-space-y-0.5">
              <CustomText weight="bold" size={18}>
                {name}
              </CustomText>
              <CustomText size={13} color="grayPrimary" weight="regular">
                {role}
              </CustomText>
            </View>
          </Flex>
          <Flex
            className="gap-x-3"
            style={{ transform: [{ translateY: type === "post" ? 2 : -12 }] }}
          >
            <CustomText weight="bold" size={14}>
              09.05.24
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
        </Flex>
        <View className="mt-2">
          {type === "post" && (
            <Flex className="gap-x-2">
              <Badge color="#B3A6D3" uppercase>
                Нутрициология
              </Badge>
              <Badge color="#EDD3CC">КРАСОТА</Badge>
            </Flex>
          )}
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
              Здравствуйте, как связана седина и гипотериоз?{"\n"}Сначала я
              думала, что это просто генетика.
            </CustomText>
          </View>
          <View className="mt-4">
            <Flex justify="between" className="mb-4">
              <Flex className="gap-x-2.5">
                <Flex className="gap-x-2">
                  <Icon type="like" width={25} height={25} />
                  <CustomText weight="semibold" size={14}>
                    2
                  </CustomText>
                </Flex>
                <Pressable className="translate-y-[3px]">
                  <Icon type="dislike" width={25} height={25} />
                </Pressable>
              </Flex>
              {type === "post" && (
                <Flex className="gap-x-4">
                  <Flex className="gap-x-1.5">
                    <Icon
                      type="stapler"
                      width={21}
                      height={21}
                      fill={COLORS.textPrimary}
                    />
                    <CustomText weight="semibold" size={14}>
                      1
                    </CustomText>
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
                    <CustomText weight="semibold" size={14}>
                      2
                    </CustomText>
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
