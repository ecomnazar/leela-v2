import React from "react";
import { Pressable, Text, View } from "react-native";
import { Flex } from "./Flex";
import { LinearGradient } from "expo-linear-gradient";
import clsx from "clsx";

interface Props {
  className?: string;
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const Tabbar: React.FC<Props> = ({
  className,
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <Flex
      className={clsx("bg-textPrimary/50 self-start rounded-lg", className)}
    >
      {tabs.map((tab, index) => (
        <Pressable
          onPress={() => setActiveTab(tab)}
          key={index}
          className={clsx(
            `relative text-white text-md font-medium h-[32px] flex items-center justify-center px-4 rounded-xl`
          )}
        >
          <Text className="text-[15px] relative z-[2] text-white">{tab}</Text>
          {activeTab === tab && (
            <View className="absolute top-0 left-0 right-0 bottom-0 z-[1] flex justify-center">
              <LinearGradient
                colors={["#559098", "#46777E"]}
                style={{ width: "98%", height: "90%", borderRadius: 6 }}
              />
            </View>
          )}
        </Pressable>
      ))}
    </Flex>
  );
};
