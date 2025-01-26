import { Badge } from "@/shared/ui/Badge";
import { CardHorizontal } from "@/shared/ui/CardHorizontal";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import images from "assets/images";
import clsx from "clsx";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

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
      <View className="relative h-full w-[85px] bg-grayPrimary/40 rounded-xl overflow-hidden">
        <Image
          source={images.groupExample1}
          style={{ width: "100%", height: "100%" }}
        />
        {!isEnable && (
          <View className="absolute inset-0 flex items-center justify-center">
            <Icon type="lock" width={40} height={40} />
          </View>
        )}
      </View>
      <View style={{ flexShrink: 1 }} className="h-full pb-1 pr-1">
        <View>
          <CustomText size={13} weight="bold">
            Самодиагностика
          </CustomText>
          <CustomText size={10.6} weight="semibold" className="mt-1">
            Являясь всего лишь частью общей картины, ключевые...
          </CustomText>
        </View>
        <Flex justify="between" align="end" className="mt-auto">
          <Flex className="mt-1 gap-x-1">
            <CustomText size={13} weight="extrabold">
              +2,250
            </CustomText>
            <Icon type="coinLight" width={19} height={19} />
          </Flex>
          <Flex className="gap-x-1">
            <Badge size="small" color="#E5BF85">
              PREMIUM
            </Badge>
          </Flex>
        </Flex>
      </View>
    </CardHorizontal>
  );
};
