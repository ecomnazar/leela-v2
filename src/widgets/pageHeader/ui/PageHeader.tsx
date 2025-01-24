import { PADDING_TOP_WITHOUT_SCREEN_HEADER } from "@/shared/constants/sizes";
import { BackButton } from "@/shared/ui/BackButton";
import { Container } from "@/shared/ui/Container";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";
import { View } from "react-native";

interface Props {
  title?: string;
  disableBorder?: boolean;
}

export const PageHeader: React.FC<Props> = ({ title, disableBorder }) => {
  return (
    <>
      <Container
        style={{
          paddingTop: PADDING_TOP_WITHOUT_SCREEN_HEADER,
          paddingBottom: 16,
        }}
        className={clsx("", {
          "border-b border-[#D2D4D5]": !disableBorder,
        })}
      >
        <Flex justify="between">
          <BackButton />
          {title && (
            <CustomText size={17} weight="bold">
              {title}
            </CustomText>
          )}
          <View className="opacity-0 pointer-events-none">
            <BackButton />
          </View>
        </Flex>
      </Container>
    </>
  );
};
