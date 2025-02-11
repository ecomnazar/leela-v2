import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

const PREFIX = "/stories";

export const getStoriesApi = createAsyncThunk(
  "getStoriesApi",
  async (_, thunkAPI) => {
    try {
      return await apiCall("get", PREFIX);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
