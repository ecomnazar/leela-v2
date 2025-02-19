import React from "react";
import { CustomText } from "@/shared/ui/CustomText";
import images from "assets/images";
import clsx from "clsx";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View } from "react-native";

interface Props {
  image: string;
  name?: string;
  size?: "small" | "medium";
  isActive: boolean;
  isAnonym?: boolean;
  onPress?: VoidFunction;
}

export const StoryAvatar: React.FC<Props> = ({
  image,
  name,
  size = "small",
  isActive,
  isAnonym,
  onPress,
}) => {
  const realImage = isAnonym
    ? images.emptyAvatar
    : image
    ? image
    : images.emptyAvatar;

  return (
    <View>
      <Pressable
        onPress={onPress}
        className={clsx(
          "relative rounded-full overflow-hidden flex items-center justify-center p-0.5",
          {
            "w-[50px] h-[50px]": size === "small",
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
          className={clsx("w-full h-full rounded-full bg-white", {
            "border border-black/10": !isActive,
          })}
        >
          <Image
            source={realImage}
            style={{ width: "100%", height: "100%", borderRadius: 999 }}
          />
        </View>
      </Pressable>
      {size === "medium" && (
        <CustomText size={11} weight="regular" className="text-center mt-1">
          {name}
        </CustomText>
      )}
    </View>
  );
};
