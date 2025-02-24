import React from "react";
import { getColors } from "react-native-image-colors";

interface Props {
  assetUri: string;
}
type TReturnType = [string, string, ...string[]];

export const DETECT_IMAGE_COLORS = ["dominant", "darkMuted", "darkVibrant"];

export const useDetectImageColors = ({ assetUri }: Props): TReturnType => {
  const [colors, setColors] = React.useState<TReturnType>(["", ""]);

  React.useEffect(() => {
    if (!assetUri) return;
    getColors(assetUri, {
      fallback: "#7C9484",
      cache: true,
      key: assetUri,
    }).then((res) => {
      const colors = Object.entries(res)
        .map(([key, value]) => {
          return {
            key,
            value,
          };
        })
        .filter((item) => DETECT_IMAGE_COLORS.includes(item.key))
        .map((item) => item.value) as [string, string, ...string[]];

      setColors(colors);
    });
  }, [assetUri]);

  return colors;
};
