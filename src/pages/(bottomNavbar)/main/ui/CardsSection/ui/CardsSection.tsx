import React from "react";
import { View } from "react-native";
import { ScrollableCardsList } from "./ScrollableCardsList";
import { CardsFilter } from "./CardsFilter";

export const CardsSection = () => {
  return (
    <>
      <CardsFilter />
      <View className="h-[1.5px] w-full bg-[#D2D4D5] mt-4" />
      <ScrollableCardsList />
    </>
  );
};
