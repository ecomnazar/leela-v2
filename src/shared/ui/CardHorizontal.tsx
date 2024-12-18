import React from "react";
import { Flex } from "./Flex";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CardHorizontal: React.FC<Props> = ({ className, children }) => {
  return (
    <Flex
      className={clsx(
        "gap-x-4 h-[100px] bg-white dark:bg-backgroundPrimary rounded-2xl border-grayPrimary/40 border p-2",
        className
      )}
    >
      {children}
    </Flex>
  );
};
