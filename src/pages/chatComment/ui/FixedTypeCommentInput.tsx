import React from "react";
import { View } from "react-native";
import {
  IAddThemeCommentApiProps,
  IComment,
} from "@/entities/theme/model/interfaces";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { addThemeCommentApi } from "@/entities/theme/model/themeThunk";
import {
  addComment,
  increateThemeCommentCount,
} from "@/entities/theme/model/themeSlice";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { isFulfilled } from "@reduxjs/toolkit";
import { TypeAndSubmitInput } from "@/shared/ui/TypeAndSubmitInput";

interface Props {
  themeId: number;
}

export const FixedTypeCommentInput: React.FC<Props> = ({ themeId }) => {
  const dispatch = useAppDispatch();
  const [text, setText] = React.useState("");
  const addThemeCommentLoading = useAppSelector(
    (state) => state.theme.addThemeCommentLoading
  );

  const data: IAddThemeCommentApiProps = {
    isAnonymous: false,
    text,
    themeId,
  };

  const onChangeText = (value: string) => {
    if (addThemeCommentLoading) return;
    setText(value);
  };

  const onSubmit = async () => {
    if (!text || addThemeCommentLoading) return;
    const response = await dispatch(addThemeCommentApi(data));
    if (isFulfilled(response)) {
      setText("");
      const comment: IComment = response.payload;
      dispatch(addComment(comment));
      dispatch(increateThemeCommentCount());
    }
  };

  return (
    <View className="absolute bottom-0 w-full h-[80px] border border-grayPrimary/40 rounded-t-xl px-6 flex items-center justify-center bg-white">
      <TypeAndSubmitInput
        placeholder="Сообщение"
        value={text}
        onSubmit={onSubmit}
        onChange={onChangeText}
      />
    </View>
  );
};
