import React from "react";
import { BottomSheet } from "@/shared/ui/BottomSheet";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { useModal } from "@/shared/zustand/useModal";
import { Linking, Pressable, Text, View } from "react-native";
import AppleIcon from "assets/icons/apple.svg";
import GoogleIcon from "assets/icons/google.svg";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getOAuthUrlApi } from "@/entities/auth/model/authThunk";
import { isFulfilled } from "@reduxjs/toolkit";

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, closeModal, type } = useModal();
  const open = isOpen && type === "create-account";

  const handleLogin = async () => {
    const response = await dispatch(getOAuthUrlApi());

    if (isFulfilled(response)) {
      // console.log(window.Telegram.WebApp.initDataUnsafe.start_param);
      // console.log(window.Telegram.WebApp.initDataUnsafe);
      // console.log(JSON.stringify(window.Telegram.WebApp));
      const OAuthUrl = response.payload.url;
      Linking.openURL(OAuthUrl);
      window.open(OAuthUrl, "_blank");
    }
  };

  return (
    <BottomSheet isOpen={open} onClose={closeModal}>
      <Container>
        <Text className="text-textPrimary text-[30px] text-center font-medium mt-4">
          Создайте аккаунт
        </Text>
        <Text className="text-textPrimary text-[14px] mt-4 text-center">
          чтобы проверить результат модерации,{"\n"}выбрать план и загрузить
          свой курс
        </Text>

        <View className="mt-8 gap-y-3">
          <Pressable className="bg-[#1F1F1F] border border-[#1F1F1F] h-[46px] rounded-xl flex items-center justify-center">
            <Flex className="gap-x-2">
              <AppleIcon />
              <Text className="text-white font-medium text-[15px]">
                Продолжить с Apple
              </Text>
            </Flex>
          </Pressable>
          <Pressable
            onPress={handleLogin}
            className="border border-[#1F1F1F] h-[46px] rounded-xl flex items-center justify-center"
          >
            <Flex className="gap-x-2">
              <GoogleIcon />
              <Text className="text-textPrimary font-medium text-[15px]">
                Продолжить с Google
              </Text>
            </Flex>
          </Pressable>
        </View>
      </Container>
    </BottomSheet>
  );
};
