import clsx from "clsx";
import React from "react";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Platform, Text, TextInput, View } from "react-native";
import ProfileIcon from "assets/icons/navbar/profile.svg";
import GreenPlusIcon from "assets/icons/greenPlus.svg";
import MicrophoneIcon from "assets/icons/microphone.svg";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/shared/theme/useTheme";
import { Conversation } from "./Conversation";

export const ChatPage = () => {
  const { theme } = useTheme();

  const backgroundGradientColors: [string, string, string] =
    theme === "light"
      ? ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
      : ["#2B1729", "#2B1729", "#2C1629"];

  return (
    <Screen disableHeader>
      <View
        className={clsx(
          "bg-white dark:bg-backgroundSecondary border-b-[0.5px] border-grayPrimary dark:border-[#4E4C6A]",
          {
            "h-16": Platform.OS === "web",
            "h-28": Platform.OS !== "web",
          }
        )}
      >
        <Container className="flex justify-center h-full">
          <Flex justify="between">
            <Flex className="gap-x-2">
              <View className="w-9 h-9 bg-[#EFF0F2] border border-[#D7D8DA] rounded-lg flex items-center justify-center">
                <Text className="text-2xl text-black font-medium">?</Text>
              </View>
              <View className="-space-y-1">
                <Text className="text-textPrimary dark:text-white text-base font-semibold">
                  No names
                </Text>
                <Text className="text-grayPrimary dark:text-white/40 text-xs">
                  Ассистент
                </Text>
              </View>
            </Flex>
            <ProfileIcon width={24} height={24} fill={"#8B9497"} />
          </Flex>
        </Container>
      </View>
      <Conversation />
      <View className="relative h-[72px] rounded-t-lg overflow-hidden flex justify-center">
        <Container>
          <Flex justify="between">
            <View className="relative bg-white w-[90%] h-[34px] border border-[#333647]/40 rounded-lg">
              <TextInput
                placeholder="Message"
                className="h-[34px] w-full outline-none border-none px-2 text-sm placeholder:text-[#D2D3D6]"
              />
              <View className="absolute top-0 right-0 bottom-0 flex items-center justify-center pr-1">
                <GreenPlusIcon width={24} height={24} />
              </View>
            </View>
            <View className="">
              <MicrophoneIcon width={24} height={24} />
            </View>
          </Flex>
        </Container>
        <LinearGradient
          colors={backgroundGradientColors}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </View>
    </Screen>
  );
};
