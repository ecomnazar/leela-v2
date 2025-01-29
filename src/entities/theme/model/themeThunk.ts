import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetPublicThemesProps, IGetThemeCommentsApiProps } from "./interfaces";
import { addPaginationParams } from "@/shared/api/addPaginationParams";

export const getPublicThemesApi = createAsyncThunk(
  "getPublicThemes",
  async (data: IGetPublicThemesProps, thunkAPI) => {
    const { sort_by } = data;

    const url = addPaginationParams(`/public/themes?sort_by=${sort_by}`);

    try {
      return await apiCall("get", url);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getThemeCommentsApi = createAsyncThunk(
  "getThemeCommentsApi",
  async (data: IGetThemeCommentsApiProps, thunkAPI) => {
    const { themeId } = data;
    const url = addPaginationParams(`/public/themes/${themeId}/comments`);
    try {
      return await apiCall("get", url);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPublicThemeTagsApi = createAsyncThunk(
  "getPublicThemeTags",
  async (_, thunkAPI) => {
    try {
      return await apiCall("get", `/public/tags/themes`);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
