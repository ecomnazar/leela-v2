import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  className?: string;
  categories: string[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryTabs: React.FC<Props> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <Container className="mt-6">
      <Flex className="gap-x-10">
        {categories.map((item) => {
          return (
            <Pressable onPress={() => setActiveCategory(item)} key={item}>
              <Text
                className={clsx(
                  "text-textPrimary dark:text-white text-[17px] font-semibold border-b-2 pb-1",
                  {
                    "border-yellowPrimary": item === activeCategory,
                    "border-transparent": item !== activeCategory,
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
  );
};
