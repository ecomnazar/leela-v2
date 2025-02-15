import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Badge } from "@/shared/ui/Badge";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import images from "assets/images";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { CustomText } from "@/shared/ui/CustomText";

interface Props {
  style: ViewStyle;
  profileImageUrl: string;
  name: string;
  title: string;
}

export const RecommendPostCard: React.FC<Props> = ({
  style,
  profileImageUrl,
  name,
  title,
}) => {
  return (
    <View
      style={style}
      className="bg-[#FEFBF6] rounded-[16px] border border-grayPrimary/40 p-5 pb-4"
    >
      {/* <Flex justify="between" className="mb-3"> */}
      <Flex justify="between">
        <Flex className="gap-x-3">
          <Image
            source={profileImageUrl}
            className="rounded-full"
            style={{ width: 46, height: 46 }}
          />
          <View className="-space-y-0.5">
            <Text className="text-textPrimary text-lg font-semibold">
              {name}
            </Text>
            <Text className="text-grayPrimary text-[12px]">Эксперт</Text>
          </View>
        </Flex>
        <CustomText
          color="darkGreen"
          size={14}
          weight="bold"
          style={{ transform: [{ translateY: -4 }] }}
        >
          Открыть
        </CustomText>
      </Flex>
      {/* <Flex>
        <Badge color="#96BFAD" className="w-fit">
          ПРАКТИКА - ДЕНЕЖНАЯ ТЕНЬ
        </Badge>
      </Flex> */}
      <CustomText weight="medium" size={13} className="mt-3">
        {title}
      </CustomText>

      <View className="bg-[#ABA2A0] h-[130px] rounded-2xl mt-3 overflow-hidden">
        <Image
          source={images.cardBgExample1}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </View>
      <Flex justify="between" className="mt-3">
        <Flex className="gap-x-2.5">
          <Flex className="gap-x-2">
            <Icon type="like" width={25} height={25} />
            <CustomText weight="extrabold" size={14}>
              2
            </CustomText>
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
            <CustomText weight="extrabold" size={14}>
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
            <CustomText weight="extrabold" size={14}>
              2
            </CustomText>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
};
