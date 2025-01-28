import React from "react";
import { BottomSheet } from "@/shared/ui/BottomSheet";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { useModal } from "@/shared/zustand/useModal";
import { Pressable, Text, View } from "react-native";
import AppleIcon from "assets/icons/apple.svg";
import GoogleIcon from "assets/icons/google.svg";

import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const CreateAccountModal = () => {
  const { isOpen, closeModal, type } = useModal();
  const open = isOpen && type === "create-account";

  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  React.useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  console.log(user);
  console.log(profile);

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
            onPress={login}
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
