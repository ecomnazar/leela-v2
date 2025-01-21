import { useTheme } from "@/shared/theme/useTheme";
import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Flex } from "@/shared/ui/Flex";
import { RoundedIcon } from "@/shared/ui/RoundedIcon";
import { Screen } from "@/widgets/_layouts/Screen";
import React from "react";
import { Text, View } from "react-native";
import clsx from "clsx";
import { Icon } from "@/shared/ui/Icon";
import { PlanCard } from "./PlanCard";
import Star from "@/shared/ui/Star";
import Chart from "@/shared/ui/Chart";

const VerticalLine = () => (
  <View
    className="w-[1px] bg-white h-[60px]"
    style={{ transform: [{ translateY: 4 }] }}
  />
);

const Dot = ({ active }: { active?: boolean }) => {
  return (
    <View
      className={clsx(
        "rounded-full border-[2.5px] flex items-center justify-center w-8 h-8",
        {
          "bg-white border-transparent": active,
          "border-white": !active,
        }
      )}
    >
      {active && <Icon type="tick" fill={"#509193"} width={18} height={18} />}
    </View>
  );
};

const tasks = [
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

export const TasksPage = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <Screen>
      <CustomScrollView paddingTop={250} hasBottomBar>
        <View className="relative mb-[500px] h-[500px] p-20 flex items-center justify-center bg-gray-200">
          <View className="absolute z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Star size={180} />
          </View>
          <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Chart activeIndex={1} size={360} innerRadius={110}></Chart>
          </View>
        </View>

        <Container>
          <Flex align="end" justify="between">
            <View>
              <Text className="text-white text-6xl">План</Text>
              <Text className="text-white text-md font-medium mt-2">
                Обновляем через: 07:36
              </Text>
            </View>
            <RoundedIcon icon="setting" />
          </Flex>
        </Container>

        <Container className="mt-6">
          <Flex justify="between" align="start">
            <View className="gap-y-2 flex-1">
              {tasks.map((item, index) => {
                return (
                  <Flex key={index} justify="between" align="start">
                    <View
                      className="w-[13%] items-center"
                      style={{ transform: [{ translateY: 30 }] }}
                    >
                      <Dot active={item} />
                      <VerticalLine />
                    </View>
                    <View className="w-[84%]">
                      <PlanCard isEnable={item} />
                    </View>
                  </Flex>
                );
              })}
            </View>
          </Flex>
        </Container>
      </CustomScrollView>
    </Screen>
  );
};
