import clsx from "clsx";
import React from "react";
import { Animated, Platform, Pressable, Text, View } from "react-native";

import { labels } from "../constants/labels";
import { Icon } from "./Icon";
import { useOpacity } from "../hooks/useOpacity";
import { CustomText } from "@/shared/ui/CustomText";

export const BottomNavbar = ({ state, descriptors, navigation }: any) => {
  const opacity = useOpacity();

  return (
    <Animated.View style={{ opacity }}>
      <View className="absolute bg-white bottom-0 flex-row justify-between items-center rounded-t-[20px] w-full border border-grayPrimary/40">
        {(state.routes as any[]).map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          if (["_sitemap", "_not-found"].includes(route.name)) return null;

          const label: keyof typeof labels =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              className={clsx("flex-1 justify-center items-center", {
                "h-[95px] pb-[14px]": Platform.OS === "ios",
                "h-[80px]": Platform.OS !== "ios",
                "pointer-events-none opacity-20": label === "profile",
              })}
            >
              <Icon route={route} isFocused={isFocused} />
              <CustomText size={11} weight="semibold" className="mt-2">
                {labels[label]}
              </CustomText>
            </Pressable>
          );
        })}
      </View>
    </Animated.View>
  );
};
