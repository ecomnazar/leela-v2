import React from "react";

import { Button } from "@/shared/ui/Button";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { IStoryAuthor } from "@/entities/story/model/interfaces";

interface Props {
  description: string;
  story: IStoryAuthor;
}

export const SingleStoryFooter: React.FC<Props> = ({ description, story }) => {
  const { name, previewMediaUrl } = story || {};

  return (
    <View className="absolute bottom-0 left-0 px-4 pb-8 pt-16 h-[250px] w-full z-[11]">
      <LinearGradient
        colors={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.3)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.7)",
        ]}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: 0,
          left: 0,
        }}
      />
      <Flex className="gap-x-2 mb-2">
        <Image
          source={previewMediaUrl}
          style={{
            width: 36,
            height: 36,
            objectFit: "contain",
            borderRadius: 999,
          }}
        />
        <View>
          <CustomText weight="bold" size={13} color="white">
            {name}
          </CustomText>
          {/* <CustomText weight="regular" size={13} color="white">
            Эксперт
          </CustomText> */}
        </View>
      </Flex>
      <CustomText
        weight="regular"
        size={13}
        color="white"
        className="mb-3"
        numberOfLines={2}
      >
        {description}
      </CustomText>
      <Button
        variant="outline"
        className="bg-white/10 border-white mt-auto"
        textStyle={{ color: "#FFF" }}
      >
        Открыть профиль
      </Button>
    </View>
  );
};
