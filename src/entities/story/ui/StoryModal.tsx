import React from "react";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import { Modal, View } from "react-native";
import { toggleStoryModal } from "../model/storySlice";
import { StoryCubeCarousel } from "./StoryCubeCarousel";

export const StoryModal = () => {
  const dispatch = useAppDispatch();
  const isStoryModalOpen = useAppSelector((state) => state.story.isModalOpen);

  const closeStoryModal = () => dispatch(toggleStoryModal("close"));

  return (
    <Modal
      style={{ zIndex: 20 }}
      visible={isStoryModalOpen}
      onRequestClose={closeStoryModal}
      animationType="slide"
      transparent={true}
    >
      <View style={{ height: SCREEN_HEIGHT }} className="bg-black h-24">
        <StoryCubeCarousel />
      </View>
    </Modal>
  );
};
