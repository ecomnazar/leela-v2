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
  useRedirect();

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
