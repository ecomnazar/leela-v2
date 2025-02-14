import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMeApi } from "./userThunk";
import { IUser } from "./interfaces";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      data: {} as IUser,
      loading: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getMeApi.pending, (state) => {
        state.user.loading = true;
      })
      .addCase(getMeApi.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user.loading = false;
        state.user.data = action.payload;
      })
      .addCase(getMeApi.rejected, (state) => {
        state.user.loading = false;
      });
  },
});
