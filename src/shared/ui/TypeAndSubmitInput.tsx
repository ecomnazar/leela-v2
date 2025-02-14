import React from "react";
import { COLORS } from "../constants/colors";
import PlayIcon from "assets/icons/play.svg";
import { Pressable, TextInput, View } from "react-native";

interface Props {
  value: string;
  onChange: (text: string) => void;
  onSubmit: VoidFunction;
  placeholder?: string;
}

export const TypeAndSubmitInput: React.FC<Props> = ({
  value,
  onChange,
  onSubmit,
  placeholder,
}) => {
  return (
    <View className="relative h-[52px] bg-gray-200 w-full rounded-xl">
      <TextInput
        onChangeText={onChange}
        value={value}
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
        placeholder={placeholder || ""}
      />
      <View className="absolute top-1/2 right-1 -translate-y-1/2">
        <Pressable className="p-4" onPress={onSubmit}>
          <PlayIcon width={14} height={14} />
        </Pressable>
      </View>
    </View>
  );
};
