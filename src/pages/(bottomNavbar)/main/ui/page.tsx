import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { FixedButton } from "./FixedButton";
import { Screen } from "@/widgets/_layouts/Screen";
import { Animated } from "react-native";

export const MainPage = () => {
  // const scrollOffsetY = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <Screen>
        <Stories />
        <Search />
        <CardsSection />
        <FixedButton />
      </Screen>
      {/* <StoryView /> */}
    </>
  );
};
