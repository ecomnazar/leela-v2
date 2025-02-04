import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { IAuthorizationApiProps } from "../model/interfaces";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { authorizationApi } from "../model/authThunk";
import toast from "react-hot-toast";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const code = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;

  React.useEffect(() => {
    console.log(
      `Init data: ${JSON.stringify(window?.Telegram?.WebApp?.initData)}`
    );
    // const authorize = async () => {
    //   const code = params.code as string;
    //   if (!code) return;
    //   const data: IAuthorizationApiProps = {
    //     code,
    //     provider: "GOOGLE",
    //     redirectUri: process.env.EXPO_PUBLIC_GOOGLE_REDIRECT_URL!,
    //   };
    //   await toast.promise(dispatch(authorizationApi(data)), {
    //     loading: "Authorizing",
    //     error: "Authorization error",
    //     success: "Authorization success",
    //   });
    //   router.push("/");
    // };
    // authorize();
  }, [window?.Telegram]);

  return null;
};
