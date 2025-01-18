import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { FixedButton } from "./FixedButton";
import { Screen } from "@/widgets/_layouts/Screen";
import { AskQuestionModal } from "./modals/AskQuestionModal";

export const MainPage = () => {
  return (
    <>
      <Screen>
        <Stories />
        <Search />
        <CardsSection />
        <FixedButton />
      </Screen>
      {/* <StoryView /> */}
      {/* modals */}
      <AskQuestionModal />
    </>
  );
};
