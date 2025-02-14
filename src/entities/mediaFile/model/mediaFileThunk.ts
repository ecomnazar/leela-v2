import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

const PREFIX = "/media";

export const uploadStoryImageApi = createAsyncThunk(
  "uploadStoryImageApi",
  async (data: FormData, thunkAPI) => {
    try {
      return await apiCall("post", PREFIX + "/uploadStoryImage", {
        data,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
