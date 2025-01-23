import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Badge } from "@/shared/ui/Badge";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import images from "assets/images";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View, ViewStyle } from "react-native";

interface Props {
  style: ViewStyle;
}

export const RecommendPostCard: React.FC<Props> = ({ style }) => {
  return (
    <View
      style={style}
      className="bg-[#FEFBF6] rounded-[16px] border border-grayPrimary/40 p-5 pb-4"
    >
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
        Деньги воспроизводят ваши привычные доминирующие эмоции. Денежная... еще
      </Text>

      <View className="bg-[#ABA2A0] h-[130px] rounded-2xl mt-3"></View>
      <Flex justify="between" className="mt-3">
        <Flex className="gap-x-2.5">
          <Flex className="gap-x-2">
            <Icon type="like" width={25} height={25} />
            <Text className="text-textPrimary font-semibold text-sm">2</Text>
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
            <Text className="text-textPrimary font-semibold text-sm">1</Text>
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
            <Text className="text-textPrimary font-semibold text-sm">2</Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
};
