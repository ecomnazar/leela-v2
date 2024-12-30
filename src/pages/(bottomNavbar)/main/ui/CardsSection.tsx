import React from "react";
import { Container } from "@/shared/ui/Container";
import { Platform, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import images from "assets/images";
import { Flex } from "@/shared/ui/Flex";
import ChatIcon from "assets/icons/chat.svg";
import { CardHorizontal } from "@/shared/ui/CardHorizontal";
import { Link, router } from "expo-router";
import clsx from "clsx";

export const CardsSection = () => {
  return (
    <Container className="mt-6 gap-y-2.5">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          // <Link href={"/chat"} key={index}>
          <CardHorizontal onPress={() => router.push("/chat")} key={index}>
            <View className="h-full w-24 bg-grayPrimary/40 rounded-2xl overflow-hidden">
              <Image
                source={images.groupExample1}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View>
              <Text
                className={clsx(
                  "text-textPrimary dark:text-white/75 font-semibold",
                  {
                    "text-xl": Platform.OS === "web",
                    "text-2xl": Platform.OS !== "web",
                  }
                )}
              >
                Звезды
              </Text>
              <Flex className="gap-x-1.5 mt-3">
                <ChatIcon width={17} height={17} fill={"#8B9497"} />
                <Text
                  className={clsx(
                    "text-grayPrimary dark:text-white/75 font-semibold -translate-y-0.5",
                    {
                      "text-[13px]": Platform.OS === "web",
                      "text-base": Platform.OS !== "web",
                    }
                  )}
                >
                  Андрей
                </Text>
              </Flex>
              <Text
                numberOfLines={1}
                className={clsx("text-grayPrimary/65 mt-1", {
                  "text-[11px]": Platform.OS === "web",
                  "text-base": Platform.OS !== "web",
                })}
              >
                А как вы обычно интересы
              </Text>
            </View>
          </CardHorizontal>
          // </Link>
        );
      })}
    </Container>
  );
};
