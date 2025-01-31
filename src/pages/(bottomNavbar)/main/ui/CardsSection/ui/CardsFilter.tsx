import React, { useState } from "react";
import { Flex } from "@/shared/ui/Flex";
import { Pressable, View } from "react-native";
import { Container } from "@/shared/ui/Container";
import ChevronIcon from "assets/icons/chevron.svg";
import { COLORS } from "@/shared/constants/colors";
import { Dropdown } from "@/shared/ui/Dropdown";
import OutsidePressHandler from "react-native-outside-press";
import { CustomText } from "@/shared/ui/CustomText";
import {
  THEME_FILTER_OPTIONS,
  TThemeFilterOptionsType,
} from "@/shared/constants/filters";
import { router, useLocalSearchParams } from "expo-router";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const CardsFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { total } = useAppSelector((state) => state.theme.publicThemes);
  const params = useLocalSearchParams();

  const hasFilter = params.filter !== undefined;

  const [activeFilter, setActiveFilter] = useState<
    TThemeFilterOptionsType["label"]
  >(THEME_FILTER_OPTIONS[0].label);

  const handlePress = () => setIsOpen((prev) => !prev);

  const handleFilterSelect = (label: TThemeFilterOptionsType["label"]) => {
    setActiveFilter(label);
    setIsOpen(false);
    const value = THEME_FILTER_OPTIONS.find(
      (item) => item.label === label
    )?.value;
    router.setParams({ filter: value });
  };

  React.useEffect(() => {
    if (hasFilter) {
      const value = THEME_FILTER_OPTIONS.find(
        (item) => item.value === params.filter
      );
      handleFilterSelect(value?.label as TThemeFilterOptionsType["label"]);
    }
  }, []);

  return (
    <Container className="mt-3 relative z-10">
      <View className="gap-y-2.5">
        <Flex justify="between">
          <CustomText color="grayPrimary" weight="bold" size={13}>
            {total} обсуждений
          </CustomText>
          <Flex className="gap-x-1.5">
            <ChevronIcon
              width={12}
              height={12}
              fill={COLORS.yellowPrimary}
              className="-rotate-90 translate-y-[1px]"
              style={{
                transform: [{ rotate: "-90deg" }, { translateY: -1 }],
              }}
            />
            <OutsidePressHandler
              onOutsidePress={() => {
                setIsOpen(false);
              }}
            >
              <View className="relative">
                <Pressable className="relative" onPress={handlePress}>
                  <CustomText color="grayPrimary" weight="bold" size={13}>
                    {activeFilter}
                  </CustomText>
                </Pressable>
                <Dropdown
                  isOpen={isOpen}
                  items={THEME_FILTER_OPTIONS.map((item) => item.label)}
                  activeItem={activeFilter}
                  onSelectItem={(label) => handleFilterSelect(label)}
                />
              </View>
            </OutsidePressHandler>
          </Flex>
        </Flex>
      </View>
    </Container>
  );
};
