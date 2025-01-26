import React from "react";
import { View, ViewStyle } from "react-native";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
  justify?: "center" | "between" | "start" | "end";
  align?: "center" | "start" | "end";
  style?: ViewStyle;
}

export const Flex: React.FC<Props> = ({
  children,
  className,
  justify = "start",
  align = "center",
  style,
}) => {
  return (
    <View
      style={style}
      className={clsx("flex-row", className, {
        "justify-between": justify === "between",
        "justify-center": justify === "center",
        "justify-start": justify === "start",
        "justify-end": justify === "end",
        "items-center": align === "center",
        "items-start": align === "start",
        "items-end": align === "end",
      })}
    >
      {children}
    </View>
  );
};
