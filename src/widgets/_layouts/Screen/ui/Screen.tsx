import { useTheme } from "@/shared/theme/useTheme";
import { BasicPageHeader } from "@/widgets/basicPageHeader";
import clsx from "clsx";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

interface Props {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}

export const Screen: React.FC<Props> = ({
  className,
  children,
  showGradient = true,
}) => {
  const { theme } = useTheme();

  const gradientColors: [string, string, string, string] =
    theme === "light"
      ? ["#F1F3F7", "#E0E4EA", "#CFD5DD", "#CFD5DD"]
      : ["#2F1A34", "#351D32", "#3A202F", "#3A202F"];

  return (
    <View
      className={clsx("h-screen w-screen", className, {
        // "pb-[100px]": hasBottomBar,
      })}
    >
      <BasicPageHeader />
      {showGradient && (
        <View className="absolute top-0 left-0 w-screen h-screen z-[-1]">
          <LinearGradient
            colors={gradientColors}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      )}
      {children}
    </View>
  );
};
