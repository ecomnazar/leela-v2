import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

const PREFIX = "/media";

export const uploadStoryImageApi = createAsyncThunk(
  "uploadStoryImageApi",
  async (data: FormData, thunkAPI) => {
    const query = `?imageProcessingType=ORIGINAL`;
    try {
      return await apiCall("post", PREFIX + `/upload/stories/image${query}`, {
        data,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
