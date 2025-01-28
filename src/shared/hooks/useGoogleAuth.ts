import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const useGoogleAuth = () => {
  const auth = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);

    return userInfo;
  };

  return auth;
};
