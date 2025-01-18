import React from "react";
import { Animated } from "react-native";

interface MainPageContextType {
  scrollOffsetY: Animated.Value;
}

export const MainPageContext = React.createContext<MainPageContextType>({
  scrollOffsetY: new Animated.Value(0),
});

export const MainPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <MainPageContext.Provider value={{ scrollOffsetY: new Animated.Value(0) }}>
      {children}
    </MainPageContext.Provider>
  );
};
