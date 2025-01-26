import React from "react";
import RadarChart from "@/shared/ui/Chart";
import { Animated, Dimensions, Platform, View } from "react-native";
import StarWithRoundedEdges from "@/shared/ui/Star";

interface Props {
  opacity: Animated.AnimatedInterpolation<string | number>;
}

const { width } = Dimensions.get("window");
const CHART_WIDTH = width * 0.93;

export const StarWithChart: React.FC<Props> = ({ opacity }) => {
  return (
    <Animated.View
      style={{
        transform: [{ translateX: "-50%" }],
        opacity: opacity,
        position: "absolute",
        left: "50%",
        top: Platform.OS === "ios" ? 290 : 250,
      }}
    >
      <View className="absolute z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <StarWithRoundedEdges size={CHART_WIDTH / 2} />
      </View>
      <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <RadarChart size={CHART_WIDTH} innerRadius={105} />
      </View>
    </Animated.View>
  );
};
