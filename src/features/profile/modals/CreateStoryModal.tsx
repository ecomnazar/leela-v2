import React from "react";

import { closeCreateStoryModal } from "@/entities/story/model/storySlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Container } from "@/shared/ui/Container";
import { TypeAndSubmitInput } from "@/shared/ui/TypeAndSubmitInput";
import { PageHeader } from "@/widgets/pageHeader";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Modal, View } from "react-native";
import { useUploadStoryImage } from "@/entities/mediaFile/hooks/useUploadStoryImage";
import { ICreateStoryApiProps } from "@/entities/story/model/interfaces";
import { createStoryApi } from "@/entities/story/model/storyThunk";
import { isRejected } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useDetectImageColors } from "@/shared/hooks/useDetectImageColors";

export const CreateStoryModal = () => {
  const dispatch = useAppDispatch();

  const { modal, assetType, assetUri } = useAppSelector(
    (state) => state.story.createStory
  );

  const colors = useDetectImageColors({ assetUri: assetUri });

  const [text, setText] = React.useState("");
  const { uploadStoryImage } = useUploadStoryImage();

  const onClose = () => dispatch(closeCreateStoryModal());

  const onSubmit = () => {
    if (!assetUri) return;
    onClose();
    const combinedPromise = async () => {
      const mediaUrl = await uploadStoryImage(assetUri);

      if (!mediaUrl) {
        throw new Error("Ошибка загрузки изображения");
      }

      const data: ICreateStoryApiProps = {
        description: text,
        mediaUrl,
        mediaType: assetType,
      };

      const response = await dispatch(createStoryApi(data));
      if (isRejected(response)) {
        throw new Error("Ошибка при создании истории");
      }

      return response.payload;
    };

    toast.promise(combinedPromise, {
      loading: "Создание истории",
      success: "История успешно создана",
      error: "Ошибка при создании истории",
    });
  };

  return (
    <Modal
      visible={modal}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <LinearGradient
        colors={colors}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <View className="absolute top-0 left-0 w-full z-10">
        <PageHeader
          title="Добавить историю"
          textColor="white"
          disableBorder
          onPressBackButton={() => onClose()}
        />
      </View>
      <View
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
        }}
        className="flex items-center justify-center relative z-[2]"
      >
        {assetUri && (
          <Image
            source={{ uri: assetUri }}
            contentFit="contain"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </View>
      <View className="absolute bottom-0 left-0 w-full z-10 pb-4">
        <Container>
          <View>
            <TypeAndSubmitInput
              value={text}
              onSubmit={onSubmit}
              onChange={(text) => setText(text)}
              placeholder="Добавить подпись"
            />
          </View>
        </Container>
      </View>
    </Modal>
  );
};
