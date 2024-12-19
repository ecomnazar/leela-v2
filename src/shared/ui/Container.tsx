import React from "react";
import { View } from "react-native";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <View className={clsx("px-4", className)}>{children}</View>;
};
