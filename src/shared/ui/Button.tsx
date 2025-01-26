import clsx from "clsx";
import React from "react";
import { Pressable } from "react-native";
import { CustomText } from "./CustomText";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <Pressable
      className={clsx(
        "bg-primary h-[56px] rounded-xl flex items-center justify-center",
        className
      )}
    >
      <CustomText color="white" size={18.5} weight="bold">
        {children}
      </CustomText>
    </Pressable>
  );
};
