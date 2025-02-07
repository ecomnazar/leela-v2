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

export const MainPage = () => {
  useFilter();
  useAuth();

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
