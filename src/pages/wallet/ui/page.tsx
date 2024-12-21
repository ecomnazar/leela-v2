import { PADDING_TOP_WITH_SCREEN_HEADER } from "@/shared/constants/sizes";
import { Coin } from "@/shared/ui/Coin";
import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Flex } from "@/shared/ui/Flex";
import { Screen } from "@/widgets/_layouts/Screen";
import clsx from "clsx";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, Text, View } from "react-native";
import TickIcon from "assets/icons/tick.svg";
import { TransactionHistory } from "./TransactionHistory";

const currencies = ["NON", "USD"];
export const WalletPage = () => {
  const [activeCurrency, setActiveCurrency] = React.useState(currencies[0]);

  return (
    <Screen title="Your wallet">
      <CustomScrollView paddingTop={PADDING_TOP_WITH_SCREEN_HEADER}>
        <Container>
          <Flex justify="between">
            {currencies.map((item, index) => {
              const active = activeCurrency === item;
              return (
                <Pressable
                  key={index}
                  onPress={() => setActiveCurrency(item)}
                  className="relative gap-y-2 h-[130px] w-[49%] border border-grayPrimary/40 rounded-2xl justify-center items-center"
                >
                  <Text
                    className={clsx("text-white/60 text-sm font-medium", {
                      "opacity-1": active,
                      "opacity-0": !active,
                    })}
                  >
                    Available
                  </Text>
                  <Text
                    className={clsx("text-4xl font-medium", {
                      "text-white": active,
                      "text-textPrimary": !active,
                    })}
                  >
                    467
                  </Text>
                  <Flex className="gap-x-1">
                    <Coin currency={item === "USD" ? "$" : ""} />
                    <Text
                      className={clsx("text-base font-semibold", {
                        "text-white": active,
                        "text-textPrimary": !active,
                      })}
                    >
                      {item}
                    </Text>
                  </Flex>
                  {active && (
                    <LinearGradient
                      colors={["#40969E", "#33767D"]}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 13,
                        zIndex: -1,
                      }}
                    />
                  )}
                  {active && (
                    <View className="absolute bottom-[-10px] left-0 flex items-center justify-center mx-auto w-full">
                      <View className="w-[22px] h-[22px] bg-[#487B81] rounded-full flex items-center justify-center">
                        <View className="w-[17px] h-[17px] rounded-full bg-white flex items-center justify-center">
                          <TickIcon width={11} height={11} fill={"#487B81"} />
                        </View>
                      </View>
                    </View>
                  )}
                </Pressable>
              );
            })}
          </Flex>
        </Container>
        <Container className="mt-8 mb-4">
          <View className="h-0.5 bg-black/15" />
        </Container>
        <TransactionHistory />
      </CustomScrollView>
    </Screen>
  );
};
