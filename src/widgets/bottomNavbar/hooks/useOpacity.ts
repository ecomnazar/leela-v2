import { MainPageContext } from "@/shared/providers/mainPageProvider";
import React from "react";

export const useOpacity = () => {
  const { scrollOffsetY } = React.useContext(MainPageContext);
  const [pointerEvents, setPointerEvents] = React.useState<"none" | "auto">(
    "auto"
  );

  const opacity = scrollOffsetY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  React.useEffect(() => {
    const listener = opacity.addListener(({ value }) => {
      setPointerEvents(value === 0 ? "none" : "auto");
    });

    return () => {
      opacity.removeListener(listener);
    };
  }, [opacity]);

  return { opacity, pointerEvents };
};
