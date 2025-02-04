import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { IAuthorizationApiProps } from "../model/interfaces";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { authorizationApi } from "../model/authThunk";
import toast from "react-hot-toast";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const params = useLocalSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    const authorize = async () => {
      const code = params.code as string;
      if (!code) return;

      const data: IAuthorizationApiProps = {
        code,
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
  }, [params.code]);

  return null;
};
