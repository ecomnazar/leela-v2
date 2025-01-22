import React from "react";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Screen } from "@/widgets/_layouts/Screen";
import { StarWithChart } from "./StarWithChart";
import { TasksList } from "./TasksList";
import { Animated } from "react-native";

export const PlanPage = () => {
  const scrollOffsetY = new Animated.Value(0);

  const animatedOpacity = scrollOffsetY.interpolate({
    inputRange: [0, 1000],
    outputRange: [1, 0.2],
    extrapolate: "clamp",
  });

  return (
    <Screen
      customGradientColors={["transparent", "#DEE4EE", "#8992A0", "#AEB6C4"]}
    >
      <StarWithChart opacity={animatedOpacity} />
      <CustomScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollOffsetY },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        paddingTop={440}
        hasBottomBar
      >
        <TasksList />
      </CustomScrollView>
    </Screen>
  );
};
