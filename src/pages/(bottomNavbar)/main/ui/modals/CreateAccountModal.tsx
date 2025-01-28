import React from "react";
import { BottomSheet } from "@/shared/ui/BottomSheet";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { useModal } from "@/shared/zustand/useModal";
import { Linking, Pressable, Text, View } from "react-native";
import AppleIcon from "assets/icons/apple.svg";
import GoogleIcon from "assets/icons/google.svg";

import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const CreateAccountModal = () => {
  const { isOpen, closeModal, type } = useModal();
  const open = isOpen && type === "create-account";

  const login = useGoogleLogin({
    flow: "auth-code",
    redirect_uri: "https://t.me/nonamesnobot/start",
    ux_mode: "redirect",
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleLogin = () => {
    Linking.openURL(
      "https://accounts.google.com/o/oauth2/v2/auth?client_id=1050890406153-7cb24c1nabhn2grvr3gsms4avm72s5ik.apps.googleusercontent.com&redirect_uri=https://t.me/nonamesnobot/start&response_type=code&scope=email"
    );
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
