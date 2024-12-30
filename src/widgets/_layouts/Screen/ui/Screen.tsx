import { useTheme } from "@/shared/theme/useTheme";
import { BasicPageHeader } from "@/widgets/basicPageHeader";
import images from "assets/images";
import clsx from "clsx";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Platform, View } from "react-native";

interface Props {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
  enableHuman?: boolean;
  customHumanGradientColors?: [string, string, string, string];
  title?: string;
  disableHeader?: boolean;
}

export const Screen: React.FC<Props> = ({
  className,
  children,
  showGradient = true,
  enableHuman = false,
  customHumanGradientColors,
  title,
  disableHeader,
}) => {
  const { theme } = useTheme();

  const backgroundGradientColors: [string, string, string, string] =
    theme === "light"
      ? ["#F1F3F7", "#E0E4EA", "#CFD5DD", "#CFD5DD"]
      : ["#2F1A34", "#351D32", "#3A202F", "#3A202F"];

  const humanGradientColors: [string, string, string, string] =
    theme === "light"
      ? customHumanGradientColors
        ? customHumanGradientColors
        : ["transparent", "#8992A0", "#8992A0", "#8992A0"]
      : ["transparent", "#361B38", "#361B38", "#361B38"];

  return (
    <View
      style={{ flex: 1 }}
      className={clsx("h-screen w-screen", className, {
        // "pb-[100px]": hasBottomBar,
      })}
    >
      {!disableHeader && <BasicPageHeader title={title} />}
      {enableHuman && (
        <View
          className={clsx(
            "absolute left-0 w-screen h-screen z-[0] flex items-center",
            {
              "top-10": Platform.OS === "web",
              "top-20": Platform.OS === "ios",
              "top-16": Platform.OS === "android",
            }
          )}
        >
          <Image
            source={theme === "light" ? images.manLight : images.manDark}
            style={{ width: "90%", height: "90%", resizeMode: "center" }}
          />
          <View className="absolute top-0 left-0 w-screen h-screen">
            <LinearGradient
              colors={humanGradientColors}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
      )}
      {showGradient && (
        <View
          style={{ height: Dimensions.get("screen").height }}
          className="absolute top-0 left-0 w-screen z-[-1]"
        >
          <LinearGradient
            colors={backgroundGradientColors}
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
