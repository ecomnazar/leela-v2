import { apiCall } from "@/shared/api/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAddThemeApiProps,
  IAddThemeCommentApiProps,
  IGetPublicThemesProps,
  IThemeReactionApiProps,
} from "./interfaces";
import { addPaginationParams } from "@/shared/api/addPaginationParams";

export const getPublicThemesApi = createAsyncThunk(
  "getPublicThemes",
  async (data: IGetPublicThemesProps, thunkAPI) => {
    const { sort_by, search_query } = data;

    const url = addPaginationParams(
      `/public/themes?sort_by=${sort_by}&search_query=${search_query}`
    );

    try {
      return await apiCall("get", url);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addThemeCommentApi = createAsyncThunk(
  "addThemeCommentApi",
  async (data: IAddThemeCommentApiProps, thunkAPI) => {
    try {
      return await apiCall("post", `/theme-comments`, { data });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addThemeApi = createAsyncThunk(
  "addThemeApi",
  async (data: IAddThemeApiProps, thunkAPI) => {
    try {
      return await apiCall("post", `/themes`, { data });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getThemeCommentsApi = createAsyncThunk(
  "getThemeCommentsApi",
  async (themeId: string, thunkAPI) => {
    const url = addPaginationParams(`/public/themes/${themeId}/comments`);
    try {
      return await apiCall("get", url);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getThemeByIdApi = createAsyncThunk(
  "getThemeByIdApi",
  async (themeId: string, thunkAPI) => {
    const url = addPaginationParams(`/public/themes/${themeId}`);
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

export const leaveThemeReactionApi = createAsyncThunk(
  "leaveThemeReactionApi",
  async (data: IThemeReactionApiProps, thunkAPI) => {
    try {
      return await apiCall("post", `/themes/reaction`, { data });
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeThemeReactionApi = createAsyncThunk(
  "removeThemeReactionApi",
  async (themeId: number, thunkAPI) => {
    try {
      return await apiCall("delete", `/themes/${themeId}/reaction`);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
