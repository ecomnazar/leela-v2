import React from "react";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import { Modal, Pressable, Text, View } from "react-native";
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
        <View style={{ position: "absolute", top: 0, right: 0, zIndex: 99 }}>
          <Pressable
            onPress={closeStoryModal}
            className="py-4 px-6 bg-white/10"
          >
            <Text className="text-white">Close</Text>
          </Pressable>
        </View>
        <StoryCubeCarousel />
      </View>
    </Modal>
  );
};
