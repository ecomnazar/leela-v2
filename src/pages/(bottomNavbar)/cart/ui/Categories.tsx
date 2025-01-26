import clsx from "clsx";
import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Pressable, ScrollView, View } from "react-native";
import { CustomText } from "@/shared/ui/CustomText";

type IconType = "trainer" | "session" | "course" | "license";

const categories = [
  { name: "тренажеры", iconType: "trainer", width: 23, height: 23 },
  { name: "курсы", iconType: "course", width: 28, height: 28 },
  { name: "лицензии", iconType: "license", width: 22, height: 22 },
] as const satisfies readonly {
  name: string;
  iconType: IconType;
  width: number;
  height: number;
}[];

export const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState<IconType>(
    categories[0].iconType
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="px-4 mt-6"
    >
      <Flex className="gap-x-3">
        {categories.map((category) => {
          const { name, iconType, width, height } = category;
          const active = activeCategory === iconType;
          return (
            <Pressable
              key={iconType}
              onPress={() => setActiveCategory(iconType)}
              className={clsx(
                "w-[92px] h-[92px] border border-primary rounded-xl flex items-center justify-center",
                {
                  "bg-primary": active,
                }
              )}
            >
              <View className="h-[34px]">
                <Icon
                  type={iconType}
                  fill={active ? "#FFF" : COLORS.primary}
                  width={width}
                  height={height}
                />
              </View>
              <CustomText
                color={active ? "white" : "primary"}
                weight="extrabold"
                size={10}
                className="uppercase"
              >
                {name}
              </CustomText>
            </Pressable>
          );
        })}
      </Flex>
    </ScrollView>
  );
};
