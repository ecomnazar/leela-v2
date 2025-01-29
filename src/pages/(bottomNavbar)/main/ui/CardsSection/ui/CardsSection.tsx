import React from "react";
import { View } from "react-native";
import { ScrollableCardsList } from "./ScrollableCardsList";
import { CardsFilter } from "./CardsFilter";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { ThemeCardSkeleton } from "@/entities/ui/themeCardSkeleton";

export const CardsSection = () => {
  const { skeletonLoading } = useAppSelector(
    (state) => state.theme.publicThemes
  );

  return (
    <>
      <CardsFilter />
      <View className="h-[1.5px] w-full bg-[#D2D4D5] mt-4 mb-2" />

      {skeletonLoading && <ThemeCardSkeleton length={7} />}
      {!skeletonLoading && <ScrollableCardsList />}
    </>
  );
};
