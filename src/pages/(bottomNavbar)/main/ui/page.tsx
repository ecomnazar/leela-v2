import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { View } from "react-native";
import { PageHeader } from "@/widgets/pageHeader";
import { useAuth } from "@/entities/auth/hooks/useAuth";
import { FixedButton } from "./FixedButton";
import { useFilter } from "../hooks/useFilter";
import { AnimatedContainer } from "./AnimatedContainer";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useRedirect } from "../hooks/useRedirect";

export const MainPage = () => {
  useFilter();
  useAuth();
  // useRedirect();

  // browser
  const params = useLocalSearchParams();
  const code = params?.code as string;
  if (code) return <Redirect href={`/redirect?code=${code}`} />;

  return (
    <>
      <PageHeader enableEnergyShowcase enableBalanceShowcase disableBorder />
      <View style={{ flex: 1, marginTop: 10 }}>
        <Stories />
        <AnimatedContainer>
          <Search />
          <CardsSection />
        </AnimatedContainer>
      </View>
      <FixedButton />
    </>
  );
};
