import React, { useRef } from "react";

import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { Animated } from "react-native";
import { getCubePosition } from "../lib/getCubePosition";
import { StoryCubeCarouseItem } from "./StoryCubeCarouseItem";
import { IStoryAuthor } from "../model/interfaces";

export const StoryCubeCarousel = () => {
  const { currentStoryIndex } = useAppSelector(
    (state) => state.story.storyModal
  );
  const { all: allStories } = useAppSelector(
    (state) => state.story.publicStories
  );

  const flatListRef = useRef<Animated.FlatList<any>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollToIndex = () => {
    flatListRef.current?.scrollToIndex({
      index: currentStoryIndex,
      animated: true,
    });
  };

  React.useEffect(() => {
    scrollToIndex();
  }, [currentStoryIndex]);

  return (
    <Animated.FlatList
      ref={flatListRef}
      data={allStories}
      keyExtractor={(item: IStoryAuthor) => item.authorId.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      windowSize={5}
      maxToRenderPerBatch={2}
      initialScrollIndex={currentStoryIndex}
      scrollEventThrottle={16}
      getItemLayout={(_, index) => ({
        length: WINDOW_WIDTH,
        offset: WINDOW_WIDTH * index,
        index,
      })}
      renderItem={({ item: story, index }) => {
        const { rotateY, translateX } = getCubePosition({
          index,
          scrollX,
        });

        return (
          <StoryCubeCarouseItem
            rotateY={rotateY}
            translateX={translateX}
            story={story}
            localCurrentStoryIndex={index}
          />
        );
      }}
    />
  );
};
