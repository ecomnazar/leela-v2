import React from "react";
import toast from "react-hot-toast";
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { IAuthorizationApiProps } from "../model/interfaces";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { authorizationApi } from "../model/authThunk";
import { CustomAsyncStorage } from "@/shared/lib/customAsyncStorage";
import { STORAGE } from "@/shared/constants/storage";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // browser
  const params = useLocalSearchParams();
  const code = params?.code as string;
  if (code) return <Redirect href={`/redirect?code=${code}`} />;

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

      const authorize = async () => {
        if (!replacedCode) return;
        const data: IAuthorizationApiProps = {
          code: replacedCode,
          provider: "GOOGLE",
          redirectUri: process.env.EXPO_PUBLIC_GOOGLE_REDIRECT_URL!,
        };
        await toast.promise(dispatch(authorizationApi(data)), {
          loading: "Authorizing",
          error: "Authorization error",
          success: "Authorization success",
        });
        router.push("/");
      };
      authorize();
    }
  }, [window?.Telegram]);

  return null;
};
