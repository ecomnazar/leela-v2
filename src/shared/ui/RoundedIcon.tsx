import React from "react";
import { Pressable } from "react-native";
import SettingIcon from "assets/icons/settings.svg";
import CalendarIcon from "assets/icons/calendar.svg";
import WalletIcon from "assets/icons/wallet.svg";
import TripleDotsIcon from "assets/icons/tripleDots.svg";
import ChevronIcon from "assets/icons/chevron.svg";
import clsx from "clsx";

interface Props {
  icon:
    | "setting"
    | "calendar"
    | "wallet"
    | "tripleDots"
    | "chevronUp"
    | "chevronLeft"
    | "chevronRight"
    | "chevronDown";
  onClick?: () => void;
  filled?: boolean;
}

export const RoundedIcon: React.FC<Props> = ({ icon, onClick, filled }) => {
  return (
    <Pressable
      onPress={onClick && onClick}
      className={clsx(
        "w-[45px] h-[45px] rounded-full border-2  flex items-center justify-center",
        {
          "border-white/20": !filled,
          "bg-primary border-primary": filled,
        }
      )}
    >
      {icon === "setting" && (
        <SettingIcon width={19} height={19} fill={"#FFF"} />
      )}
      {icon === "calendar" && <CalendarIcon width={19} height={19} />}
      {icon === "wallet" && <WalletIcon width={19} height={19} fill={"#FFF"} />}
      {icon === "chevronUp" && (
        <ChevronIcon
          style={{ transform: [{ rotate: "90deg" }] }}
          width={15}
          height={15}
          fill={"#FFF"}
        />
      )}
      {icon === "chevronLeft" && (
        <ChevronIcon width={15} height={15} fill={"#FFF"} />
      )}
      {icon === "chevronRight" && (
        <ChevronIcon
          style={{ transform: [{ rotate: "180deg" }] }}
          width={15}
          height={15}
          fill={"#FFF"}
        />
      )}
      {icon === "chevronDown" && (
        <ChevronIcon
          style={{ transform: [{ rotate: "270deg" }] }}
          width={15}
          height={15}
          fill={"#FFF"}
        />
      )}
      {icon === "tripleDots" && (
        <TripleDotsIcon width={19} height={19} fill={"#FFF"} />
      )}
    </Pressable>
  );
};
