import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";
import { View } from "react-native";

interface Props {
  length?: number;
  className?: string;
}

const Card = () => {
  return (
    <View className="animate-pulse border-borderPrimary border rounded-2xl p-3">
      <Flex justify="between" align="start">
        <Flex className="gap-x-4">
          <View className="bg-lightGrayPrimary w-11 h-11 rounded-full" />
          <View className="gap-y-2">
            <View className="h-4 w-24 bg-lightGrayPrimary" />
            <View className="h-4 w-10 bg-lightGrayPrimary" />
          </View>
        </Flex>
        <Flex align="start" className="gap-x-2">
          <View className="h-4 w-16 bg-lightGrayPrimary" />
          <View className="h-6 w-6 rounded-full bg-lightGrayPrimary" />
        </Flex>
      </Flex>
      <Flex className="gap-x-1.5 mt-3">
        <View className="h-6 w-24 bg-lightGrayPrimary rounded-full" />
        <View className="h-6 w-24 bg-lightGrayPrimary rounded-full" />
      </Flex>
      <View className="h-6 w-60 bg-lightGrayPrimary mt-3" />
      <View className="h-3 w-full bg-lightGrayPrimary mt-2" />
      <View className="h-3 w-72 bg-lightGrayPrimary mt-2" />
      <Flex className="mt-3" justify="between">
        <View className="h-6 w-20 bg-lightGrayPrimary rounded-lg" />
        <Flex className="gap-x-6">
          <View className="h-6 w-8 bg-lightGrayPrimary rounded-lg" />
          <View className="h-6 w-10 bg-lightGrayPrimary rounded-lg" />
        </Flex>
      </Flex>
    </View>
  );
};

export const ThemeCardSkeleton: React.FC<Props> = ({ length, className }) => {
  if (length) {
    return (
      <Container className={clsx("gap-y-3", className)}>
        {Array.from({ length: length }).map((_, index) => {
          return <Card key={index} />;
        })}
      </Container>
    );
  }

  return <Card />;
};
