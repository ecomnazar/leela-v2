import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authorizationApi } from "./authThunk";
import { IIAuthorizationApiResponse } from "./interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE } from "@/shared/constants/storage";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authorizationLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(authorizationApi.pending, (state) => {
        state.authorizationLoading = true;
      })
      .addCase(
        authorizationApi.fulfilled,
        (state, action: PayloadAction<IIAuthorizationApiResponse>) => {
          const { accessToken, refreshToken } = action.payload;
          state.authorizationLoading = false;
          AsyncStorage.setItem(STORAGE.ACCESS_TOKEN, accessToken);
          AsyncStorage.setItem(STORAGE.REFRESH_TOKEN, refreshToken);
        }
      )
      .addCase(authorizationApi.rejected, (state) => {
        state.authorizationLoading = false;
      });
  },
});
