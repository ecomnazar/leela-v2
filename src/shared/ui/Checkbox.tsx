import React from "react";
import { Pressable, View } from "react-native";
import TickIcon from "assets/icons/tick.svg";

interface Props {
  checked?: boolean;
}

export const Checkbox: React.FC<Props> = ({ checked }) => {
  const [isChecked, setIsChecked] = React.useState(checked ? checked : false);

  const handlePress = () => setIsChecked((prev) => !prev);

  return (
    <Pressable
      onPress={handlePress}
      className="border border-[#ADAFB5] w-[20px] h-[20px] rounded-full flex items-center justify-center"
    >
      {isChecked && (
        <View className="h-[15px] w-[15px] rounded-full flex items-center justify-center bg-primary">
          <TickIcon width={8} height={8} fill={"#fff"} />
        </View>
      )}
    </Pressable>
  );
};
