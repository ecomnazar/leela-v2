import { Badge } from "@/shared/ui/Badge";
import { CardHorizontal } from "@/shared/ui/CardHorizontal";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import images from "assets/images";
import clsx from "clsx";
import { Image } from "expo-image";
import React from "react";
import { Platform, Text, View } from "react-native";

interface Props {
  isEnable: boolean;
}

export const PlanCard: React.FC<Props> = ({ isEnable }) => {
  return (
    <CardHorizontal
      className={clsx("", {
        "opacity-40": !isEnable,
      })}
    >
      <View className="relative h-full w-[90px] bg-grayPrimary/40 rounded-xl overflow-hidden">
        <Image
          source={images.groupExample1}
          style={{ width: "100%", height: "100%" }}
        />
        {!isEnable && (
          <View className="absolute  inset-0 flex items-center justify-center">
            <Icon type="lock" width={40} height={40} />
          </View>
        )}
      </View>
      <View style={{ flexShrink: 1 }} className="h-full py-1">
        <View>
          <Text
            className={clsx("text-textPrimary  font-semibold", {
              "text-sm": Platform.OS === "web",
              "text-xl": Platform.OS !== "web",
            })}
          >
            Самодиагностика
          </Text>
          <Text
            className={clsx("text-grayPrimary  font-medium mt-0.5", {
              "text-[10px]": Platform.OS === "web",
              "text-sm": Platform.OS !== "web",
            })}
          >
            Являясь всего лишь частью общей картины, ключевые...
          </Text>
        </View>
        <Flex justify="between" align="end" className="mt-auto">
          <Flex className="mt-1 gap-x-0.5">
            <Text
              className={clsx("text-textPrimary  font-extrabold", {
                "text-sm": Platform.OS === "web",
                "text-base": Platform.OS !== "web",
              })}
            >
              +2,250
            </Text>
            <Icon type="coinLight" width={19} height={19} />
          </Flex>
          <Flex className="gap-x-1">
            <Badge size="megaSmall" color="#E5BF85">
              PREMIUM
            </Badge>
          </Flex>
        </Flex>
      </View>
    </CardHorizontal>
  );
};
