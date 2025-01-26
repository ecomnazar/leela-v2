import React from "react";
import { Container } from "@/shared/ui/Container";
import { View } from "react-native";
import { Card } from "./Card";
import { CardsFilter } from "../../main/ui/CardsSection/ui/CardsFilter";

export const Cards = () => {
  return (
    <>
      <CardsFilter />
      <Container>
        <View className="h-[1.5px] w-full bg-[#D2D4D5] my-3" />
        <View className="gap-y-2">
          {Array.from({ length: 10 }).map((_, index) => {
            return <Card key={index} />;
          })}
        </View>
      </Container>
    </>
  );
};
