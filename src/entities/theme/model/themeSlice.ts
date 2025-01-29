import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPublicTheme } from "./interfaces";
import { getPublicThemesApi } from "./themeThunk";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    publicThemes: {
      data: [] as IPublicTheme[],
      skeletonLoading: true,
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
      });
  },
});
