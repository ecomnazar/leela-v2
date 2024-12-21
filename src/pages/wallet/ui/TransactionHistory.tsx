import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import images from "assets/images";
import clsx from "clsx";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import ShareIcon from "assets/icons/share.svg";

export const TransactionHistory = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => {
        const isOdd = index % 2 === 0;
        return (
          <View
            key={index}
            className={clsx("h-[50px]", {
              "bg-backgroundSecondary/10": !isOdd,
              "": isOdd,
            })}
          >
            <Container>
              <Flex justify="between" className="h-[50px]">
                <Flex align="center" className="gap-x-2 ">
                  <View className="w-11 h-11 rounded-full overflow-hidden">
                    <Image
                      source={images.groupExample1}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                  <View>
                    <Text className="text-textPrimary text-base font-semibold">
                      Meditation Course
                    </Text>
                    <Text className="text-textPrimary/40 text-[12px]">
                      01:41 PM, 08/12
                    </Text>
                  </View>
                </Flex>
                <Flex className="gap-x-2">
                  <Text className="text-textPrimary text-base">-0.125 NON</Text>
                  <ShareIcon width={20} height={20} />
                </Flex>
              </Flex>
            </Container>
          </View>
        );
      })}
    </>
  );
};
