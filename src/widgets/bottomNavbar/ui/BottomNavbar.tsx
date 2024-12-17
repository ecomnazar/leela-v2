import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

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
    <View style={styles.tabbar}>
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
            style={styles.tabbarItem}
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

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: Dimensions.get("screen").width,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "ios" ? 75 : 60,
    paddingBottom: Platform.OS === "ios" ? 14 : 0,
  },
});
