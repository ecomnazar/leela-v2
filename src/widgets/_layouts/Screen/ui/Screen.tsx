import React from "react";
import clsx from "clsx";
import { BasicPageHeader } from "@/widgets/basicPageHeader";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, View } from "react-native";
import { Container } from "@/shared/ui/Container";
import { BackButton } from "@/shared/ui/BackButton";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { PADDING_TOP_WITHOUT_SCREEN_HEADER } from "@/shared/constants/sizes";

interface Props {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
  customGradientColors?: string[];
  title?: string;
  centerTitle?: string;
  disableHeader?: boolean;
  enableHeader?: boolean;
  showBackButton?: boolean;
  enableScroll?: boolean;
}

export const Screen: React.FC<Props> = ({
  className,
  children,
  showGradient = true,
  customGradientColors,
  title,
  enableHeader,
  centerTitle,
  showBackButton,
  enableScroll,
}) => {
  const backgroundGradientColors: [string, string, string, string] =
    customGradientColors && customGradientColors.length === 4
      ? (customGradientColors as [string, string, string, string])
      : ["#FDFEFF", "#FDFEFF", "#FDFEFF", "#FDFEFF"];

  const renderGradient = () => {
    return (
      showGradient && (
        <View
          style={{ height: Dimensions.get("screen").height }}
          className="absolute top-0 left-0 w-screen z-[-1]"
        >
          <LinearGradient
            colors={backgroundGradientColors}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      )
    );
  };

  return (
    <View style={{ flex: 1 }} className={clsx("h-screen w-screen", className)}>
      {enableHeader && (
        <BasicPageHeader title={title} centerTitle={centerTitle} />
      )}
      {renderGradient()}

      {enableScroll && (
        <CustomScrollView paddingTop={PADDING_TOP_WITHOUT_SCREEN_HEADER}>
          {showBackButton && (
            <Container>
              <BackButton />
            </Container>
          )}
          {children}
        </CustomScrollView>
      )}
      {!enableScroll && children}
    </View>
  );
};
