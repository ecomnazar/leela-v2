import React, { useState } from "react";
import { Flex } from "@/shared/ui/Flex";
import { Platform, Pressable, Text, View } from "react-native";
import { Container } from "@/shared/ui/Container";
import ChevronIcon from "assets/icons/chevron.svg";
import { COLORS } from "@/shared/constants/colors";
import { Dropdown } from "@/shared/ui/Dropdown";
import OutsidePressHandler from "react-native-outside-press";
import { CustomText } from "@/shared/ui/CustomText";
const filters = [
  "сначала новые",
  "сначала популярные",
  "с высоким рейтингом",
] as const;
type TFilterType = (typeof filters)[number];

export const CardsFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<TFilterType>(filters[0]);

  const handlePress = () => setIsOpen((prev) => !prev);

  const handleFilterSelect = (filter: TFilterType) => {
    setActiveFilter(filter);
    setIsOpen(false);
  };

  return (
    <Container className="mt-3 relative z-10">
      <View className="gap-y-2.5">
        <Flex justify="between">
          <CustomText color="grayPrimary" weight="bold" size={13}>
            12567 обсуждений
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
                <Dropdown<TFilterType>
                  isOpen={isOpen}
                  items={[...filters]}
                  activeItem={activeFilter}
                  onSelectItem={(item) => handleFilterSelect(item)}
                />
              </View>
            </OutsidePressHandler>
          </Flex>
        </Flex>
      </View>
    </Container>
  );
};
