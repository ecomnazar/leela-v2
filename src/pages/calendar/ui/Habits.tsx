import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import React from "react";
import { Text, View } from "react-native";
import PlusIcon from "assets/icons/plus.svg";
import RunningManIcon from "assets/icons/habits/runningMan.svg";
import TickIcon from "assets/icons/tick.svg";
import BycicleIcon from "assets/icons/habits/bycicle.svg";

export const Habits = () => {
  return (
    <Container className="mt-6">
      <Flex justify="between">
        <View className="w-[32%] h-[120px] bg-primary rounded-2xl flex items-center justify-center gap-y-2">
          <View className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
            <PlusIcon width={14} height={14} fill={"#33747C"} />
          </View>
          <Text className="text-white font-semibold text-base">Добавить</Text>
        </View>
        <View className="w-[32%] h-[120px] bg-yellowPrimary rounded-2xl border border-black/40 px-3 pt-4 pb-3 justify-between">
          <Flex justify="between">
            <RunningManIcon width={22} height={22} fill={"#FFF"} />
            <View className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <TickIcon width={14} height={14} fill={"#E5BF85"} />
            </View>
          </Flex>
          <View>
            <Text className="text-white text-lg font-bold translate-y-0.5">
              Бег
            </Text>
            <Text numberOfLines={1} className="text-white text-sm font-normal">
              07.00 на 10 км
            </Text>
          </View>
        </View>
        <View className="w-[32%] h-[120px] bg-graySecondary rounded-2xl border border-black/40 px-3 pt-4 pb-3 justify-between">
          <Flex justify="between">
            <BycicleIcon width={22} height={22} fill={"#FFF"} />
            <Text className="text-white font-semibold text-base">70%</Text>
          </Flex>
          <View>
            <Text className="text-white text-base font-bold translate-y-0.5">
              Велосипед
            </Text>
            <Text numberOfLines={1} className="text-white text-sm font-normal">
              07.00 на 10 км
            </Text>
          </View>
        </View>
      </Flex>
    </Container>
  );
};
