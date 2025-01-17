import { Badge } from "@/shared/ui/Badge";
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
        <View style={{ flexShrink: 1 }} className="h-full justify-between py-1">
          <View>
            <Text
              className="text-textPrimary text-[12.8px] font-semibold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Название тренажера
            </Text>
            <Text
              className="text-[10.7px] text-textPrimary mt-0.5"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Являясь всего лишь частью общей картины, ключевые...
            </Text>
          </View>
          <View>
            <Flex justify="between">
              <Flex className="gap-x-1">
                <Icon type="coinLight" width={20} height={20} />
                <Text className="text-textPrimary font-bold text-[12.8px]">
                  2,250
                </Text>
              </Flex>
              <Badge color="#FAC4B2" size="small">
                1ч 15м
              </Badge>
            </Flex>
          </View>
        </View>
      </Flex>
    </View>
  );
};
