import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import clsx from "clsx";
import React from "react";
import { PlanCard } from "./PlanCard";
import { Text, View } from "react-native";
import { RoundedIcon } from "@/shared/ui/RoundedIcon";

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
  false,
  false,
  false,
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

export const TasksList = () => {
  return (
    <>
      <Container>
        <Flex align="end" justify="between">
          <View>
            <Text className="text-white text-5xl">План</Text>
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
    </>
  );
};
