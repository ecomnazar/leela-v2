import React from "react";
import PlayIcon from "assets/icons/play.svg";
import { COLORS } from "@/shared/constants/colors";
import { Pressable, TextInput, View } from "react-native";
import {
  IAddThemeCommentApiProps,
  IComment,
} from "@/entities/theme/model/interfaces";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { addThemeCommentApi } from "@/entities/theme/model/themeThunk";
import { addComment } from "@/entities/theme/model/themeSlice";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

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
    if (response.meta.requestStatus === "fulfilled") {
      setText("");
      const comment: IComment = response.payload;
      dispatch(addComment(comment));
    }
  };

  return (
    <View className="absolute bottom-0 w-full h-[80px] border border-grayPrimary/40 rounded-t-xl px-6 flex items-center justify-center bg-white">
      <View className="relative h-[52px] bg-gray-200 w-full rounded-xl">
        <TextInput
          onChangeText={onChangeText}
          value={text}
          style={{
            fontSize: 18,
            height: "100%",
            outline: "none",
            paddingLeft: 20,
            paddingRight: 50,
            fontWeight: "400",
            textDecorationColor: "red",
            color: `${COLORS.textPrimary}`,
          }}
          placeholderTextColor={COLORS.grayPrimary60}
          placeholder="Сообщение"
        />
        <View className="absolute top-1/2 right-5 -translate-y-1/2">
          <Pressable onPress={onSubmit}>
            <PlayIcon width={14} height={14} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
