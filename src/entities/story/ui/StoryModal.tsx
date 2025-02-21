import React from "react";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import { closeStoryModal } from "../model/storySlice";
import { StoryCubeCarousel } from "./StoryCubeCarousel";

import { Modal, View } from "react-native";

export const StoryModal = () => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.story.storyModal);

  const close = () => dispatch(closeStoryModal());

  return (
    <Modal
      style={{ zIndex: 20 }}
      visible={modal}
      onRequestClose={close}
      animationType="slide"
      transparent={true}
    >
      <View style={{ height: SCREEN_HEIGHT }} className="bg-black h-24">
        <StoryCubeCarousel />
      </View>
    </Modal>
  );
};
