import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Animated, Platform } from "react-native";
import { Flex } from "@/shared/ui/Flex";
import { MainPageContext } from "@/shared/providers/mainPageProvider";

interface Props {
  children: React.ReactNode;
}

export const AnimatedButtonContainer: React.FC<Props> = ({ children }) => {
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const buttonWidth = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [
      Platform.select({
        web: 207,
        android: 194,
        ios: 208,
      })!,
      51,
    ],
    extrapolate: "clamp",
  });

  return (
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
        {children}
      </Flex>
    </Animated.View>
  );
};
