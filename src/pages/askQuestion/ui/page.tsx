import React from "react";
import { COLORS } from "@/shared/constants/colors";
import { Badge } from "@/shared/ui/Badge";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { PageHeader } from "@/widgets/pageHeader";
import { Input } from "@/shared/ui/Input";
import { View } from "react-native";
import { Photos } from "./Photos";
import { Checkbox } from "@/shared/ui/Checkbox";
import { CustomText } from "@/shared/ui/CustomText";
import { Button } from "@/shared/ui/Button";

export const AskQuestionPage = () => {
  const [title, setTitle] = React.useState("");

  return (
    <View className="w-screen h-screen bg-backgroundTertiary flex-1">
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
                onChange={(val) => setTitle(val)}
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
              <Flex className="gap-x-2">
                <Checkbox />
                <CustomText
                  size={14}
                  style={{ transform: [{ translateY: -1 }] }}
                >
                  Отправить анонимно
                </CustomText>
              </Flex>
            </View>
          </View>
          <View className="space-y-3 mt-auto">
            <Button>Отправить</Button>
            <Button variant="outline">Отменить</Button>
          </View>
        </View>
      </Container>
    </View>
  );
};
