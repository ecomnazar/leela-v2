import React from "react";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { Animated, StyleSheet } from "react-native";
import { IStoryAuthor } from "../model/interfaces";
import { SingleStory } from "./SingleStory";

interface Props {
  rotateY: Animated.AnimatedInterpolation<string | number>;
  translateX: Animated.AnimatedInterpolation<string | number>;
  story: IStoryAuthor;
  localCurrentStoryIndex: number;
  scrollToIndex: (idx: number) => void;
}

export const StoryCubeCarouseItem: React.FC<Props> = ({
  rotateY,
  translateX,
  story,
  localCurrentStoryIndex,
  scrollToIndex,
}) => {
  return (
    <Animated.View
      style={[
        styles.itemContainer,
        {
          transform: [{ perspective: 1000 }, { translateX }, { rotateY }],
        },
      ]}
    >
      <SingleStory
        story={story}
        localCurrentStoryIndex={localCurrentStoryIndex}
        scrollToIndex={scrollToIndex}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});
