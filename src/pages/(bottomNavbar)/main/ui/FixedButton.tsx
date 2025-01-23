import React from "react";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Animated, Platform, Pressable, Text, View } from "react-native";
import { COLORS } from "@/shared/constants/colors";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { useModal } from "@/shared/zustand/useModal";
import { CustomText } from "@/shared/ui/CustomText";

export const FixedButton = () => {
  const { openModal } = useModal();
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const buttonWidth = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [
      Platform.select({
        web: 207,
        android: 194,
        ios: 204,
      })!,
      51,
    ],
    extrapolate: "clamp",
  });

  const textOpacity = scrollOffsetY.interpolate({
    inputRange: [0, 20],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const handleClick = () => openModal("ask-question");

  return (
    <Pressable
      onPress={handleClick}
      className="absolute right-0 z-10 pr-4 items-end"
      style={{
        bottom: Platform.select({
          android: 90,
          ios: 105,
          web: 90,
        }),
      }}
    >
      <View className="absolute bottom-0 left-0 h-[51px] w-[51px] bg-yellowPrimary mr-4 rounded-full z-10 flex items-center justify-center">
        <Icon type="plus" fill="#FFFFFF" width={15} height={15} />
      </View>
      <Animated.View
        style={{
          width: buttonWidth,
          height: 51,
          borderRadius: 999,
          backgroundColor: COLORS.yellowPrimary,
          justifyContent: "center",
        }}
      >
        <Flex
          justify="end"
          align="center"
          className="gap-x-1.5 -translate-y-[1px]"
        >
          <Animated.View style={{ opacity: textOpacity }}>
            <CustomText
              weight="bold"
              numberOfLines={1}
              color="white"
              size={19}
              style={{
                paddingRight: 16,
              }}
            >
              Задать вопрос
            </CustomText>
          </Animated.View>
        </Flex>
      </Animated.View>
    </Pressable>
  );
};
