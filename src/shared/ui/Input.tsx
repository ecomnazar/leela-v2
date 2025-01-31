import React from "react";
import { ColorValue, View, ViewStyle } from "react-native";
import { CustomText } from "./CustomText";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../constants/colors";
import clsx from "clsx";

interface Props {
  label?: string;
  height?: number;
  placeholder?: string;
  style?: ViewStyle;
  className?: string;
  onChange: (val: string) => void;
  multiline?: boolean;
  placeholderTextColor?: string;
}

export const Input: React.FC<Props> = ({
  label,
  height,
  placeholder,
  style,
  className,
  onChange,
  multiline,
  placeholderTextColor,
}) => {
  return (
    <View style={style} className={clsx(className)}>
      {label && (
        <CustomText size={14} weight="bold" className="mb-2">
          {label}
        </CustomText>
      )}
      <TextInput
        onChangeText={(value) => onChange(value)}
        style={{
          borderColor: `${COLORS.borderPrimary}40`,
          borderWidth: 1,
          height: height ? height : 40,
          borderRadius: 8,
          outline: "none",
          paddingHorizontal: 10,
          paddingVertical: multiline ? 10 : 0,
        }}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor
            ? placeholderTextColor
            : `${COLORS.textPrimary}60`
        }
      />
    </View>
  );
};
