import React from "react";
import { Flex } from "@/shared/ui/Flex";
import { Container } from "@/shared/ui/Container";
import { Pressable, TextInput, View } from "react-native";
import SettingIcon from "assets/icons/settings.svg";
import SearchIcon from "assets/icons/search.svg";
import { router, useLocalSearchParams } from "expo-router";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { SEARCH_PARAMS } from "@/shared/constants/searchParams";

export const Search = () => {
  const params = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  const debouncedSearch = useDebounce(searchQuery, 500);

  React.useEffect(() => {
    if (searchQuery !== null) {
      router.setParams({ [SEARCH_PARAMS.SEARCH_QUERY]: debouncedSearch });
    }
  }, [debouncedSearch]);

  React.useEffect(() => {
    setSearchQuery((params.search_query as string | null) || "");
  }, [params.search_query]);

  return (
    <Container className="mt-4">
      <Flex justify="between" align="center">
        <View className="relative h-[36px] bg-gray-200 w-[88%] rounded-lg">
          <TextInput
            className="w-full h-full pl-10 placeholder:opacity-40 placeholder:text-[#2F3446] placeholder:text-md outline-none font-wixRegular"
            placeholder="Search"
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery || ""}
          />
          <View className="absolute top-1/2 left-3 -translate-y-1/2">
            <SearchIcon width={19} height={19} />
          </View>
        </View>
        <Pressable onPress={() => router.push("/mainFilter")}>
          <SettingIcon width={24} height={24} fill={"#8B9497"} />
        </Pressable>
      </Flex>
    </Container>
  );
};
