import React from "react";
import { Container } from "@/shared/ui/Container";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import images from "assets/images";
import { Flex } from "@/shared/ui/Flex";
import ChatIcon from "assets/icons/chat.svg";

export const CardsSection = () => {
  return (
    <Container className="mt-6 gap-y-2.5">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <Flex
            key={index}
            className="gap-x-4 h-[100px] bg-white dark:bg-backgroundPrimary rounded-2xl border-grayPrimary/40 border p-2"
          >
            <View className="h-full w-24 bg-grayPrimary/40 rounded-2xl overflow-hidden">
              <Image
                source={images.groupExample1}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View>
              <Text className="text-textPrimary dark:text-white/75 text-2xl font-semibold">
                Звезды
              </Text>
              <Flex className="gap-x-1.5 mt-3">
                <ChatIcon width={17} height={17} fill={"#8B9497"} />
                <Text className="text-grayPrimary dark:text-white/75 text-md font-semibold -translate-y-0.5">
                  Андрей
                </Text>
              </Flex>
              <Text
                numberOfLines={1}
                className="text-grayPrimary/65 text-md mt-1"
              >
                А как вы обычно интересы настр...
              </Text>
            </View>
          </Flex>
        );
      })}
    </Container>
  );
};
