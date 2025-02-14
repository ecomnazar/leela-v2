import React from "react";
import toast from "react-hot-toast";

import { useLocalSearchParams, useRouter } from "expo-router";
import { IAuthorizationApiProps } from "../model/interfaces";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { authorizationApi } from "../model/authThunk";
import { CustomAsyncStorage } from "@/shared/lib/customAsyncStorage";
import { STORAGE } from "@/shared/constants/storage";
import { REDIRECT_URI } from "../constants";

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const params = useLocalSearchParams();

  const authorize = async (code: string) => {
    if (!code) return;
    const data: IAuthorizationApiProps = {
      code: code,
      provider: "GOOGLE",
      redirectUri: REDIRECT_URI,
    };
    await toast.promise(dispatch(authorizationApi(data)), {
      loading: "Authorizing",
      error: "Authorization error",
      success: "Authorization success",
    });
    router.push("/");
  };

  // web dev env
  React.useEffect(() => {
    const code = params?.code as string;
    if (code) authorize(code);
  }, []);

  // miniapp
  React.useEffect(() => {
    const startParams = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;
    const token = CustomAsyncStorage.getItem(STORAGE.ACCESS_TOKEN);
    if (token) return;
    if (startParams) {
      const replacedCode = startParams.includes("VVV")
        ? startParams.replace("VVV", "/")
        : "";
      if (!replacedCode) return;
      authorize(replacedCode);
    }
  }, [window?.Telegram]);

  return null;
};
