import React from "react";
import { Linking, View } from "react-native";
import LogoIcon from "assets/icons/logo.svg";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { CustomText } from "@/shared/ui/CustomText";
import { useLocalSearchParams } from "expo-router";

export const RedirectPage = () => {
  const params = useLocalSearchParams();

  const handlePress = () => {
    const code = params.code as string;
    const miniAppUrl = process.env.EXPO_PUBLIC_TELEGRAM_MINIAPP_URL!;

    const replacedCode = code.includes("/") ? code.replace("/", "VVV") : code;

    const startAppParams = `?startapp=${replacedCode}`;

    Linking.openURL(miniAppUrl + startAppParams);
  };

  return (
    <View className="flex-1 w-screen h-screen bg-white pt-14 pb-10 justify-between items-center">
      <LogoIcon className="mx-auto" />
      <View className="space-y-4">
        <CustomText weight="semibold" size={32} className="text-center">
          Все готово!
        </CustomText>
        <CustomText weight="medium" size={14}>
          Теперь можешь вернуться в Telegram
        </CustomText>
      </View>
      <Container className="w-full">
        <Button onPress={handlePress}>Вернуться в Telegram</Button>
      </Container>
    </View>
  );
};
