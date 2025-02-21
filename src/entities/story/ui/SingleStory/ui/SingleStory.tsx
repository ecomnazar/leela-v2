import React from "react";

import { Pressable, View } from "react-native";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { StoryIndicator } from "./StoryIndicator";

import { SingleStoryFooter } from "./SingleStoryFooter";
import { StoryGestureHandlerWrapper } from "../wrappers/StoryGestureHandlerWrapper";
import { Image } from "expo-image";
import { STORY_DURATION } from "../lib/constants";
import { useStoryNavgation } from "../hooks/useStoryNavgation";
import { IStoryAuthor } from "@/entities/story/model/interfaces";
import { useFetchNearStories } from "@/entities/story/hooks/useFetchNearStories";

interface Props {
  scrollToIndex: (index: number) => void;
  story: IStoryAuthor;
}

export const SingleStory: React.FC<Props> = ({ scrollToIndex, story }) => {
  const { stories: allStories } = useAppSelector(
    (state) => state.story.storyModal
  );

  const { authorId } = story || {};

  const stories = allStories[authorId]?.stories || [];
  const storiesLength = stories.length;
  const storyLoading = stories.length === 0;

  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);

  const progress = useSharedValue(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     CONTROL USER CLICKS     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  const { handlePress, goToNextStory } = useStoryNavgation({
    stories,
    currentMediaIndex,
    setCurrentMediaIndex,
  });

  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     CONTROL USER CLICKS     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     INDICATOR     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  const [isMediaLoaded, setIsMediaLoaded] = React.useState(
    Array.from({ length: storiesLength }).map(() => false)
  );

  const startTimer = (durationProp?: number) => {
    const duration = durationProp ? durationProp : STORY_DURATION;
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: duration,
      easing: Easing.linear,
    });

    timeoutRef.current = setTimeout(goToNextStory, duration);
  };

  React.useEffect(() => {
    if (!isMediaLoaded[currentMediaIndex]) return;
    startTimer();
    return () =>
      clearTimeout(timeoutRef.current ? timeoutRef.current : undefined);
  }, [isMediaLoaded[currentMediaIndex], currentMediaIndex]);

  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     INDICATOR     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  const currentMedia = stories[currentMediaIndex];
  const mediaUrl = currentMedia?.mediaUrl;
  const mediaType = "photo";
  const description = currentMedia?.description;

  useFetchNearStories();

  return (
    <>
      <StoryGestureHandlerWrapper>
        <View style={{ width: "100%", height: "100%" }}>
          {/* // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */}

          {/* // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */}

          {/* // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */}

          <Pressable
            className="flex items-center justify-center"
            style={{ width: "100%", height: "100%" }}
            onPress={(e) => handlePress(e)}
          >
            {mediaType === "photo" && (
              <Image
                source={mediaUrl}
                style={{ width: "100%", height: "100%" }}
                contentFit="contain"
                contentPosition={"center"}
                onLoad={() => {
                  setIsMediaLoaded((prev) => {
                    const copy = [...prev];
                    copy[currentMediaIndex] = true;
                    return copy;
                  });
                }}
              />
            )}
          </Pressable>

          {/* // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */}

          {/* // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */}

          {/* // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */}
          {/* <LinearGradient
            colors={colors}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
          /> */}
          <StoryIndicator
            progress={progress}
            storiesLength={stories.length}
            activeStoryIndex={currentMediaIndex}
          />
          <SingleStoryFooter story={story} description={description} />
        </View>
      </StoryGestureHandlerWrapper>
    </>
  );
};
