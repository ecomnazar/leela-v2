import React from "react";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { CustomText } from "@/shared/ui/CustomText";
import { Animated } from "react-native";

export const AnimatedText = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const textOpacity = scrollOffsetY.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
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
  );
};
