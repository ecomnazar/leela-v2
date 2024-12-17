import React from "react";
import { Text, View } from "react-native";
import ChatIcon from "assets/icons/chat.svg";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";

export const MainPage = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Main page</Text>
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
    </View>
  );
};
