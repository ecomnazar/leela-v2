import React from "react";

import { Animated, Pressable, View } from "react-native";

import { StoryIndicator } from "./StoryIndicator";

import { SingleStoryFooter } from "./SingleStoryFooter";
import { StoryGestureHandlerWrapper } from "../wrappers/StoryGestureHandlerWrapper";
import { Image } from "expo-image";
import { useStoryNavgation } from "../hooks/useStoryNavgation";
import { IStoryAuthor } from "@/entities/story/model/interfaces";
import { useFetchNearStories } from "@/entities/story/hooks/useFetchNearStories";
import { useSingleStoryData } from "@/entities/story/hooks/useSingleStoryData";
import { useSingleStoryIndicatorData } from "@/entities/story/hooks/useSingleStoryIndicatorData";
import ImageColors from "react-native-image-colors";
import { DETECT_IMAGE_COLORS } from "@/shared/hooks/useDetectImageColors";
import { LinearGradient } from "expo-linear-gradient";
import { sleep } from "@/shared/lib/sleep";

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
    currentMediaLoaded,
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
    currentMediaLoaded,
  });

  useFetchNearStories();

  const [colors, setColors] = React.useState<any>([]);

  React.useEffect(() => {
    const fetchColors = async () => {
      if (!mediaUrl) return;
      await ImageColors.getColors(mediaUrl, {
        fallback: "#7C9484",
      }).then((res) => {
        const detectedColors = Object.entries(res)
          .map(([key, value]) => {
            return {
              key,
              value,
            };
          })
          .filter((item) => DETECT_IMAGE_COLORS.includes(item.key))
          .map((item) => item.value) as [string, string, ...string[]];
        setColors(detectedColors);
      });
    };

    fetchColors();
  }, [mediaUrl]);

  React.useEffect(() => {
    if (!mediaUrl && !stories.length) return;
    const fetch = () => {
      for (let index = 0; index < stories.length; index++) {
        Image.prefetch(stories[index].mediaUrl)
          .then(async () => {
            setIsMediaLoaded((prev) => {
              const copy = [...prev];
              copy[index] = true;
              return copy;
            });
          })
          .catch((error) => {
            console.error("Error prefetching image:", error);
          });
      }
    };
    fetch();
  }, [mediaUrl]);

  return (
    <>
      <StoryGestureHandlerWrapper>
        <View style={{ width: "100%", height: "100%" }}>
          <Pressable
            className="flex items-center justify-center relative z-[10]"
            style={{ width: "100%", height: "100%" }}
            onPress={(e) => handlePress(e)}
          >
            {currentMediaLoaded && mediaType === "photo" && (
              <Image
                // key={mediaUrl}
                source={mediaUrl}
                style={{ width: "100%", height: "100%" }}
                contentFit="contain"
                contentPosition={"center"}
              />
            )}
          </Pressable>

          {!currentMediaLoaded && (
            <View className="w-full h-full absolute top-0 left-0 bg-black z-[0]"></View>
          )}
          {currentMediaLoaded && (
            <LinearGradient
              colors={colors}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            />
          )}
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
