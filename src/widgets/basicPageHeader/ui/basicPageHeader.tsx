import { BalanceShowcase } from "@/entities/ui/balanceShowcase";
import { EnergyShowcase } from "@/entities/ui/energyShowcase";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import React from "react";

export const BasicPageHeader = () => {
  return (
    <Container>
      <Flex justify="between">
        <EnergyShowcase />
        <BalanceShowcase />
      </Flex>
    </Container>
  );
};
