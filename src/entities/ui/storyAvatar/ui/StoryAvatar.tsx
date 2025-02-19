import { CustomText } from "@/shared/ui/CustomText";
import clsx from "clsx";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  image: string;
  name?: string;
  size?: "small" | "medium";
  isActive: boolean;
}

export const StoryAvatar: React.FC<Props> = ({
  image,
  name,
  size = "small",
  isActive,
}) => {
  return (
    <View>
      <View
        className={clsx(
          "relative rounded-full overflow-hidden flex items-center justify-center p-0.5",
          {
            "w-[52px] h-[52px]": size === "small",
            "w-[72px] h-[72px]": size === "medium",
          }
        )}
      >
        {isActive && (
          <LinearGradient
            colors={["#E5BF85", "#FF5752", "#FFAD01"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
          />
        )}
        <View
          className={clsx("w-full h-full rounded-full p-0.5", {
            "bg-white": isActive,
          })}
        >
          <Image source={image} style={{ width: "100%", height: "100%" }} />
        </View>
      </View>
      {size === "medium" && (
        <CustomText size={11} weight="regular" className="text-center mt-1">
          {name}
        </CustomText>
      )}
    </View>
  );
};
