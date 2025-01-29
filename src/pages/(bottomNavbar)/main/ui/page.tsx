import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { FixedButton } from "./FixedButton";
import { AskQuestionModal } from "./modals/AskQuestionModal";
import { CreateAccountModal } from "./modals/CreateAccountModal";
import { Animated, View } from "react-native";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { PageHeader } from "@/widgets/pageHeader";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getPublicThemes } from "@/entities/theme/model/themeThunk";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const animatedStyle = {
    transform: [
      {
        translateY: scrollOffsetY.interpolate({
          inputRange: [0, 200],
          outputRange: [200, 100],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  React.useEffect(() => {
    dispatch(getPublicThemes());
  }, []);

  return (
    <>
      <PageHeader enableEnergyShowcase enableBalanceShowcase disableBorder />
      <View style={{ flex: 1, marginTop: 10 }}>
        <Stories />
        <Animated.View
          style={[
            { flex: 1, backgroundColor: "#F2F2F2", marginTop: -200 },
            animatedStyle,
          ]}
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
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
