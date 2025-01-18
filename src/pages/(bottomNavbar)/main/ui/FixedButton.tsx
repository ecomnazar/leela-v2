import React from "react";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Animated, Platform, Text, View } from "react-native";
import { COLORS } from "@/shared/constants/colors";
import { MainPageContext } from "@/shared/providers/mainPageProvider";

export const FixedButton = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const buttonWidth = scrollOffsetY.interpolate({
    inputRange: [0, 20], // Измените на нужные значения
    outputRange: [Platform.OS === "web" ? 202 : 184, 51], // Начальная и конечная ширина кнопки
    extrapolate: "clamp", // Ограничиваем анимацию, чтобы не выходила за пределы
  });

  const textOpacity = scrollOffsetY.interpolate({
    inputRange: [0, 20], // Тоже измените в зависимости от вашего случая
    outputRange: [1, 0], // Плавно исчезает текст
    extrapolate: "clamp",
  });

  return (
    <View
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
          width: buttonWidth, // Применяем анимацию ширины,
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
          {/* <View className="w-[15px] h-[15px] pl-10">
            <Icon
              type="plus"
              fill="#FFFFFF"
              width={15}
              height={15}
              // className="translate-y-[1px]"
            />
          </View> */}
          <Animated.View style={{ opacity: textOpacity }}>
            <Text
              numberOfLines={1}
              style={{
                color: "#FFF",
                fontSize: 19,
                fontWeight: 500,
                paddingRight: 16,
              }}
            >
              Задать вопрос
            </Text>
          </Animated.View>
        </Flex>
      </Animated.View>
    </View>
  );
};
