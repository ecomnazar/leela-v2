import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { Animated, Text, View } from "react-native";
import { MainPageContext } from "@/shared/providers/mainPageProvider";
import { PageHeader } from "@/widgets/pageHeader";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getPublicThemesApi } from "@/entities/theme/model/themeThunk";
import {
  IGetPublicThemesProps,
  TThemeSortType,
} from "@/entities/theme/model/interfaces";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useAuth } from "@/entities/auth/hooks/useAuth";
import { FixedButton } from "./FixedButton";
import { refreshTokenApi } from "@/entities/auth/model/authThunk";

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

  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  React.useEffect(() => {
    const data: IGetPublicThemesProps = {
      sort_by: sortBy,
      search_query: searchQuery,
    };
    dispatch(getPublicThemesApi(data));
  }, [sortBy, searchQuery]);

  React.useEffect(() => {
    setSortBy((params.filter as TThemeSortType) || "COMMENTS_ASC");
  }, [params.filter]);

  React.useEffect(() => {
    setSearchQuery((params.search_query as string) || "");
  }, [params.search_query]);

  React.useEffect(() => {
    // dispatch(getPublicThemeTagsApi());
  }, []);

  useAuth();

  // it means that webpage opened in browser, not in miniapp
  const code = params?.code as string;
  if (code) return <Redirect href={`/redirect?code=${code}`} />;

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
    </>
  );
};
