import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";

export const useRedirect = () => {
  // browser
  const params = useLocalSearchParams();
  const code = params?.code as string;
  if (code) return <Redirect href={`/redirect?code=${code}`} />;
};
