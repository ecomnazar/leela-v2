import { Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const getCubePosition = ({
  index,
  scrollX,
}: {
  index: number;
  scrollX: Animated.Value;
}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rotateY = scrollX.interpolate({
    inputRange,
    outputRange: ["45deg", "0deg", "-45deg"],
    extrapolate: "clamp",
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.05, 0, -width * 0.05],
    extrapolate: "clamp",
  });

  return { rotateY, translateX };
};
