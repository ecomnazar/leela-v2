import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICreateStoryApiProps,
  IGetPublicStoriesByAuthorIdApiProps,
} from "./interfaces";

const PREFIX = "/stories";

export const getPublicStoriesApi = createAsyncThunk(
  "getPublicStoriesApi",
  async (_, thunkAPI) => {
    try {
      return await apiCall("get", "/public/stories");
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPublicStoriesByAuthorIdApi = createAsyncThunk(
  "getPublicStoriesByAuthorIdApi",
  async (data: IGetPublicStoriesByAuthorIdApiProps, thunkAPI) => {
    const { authorId } = data;
    try {
      return await apiCall("get", `/public/stories/${authorId}`);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createStoryApi = createAsyncThunk(
  "createStoryApi",
  async (data: ICreateStoryApiProps, thunkAPI) => {
    try {
      return await apiCall("post", PREFIX, { data });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
