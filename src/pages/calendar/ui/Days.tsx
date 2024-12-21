import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, Pressable, ScrollView, Text, View } from "react-native";
import TickIcon from "assets/icons/tick.svg";

const days = ["Ср", "Чт", "Пт", "Сб", "Вс", "Пн", "Вт"];
export const Days = () => {
  const [activeDay, setActiveDay] = React.useState(days[0]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="px-4 pb-4"
      alwaysBounceHorizontal={false}
    >
      <Flex className="gap-x-1.5">
        {days.map((item, index) => {
          const active = activeDay === item;
          return (
            <Pressable
              key={item}
              onPress={() => setActiveDay(item)}
              className="relative w-[50px] h-[65px] bg-white dark:bg-darkSecondary border border-grayPrimary/40 rounded-2xl py-2"
            >
              <Text
                className={clsx("text-center font-semibold text-sm", {
                  "text-white/40": active,
                  "text-grayPrimary dark:text-white/40": !active,
                })}
              >
                {item}
              </Text>
              <Text
                className={clsx("text-center font-bold mt-0", {
                  "text-white": active,
                  "text-textPrimary dark:text-white": !active,
                  "text-lg": Platform.OS === "web",
                  "text-2xl": Platform.OS !== "web",
                })}
              >
                {index + 12}
              </Text>
              {active && (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                  }}
                >
                  <LinearGradient
                    colors={["#558F97", "#518992", "#487B81"]}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 13,
                    }}
                  />
                </View>
              )}
              {active && (
                <View className="absolute bottom-[-10px] left-0 flex items-center justify-center mx-auto w-full">
                  <View className="w-[22px] h-[22px] bg-[#487B81] rounded-full flex items-center justify-center">
                    <View className="w-[17px] h-[17px] rounded-full bg-white flex items-center justify-center">
                      <TickIcon width={11} height={11} fill={"#487B81"} />
                    </View>
                  </View>
                </View>
              )}
            </Pressable>
          );
        })}
      </Flex>
    </ScrollView>
  );
};
