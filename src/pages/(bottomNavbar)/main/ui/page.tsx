import React from "react";
import { CardsSection } from "./CardsSection";
import { Stories } from "./Stories";
import { Search } from "@/widgets/search";
import { Text, View } from "react-native";
import { PageHeader } from "@/widgets/pageHeader";
import { useAuth } from "@/entities/auth/hooks/useAuth";
import { FixedButton } from "./FixedButton";
import { useFilter } from "../hooks/useFilter";
import { AnimatedContainer } from "./AnimatedContainer";
import { Redirect, useLocalSearchParams } from "expo-router";
import { CreateStoryModal } from "@/features/profile/modals/CreateStoryModal";
import { Animated } from "react-native";

export const MainPage = () => {
  useFilter();
  useAuth();

  // browser
  const params = useLocalSearchParams();
  const code = params?.code as string;
  if (code) return <Redirect href={`/redirect?code=${code}`} />;

  return (
    <>
      <PageHeader enableEnergyShowcase enableBalanceShowcase disableBorder />
      <View style={{ flex: 1, marginTop: 10 }}>
        <Stories />
        <Animated.FlatList
          data={[1, 2, 3]}
          keyExtractor={(item: number) => item.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          //   { useNativeDriver: true }
          // )}
          // initialScrollIndex={currentStoryIndex}
          scrollEventThrottle={16}
          // getItemLayout={(_, index) => ({
          //   length: WINDOW_WIDTH,
          //   offset: WINDOW_WIDTH * index,
          //   index,
          // })}
          renderItem={({ item: story }) => {
            // const { rotateY, translateX } = getCubePosition({
            //   index,
            //   scrollX,
            // });

            return (
              <View className="h-[200px] w-[100vw] bg-red-300">
                <Text>{story}</Text>
              </View>
            );
          }}
        />
        {/* <AnimatedContainer>
          <Search />
          <CardsSection />
        </AnimatedContainer> */}
      </View>
      <FixedButton />

      <CreateStoryModal />
    </>
  );
};
