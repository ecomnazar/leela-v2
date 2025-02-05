import React from "react";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Screen } from "@/widgets/_layouts/Screen";
import { StarWithChart } from "./StarWithChart";
import { TasksList } from "./TasksList";
import { Animated, Platform } from "react-native";
import { PageHeader } from "@/widgets/pageHeader";

export const PlanPage = () => {
  const scrollOffsetY = new Animated.Value(0);

  const animatedStarOpacity = scrollOffsetY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const gradient =
    Platform.OS === "ios"
      ? ["transparent", "transparent", "#8992A0", "#AEB6C4"]
      : ["transparent", "#DEE4EE", "#8992A0", "#AEB6C4"];

  return (
    <Screen customGradientColors={gradient}>
      <Animated.View style={{}}>
        <PageHeader
          enableEnergyShowcase
          enableBalanceShowcase
          title="ПЛАН"
          disableBorder
          scrollOffsetY={scrollOffsetY}
          animated
        />
      </Animated.View>
      <StarWithChart opacity={animatedStarOpacity} />
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
        paddingTop={Platform.OS === "ios" ? 380 : 380}
        hasBottomBar
      >
        <TasksList />
      </CustomScrollView>
    </Screen>
  );
};
