import React from "react";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Search } from "@/widgets/search";
import { Categories } from "./Categories";
import { Filter } from "./Filter";
import { Cards } from "./Cards";

export const CartPage = () => {
  return (
    <Screen enableHeader centerTitle="МАРКЕТ">
      <CustomScrollView hasBottomBar hasHeader>
        <Categories />
        <Search />
        <Filter />
        <Cards />
      </CustomScrollView>
    </Screen>
  );
};
