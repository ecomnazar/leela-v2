import React, { FC } from "react";
import { icons } from "../constants/icons";

interface Props {
  route: any;
  isFocused: boolean;
}

export const Icon: FC<Props> = ({ route, isFocused }) => {
  return icons[route.name as keyof typeof icons]({
    fill: isFocused ? "#33747C" : "#8B9497",
  });
};
