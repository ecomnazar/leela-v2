import clsx from "clsx";
import React from "react";
import { Text, View } from "react-native";
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
        className={clsx("text-white", {
          "text-[11px]": size === "medium",
          "text-[10px]": size === "small",
          "text-[9px]": size === "megaSmall",
          uppercase: uppercase,
        })}
      >
        {children}
      </CustomText>
    </View>
  );
};
