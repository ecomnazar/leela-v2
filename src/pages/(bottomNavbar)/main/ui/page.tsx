import React from "react";
import { Stories } from "./Stories";
import { View } from "react-native";
import { PageHeader } from "@/widgets/pageHeader";
import { useAuth } from "@/entities/auth/hooks/useAuth";
import { FixedButton } from "./FixedButton";
import { useFilter } from "../hooks/useFilter";
import { Redirect, useLocalSearchParams } from "expo-router";
import { CreateStoryModal } from "@/features/profile/modals/CreateStoryModal";

export const MainPage = () => {
  useFilter();
  useAuth();

  // browser
  const params = useLocalSearchParams();
  const code = params?.code as string;
  if (code) return <Redirect href={`/redirect?code=${code}`} />;

  return (
    <>
      <PageHeader enableEnergyShowcase enableBalanceShowcase disableBorder />
      <View style={{ flex: 1, marginTop: 10 }}>
        <Stories />

        {/* <AnimatedContainer>
          <Search />
          <CardsSection />
        </AnimatedContainer> */}
      </View>
      <FixedButton />

      <CreateStoryModal />
    </>
  );
};
