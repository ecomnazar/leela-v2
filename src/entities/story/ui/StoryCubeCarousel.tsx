import { useRef } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { getCubePosition } from "../lib/getCubePosition";
import { SingleStory } from "./SingleStory";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

const { width, height } = Dimensions.get("window");

export const StoryCubeCarousel = () => {
  const flatListRef = useRef<Animated.FlatList<any>>(null);

  const { unseenExperts } = useAppSelector(
    (state) => state.story.publicStories.data
  );
  const selectedAuthorIndex = useAppSelector(
    (state) => state.story.selectedAuthorIndex
  );

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  return (
    <Animated.FlatList
      ref={flatListRef}
      data={unseenExperts}
      keyExtractor={(item) => item.authorId.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      initialScrollIndex={selectedAuthorIndex}
      scrollEventThrottle={16}
      getItemLayout={(data, index) => ({
        length: width, // ширина каждого элемента
        offset: width * index,
        index,
      })}
      renderItem={({ item, index }) => {
        const { rotateY, translateX } = getCubePosition({
          index,
          scrollX,
        });

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
              authorName={item.name}
              authorId={item.authorId}
              scrollToIndex={scrollToIndex}
            />
          </Animated.View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width,
    height,
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
