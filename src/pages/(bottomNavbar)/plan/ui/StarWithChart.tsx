import RadarChart from "@/shared/ui/Chart";
import StarWithRoundedEdges from "@/shared/ui/Star";
import React from "react";
import { Animated, View } from "react-native";

interface Props {
  opacity: Animated.AnimatedInterpolation<string | number>;
}

export const StarWithChart: React.FC<Props> = ({ opacity }) => {
  return (
    <Animated.View
      style={{
        transform: [{ translateX: "-50%" }],
        opacity: opacity,
        position: "absolute",
        left: "50%",
        top: 250,
      }}
    >
      <View className="absolute z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <StarWithRoundedEdges size={180} />
      </View>
      <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <RadarChart size={360} innerRadius={105} />
      </View>
    </Animated.View>
  );
};
