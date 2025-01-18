import clsx from "clsx";
import React from "react";
import { Pressable, Text } from "react-native";

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
      <Text className="text-[17px] text-white font-semibold">{children}</Text>
    </Pressable>
  );
};
