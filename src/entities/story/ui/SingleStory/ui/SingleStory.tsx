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
import { useSingleStoryData } from "@/entities/story/hooks/useSingleStoryData";
import { useSingleStoryIndicatorData } from "@/entities/story/hooks/useSingleStoryIndicatorData";

interface Props {
  story: IStoryAuthor;
  localCurrentStoryIndex: number;
}

export const SingleStory: React.FC<Props> = ({
  story,
  localCurrentStoryIndex,
}) => {
  const { authorId } = story || {};

  const {
    mediaUrl,
    mediaType,
    description,
    stories,
    storiesLength,
    currentMediaIndex,
    setCurrentMediaIndex,
    isMediaLoaded,
    setIsMediaLoaded,
  } = useSingleStoryData({ authorId });

  const { handlePress, goToNextStory } = useStoryNavgation({
    stories,
    currentMediaIndex,
    setCurrentMediaIndex,
  });

  const { progress } = useSingleStoryIndicatorData({
    currentMediaIndex,
    goToNextStory,
    isMediaLoaded,
    localCurrentStoryIndex,
  });

  useFetchNearStories();

  return (
    <>
      <StoryGestureHandlerWrapper>
        <View style={{ width: "100%", height: "100%" }}>
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
