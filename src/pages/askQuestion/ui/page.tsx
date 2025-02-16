import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Badge } from "@/shared/ui/Badge";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { PageHeader } from "@/widgets/pageHeader";
import { Input } from "@/shared/ui/Input";
import { View } from "react-native";
import { Photos } from "./Photos";
import { Button } from "@/shared/ui/Button";
import { IAddThemeApiProps } from "@/entities/theme/model/interfaces";
import { AnonymousOption } from "@/entities/ui/anonymousOption";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { addThemeApi } from "@/entities/theme/model/themeThunk";
import { router } from "expo-router";
import { Loading } from "@/shared/ui/Loading";

export const AskQuestionPage = () => {
  const dispatch = useAppDispatch();

  const [addThemeLoading, setAddThemeLoading] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  const data: IAddThemeApiProps = {
    title,
    text,
    isAnonymous,
    themeTags: [],
    attachments: [],
  };

  const onCancel = () => router.push("/(bottomNavbar)");

  const onSubmit = async () => {
    if (!title || !text) return;
    setAddThemeLoading(true);
    await dispatch(addThemeApi(data));
    setAddThemeLoading(false);
    router.push("/(bottomNavbar)");
  };

  return (
    <View className="w-screen h-screen bg-[#F2F2F2] flex-1">
      <PageHeader title="Новое обсуждение" disableBorder />
      <Container className="mt-4 flex-1 flex-col pb-4">
        <View className="flex-1">
          <View className="space-y-4">
            <Input
              label="Тема"
              placeholder="Опишите коротко вопрос"
              onChange={(val) => setTitle(val)}
            />
            <View className="relative">
              <Input
                label="Ваш вопрос"
                placeholder="Как оформить подписку?"
                onChange={(val) => setText(val)}
                placeholderTextColor={COLORS.textPrimary}
                height={160}
                multiline
              />
              <View className="border-t-2 border-black/10 pt-2 absolute bottom-2 w-[95%] left-1/2 -translate-x-1/2">
                <Flex className="gap-x-2">
                  <Badge size="medium" color="#27263630">
                    Расставание
                  </Badge>
                  <Badge size="medium" color="#F5D0C2">
                    Отношение с родителями
                  </Badge>
                </Flex>
              </View>
            </View>
            <Photos />
            <View className="border-t border-black/10 py-4">
              <AnonymousOption
                checked={isAnonymous}
                onChange={(isChecked) => setIsAnonymous(isChecked)}
              />
            </View>
          </View>
          <View className="space-y-3 mt-auto">
            <Button loading={addThemeLoading} onPress={onSubmit}>
              Отправить
            </Button>
            <Button
              onPress={onCancel}
              variant="outline"
              className="!bg-[#F2F2F2]"
            >
              Отменить
            </Button>
          </View>
        </View>
      </Container>
    </View>
  );
};
