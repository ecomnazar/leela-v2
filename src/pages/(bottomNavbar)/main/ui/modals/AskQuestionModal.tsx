import { Badge } from "@/shared/ui/Badge";
import { BottomSheet } from "@/shared/ui/BottomSheet";
import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Container } from "@/shared/ui/Container";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { useModal } from "@/shared/zustand/useModal";
import clsx from "clsx";
import React from "react";
import { Platform, TextInput, View } from "react-native";

export const AskQuestionModal = () => {
  const { isOpen, closeModal, type } = useModal();

  const open = isOpen && type === "ask-question";

  return (
    <BottomSheet isOpen={open} onClose={closeModal}>
      <Container>
        <CustomText size={32} weight="semibold" className="text-center mt-4">
          Задать вопрос
        </CustomText>
        <CustomText size={14} weight="medium" className="mt-2">
          Оплатив практику “Как пережить расставание”, вы автоматически
          добавляете ее в свой план на день. Для выполнения практики перейдите в
          раздел меню “План”.
        </CustomText>
        <CustomText size={14} weight="bold" className="mt-4 mb-2.5">
          Ваш вопрос
        </CustomText>
        <View
          className={clsx(
            "border border-[#33364740] h-[150px] rounded-xl p-2",
            {
              "pt-0": Platform.OS == "android",
            }
          )}
        >
          <TextInput
            className="outline-none text-textPrimary/90 font-wixMedium text-[14px]"
            placeholder="Как оформить подписку?"
            multiline
            numberOfLines={4}
          />

          <View className="mt-auto">
            <View className="border-t-2 border-black/10 pt-2">
              <Flex className="gap-x-2">
                <Badge size="medium" color="#27263630">
                  Расставание
                </Badge>
                <Badge size="medium" color="#F5D0C2">
                  Отношение с родителями
                </Badge>
              </Flex>
            </View>
          </View>
        </View>
        <Flex className="my-3 gap-x-2">
          <Checkbox />
          <CustomText size={14} style={{ transform: [{ translateY: -1 }] }}>
            Отправить анонимно
          </CustomText>
        </Flex>
        <Button>Отправить</Button>
      </Container>
    </BottomSheet>
  );
};
