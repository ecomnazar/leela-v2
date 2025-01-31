import { COLORS } from "@/shared/constants/colors";
import { CustomText } from "@/shared/ui/CustomText";
import { Icon } from "@/shared/ui/Icon";
import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const Photos = () => {
  const [images, setImages] = React.useState<(string | null)[]>(
    Array(4).fill(null)
  );

  const pickImage = async (index: number) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      const newImages = [...images];
      newImages[index] = result.assets[0].uri;
      setImages(newImages);
    }
  };

  const deleteImage = (index: number) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  return (
    <View>
      <CustomText size={14} weight="bold" className="mb-2">
        Добавьте фото <Text className="opacity-40">(необязательно)</Text>
      </CustomText>
      <View className="mt-2 grid grid-cols-4 gap-4">
        {images.map((imageUri, index) => (
          <View key={index}>
            <Pressable
              onPress={() => !imageUri && pickImage(index)}
              className="border rounded-xl overflow-hidden"
              style={{
                aspectRatio: 1,
                width: "100%",
                borderColor: `${COLORS.borderPrimary}40`,
              }}
            >
              {imageUri ? (
                <Image source={{ uri: imageUri }} className="w-full h-full" />
              ) : (
                <View className="flex-1 items-center justify-center">
                  <Icon
                    type="plus"
                    fill={COLORS.primary}
                    width={14}
                    height={14}
                  />
                </View>
              )}
            </Pressable>

            {imageUri && (
              <Pressable
                className="mt-2.5 mx-auto border-b border-darkGreen w-fit"
                onPress={() => deleteImage(index)}
              >
                <CustomText
                  color={"darkGreen"}
                  weight="bold"
                  size={14}
                  className="text-center"
                >
                  Удалить
                </CustomText>
              </Pressable>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};
