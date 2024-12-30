import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import React from "react";
import { Text, View } from "react-native";
import { Selector } from "./Selector";

export const Conversation = () => {
  return (
    <CustomScrollView paddingBottom={20} style={{ flex: 1 }}>
      <Container>
        <Text className="text-center pt-2 pb-2 text-[#B4B9BB] dark:text-[#B4B9BB]/40">
          21 Мая, 18:18
        </Text>
        <View className="max-w-[75%] bg-white dark:bg-[#272636] border border-grayPrimary/40 rounded-lg px-3 pt-1.5 pb-3 mb-2">
          <Text className="text-yellowPrimary dark:text-white/40 font-medium text-xs">
            Ассистент
          </Text>
          <Text className="text-textPrimary dark:text-white font-semibold text-[14px] mt-1">
            Какой один пункт подходит вам сейчас больше остальных:
          </Text>
          <View className="mt-3">
            <Selector title="Я эксперт / основатель онлайн школы" />
            <Selector title="Я продюсер, ищу экспертов для продвижения" />
            <Selector title="У меня есть вопрос, проблема или запрос" />
            <Selector title="Не знаю, что хочу, протестируйте меня" />
          </View>
        </View>
        {/* <View className="max-w-[75%] bg-white dark:bg-[#272636] border border-grayPrimary/40 rounded-lg px-3 pt-1.5 pb-3">
          <Text className="text-yellowPrimary dark:text-white/40 font-medium text-xs">
            Ассистент
          </Text>
          <Text className="text-textPrimary dark:text-white font-semibold text-[14px] mt-1">
            Какой один пункт подходит вам сейчас больше остальных:
          </Text>
          <View className="mt-3">
            <Selector title="Я эксперт / основатель онлайн школы" />
            <Selector title="Я продюсер, ищу экспертов для продвижения" />
            <Selector title="У меня есть вопрос, проблема или запрос" />
            <Selector title="Не знаю, что хочу, протестируйте меня" />
          </View>
        </View> */}
      </Container>
    </CustomScrollView>
  );
};
