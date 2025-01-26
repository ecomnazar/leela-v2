import { MainPageContext } from "@/shared/providers/mainPageProvider";
import React from "react";

export const useOpacity = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);

  const opacity = scrollOffsetY.interpolate({
    inputRange: [0, 500],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return opacity;
};
