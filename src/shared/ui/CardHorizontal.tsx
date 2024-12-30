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
          "gap-x-4 h-[100px] bg-white dark:bg-backgroundPrimary rounded-2xl border-grayPrimary/40 border p-2",
          className
        )}
      >
        {children}
      </Flex>
    </Pressable>
  );
};
