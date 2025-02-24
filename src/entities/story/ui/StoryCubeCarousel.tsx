import React, { useRef } from "react";

import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { Animated, Text, View } from "react-native";
import { getCubePosition } from "../lib/getCubePosition";
import { StoryCubeCarouseItem } from "./StoryCubeCarouseItem";
import { IStoryAuthor } from "../model/interfaces";
import { scrollStoryCarousel, setCurrentStoryIndex } from "../model/storySlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

const viewabilityConfig = {
  itemVisiblePercentThreshold: 50, // At least 50% of the item should be visible
};

export const StoryCubeCarousel = () => {
  const dispatch = useAppDispatch();

  const { currentStoryIndex } = useAppSelector(
    (state) => state.story.storyModal
  );
  const { all: allStories } = useAppSelector(
    (state) => state.story.publicStories
  );

  const flatListRef = useRef<Animated.FlatList<any>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollToIndex = (idx: number) => {
    flatListRef.current?.scrollToIndex({
      index: idx,
      animated: true,
    });
  };

  // React.useEffect(() => {
  //   scrollToIndex();
  // }, [currentStoryIndex]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      if (viewableItems.length > 0) {
        const idx = viewableItems[0].index;
        dispatch(setCurrentStoryIndex(idx));
      }
    }
  ).current;

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
        { useNativeDriver: true }
      )}
      windowSize={5}
      maxToRenderPerBatch={2}
      initialScrollIndex={currentStoryIndex}
      scrollEventThrottle={16}
      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

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
            scrollToIndex={scrollToIndex}
          />
        );
      }}
    />
  );
};
