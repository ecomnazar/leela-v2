import { PADDING_TOP_WITHOUT_SCREEN_HEADER } from "@/shared/constants/sizes";
import { BackButton } from "@/shared/ui/BackButton";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  title?: string;
}

export const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Container
        style={{
          paddingTop: PADDING_TOP_WITHOUT_SCREEN_HEADER,
          paddingBottom: 16,
        }}
        className="border-b border-[#D2D4D5]"
      >
        <Flex justify="between">
          <BackButton />
          {title && (
            <Text className="text-textPrimary font-semibold text-lg">
              {title}
            </Text>
          )}
          <View className="opacity-0 pointer-events-none">
            <BackButton />
          </View>
        </Flex>
      </Container>
    </>
  );
};
