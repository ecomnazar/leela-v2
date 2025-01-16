import React from "react";
import CoinIcon from "assets/icons/coin.svg";

interface Props {
  mode?: "dark" | "light" | "transparent";
  className?: string;
  currency?: "$" | "";
}

export const Coin: React.FC<Props> = ({
  mode = "dark",
  className,
  currency,
}) => {
  return <CoinIcon width={21} height={22} />;
};
