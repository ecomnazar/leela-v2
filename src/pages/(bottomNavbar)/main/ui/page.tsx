import React from "react";
import { SearchSection } from "./SearchSection";
import { CardsSection } from "./CardsSection";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { CategoryTabs } from "@/entities/ui/categoryTabs/ui/categoryTabs";
import { Stories } from "./Stories";

const categoies = ["ФОРУМ", "ГРУППЫ", "МЕНТОРЫ"];
export const MainPage = () => {
  const [activeCategory, setActiveCategory] = React.useState(categoies[0]);

  return (
    <Screen>
      <CustomScrollView hasBottomBar hasHeader>
        <Stories />
        {/* <CategoryTabs
          categories={categoies}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        /> */}
        <SearchSection />
        <CardsSection />
      </CustomScrollView>
    </Screen>
  );
};
