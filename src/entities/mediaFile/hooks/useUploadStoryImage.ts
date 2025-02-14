import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { convertToBlob } from "@/shared/lib/convertToBlob";
import { uploadStoryImageApi } from "../model/mediaFileThunk";
import { isFulfilled } from "@reduxjs/toolkit";
import { TUploadStoryImageApiResponse } from "../model/interfaces";
import toast from "react-hot-toast";

export const useUploadStoryImage = () => {
  const dispatch = useAppDispatch();

  const uploadStoryImage = async (imageUri: string | null): Promise<string> => {
    if (!imageUri) return "";

    const formData = new FormData();

    try {
      const blob = await convertToBlob(imageUri);
      formData.append("files", blob, "image.png");
    } catch (error) {
      toast.error("Ошибка при конвертации изображения");
      return "";
    }

    const uploadResponse = await dispatch(uploadStoryImageApi(formData));

    if (isFulfilled(uploadResponse)) {
      const response = uploadResponse.payload as TUploadStoryImageApiResponse;

      if (response.length > 0) {
        return response[0].fileUrl;
      }

      toast.error("Ошибка: пустой ответ от сервера");
    } else {
      toast.error("Ошибка загрузки изображения");
    }

    return "";
  };

  return { uploadStoryImage };
};
