import React from "react";
import { Pressable, Text, View } from "react-native";
import ChatIcon from "assets/icons/chat.svg";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { useTheme } from "@/shared/theme/useTheme";

export const ProfilePage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Profile page</Text>
      <ChatIcon width={20} height={20} fill={"#213555"} />
      <Text className="text-red-300">Tailwind</Text>
      <View className="flex-row">
        <Container className="">
          <Flex className="justify-between pt-10">
            <View className="bg-red-300 w-full">
              <Flex justify="center" align="start">
                <View className="w-10 h-10 bg-blue-400"></View>
                <View className="w-12 h-12 bg-blue-500"></View>
              </Flex>
            </View>
          </Flex>
        </Container>
      </View>
      <View className="w-10 h-10 bg-black"></View>
      <Text className="text-blue-400 dark:text-black text-[60px]">{theme}</Text>
      <Pressable
        className="w-10 h-10 bg-red-300 mt-10"
        onPress={() => toggleTheme("dark")}
      >
        <Text>dark</Text>
      </Pressable>
      <Pressable
        className="w-10 h-10 bg-blue-300 mt-10"
        onPress={() => toggleTheme("light")}
      >
        <Text>light</Text>
      </Pressable>
    </View>
  );
};
