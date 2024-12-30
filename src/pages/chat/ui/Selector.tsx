import clsx from "clsx";
import React from "react";
import { Pressable, Text, View } from "react-native";
import TickIcon from "assets/icons/tick.svg";
import { useTheme } from "@/shared/theme/useTheme";

interface Props {
  title: string;
}

export const Selector: React.FC<Props> = ({ title }) => {
  const [active, setActive] = React.useState(false);
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={() => setActive((prev) => !prev)}
      className={clsx(
        "py-2 border-[0.5px] border-textPrimary rounded-lg flex flex-row items-center gap-x-4 px-3 mb-2",
        {
          "bg-[#DCEDF0] dark:bg-[#40969E]": active,
        }
      )}
    >
      <View
        className={clsx(
          "h-4 w-4 rounded-full border border-[#D2D2D2] flex items-center justify-center",
          {
            "bg-[#509193] dark:bg-white !border-[#509193]": active,
          }
        )}
      >
        {active && (
          <TickIcon
            width={9}
            height={9}
            fill={theme === "light" ? "#FFF" : "#40969E"}
          />
        )}
      </View>
      <Text className="text-textPrimary dark:text-white font-medium flex-shrink">
        {title}
      </Text>
    </Pressable>
  );
};
