import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { FixedButton } from "./FixedButton";
import { AskQuestionModal } from "./modals/AskQuestionModal";
import { CreateAccountModal } from "./modals/CreateAccountModal";
import { Animated, View } from "react-native";
import { PADDING_TOP_WITH_SCREEN_HEADER } from "@/shared/constants/sizes";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { BasicPageHeader } from "@/widgets/basicPageHeader";

export const MainPage = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);
  const animatedHeight = scrollOffsetY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });

  return (
    <>
      <BasicPageHeader />
      <View style={{ flex: 1, paddingTop: PADDING_TOP_WITH_SCREEN_HEADER }}>
        <Stories />
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: "#F2F2F2",
            marginTop: animatedHeight,
          }}
        >
          <Search />
          <CardsSection />
        </Animated.View>
      </View>
      <FixedButton />
      {/* modals */}
      <AskQuestionModal />
      <CreateAccountModal />
    </>
  );
};
