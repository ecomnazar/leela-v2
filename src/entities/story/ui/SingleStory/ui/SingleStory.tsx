import React from "react";

import { Pressable, View } from "react-native";

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

  return (
    <>
      <StoryGestureHandlerWrapper>
        <View style={{ width: "100%", height: "100%" }}>
          <Pressable
            className="flex items-center justify-center relative z-[10]"
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
