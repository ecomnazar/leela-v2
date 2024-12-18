import React from "react";
import { Platform, ScrollView } from "react-native";

interface Props {
  className?: string;
  hasBottomBar?: boolean;
  hasHeader?: boolean;
  children: React.ReactNode;
  paddingTop?: number;
  paddingBottom?: number;
}

export const CustomScrollView: React.FC<Props> = ({
  hasBottomBar,
  hasHeader,
  children,
  paddingTop,
  paddingBottom,
}) => {
  const paddingBottomSize = Platform.select({
    android: 80,
    ios: 120,
    web: 100,
  });
  const paddingTopSize = Platform.select({
    android: 80,
    ios: 100,
    web: 50,
  });
  return (
    <ScrollView
      alwaysBounceVertical={false}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: hasBottomBar ? paddingBottomSize : paddingBottom || 0,
        paddingTop: hasHeader ? paddingTopSize : paddingTop || 0,
      }}
    >
      {children}
    </ScrollView>
  );
};
