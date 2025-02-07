import React from "react";
import { Icon } from "@/shared/ui/Icon";
import { Platform, Pressable, View } from "react-native";
import { router } from "expo-router";
import { useCheckAuthorization } from "@/features/auth/hooks/useCheckAuthorization";
import { AnimatedButtonContainer } from "./AnimatedButtonContainer";
import { AnimatedText } from "./AnimatedText";

export const FixedButton = () => {
  const checkAuthorization = useCheckAuthorization();

  const handlePress = () => {
    if (!checkAuthorization()) return;
    router.push("/askQuestion");
  };

  return (
    <Pressable
      onPress={handlePress}
      className="absolute right-0 z-10 pr-4 items-end"
      style={{
        bottom: Platform.select({
          android: 90,
          ios: 105,
          web: 90,
        }),
      }}
    >
      <View className="absolute bottom-0 left-0 h-[51px] w-[51px] bg-yellowPrimary mr-4 rounded-full z-10 flex items-center justify-center">
        <Icon type="plus" fill="#FFFFFF" width={15} height={15} />
      </View>
      <AnimatedButtonContainer>
        <AnimatedText />
      </AnimatedButtonContainer>
    </Pressable>
  );
};
