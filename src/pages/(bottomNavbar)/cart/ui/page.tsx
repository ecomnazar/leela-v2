import { CategoryTabs } from "@/entities/ui/categoryTabs/ui/categoryTabs";
import { Container } from "@/shared/ui/Container";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Tabbar } from "@/shared/ui/Tabbar";
import { Screen } from "@/widgets/_layouts/Screen";
import React from "react";
import { Text, View } from "react-native";
import { Materials } from "./Materials";

const tabs = ["Купить", "Инвентарь"];
const categories = ["МАТЕРИАЛ", "МЕНТОРЫ", "МОНЕТЫ"];

export const CartPage = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);

  return (
    <Screen
      customHumanGradientColors={[
        "transparent",
        "#8992A0",
        "#ffffff",
        "#ffffff",
      ]}
      enableHuman
    >
      <CustomScrollView paddingTop={250} hasBottomBar>
        <Container>
          <View>
            <Text className="text-white text-6xl">Маркет</Text>
            <Text className="text-white text-md font-medium mt-2">
              На маркете вы можете оплатить услуги{"\n"}ментора, дополнительный
              материал
            </Text>
          </View>
          <Tabbar
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="mt-4"
          />
        </Container>
        <CategoryTabs
          fillBackground
          flexClassName="justify-between"
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <View className="bg-[#FDFEFF] dark:bg-[#331C33] py-4">
          <Container>
            <Materials />
          </Container>
        </View>
      </CustomScrollView>
    </Screen>
  );
};
