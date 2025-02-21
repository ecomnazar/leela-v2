import React from "react";

import { closeStoryModal } from "@/entities/story/model/storySlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const SWIPE_THRESHOLD = 50;

export const StoryGestureHandlerWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const { translationY } = event.nativeEvent;
      if (translationY > SWIPE_THRESHOLD) {
        // Если свайп вниз больше порогового значения, закрываем модальное окно
        dispatch(closeStoryModal());
      }
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={onHandlerStateChange}>
      {children}
    </PanGestureHandler>
  );
};
