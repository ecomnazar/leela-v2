import React from "react";
import { SearchSection } from "./SearchSection";
import { CardsSection } from "./CardsSection";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Stories } from "./Stories";
import { Text, View } from "react-native";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";

export const MainPage = () => {
  return (
    <Screen>
      <CustomScrollView hasBottomBar hasHeader>
        <Stories />
        <SearchSection />
        <CardsSection />
      </CustomScrollView>
      <View className="absolute bottom-24 right-0 z-10 pr-4">
        <View className="h-[51px] rounded-full bg-yellowPrimary px-6 flex justify-center">
          <Flex className="gap-x-1.5 -translate-y-[1px]">
            <Icon
              type="plus"
              fill="#FFFFFF"
              width={15}
              height={15}
              className="translate-y-[1px]"
            />
            <Text className="text-white text-[19px] font-medium">
              Задать вопрос
            </Text>
          </Flex>
        </View>
      </View>
    </Screen>
  );
};
