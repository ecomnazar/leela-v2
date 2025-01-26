import React from "react";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Search } from "@/widgets/search";
import { Categories } from "./Categories";
import { Filter } from "./Filter";
import { Cards } from "./Cards";
import { PageHeader } from "@/widgets/pageHeader";
import { Animated } from "react-native";

export const CartPage = () => {
  const scrollOffsetY = new Animated.Value(0);

  return (
    <Screen>
      <PageHeader
        enableEnergyShowcase
        enableBalanceShowcase
        disableBorder
        title="МАРКЕТ"
        animated
        scrollOffsetY={scrollOffsetY}
      />
      <CustomScrollView
        hasBottomBar
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
      >
        <Categories />
        <Search />
        <Filter />
        <Cards />
      </CustomScrollView>
    </Screen>
  );
};
