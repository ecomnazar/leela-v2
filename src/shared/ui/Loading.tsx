import "./Loading.css";
import React from "react";
import LoadingIcon from "assets/icons/loading.svg";
import { View } from "react-native";
import clsx from "clsx";

interface Props {
  className?: string;
  center?: boolean;
}

export const Loading: React.FC<Props> = ({ className, center }) => {
  return (
    <View
      className={clsx("loading-spinner", className, {
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2": center,
      })}
    >
      <LoadingIcon />
    </View>
  );
};
