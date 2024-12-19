import React from "react";
import { Pressable, Text, View } from "react-native";
import ChatIcon from "assets/icons/chat.svg";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { useTheme } from "@/shared/theme/useTheme";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { CategoryTabs } from "@/entities/ui/categoryTabs/ui/categoryTabs";
import { Image } from "expo-image";
import images from "assets/images";
import clsx from "clsx";
import { RoundedIcon } from "@/shared/ui/RoundedIcon";
import { router } from "expo-router";

const categories = ["РЕЙТИНГ", "СЕРТИФИКАТЫ", "НАГРАДЫ"];

const statistics = [
  {
    title: "созвонов с менторами",
    value: "30",
  },
  {
    title: "задания выполнено",
    value: "64",
  },
  {
    title: "очков    рейтинга",
    value: "12,250",
  },
];

export const ProfilePage = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);

  return (
    <Screen enableHuman>
      <CustomScrollView paddingTop={250} hasBottomBar>
        <Container>
          <Flex justify="between" align="end">
            <View>
              <Text className="text-white text-6xl">Ученик</Text>
              <Text className="text-white text-md font-medium mt-2">
                Ученик стремится к осмысленной и{"\n"}продуктивной жизни, однако
                баланс 
              </Text>
            </View>
            <View className="gap-y-3">
              <RoundedIcon
                icon="wallet"
                filled
                onClick={() => router.push("/wallet")}
              />
              <RoundedIcon
                icon="calendar"
                onClick={() => router.push("/calendar")}
              />
              <RoundedIcon icon="chevronDown" />
            </View>
          </Flex>
          <View className="h-0.5 bg-white/20 my-3" />
          <Text className="text-white text-base font-semibold">
            Статистика профиля
          </Text>
          <Flex justify="between" className="mt-3">
            {statistics.map((item, index) => {
              return (
                <View key={index} className="w-1/3 items-center gap-y-2">
                  <Text className="text-white text-3xl">{item.value}</Text>
                  <Text className="text-lg text-center leading-6 text-white/60 font-semibold">
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </Flex>
        </Container>
        <CategoryTabs
          fillBackground
          flexClassName="justify-between"
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <View
              key={index}
              className={clsx("h-[50px] justify-center", {
                "bg-[#FCFDFF] dark:bg-[#3D2233]": index % 2 === 0,
                "bg-[#F1F3F7] dark:bg-[#311B2D]": index % 2 !== 0,
              })}
            >
              <Container>
                <Flex justify="between">
                  <Flex className="gap-x-3">
                    <View className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        source={images.avatarExample1}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <Text className="text-textPrimary dark:text-white font-semibold text-base">
                      Майк Олаф
                    </Text>
                  </Flex>
                  <Text className="text-textPrimary dark:text-white font-medium text-base">
                    467
                  </Text>
                </Flex>
              </Container>
            </View>
          );
        })}
      </CustomScrollView>
    </Screen>
  );

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Profile page</Text>
      <ChatIcon width={20} height={20} fill={"#213555"} />
      <Text className="text-red-300">Tailwind</Text>
      <View className="flex-row">
        <Container className="">
          <Flex className="justify-between pt-10">
            <View className="bg-red-300 w-full">
              <Flex justify="center" align="start">
                <View className="w-10 h-10 bg-blue-400"></View>
                <View className="w-12 h-12 bg-blue-500"></View>
              </Flex>
            </View>
          </Flex>
        </Container>
      </View>
      <View className="w-10 h-10 bg-black"></View>
      <Text className="text-blue-400 dark:text-black text-[60px]">{theme}</Text>
      <Pressable
        className="w-10 h-10 bg-red-300 mt-10"
        onPress={() => toggleTheme("dark")}
      >
        <Text>dark</Text>
      </Pressable>
      <Pressable
        className="w-10 h-10 bg-blue-300 mt-10"
        onPress={() => toggleTheme("light")}
      >
        <Text>light</Text>
      </Pressable>
    </View>
  );
};
