import clsx from "clsx";
import React from "react";
import { View } from "react-native";

interface Props {
  mode?: "dark" | "light" | "transparent";
  className?: string;
}

export const Coin: React.FC<Props> = ({ mode = "dark", className }) => {
  return (
    <View
      className={clsx(
        "w-6 h-6 rounded-full flex items-center justify-center",
        className,
        {
          "bg-textPrimary": mode === "dark",
          "bg-white": mode === "light",
        }
      )}
    >
      <View className="w-5 h-5 rounded-full bg-yellowPrimary flex items-center justify-center">
        <View
          className={clsx(
            "w-3 h-3 rounded-full flex items-center justify-center",
            {
              "bg-textPrimary": mode === "dark",
              "bg-white": mode === "light",
            }
          )}
        >
          <View className="w-[8px] h-[8px] rounded-full bg-yellowPrimary"></View>
        </View>
      </View>
    </View>
  );
};
