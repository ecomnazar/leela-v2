import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Image } from "expo-image";
import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  GestureResponderEvent,
  Pressable,
  Text,
  View,
} from "react-native";
// import { StoryIndicator } from "./StoryIndicator";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { getPublicStoriesByAuthorIdApi } from "../model/storyThunk";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { setSelectedAuthorIndex, toggleStoryModal } from "../model/storySlice";
// import { IAvatar, useStory } from "./useStory";

const { width } = Dimensions.get("window");
const STORY_DURATION = 5000;

// interface Props {
//   item: IAvatar;
// }
const avatars = [
  {
    id: 1,
    name: "Jane",
    avatarImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    stories: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
        viewed: false,
      },
      {
        id: 2,
        type: "image",
        url: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        viewed: false,
      },
    ],
  },
  {
    id: 2,
    name: "Merry",
    avatarImage:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60",
    stories: [
      {
        id: 7,
        type: "image",
        url: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        viewed: false,
      },
      {
        id: 8,
        type: "image",
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
        viewed: false,
      },
      {
        id: 9,
        type: "image",
        url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60",
        viewed: false,
      },
    ],
  },
];

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
  const firstStory = authorStories[authorId]?.stories[0].mediaUrl;
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
    if (
      selectedAuthorIndex === unseenExperts?.length - 1 &&
      lastStoryIndex === stories.length - 1
    ) {
      dispatch(toggleStoryModal("close"));
      return;
    }
    if (
      selectedAuthorIndex < unseenExperts?.length - 1 &&
      lastStoryIndex === stories.length - 1
    ) {
      setLastStoryIndex(lastReadStoryIndex || 0);
      dispatch(setSelectedAuthorIndex(selectedAuthorIndex + 1));
      scrollToIndex(1);

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

  // useEffect(() => {
  //   if (item.id !== avatars[currentAvatarIndex].id) return;
  //   startTimer();
  //   return () =>
  //     clearTimeout(timeoutRef.current ? timeoutRef.current : undefined);
  // }, [currentStoryIndex, currentAvatarIndex]);

  React.useEffect(() => {
    if (authorStories[authorId]) return;
    dispatch(getPublicStoriesByAuthorIdApi({ authorId }));
  }, []);

  return (
    <>
      <View style={{ position: "absolute", top: 10, paddingHorizontal: 20 }}>
        <Text style={{ color: "white" }}>{authorName}</Text>
      </View>
      <Pressable
        style={{ width: "100%", height: "100%" }}
        onPress={(e) => handlePress(e)}
      >
        <Image
          source={stories[lastStoryIndex]?.mediaUrl}
          style={{ width: "100%", height: "100%" }}
          contentFit="contain"
        />
      </Pressable>
      {/* <StoryIndicator progress={progress} /> */}
    </>
  );
};
