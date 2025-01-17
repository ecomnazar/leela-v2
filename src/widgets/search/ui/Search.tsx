import React from "react";
import { Flex } from "@/shared/ui/Flex";
import { Container } from "@/shared/ui/Container";
import { Pressable, TextInput, View } from "react-native";
import SettingIcon from "assets/icons/settings.svg";
import SearchIcon from "assets/icons/search.svg";

export const Search = () => {
  return (
    <Container className="mt-4">
      <Flex justify="between" align="center">
        <View className="relative h-[36px] bg-[#ECF1F7] w-[88%] rounded-lg">
          <TextInput
            className="w-full h-full pl-10 placeholder:opacity-40 placeholder:text-[#2F3446] placeholder:text-md outline-none"
            placeholder="Search"
          />
          <View className="absolute top-1/2 left-3 -translate-y-1/2">
            <SearchIcon width={19} height={19} />
          </View>
        </View>
        <Pressable>
          <SettingIcon width={24} height={24} fill={"#8B9497"} />
        </Pressable>
      </Flex>
    </Container>
  );
};
