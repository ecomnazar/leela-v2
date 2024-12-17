import React from "react";
import { Text, View } from "react-native";
import ChatIcon from "assets/icons/chat.svg";

export const MainPage = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Main page</Text>
      <ChatIcon width={20} height={20} fill={"#213555"} />
      <Text className="text-red-300">Tailwind</Text>
      <View className="w-10 h-10 bg-[#000]"></View>
    </View>
  );
};
