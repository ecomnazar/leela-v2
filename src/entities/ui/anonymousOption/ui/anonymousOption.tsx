import { Checkbox } from "@/shared/ui/Checkbox";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const AnonymousOption: React.FC<Props> = ({
  className,
  checked,
  onChange,
}) => {
  return (
    <Flex className={clsx("gap-x-2", className)}>
      <Checkbox checked={checked} onChange={onChange} />
      <CustomText size={14} style={{ transform: [{ translateY: -1 }] }}>
        Отправить анонимно
      </CustomText>
    </Flex>
  );
};
