import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";

// @ts-ignore
export const BottomNavbar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props: any) => (
      <Feather name="home" size={24} color={"black"} {...props} />
    ),
    tasks: (props: any) => (
      <Feather name="heart" size={24} color={"black"} {...props} />
    ),
    cart: (props: any) => (
      <Feather name="shopping-cart" size={24} color={"black"} {...props} />
    ),
    profile: (props: any) => (
      <Feather name="user" size={24} color={"black"} {...props} />
    ),
  };

  return (
    <View className="absolute bottom-0 flex-row justify-between items-center bg-white rounded-t-[20px] w-full">
      {/* @ts-ignore */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "_not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

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

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={clsx("flex-1 justify-center items-center", {
              "h-[75px] pb-[14px]": Platform.OS === "ios",
              "h-[60px]": Platform.OS !== "ios",
            })}
          >
            {/* @ts-ignore */}
            {icons[route.name]({
              color: isFocused ? "red" : "#000",
            })}
            {/* <Text>ABC</Text> */}
            {/* <Text style={{ color: isFocused ? "#354A4D" : "#000" }}>
              {label}
            </Text> */}
          </Pressable>
        );
      })}
    </View>
  );
};
