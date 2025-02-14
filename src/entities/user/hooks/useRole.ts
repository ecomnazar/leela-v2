import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React from "react";
import { TRole } from "../model/interfaces";

export const useRole = () => {
  const { data } = useAppSelector((state) => state.user.user);
  const role: TRole = data?.role ? data.role : "user";

  return { role };
};
