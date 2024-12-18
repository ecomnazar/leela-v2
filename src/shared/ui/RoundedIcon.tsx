import React from "react";
import { Pressable, View } from "react-native";
import SettingIcon from "assets/icons/settings.svg";

interface Props {
  icon: "setting";
  onClick?: () => void;
}

export const RoundedIcon: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <Pressable
      onPress={onClick && onClick}
      className="w-[45px] h-[45px] rounded-full border-2 border-white/20 flex items-center justify-center"
    >
      {icon === "setting" && (
        <SettingIcon width={19} height={19} fill={"#FFF"} />
      )}
    </Pressable>
  );
};
