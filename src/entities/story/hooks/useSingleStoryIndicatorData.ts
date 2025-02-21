import React from "react";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { STORY_DURATION } from "../ui/SingleStory/lib/constants";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

interface Props {
  goToNextStory: () => Promise<void>;
  isMediaLoaded: boolean[];
  currentMediaIndex: number;
  localCurrentStoryIndex: number;
}

export const useSingleStoryIndicatorData = ({
  goToNextStory,
  isMediaLoaded,
  currentMediaIndex,
  localCurrentStoryIndex,
}: Props) => {
  const { currentStoryIndex } = useAppSelector(
    (state) => state.story.storyModal
  );

  const progress = useSharedValue(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

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
    if (localCurrentStoryIndex !== currentStoryIndex) return;
    if (!isMediaLoaded[currentMediaIndex]) return;

    startTimer();
    return () =>
      clearTimeout(timeoutRef.current ? timeoutRef.current : undefined);
  }, [isMediaLoaded[currentMediaIndex], currentMediaIndex, currentStoryIndex]);

  return { progress };
};
