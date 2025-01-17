import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { FixedButton } from "./FixedButton";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";

export const MainPage = () => {
  return (
    <>
      <Screen>
        <Stories />
        <Search />
        {/* <CustomScrollView hasBottomBar> */}
        <CardsSection />
        {/* </CustomScrollView> */}
        <FixedButton />
      </Screen>
      {/* <StoryView /> */}
    </>
  );
};
