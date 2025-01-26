import React from "react";
import { Pressable, Text, View } from "react-native";
import { PageHeader } from "@/widgets/pageHeader";
import { Container } from "@/shared/ui/Container";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { COLORS } from "@/shared/constants/colors";

const categoryList = [
  {
    label: "Нутрициология",
    count: 14,
    isOpened: true,
    subcategories: [
      {
        label: "Детская нутрициология",
        isSelected: true,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
    ],
  },
  {
    label: "Нутрицевтики и бады",
    count: 14,
    isOpened: false,
    subcategories: [
      {
        label: "Детская нутрициология",
        isSelected: true,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
    ],
  },
  {
    label: "Питание",
    count: 14,
    isOpened: false,
    subcategories: [
      {
        label: "Детская нутрициология",
        isSelected: true,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
    ],
  },
  {
    label: "Красота",
    count: 14,
    isOpened: false,
    subcategories: [
      {
        label: "Детская нутрициология",
        isSelected: true,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
    ],
  },
  {
    label: "Образ жизни",
    count: 14,
    isOpened: false,
    subcategories: [
      {
        label: "Детская нутрициология",
        isSelected: true,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
    ],
  },
  {
    label: "Анализы и дефициты",
    count: 14,
    isOpened: false,
    subcategories: [
      {
        label: "Детская нутрициология",
        isSelected: true,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
      {
        label: "Спортивная нутрициология",
        isSelected: false,
      },
    ],
  },
];

export const MainPageFilterPage = () => {
  const [categories, setCategories] = React.useState(categoryList);

  const onSelectCategory = (index: number) => {
    const newCategories = [...categories];
    newCategories[index].isOpened = !newCategories[index].isOpened;
    setCategories(newCategories);
  };

  const onSelectSubcategory = (
    categoryIndex: number,
    subcategoryIndex: number
  ) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].subcategories[subcategoryIndex].isSelected =
      !newCategories[categoryIndex].subcategories[subcategoryIndex].isSelected;
    setCategories(newCategories);
  };

  return (
    <View className="w-screen h-screen bg-backgroundTertiary flex-1">
      <PageHeader title="Фильтр тем" />
      <View>
        {categories.map((item, index) => {
          return (
            <View>
              <Container key={item.label}>
                <Pressable onPress={() => onSelectCategory(index)}>
                  <Flex className="h-[50px]" justify="between">
                    <Flex className="gap-x-2">
                      <Checkbox checked={item.isOpened} />
                      <Text className="text-textPrimary font-semibold text-sm">
                        {item.label}{" "}
                        <Text className="text-grayPrimary/80">
                          ({item.count})
                        </Text>
                      </Text>
                    </Flex>
                    <Icon
                      type="chevron"
                      width={14}
                      height={14}
                      fill={COLORS.gray}
                      style={{
                        transform: [
                          { rotate: item.isOpened ? "-90deg" : "90deg" },
                        ],
                      }}
                    />
                  </Flex>
                </Pressable>
              </Container>
              {!!(item.isOpened && item.subcategories?.length) && (
                <View className="bg-[#ECF1F7] border border-grayPrimary/40 py-4">
                  <Container>
                    {item.subcategories.map((subItem, subIndex) => {
                      return (
                        <Pressable
                          key={subIndex}
                          onPress={() => onSelectSubcategory(index, subIndex)}
                        >
                          <Flex className="gap-x-3 h-[38px]">
                            <View
                              style={{ opacity: subItem.isSelected ? 1 : 0 }}
                            >
                              <Icon
                                type="tick"
                                fill={COLORS.primarySecondary}
                                width={12}
                                height={12}
                              />
                            </View>
                            <Text className="text-textPrimary font-semibold text-sm">
                              {subItem.label}
                            </Text>
                          </Flex>
                        </Pressable>
                      );
                    })}
                  </Container>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};
