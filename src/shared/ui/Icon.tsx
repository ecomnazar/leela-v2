import React from "react";
import HeartIcon from "assets/icons/heart.svg";
import TripleDots from "assets/icons/verticalTripleDots.svg";
import LikeIcon from "assets/icons/like.svg";
import StaplerIcon from "assets/icons/stapler.svg";
import CommentIcon from "assets/icons/comment.svg";
import PlusIcon from "assets/icons/plus.svg";
import TrainerIcon from "assets/icons/market/trainer.svg";
import SessionIcon from "assets/icons/market/session.svg";
import CourseIcon from "assets/icons/market/course.svg";
import LicenseIcon from "assets/icons/market/license.svg";
import CoinLightIcon from "assets/icons/coinLight.svg";
import ChevronIcon from "assets/icons/chevron.svg";
import TickIcon from "assets/icons/tickIcon.svg";
import LockIcon from "assets/icons/lock.svg";
import ShineIcon from "assets/icons/shine.svg";

import clsx from "clsx";
import { ViewStyle } from "react-native";

interface Props {
  type:
    | "heart"
    | "verticalTripleDots"
    | "like"
    | "dislike"
    | "stapler"
    | "comment"
    | "plus"
    | "trainer"
    | "session"
    | "course"
    | "license"
    | "coinLight"
    | "chevron"
    | "tick"
    | "lock"
    | "shine";
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  style?: ViewStyle;
}

export const Icon: React.FC<Props> = ({
  type,
  width = 22,
  height = 22,
  fill,
  className,
  style,
}) => {
  return (
    <>
      {type === "heart" && (
        <HeartIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "verticalTripleDots" && (
        <TripleDots
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "like" && (
        <LikeIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#616470"}
        />
      )}
      {type === "dislike" && (
        <LikeIcon
          style={{ transform: [{ rotate: "180deg" }] }}
          className={clsx("", className)}
          width={width}
          height={height}
          fill={fill ? fill : "#616470"}
        />
      )}
      {type === "stapler" && (
        <StaplerIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "comment" && (
        <CommentIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "plus" && (
        <PlusIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "trainer" && (
        <TrainerIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}

      {type === "session" && (
        <SessionIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "course" && (
        <CourseIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "license" && (
        <LicenseIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "coinLight" && (
        <CoinLightIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "chevron" && (
        <ChevronIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
          style={style}
        />
      )}
      {type === "tick" && (
        <TickIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "lock" && (
        <LockIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "shine" && (
        <ShineIcon
          className={className}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
        />
      )}
    </>
  );
};
