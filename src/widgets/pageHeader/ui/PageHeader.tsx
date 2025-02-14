import { EnergyShowcase } from "@/entities/ui/energyShowcase";
import { PADDING_TOP_WITHOUT_SCREEN_HEADER } from "@/shared/constants/sizes";
import { BackButton } from "@/shared/ui/BackButton";
import { Container } from "@/shared/ui/Container";
import { CustomText } from "@/shared/ui/CustomText";
import { Flex } from "@/shared/ui/Flex";
import clsx from "clsx";
import React from "react";
import { Animated, Platform, Pressable, View, ViewStyle } from "react-native";
import BellIcon from "assets/icons/bell.svg";
import { router } from "expo-router";
import { BalanceShowcase } from "@/entities/ui/balanceShowcase";

interface Props {
  title?: string;
  disableBorder?: boolean;
  enableEnergyShowcase?: boolean;
  enableBalanceShowcase?: boolean;
  backgroundColor?: string | null;

  style?: ViewStyle;
  animated?: boolean;
  scrollOffsetY?: Animated.Value;
  onPressBackButton?: VoidFunction;
  textColor?: "white";
}

export const PageHeader: React.FC<Props> = ({
  title,
  disableBorder,
  enableEnergyShowcase,
  enableBalanceShowcase,
  backgroundColor,
  style,
  animated,
  scrollOffsetY,
  onPressBackButton,
  textColor,
}) => {
  const disableBackButton = enableEnergyShowcase;

  // @ts-ignore
  const WrapperView: Animated.AnimatedComponent<typeof View> = animated
    ? Animated.View
    : View;

  const renderMiddleText = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {title && (
          <CustomText
            size={17}
            weight="bold"
            color={textColor ? textColor : "primary"}
          >
            {title}
          </CustomText>
        )}
      </View>
    );
  };

  const bgColor = backgroundColor ? backgroundColor : "transparent";

  const animatedHeaderOpacity = (
    scrollOffsetY || new Animated.Value(0)
  ).interpolate({
    inputRange: [0, 1000],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const animatedBorderColor = (
    scrollOffsetY || new Animated.Value(0)
  ).interpolate({
    inputRange: [0, 1000],
    outputRange: ["rgba(210, 212, 213, 0)", "rgba(210, 212, 213, 1)"],
    extrapolate: "clamp",
  });

  const animatedStyles = animated
    ? {
        backgroundColor: animatedHeaderOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: ["rgba(255,255,255,1)", "rgba(255,255,255,0)"],
        }),
        borderBottomColor: animatedBorderColor,
        borderBottomWidth: 1,
      }
    : {};

  return (
    <WrapperView style={animatedStyles}>
      <View
        style={{
          height: PADDING_TOP_WITHOUT_SCREEN_HEADER! - 15,
          backgroundColor: bgColor,
          ...style,
        }}
      />
      <View
        style={{
          height: 50,
          position: "relative",
          backgroundColor: bgColor,
          ...style,
        }}
        className={clsx("", {
          "border-b border-[#D2D4D5]": !disableBorder,
        })}
      >
        <Container className="h-full">
          {renderMiddleText()}
          <Flex justify="between" align="center" className="h-full">
            {enableEnergyShowcase && <EnergyShowcase />}

            {!disableBackButton && <BackButton onPress={onPressBackButton} />}
            {enableBalanceShowcase && (
              <Flex className="gap-x-2">
                <Pressable onPress={() => router.push("/notifications")}>
                  <BellIcon width={23} height={25} fill={"#93989B"} />
                </Pressable>
                <BalanceShowcase />
              </Flex>
            )}
          </Flex>
        </Container>
      </View>
    </WrapperView>
  );
};
