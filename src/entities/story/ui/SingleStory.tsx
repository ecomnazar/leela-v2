import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Image } from "expo-image";
import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  GestureResponderEvent,
  Pressable,
  View,
} from "react-native";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { getPublicStoriesByAuthorIdApi } from "../model/storyThunk";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { setSelectedAuthorIndex, toggleStoryModal } from "../model/storySlice";
import { StoryIndicator } from "./StoryIndicator";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Video } from "expo-av";

import images from "assets/images";
import { Flex } from "@/shared/ui/Flex";
import { CustomText } from "@/shared/ui/CustomText";
import videos from "assets/videos";
import { Button } from "@/shared/ui/Button";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";

const { width } = Dimensions.get("window");
const STORY_DURATION = 4500;
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

  const startTimer = (durationProp?: number) => {
    const duration = durationProp ? durationProp : STORY_DURATION;
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: duration,
      easing: Easing.linear,
    });

    timeoutRef.current = setTimeout(goToNextStory, duration);
  };

  useEffect(() => {
    // startTimer();
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

  const videoSource = videos.second;
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playAsync();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
        <View style={{ width: "100%", height: "100%" }}>
          <Pressable
            style={{ width: "100%", height: "100%" }}
            onPress={(e) => handlePress(e)}
          >
            {authorId === 1 && (
              <View
                className="scale-y-150 scale-x-125"
                style={{ height: SCREEN_HEIGHT }}
              >
                <Video
                  ref={videoRef}
                  source={videoSource}
                  style={{ width: "100%", height: "100%" }}
                  // isLooping
                  onPlaybackStatusUpdate={(status) => {
                    if (status.isPlaying) {
                      if (!isVideoPlaying) {
                        startTimer(status.durationMillis);
                        setIsVideoPlaying(true);
                      }
                    }
                  }}
                  useNativeControls={false} // disable native controls to prevent forcing fullscreen
                />
              </View>
            )}
          </Pressable>
          <StoryIndicator
            progress={progress}
            storiesLength={stories.length}
            activeStoryIndex={lastStoryIndex}
          />
          <View className="absolute bottom-8 left-0 px-4">
            <Flex className="gap-x-2 mb-2">
              <Image
                source={images.stories5}
                style={{
                  width: 36,
                  height: 36,
                  objectFit: "contain",
                  borderRadius: 999,
                }}
              />
              <View>
                <CustomText weight="bold" size={13} color="white">
                  Анастасия
                </CustomText>
                <CustomText weight="regular" size={13} color="white">
                  Эксперт
                </CustomText>
              </View>
            </Flex>
            <CustomText
              weight="regular"
              size={13}
              color="white"
              className="mb-3"
              numberOfLines={2}
            >
              Авокадо богат клетчаткой, витаминами (Е, С, группы B) и калием,
              способствует здоровому пищеварению, энергии и нормализации
              давления.
            </CustomText>
            <Button
              variant="outline"
              className="bg-white/10 border-white"
              textStyle={{ color: "#FFF" }}
            >
              Открыть профиль
            </Button>
          </View>
        </View>
      </PanGestureHandler>
    </>
  );
};
