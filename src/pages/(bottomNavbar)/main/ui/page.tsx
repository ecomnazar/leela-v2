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
import {
  getPublicThemesApi,
  getPublicThemeTagsApi,
} from "@/entities/theme/model/themeThunk";
import {
  IGetPublicThemesProps,
  TThemeSortType,
} from "@/entities/theme/model/interfaces";
import { useLocalSearchParams } from "expo-router";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const params = useLocalSearchParams();
  const [sortBy, setSortBy] = React.useState<TThemeSortType>("COMMENTS_ASC");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

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
    const data: IGetPublicThemesProps = {
      sort_by: sortBy,
      search_query: searchQuery,
    };
    dispatch(getPublicThemesApi(data));
  }, [sortBy, searchQuery]);

  React.useEffect(() => {
    dispatch(getPublicThemeTagsApi());
  }, []);

  React.useEffect(() => {
    setSortBy((params.filter as TThemeSortType) || "COMMENTS_ASC");
  }, [params.filter]);

  React.useEffect(() => {
    setSearchQuery((params.search_query as string) || "");
  }, [params.search_query]);

  console.log(params.search_query);

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
