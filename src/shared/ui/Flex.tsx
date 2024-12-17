import React from "react";
import { View } from "react-native";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
  justify?: "center" | "between" | "start";
  align?: "center" | "start";
}

export const Flex: React.FC<Props> = ({
  children,
  className,
  justify = "start",
  align = "center",
}) => {
  return (
    <View
      className={clsx("flex-row", className, {
        "justify-between": justify === "between",
        "justify-center": justify === "center",
        "justify-start": justify === "start",
        "items-center": align === "center",
        "items-start": align === "start",
      })}
    >
      {children}
    </View>
  );
};
