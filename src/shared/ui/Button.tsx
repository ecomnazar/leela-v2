import clsx from "clsx";
import React from "react";
import { Pressable } from "react-native";
import { CustomText } from "./CustomText";

interface Props {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export const Button: React.FC<Props> = ({
  className,
  children,
  variant = "primary",
}) => {
  return (
    <Pressable
      className={clsx(
        "bg-primary border border-primary h-[56px] rounded-xl flex items-center justify-center",
        className,
        {
          "bg-transparent": variant === "outline",
        }
      )}
    >
      <CustomText
        color={variant === "outline" ? "primary" : "white"}
        size={18.5}
        weight="bold"
      >
        {children}
      </CustomText>
    </Pressable>
  );
};
