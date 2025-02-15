import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Image } from "expo-image";
import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  GestureResponderEvent,
  PanResponder,
  Pressable,
  Text,
  View,
} from "react-native";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { getPublicStoriesByAuthorIdApi } from "../model/storyThunk";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { setSelectedAuthorIndex, toggleStoryModal } from "../model/storySlice";
import { StoryIndicator } from "./StoryIndicator";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { useVideoPlayer, VideoView } from "expo-video";

import { useEvent } from "expo";

const { width } = Dimensions.get("window");
const STORY_DURATION = 15000;
const SWIPE_THRESHOLD = 50;

interface Props {
  authorName: string;
  authorId: number;
  scrollToIndex: (index: number) => void;
}

export const SingleStory: React.FC<Props> = ({
  authorName,
  authorId,
  scrollToIndex,
}) => {
  const dispatch = useAppDispatch();
  const { unseenExperts } = useAppSelector(
    (state) => state.story.publicStories.data
  );
  const authorStories = useAppSelector((state) => state.story.authorStories);
  const selectedAuthorIndex = useAppSelector(
    (state) => state.story.selectedAuthorIndex
  );

  const stories = authorStories[authorId]?.stories || [];
  const lastReadStoryId = authorStories[authorId]?.lastReadStoryId;

  const lastReadStoryIndex =
    lastReadStoryId === 0
      ? 0
      : authorStories[authorId]?.stories.findIndex(
          (story) => story.id === lastReadStoryId
        );

  const [lastStoryIndex, setLastStoryIndex] = React.useState(
    lastReadStoryIndex || 0
  );

  const progress = useSharedValue(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePress = (event: GestureResponderEvent) => {
    // if (item.id !== avatars[currentAvatarIndex].id) return;
    const x = event.nativeEvent.locationX || event.nativeEvent.pageX;
    // if (currentStoryIndex === stories.length - 1 && x > width / 2) {
    //   closeStoryModal();
    //   return;
    // }
    // clearTimeout(timeoutRef.current ? timeoutRef.current : undefined);
    // progress.value = 0;
    x < width / 2 ? goToPrevStory() : goToNextStory();
  };

  const goToPrevStory = () => {
    if (selectedAuthorIndex === 0 && lastStoryIndex === 0) return;
    console.log("here");
    if (lastStoryIndex === 0 && selectedAuthorIndex > 0) {
      dispatch(setSelectedAuthorIndex(selectedAuthorIndex - 1));
      scrollToIndex(selectedAuthorIndex - 1);
      setLastStoryIndex(lastReadStoryIndex || 0);
      return;
    }
    setLastStoryIndex((prev) => prev - 1);
  };

  const goToNextStory = () => {
    // if story and authors end
    if (
      selectedAuthorIndex === unseenExperts?.length - 1 &&
      lastStoryIndex === stories.length - 1
    ) {
      dispatch(toggleStoryModal("close"));
      return;
    }

    // if story end but authour not
    if (
      selectedAuthorIndex < unseenExperts?.length - 1 &&
      lastStoryIndex === stories.length - 1
    ) {
      setLastStoryIndex(lastReadStoryIndex || 0);
      dispatch(setSelectedAuthorIndex(selectedAuthorIndex + 1));
      scrollToIndex(selectedAuthorIndex + 1);

      return;
    }
    setLastStoryIndex((prev) => prev + 1);
  };

  const startTimer = () => {
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: STORY_DURATION,
      easing: Easing.linear,
    });

    timeoutRef.current = setTimeout(goToNextStory, STORY_DURATION);
  };

  useEffect(() => {
    startTimer();
    // if (item.id !== avatars[currentAvatarIndex].id) return;
    // startTimer();
    return () =>
      clearTimeout(timeoutRef.current ? timeoutRef.current : undefined);
  }, [lastStoryIndex, selectedAuthorIndex]);

  React.useEffect(() => {
    if (authorStories[authorId]) return;
    dispatch(getPublicStoriesByAuthorIdApi({ authorId }));
  }, []);

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { translationY } = event.nativeEvent;
      if (translationY > SWIPE_THRESHOLD) {
        // Если свайп вниз больше порогового значения, закрываем модальное окно
        dispatch(toggleStoryModal("close"));
      }
    }
  };

  const videoSource =
    "https://videos.pexels.com/video-files/3986219/3986219-sd_360_640_30fps.mp4";

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      player.play();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
        <View style={{ width: "100%", height: "100%" }}>
          {/* <View
            style={{ position: "absolute", bottom: 10, paddingHorizontal: 20 }}
          >
            <Text style={{ color: "white" }}>{authorName}</Text>
          </View> */}
          <Pressable
            style={{ width: "100%", height: "100%" }}
            onPress={(e) => handlePress(e)}
          >
            {/* <Image
              source={stories[lastStoryIndex]?.mediaUrl}
              style={{ width: "100%", height: "100%" }}
              contentFit="contain"
            /> */}

            {/* <VideoView  */}
            {/* /> */}

            <View className="scale-[1.2]">
              <VideoView
                style={{
                  width: "100%",
                  height: "110%",
                }}
                player={player}
                allowsFullscreen
                allowsPictureInPicture
                nativeControls={false}
              />
            </View>
          </Pressable>
          <StoryIndicator
            progress={progress}
            storiesLength={stories.length}
            activeStoryIndex={lastStoryIndex}
          />
        </View>
      </PanGestureHandler>
    </>
  );
};
