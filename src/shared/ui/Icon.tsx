import React from "react";
import HeartIcon from "assets/icons/heart.svg";
import TripleDots from "assets/icons/verticalTripleDots.svg";
import LikeIcon from "assets/icons/like.svg";
import StaplerIcon from "assets/icons/stapler.svg";
import CommentIcon from "assets/icons/comment.svg";
import clsx from "clsx";

interface Props {
  type:
    | "heart"
    | "verticalTripleDots"
    | "like"
    | "dislike"
    | "stapler"
    | "comment";
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({
  type,
  width = 22,
  height = 22,
  fill,
  className,
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
          fill={fill ? fill : "#000"}
        />
      )}
      {type === "dislike" && (
        <LikeIcon
          className={clsx("rotate-180", className)}
          width={width}
          height={height}
          fill={fill ? fill : "#000"}
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
    </>
  );
};
