import clsx from "clsx";
import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

interface Props extends TextProps {
  className?: string;
  weight?: "regular" | "medium" | "semibold" | "bold" | "extrabold";
  color?:
    | "primary"
    | "white"
    | "grayPrimary"
    | "primarySecondary"
    | "description";
  size?: number;
  style?: TextStyle;
}

export const CustomText: React.FC<Props> = ({
  children,
  className,
  weight = "medium",
  color = "primary",
  size = 12,
  style,
  ...props
}) => {
  return (
    <Text
      {...props}
      className={clsx("", className, {
        "font-wixRegular": weight === "regular",
        "font-wixMedium": weight === "medium",
        "font-wixSemibold": weight === "semibold",
        "font-wixBold": weight === "bold",
        "font-wixExtrabold": weight === "extrabold",
        "text-textPrimary": color === "primary",
        "text-white": color === "white",
        "text-grayPrimary": color === "grayPrimary",
        "text-[#353848] opacity-80": color === "primarySecondary",
        "text-[#5F616F]": color === "description",
      })}
      style={{ fontSize: size, ...style }}
    >
      {children}
    </Text>
  );
};
