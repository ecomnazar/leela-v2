import {
  addThemeCommentApi,
  getPublicThemesApi,
  getThemeByIdApi,
  getThemeCommentsApi,
} from "./themeThunk";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IPublicTheme } from "./interfaces";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    publicThemes: {
      data: [] as IPublicTheme[],
      skeletonLoading: true,
      loading: false,
      total: 0,
    },
    themeById: {
      data: {} as IPublicTheme,
      loading: false,
    },
    themeComments: {
      data: [] as IComment[],
      loading: false,
    },
    addThemeCommentLoading: false,
  },
  reducers: {
    addComment: (state, action: PayloadAction<IComment>) => {
      state.themeComments.data = [action.payload, ...state.themeComments.data];
    },
  },
  extraReducers: (builder) => {
    builder

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(addThemeCommentApi.pending, (state) => {
        state.addThemeCommentLoading = true;
      })
      .addCase(addThemeCommentApi.fulfilled, (state) => {
        state.addThemeCommentLoading = false;
      })
      .addCase(addThemeCommentApi.rejected, (state) => {
        state.addThemeCommentLoading = false;
      })

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getThemeCommentsApi.pending, (state) => {
        state.themeComments.loading = true;
      })
      .addCase(
        getThemeCommentsApi.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
          state.themeComments.loading = false;
          state.themeComments.data = action.payload;
        }
      )
      .addCase(getThemeCommentsApi.rejected, (state) => {
        state.themeComments.loading = false;
      })

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getPublicThemesApi.pending, (state) => {
        state.publicThemes.loading = true;
      })
      .addCase(
        getPublicThemesApi.fulfilled,
        (
          state,
          action: PayloadAction<{ total: number; themes: IPublicTheme[] }>
        ) => {
          state.publicThemes.loading = false;
          state.publicThemes.skeletonLoading = false;
          state.publicThemes.data = action.payload.themes;
          state.publicThemes.total = action.payload.total;
        }
      )
      .addCase(getPublicThemesApi.rejected, (state) => {
        state.publicThemes.loading = false;
      })

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getThemeByIdApi.pending, (state) => {
        state.themeById.loading = true;
      })
      .addCase(
        getThemeByIdApi.fulfilled,
        (state, action: PayloadAction<IPublicTheme>) => {
          state.themeById.loading = false;
          state.themeById.data = action.payload;
        }
      )
      .addCase(getThemeByIdApi.rejected, (state) => {
        state.themeById.loading = false;
      });
  },
});

export const { addComment } = themeSlice.actions;
