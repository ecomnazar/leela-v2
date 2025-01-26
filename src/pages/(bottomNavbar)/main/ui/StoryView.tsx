import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Portal } from "@/shared/ui/Portal";
import images from "assets/images";
import clsx from "clsx";
import { Image } from "expo-image";
import React from "react";
import { Platform, Text, View } from "react-native";

export const StoryView = () => {
  return (
    <Portal name="Story view">
      <View className="absolute top-0 left-0 bottom-0 right-0 bg-neutral-900">
        <Flex
          justify="between"
          className={clsx("absolute left-0 right-0 px-2 z-10", {
            "top-4": Platform.OS === "web",
            "top-10": Platform.OS !== "web",
          })}
        >
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <View
                key={index}
                className={clsx("w-[32.4%] rounded-full h-1 ", {
                  "bg-white": index === 0,
                  "bg-white/40": index !== 0,
                })}
              />
            );
          })}
        </Flex>
        <View className="absolute bottom-4 left-0 right-0 z-10">
          <Container>
            <View>
              <Flex className="mb-4 gap-x-3">
                <Image
                  source={images.stories1}
                  className="w-10 h-10 rounded-full"
                />
                <View className="gap-y-0.5">
                  <Text className="text-white font-semibold text-[15px]">
                    Алена
                  </Text>
                  <Text className="text-white text-[14px]">Психолог</Text>
                </View>
              </Flex>
              <Text className="text-[14px] text-white mb-5">
                Здравствуйте, как связана седина и гипотериоз? Сначала я думала,
                что это просто генетика...
              </Text>
            </View>
            <View className="h-[56px] w-full bg-[#ECF1F740] border border-white rounded-lg flex items-center justify-center">
              <Text
                className="text-white text-[18px] font-semibold"
                style={{ transform: [{ translateY: -2 }] }}
              >
                Открыть профиль
              </Text>
            </View>
          </Container>
        </View>
        <Image
          source={images.fullStory}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </Portal>
  );
};
