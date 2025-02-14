import React from "react";
import { Icon } from "./Icon";
import { COLORS } from "../constants/colors";
import { router } from "expo-router";
import { Pressable } from "react-native";

interface Props {
  onPress?: VoidFunction;
}

export const BackButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable onPress={() => (onPress ? onPress() : router.back())}>
      <Icon type="chevron" fill={COLORS.yellowPrimary} width={18} height={18} />
    </Pressable>
  );
};
