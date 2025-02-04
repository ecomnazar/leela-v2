import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

const PREFIX = "/users/me";

export const getUsersApi = createAsyncThunk(
  "getUsersApi",
  async (_, thunkAPI) => {
    try {
      return await apiCall("get", PREFIX);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
