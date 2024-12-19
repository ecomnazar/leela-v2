import clsx from "clsx";
import React from "react";
import { Platform, Pressable, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import ChatIcon from "assets/icons/navbar/chat.svg";
import TasksIcon from "assets/icons/navbar/tasks.svg";
import CartIcon from "assets/icons/navbar/cart.svg";
import ProfileIcon from "assets/icons/navbar/profile.svg";
import { useTheme } from "@/shared/theme/useTheme";

const icons = {
  index: (props: any) => <ChatIcon width={34} height={34} {...props} />,
  tasks: (props: any) => <TasksIcon width={34} height={34} {...props} />,
  cart: (props: any) => <CartIcon width={34} height={34} {...props} />,
  profile: (props: any) => <ProfileIcon width={34} height={34} {...props} />,
};

// @ts-ignore
export const BottomNavbar = ({ state, descriptors, navigation }) => {
  const { theme } = useTheme();

  const fill = theme === "light" ? "#33747C" : "#fff";
  const notFill = theme === "light" ? "#8B9497" : "#594455";

  return (
    <View
      className={clsx(
        "absolute bottom-0 flex-row justify-between items-center rounded-t-[20px] w-full",
        {
          "bg-white": theme === "light",
          "bg-[#2F152A]": theme !== "light",
        }
      )}
    >
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
              "h-[95px] pb-[14px]": Platform.OS === "ios",
              "h-[80px]": Platform.OS !== "ios",
            })}
          >
            {/* @ts-ignore */}
            {icons[route.name]({
              fill: isFocused ? fill : notFill,
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
