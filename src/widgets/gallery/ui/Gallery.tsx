import * as ImagePicker from "expo-image-picker";

import { useState } from "react";
import { Button, View, StyleSheet, Modal } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import { PageHeader } from "@/widgets/pageHeader";
import { TypeAndSubmitInput } from "@/shared/ui/TypeAndSubmitInput";
import { Container } from "@/shared/ui/Container";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { ICreateStoryApiProps } from "@/entities/story/model/interfaces";
import { useUploadStoryImage } from "@/entities/mediaFile/hooks/useUploadStoryImage";
import { createStoryApi } from "@/entities/story/model/storyThunk";
import toast from "react-hot-toast";
import { isRejected } from "@reduxjs/toolkit";

export const Gallery = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { uploadStoryImage } = useUploadStoryImage();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setIsModalVisible(true);
    }
  };

  const onChangeText = (value: string) => {
    setText(value);
  };

  const onSubmit = async () => {
    if (!image) return;

    setIsModalVisible(false);

    const combinedPromise = (async () => {
      const mediaUrl = await uploadStoryImage(image);
      if (!mediaUrl) {
        throw new Error("Ошибка загрузки изображения");
      }

      const data: ICreateStoryApiProps = {
        description: text,
        mediaUrl,
      };

      const response = await dispatch(createStoryApi(data));
      if (isRejected(response)) {
        throw new Error("Ошибка при создании истории");
      }

      return response.payload;
    })();

    toast.promise(combinedPromise, {
      loading: "Создание истории",
      success: "История успешно создана",
      error: "Ошибка при создании истории",
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View className="absolute top-0 left-0 w-full z-10">
          <PageHeader
            title="Добавить историю"
            textColor="white"
            disableBorder
            onPressBackButton={() => setIsModalVisible(false)}
          />
        </View>
        <View
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          className="flex items-center justify-center"
        >
          {image && (
            <Image
              source={{ uri: image }}
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
                onChange={onChangeText}
                placeholder="Добавить подпись"
              />
            </View>
          </Container>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
