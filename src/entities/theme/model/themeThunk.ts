import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPublicThemes = createAsyncThunk(
  "getPublicThemes",
  async (_, thunkAPI) => {
    try {
      return await apiCall("get", `/api/users`, {
        headers: {
          "x-company-id": "df31f9f2-b890-4647-80f2-51eae1f2753d",
        },
      });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
