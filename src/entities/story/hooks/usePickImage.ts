import * as ImagePicker from "expo-image-picker";
import React from "react";

export const usePickImage = () => {
  const [image, setImage] = React.useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

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

  return pickImage;
};
