import { Coin } from "@/shared/ui/Coin";
import { Flex } from "@/shared/ui/Flex";
import images from "assets/images";
import clsx from "clsx";
import { Image } from "expo-image";
import React from "react";
import { Platform, Text, View } from "react-native";

export const Materials = () => {
  return (
    <View>
      <View className="gap-y-2">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <Flex key={index} className="gap-x-2">
              {Array.from({ length: 2 }).map((_, i) => {
                return (
                  <View
                    key={i}
                    className="h-[300px] rounded-3xl flex-1 relative overflow-hidden"
                  >
                    <View className="w-full h-full absolute top-0 left-0 scale-[1.03]">
                      <Image
                        source={images.cardBgExample1}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View className="justify-between w-full h-full absolute top-0 left-0 p-6">
                      <View>
                        <Text
                          className={clsx(
                            "text-center text-white font-semibold",
                            {
                              "text-xl": Platform.OS === "web",
                              "text-2xl": Platform.OS !== "web",
                            }
                          )}
                        >
                          Питер Кью
                        </Text>
                        <View className="mt-2 py-1.5 px-5 bg-primary self-start rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm mx-auto">
                          <Text className="text-white font-bold">Автор</Text>
                        </View>
                      </View>
                      <View>
                        <Text className="text-white text-center font-medium">
                          Подсознание,{"\n"}от А до Я
                        </Text>
                        <Flex
                          justify="center"
                          className="mt-4 border-2 border-white w-[85%] mx-auto py-1.5 rounded-xl gap-x-1 backdrop-blur-sm bg-white/20"
                        >
                          <Coin className="scale-[0.8]" />
                          <Text
                            className={clsx("text-white font-bold text-md", {
                              "text-xs": Platform.OS === "web",
                              "text-base": Platform.OS !== "web",
                            })}
                          >
                            2,250
                          </Text>
                        </Flex>
                      </View>
                    </View>
                  </View>
                );
              })}
            </Flex>
          );
        })}
      </View>
    </View>
  );
};
