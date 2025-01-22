import clsx from "clsx";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props<T extends string> {
  className?: string;
  isOpen: boolean;
  items: T[];
  activeItem: T[number];
  onSelectItem: (item: T) => void;
}

export const Dropdown = <T extends string>({
  isOpen,
  items,
  activeItem,
  onSelectItem,
}: Props<T>) => {
  if (!isOpen) return null;

  return (
    <View className="absolute top-full mt-2 right-0 p-3 bg-white border border-grayPrimary/40 rounded-lg gap-y-1">
      {items.map((item, index) => {
        const active = item === activeItem;
        return (
          <Pressable
            key={index}
            onPress={() => onSelectItem(item)}
            className={clsx(
              "rounded-md h-[30px] flex items-end justify-center px-2",
              {
                "bg-grayPrimary/20": active,
              }
            )}
          >
            <Text className="text-grayPrimary font-semibold text-sm w-full whitespace-nowrap text-right">
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
