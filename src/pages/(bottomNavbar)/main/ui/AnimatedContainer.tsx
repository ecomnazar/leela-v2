import { MainPageContext } from "@/shared/providers/mainPageProvider";
import React from "react";
import { Animated } from "react-native";

interface Props {
  children: React.ReactNode;
}

export const AnimatedContainer: React.FC<Props> = ({ children }) => {
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const animatedStyle = {
    transform: [
      {
        translateY: scrollOffsetY.interpolate({
          inputRange: [0, 200],
          outputRange: [200, 100],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <Animated.View
      style={[
        { flex: 1, backgroundColor: "#F2F2F2", marginTop: -200 },
        animatedStyle,
      ]}
      shouldRasterizeIOS={true}
      renderToHardwareTextureAndroid={true}
    >
      {children}
    </Animated.View>
  );
};
