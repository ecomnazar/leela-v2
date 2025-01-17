import React from "react";
import { View, ViewStyle } from "react-native";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Container: React.FC<Props> = ({ children, className, style }) => {
  return (
    <View style={style} className={clsx("px-4", className)}>
      {children}
    </View>
  );
};
