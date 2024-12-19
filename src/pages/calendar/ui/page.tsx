import React from "react";
import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Screen } from "@/widgets/_layouts/Screen";
import { Platform, Pressable, ScrollView, Text, View } from "react-native";
import { Flex } from "@/shared/ui/Flex";
import { LinearGradient } from "expo-linear-gradient";
import clsx from "clsx";
import { Days } from "./Days";
import { Habits } from "./Habits";

export const CalendarPage = () => {
  return (
    <Screen title="Среда, 12 апреля">
      <CustomScrollView paddingTop={100}>
        <Days />
        <Container className="mt-4">
          <View className="relative h-7 bg-graySecondary/40 dark:bg-black/40 rounded-full">
            <LinearGradient
              style={{
                width: "50%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                borderRadius: 100,
              }}
              colors={["#56929A", "#4F858D", "#47787F"]}
            />
          </View>
        </Container>
        <Habits />
      </CustomScrollView>
    </Screen>
  );
};
