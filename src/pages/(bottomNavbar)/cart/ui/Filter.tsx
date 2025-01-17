import { Badge } from "@/shared/ui/Badge";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import React from "react";

export const Filter = () => {
  return (
    <Container className="mt-2">
      <Flex className="gap-x-2">
        <Badge color="#616470">ВСЕ</Badge>
        <Badge color="#BBC9B7">по подписке</Badge>
        <Badge color="#D3A6CF">отношения</Badge>
      </Flex>
    </Container>
  );
};
