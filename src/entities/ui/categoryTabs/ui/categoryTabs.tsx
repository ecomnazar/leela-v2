import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  className?: string;
  flexClassName?: string;
  categories: string[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  fillBackground?: boolean;
}

export const CategoryTabs: React.FC<Props> = ({
  className,
  flexClassName,
  categories,
  activeCategory,
  setActiveCategory,
  fillBackground,
}) => {
  return (
    <View
      className={clsx("mt-6", className, {
        "bg-textPrimary dark:bg-darkPrimary": fillBackground,
      })}
    >
      <Container>
        <Flex className={clsx("gap-x-10", flexClassName)}>
          {categories.map((item) => {
            return (
              <Pressable
                className="h-[60px] flex items-center justify-center"
                onPress={() => setActiveCategory(item)}
                key={item}
              >
                <Text
                  className={clsx(
                    "dark:text-white text-[17px] font-semibold border-b-2 pb-1",
                    {
                      "border-yellowPrimary": item === activeCategory,
                      "border-transparent": item !== activeCategory,
                      "text-white": fillBackground,
                      "text-textPrimary": !fillBackground,
                    }
                  )}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </Flex>
      </Container>
    </View>
  );
};
