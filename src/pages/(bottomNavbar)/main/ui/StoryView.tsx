import { Portal } from "@/shared/ui/Portal";
import React from "react";
import { Text, View } from "react-native";

export const StoryView = () => {
  return (
    <Portal name="Story view">
      <View className="absolute top-0 left-0 flex-1 bg-red-300 w-full h-full !z-[999999]">
        <Text>Story View</Text>
      </View>
    </Portal>
  );
};
