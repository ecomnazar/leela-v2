import React from "react";
import PlayIcon from "assets/icons/play.svg";
import { COLORS } from "@/shared/constants/colors";
import { Pressable, TextInput, View } from "react-native";

export const FixedTypeCommentInput = () => {
  return (
    <View className="absolute bottom-0 w-full h-[80px] border border-grayPrimary/40 rounded-t-xl px-6 flex items-center justify-center bg-white">
      <View className="relative h-[52px] bg-gray-200 w-full rounded-xl">
        <TextInput
          style={{
            fontSize: 18,
            height: "100%",
            outline: "none",
            paddingLeft: 20,
            paddingRight: 50,
            fontWeight: "400",
            textDecorationColor: "red",
            color: `${COLORS.textPrimary}`,
          }}
          placeholderTextColor={COLORS.grayPrimary60}
          placeholder="Сообщение"
        />
        <View className="absolute top-1/2 right-5 -translate-y-1/2">
          <Pressable>
            <PlayIcon width={14} height={14} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
