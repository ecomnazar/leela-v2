import clsx from "clsx";
import React from "react";
import { Pressable, PressableProps } from "react-native";
import { CustomText } from "./CustomText";
import { Loading } from "./Loading";

interface Props extends PressableProps {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  loading?: boolean;
}

export const Button: React.FC<Props> = ({
  className,
  children,
  variant = "primary",
  loading,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      className={clsx(
        "bg-primary border border-primary h-[56px] rounded-xl flex items-center justify-center",
        className,
        {
          "bg-transparent": variant === "outline",
        }
      )}
    >
      {loading ? (
        <Loading />
      ) : (
        <CustomText
          color={variant === "outline" ? "primary" : "white"}
          size={18.5}
          weight="bold"
        >
          {children}
        </CustomText>
      )}
    </Pressable>
  );
};
