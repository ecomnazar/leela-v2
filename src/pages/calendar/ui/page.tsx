import React from "react";
import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Screen } from "@/widgets/_layouts/Screen";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Days } from "./Days";
import { Habits } from "./Habits";
import { PADDING_TOP_WITH_SCREEN_HEADER } from "@/shared/constants/sizes";

export const CalendarPage = () => {
  return (
    <Screen title="Среда, 12 апреля">
      <CustomScrollView paddingTop={PADDING_TOP_WITH_SCREEN_HEADER}>
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
