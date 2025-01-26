import { Badge } from "@/shared/ui/Badge";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import images from "assets/images";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

export const Card = () => {
  return (
    <View className="border border-grayPrimary/40 rounded-2xl p-2">
      <Flex className="gap-x-3">
        <View className="w-[92px] h-[92px] overflow-hidden rounded-xl">
          <Image
            source={images.groupExample1}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View className="py-1 flex-1 h-[92px]">
          <View className="">
            <CustomText
              size={13}
              weight="bold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Название тренажера
            </CustomText>
            <CustomText
              size={11}
              weight="semibold"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Являясь всего лишь частью общей картины, ключевые...
            </CustomText>
          </View>
          <View className="mt-auto">
            <Flex justify="between" align="end">
              <Flex className="gap-x-1">
                <Icon type="coinLight" width={19} height={19} />
                <CustomText
                  size={14}
                  weight="extrabold"
                  style={{ transform: [{ translateY: -1 }] }}
                >
                  2,250
                </CustomText>
              </Flex>
              <Badge color="#FAC4B2" size="medium">
                1ч 15м
              </Badge>
            </Flex>
          </View>
        </View>
      </Flex>
    </View>
  );
};
