import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
  progress: SharedValue<number>;
  storiesLength: number;
  activeStoryIndex: number;
}

const AnimatedProgressIndicator = ({
  i,
  currentStoryIndex,
  progress,
}: {
  i: number;
  currentStoryIndex: number;
  progress: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    width: i === currentStoryIndex ? `${progress.value * 100}%` : "100%",
  }));

  return (
    <Animated.View
      style={[
        styles.indicatorFill,
        animatedStyle,
        {
          backgroundColor:
            i > currentStoryIndex ? "rgba(255,255,255,0.01)" : "white",
        },
      ]}
    />
  );
};

export const StoryIndicator: React.FC<Props> = ({
  progress,
  storiesLength,
  activeStoryIndex,
}) => {
  // const { avatars, currentAvatarIndex, currentStoryIndex } = useStory();
  // const stories = avatars[currentAvatarIndex].stories;

  return (
    <View style={styles.indicatorContainer}>
      {Array.from({ length: storiesLength }).map((story, i) => {
        return (
          <View
            key={i}
            style={[
              styles.indicatorBackground,
              { backgroundColor: "rgba(255,255,255,0.1)" },
            ]}
          >
            <AnimatedProgressIndicator
              i={i}
              currentStoryIndex={activeStoryIndex}
              progress={progress}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    position: "absolute",
    top: 25,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },
  indicatorBackground: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 2,
    overflow: "hidden",
  },
  indicatorFill: {
    height: "100%",
    borderRadius: 2,
  },
});
