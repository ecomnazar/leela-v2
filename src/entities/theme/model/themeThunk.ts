import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPublicThemes = createAsyncThunk(
  "getPublicThemes",
  async (_, thunkAPI) => {
    try {
      return await apiCall("get", `/api/users`);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
