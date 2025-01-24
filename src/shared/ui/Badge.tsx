import clsx from "clsx";
import React from "react";
import { View } from "react-native";
import { CustomText } from "./CustomText";

interface Props {
  children: React.ReactNode;
  className?: string;
  color: string;
  size?: "megaSmall" | "small" | "medium" | "large";
  uppercase?: boolean;
}

export const Badge: React.FC<Props> = ({
  children,
  color,
  className,
  size = "medium",
  uppercase,
}) => {
  const textSize = size === "medium" ? 11 : size === "small" ? 10 : 9;
  return (
    <View
      style={{ backgroundColor: color }}
      className={clsx("w-fit rounded-full", className, {
        "py-1 px-2.5": size === "medium",
        "py-1 px-2": size === "small",
        "py-1 px-1.5": size === "megaSmall",
      })}
    >
      <CustomText
        weight="extrabold"
        size={textSize}
        color="white"
        className={clsx("", {
          uppercase: uppercase,
        })}
      >
        {children}
      </CustomText>
    </View>
  );
};
