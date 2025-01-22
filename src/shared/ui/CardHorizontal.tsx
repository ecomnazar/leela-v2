import React from "react";
import { Flex } from "./Flex";
import clsx from "clsx";
import { Pressable } from "react-native";

interface Props {
  className?: string;
  children: React.ReactNode;
  onPress?: () => void;
}

export const CardHorizontal: React.FC<Props> = ({
  className,
  children,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Flex
        className={clsx(
          "gap-x-3 h-[95px] bg-white rounded-2xl border-grayPrimary/40 border p-1 pr-2",
          className
        )}
      >
        {children}
      </Flex>
    </Pressable>
  );
};
