import clsx from "clsx";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
  className?: string;
  color: string;
  size?: "megaSmall" | "small" | "medium" | "large";
}

export const Badge: React.FC<Props> = ({
  children,
  color,
  className,
  size = "medium",
}) => {
  return (
    <View
      style={{ backgroundColor: color }}
      className={clsx("w-fit rounded-full", className, {
        "py-1.5 px-3": size === "medium",
        "py-1 px-2": size === "small",
        "py-1 px-1.5": size === "megaSmall",
      })}
    >
      <Text
        className={clsx("text-white font-bold", {
          "text-[12px]": size === "medium",
          "text-[11px]": size === "small",
          "text-[10px]": size === "megaSmall",
        })}
      >
        {children}
      </Text>
    </View>
  );
};
