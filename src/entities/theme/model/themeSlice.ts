import { getPublicThemesApi, getThemeByIdApi } from "./themeThunk";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPublicTheme } from "./interfaces";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    publicThemes: {
      data: [] as IPublicTheme[],
      skeletonLoading: true,
      loading: false,
    },
    themeById: {
      data: {} as IPublicTheme,
      loading: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getPublicThemesApi.pending, (state) => {
        state.publicThemes.loading = true;
      })
      .addCase(
        getPublicThemesApi.fulfilled,
        (state, action: PayloadAction<IPublicTheme[]>) => {
          state.publicThemes.loading = false;
          state.publicThemes.skeletonLoading = false;
          state.publicThemes.data = action.payload;
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
