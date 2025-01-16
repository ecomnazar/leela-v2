import { COLORS } from "@/shared/constants/colors";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import images from "assets/images";
import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface Props {
  image: string;
  name: string;
}

export const Card: React.FC<Props> = ({ image, name }) => {
  return (
    <Container>
      <View>
        <Flex align="start" justify="between">
          <Flex className="gap-x-3">
            <View className="w-[44px] h-[44px] rounded-full overflow-hidden">
              <Image source={image} style={{ width: "100%", height: "100%" }} />
            </View>
            <View className="-space-y-0.5">
              <Text className="text-textPrimary text-lg font-semibold">
                {name}
              </Text>
              <Text className="text-grayPrimary text-[13.3px]">Гость</Text>
            </View>
          </Flex>
          <Flex className="gap-x-3">
            <Text className="text-textPrimary font-semibold text-[13.8px]">
              09.05.24
            </Text>
            <Flex className="gap-x-1">
              <Icon type="heart" className="" />
              <Icon
                type="verticalTripleDots"
                width={20}
                height={20}
                fill={COLORS.textPrimary}
              />
            </Flex>
          </Flex>
        </Flex>
        <View className="mt-2">
          <Flex className="gap-x-2">
            <View className="bg-[#B3A6D3] w-fit px-2.5 py-1 rounded-full">
              <Text className="text-white font-semibold text-[12px] uppercase">
                Нутрициология
              </Text>
            </View>
            <View className="bg-[#EDD3CC] w-fit px-2.5 py-1 rounded-full">
              <Text className="text-white font-semibold text-[12px] uppercase">
                КРАСОТА
              </Text>
            </View>
          </Flex>
          <View className="mt-1.5">
            <Text className="text-[#353848] opacity-80 text-lg font-semibold">
              Гипотериоз и седина
            </Text>
            <Text className="text-[#5F616F] text-[12.8px] mt-[1px]">
              Здравствуйте, как связана седина и гипотериоз? Сначала я думала,
              что это просто генетика.
            </Text>
          </View>
          <View className="mt-4">
            <Flex justify="between">
              <Flex className="gap-x-2.5">
                <Flex className="gap-x-2">
                  <Icon type="like" width={25} height={25} />
                  <Text className="text-textPrimary font-semibold text-sm">
                    2
                  </Text>
                </Flex>
                <Pressable className="translate-y-[3px]">
                  <Icon type="dislike" width={25} height={25} />
                </Pressable>
              </Flex>
              <Flex className="gap-x-2.5">
                <Flex className="gap-x-2">
                  <Icon
                    type="stapler"
                    width={21}
                    height={21}
                    fill={COLORS.textPrimary}
                  />
                  <Text className="text-textPrimary font-semibold text-sm">
                    1
                  </Text>
                </Flex>
                <Flex className="gap-x-2">
                  <Icon
                    type="comment"
                    width={21}
                    height={21}
                    fill={COLORS.textPrimary}
                  />
                  <Text className="text-textPrimary font-semibold text-sm">
                    2
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <View className="h-[1.5px] bg-grayPrimary/40 mt-4" />
          </View>
        </View>
      </View>
    </Container>
  );
};
