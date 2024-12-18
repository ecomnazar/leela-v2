import React from "react";
import { BasicPageHeader } from "@/widgets/basicPageHeader";
import { CategoryTabs } from "@/entities/ui/categoryTabs/ui/categoryTabs";
import { useTheme } from "@/shared/theme/useTheme";
import { SearchSection } from "./SearchSection";
import { CardsSection } from "./CardsSection";
import { Screen } from "@/widgets/_layouts/Screen";
import { ScrollView } from "react-native";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";

const categoies = ["ФОРУМ", "ГРУППЫ", "МЕНТОРЫ"];
export const MainPage = () => {
  const [activeCategory, setActiveCategory] = React.useState(categoies[0]);

  const { theme } = useTheme();
  return (
    <Screen>
      {/* <BasicPageHeader /> */}
      <CustomScrollView hasBottomBar hasHeader>
        <CategoryTabs
          categories={categoies}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <SearchSection />
        <CardsSection />
      </CustomScrollView>
    </Screen>
  );
};
