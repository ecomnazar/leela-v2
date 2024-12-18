import { useTheme } from "@/shared/theme/useTheme";
import { CardHorizontal } from "@/shared/ui/CardHorizontal";
import { Coin } from "@/shared/ui/Coin";
import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Flex } from "@/shared/ui/Flex";
import { RoundedIcon } from "@/shared/ui/RoundedIcon";
import { Screen } from "@/widgets/_layouts/Screen";
import images from "assets/images";
import { Image } from "expo-image";
import React from "react";
import { Platform, Text, View } from "react-native";
import TickIcon from "assets/icons/tick.svg";
import clsx from "clsx";

export const TasksPage = () => {
  const { theme } = useTheme();

  const renderMegaDot = (active: boolean) => {
    return (
      <View
        className={clsx(
          "rounded-full border-[2.5px] border-white flex items-center justify-center",
          {
            "bg-primary100 border-0 w-9 h-9": active,
            "w-7 h-7": !active,
          }
        )}
      >
        {active && <TickIcon width={18} height={18} />}
      </View>
    );
  };

  const renderMiniDot = () => {
    return (
      <View
        className={clsx("w-1.5 h-1.5 rounded-full", {
          "bg-white": theme === "light",
          "bg-white/20": theme === "dark",
        })}
      ></View>
    );
  };

  const renderMiniDots = () => {
    return (
      <View
        className={clsx("my-1.5", {
          "gap-y-[5px]": Platform.OS === "web",
          "gap-y-2": Platform.OS !== "web",
        })}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          return <React.Fragment key={index}>{renderMiniDot()}</React.Fragment>;
        })}
      </View>
    );
  };

  return (
    <Screen enableHuman>
      <CustomScrollView paddingTop={250} hasBottomBar>
        <Container>
          <Flex align="end" justify="between">
            <View>
              <Text className="text-white text-6xl">Задачи на{"\n"}день</Text>
              <Text className="text-white text-md font-medium mt-2">
                Обновляем через: 07:36
              </Text>
            </View>
            <RoundedIcon icon="setting" />
          </Flex>
        </Container>

        <Container className="mt-6">
          <Flex justify="between" align="start">
            <View className="w-[13%] items-center translate-y-7">
              {renderMegaDot(true)}
              {renderMiniDots()}
              {renderMegaDot(true)}
              {renderMiniDots()}
              {renderMegaDot(false)}
              {renderMiniDots()}
              {renderMegaDot(false)}
              {renderMiniDots()}
            </View>

            <View className="w-[84%] gap-y-2">
              {Array.from({ length: 4 }).map((_, index) => {
                return (
                  <CardHorizontal key={index} className="!h-[86px] !p-1">
                    <View className="h-full w-24 bg-grayPrimary/40 rounded-2xl overflow-hidden">
                      <Image
                        source={images.groupExample1}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View>
                      <Text className="text-textPrimary dark:text-white/75 text-xl font-semibold">
                        Про “no names”
                      </Text>
                      <Text className="text-grayPrimary dark:text-white/75 text-sm font-semibold">
                        No names
                      </Text>
                      <Flex className="mt-1 gap-x-0.5">
                        <Text className="text-textPriamry dark:text-white font-bold text-md mt-1">
                          +2,250
                        </Text>
                        <Coin
                          className="scale-[0.9] translate-y-0.5"
                          mode={theme === "light" ? "light" : "dark"}
                        />
                      </Flex>
                    </View>
                  </CardHorizontal>
                );
              })}
            </View>
          </Flex>
        </Container>
      </CustomScrollView>
    </Screen>
  );
};
