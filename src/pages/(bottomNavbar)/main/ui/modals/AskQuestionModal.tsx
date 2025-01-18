import { Badge } from "@/shared/ui/Badge";
import { BottomSheet } from "@/shared/ui/BottomSheet";
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { useModal } from "@/shared/zustand/useModal";
import React from "react";
import { Text, TextInput, View } from "react-native";

export const AskQuestionModal = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <BottomSheet isOpen={isOpen} onClose={closeModal}>
      <Container>
        <Text className="text-textPrimary text-[30px] text-center font-medium mt-4">
          Задать вопрос
        </Text>
        <Text className="text-textPrimary text-[14px] mt-4">
          Оплатив практику “Как пережить расставание”, вы автоматически
          добавляете ее в свой план на день. Для выполнения практики перейдите в
          раздел меню “План”.
        </Text>
        <Text className="font-semibold text-textPrimary text-[15px] mt-4 mb-2.5">
          Ваш вопрос
        </Text>
        <View className="border border-[#33364740] h-[150px] rounded-xl p-2">
          <TextInput
            className="outline-none text-textPrimary/90 text-sm"
            placeholder="Как оформить подписку?"
          />

          <View className="mt-auto">
            <View className="border-t-2 border-black/10 pt-2">
              <Flex className="gap-x-2">
                <Badge size="small" color="#27263630">
                  Расставание
                </Badge>
                <Badge size="small" color="#F5D0C2">
                  Отношение с родителями
                </Badge>
              </Flex>
            </View>
          </View>
        </View>
        <Flex className="my-3 gap-x-2">
          <Checkbox />
          <Text className="text-[14px] text-textPrimary">
            Отправить анонимно
          </Text>
        </Flex>
        <Button>Отправить</Button>
      </Container>
    </BottomSheet>
  );
};
