import React from "react";
import { Screen } from "@/widgets/_layouts/Screen";
import { CustomScrollView } from "@/shared/ui/CustomScrollView";
import { Search } from "@/widgets/search";

export const CartPage = () => {
  return (
    <Screen>
      <CustomScrollView hasBottomBar hasHeader>
        <Search />
      </CustomScrollView>
    </Screen>
  );
};
