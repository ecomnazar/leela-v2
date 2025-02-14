import clsx from "clsx";
import React from "react";
import { View } from "react-native";

interface Props {
  size?: "small" | "medium";
}

export const StoryAvatarSkeleton: React.FC<Props> = ({ size = "medium" }) => {
  return (
    <View
      className={clsx("rounded-full bg-gray-200 animate-pulse", {
        "w-[50px] h-[50px]": size === "small",
        "w-[72px] h-[72px]": size === "medium",
      })}
    ></View>
  );
};
