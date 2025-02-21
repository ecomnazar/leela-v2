import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import * as ImagePicker from "expo-image-picker";
import { openCreateStoryModal } from "../model/storySlice";
import { TCreateStoryAssetType } from "../model/interfaces";

export const usePickImage = () => {
  const dispatch = useAppDispatch();

  const pickImage = async (type: "story") => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const type =
        result.assets[0].type?.toUpperCase() as TCreateStoryAssetType;

      dispatch(openCreateStoryModal({ assetType: type, assetUri: uri }));
    }

    return null;
  };

  return { pickImage };
};
