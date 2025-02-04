import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthorizationApiProps } from "./interfaces";
import { apiCall } from "@/shared/api/apiCall";
import { getRefreshToken } from "@/shared/lib/getAccessToken";
import axios from "axios";
import { instance } from "@/shared/api/instance";

const PREFIX = "/auth";

export const getOAuthUrlApi = createAsyncThunk(
  "getOAuthUrlApi",
  async (_, thunkAPI) => {
    try {
      return await apiCall(
        "get",
        PREFIX +
          `/google-auth-url?redirect_uri=${process.env.EXPO_PUBLIC_GOOGLE_REDIRECT_URL}`
      );
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authorizationApi = createAsyncThunk(
  "authorizationApi",
  async (data: IAuthorizationApiProps, thunkAPI) => {
    try {
      return await apiCall("post", PREFIX + "/token", { data });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshTokenApi = async () => {
  const refreshToken = getRefreshToken();

  const response = await apiCall("post", PREFIX + "/refresh", {
    data: { refreshToken },
  });

  return response.data;
};
