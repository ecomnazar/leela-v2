import {
  addThemeCommentApi,
  getPublicThemesApi,
  getThemeByIdApi,
  getThemeCommentsApi,
} from "./themeThunk";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IPublicTheme } from "./interfaces";
import { TReactionType } from "@/shared/interfaces";

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
      total: 0,
    },
    addThemeCommentLoading: false,
  },
  reducers: {
    addComment: (state, action: PayloadAction<IComment>) => {
      state.themeComments.data = [action.payload, ...state.themeComments.data];
    },
    increateThemeCommentCount: (state) => {
      state.themeById.data.commentsCount += 1;
      const themeId = state.themeById.data.id;
      const theme = state.publicThemes.data.find(
        (theme) => theme.id === themeId
      );
      if (theme) {
        theme.commentsCount += 1;
      }
    },
    removeThemeReactionReducer: (
      state,
      action: PayloadAction<{
        reactionType: TReactionType;
        themeId: number;
        single?: boolean;
      }>
    ) => {
      const { single, reactionType, themeId } = action.payload;

      const theme = state.publicThemes.data.find(
        (theme) => theme.id === themeId
      );

      // from list
      if (theme) {
        if (reactionType === "like") {
          theme.likesAndDislikes.likes -= 1;
        } else {
          theme.likesAndDislikes.dislikes -= 1;
        }
        theme.reaction = 0;
      }
      // from single
      if (single) {
        if (reactionType === "like") {
          state.themeById.data.likesAndDislikes.likes -= 1;
        } else {
          state.themeById.data.likesAndDislikes.dislikes -= 1;
        }
        state.themeById.data.reaction = 0;
      }
    },
    addReactionReducer: (
      state,
      action: PayloadAction<{
        reactionType: TReactionType;
        themeId: number;
        single?: boolean;
      }>
    ) => {
      const { single, reactionType, themeId } = action.payload;

      const theme = state.publicThemes.data.find(
        (theme) => theme.id === themeId
      );
      if (theme) {
        if (reactionType === "like") {
          theme.likesAndDislikes.likes += 1;
        } else {
          theme.likesAndDislikes.dislikes += 1;
        }
        theme.reaction = reactionType === "like" ? 1 : -1;
      }
      if (single) {
        if (reactionType === "like") {
          state.themeById.data.likesAndDislikes.likes += 1;
        } else {
          state.themeById.data.likesAndDislikes.dislikes += 1;
        }
        state.themeById.data.reaction = reactionType === "like" ? 1 : -1;
      }
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
        (
          state,
          action: PayloadAction<{ themeComments: IComment[]; total: number }>
        ) => {
          state.themeComments.loading = false;
          state.themeComments.data = action.payload.themeComments.reverse();
          state.themeComments.total = action.payload.total;
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
          const titles = ["Углеводы", "Инсулина и метаболизм", "Питание"];

          state.publicThemes.loading = false;
          state.publicThemes.skeletonLoading = false;
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          state.publicThemes.data = action.payload.themes
            .map((item) => {
              return {
                ...item,
                authorRole:
                  item.authorRole === "master" || item.authorRole === "admin"
                    ? "пользователь"
                    : "пользователь",
              };
            })
            .filter((i) => !titles.includes(i.title));
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     FIX     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

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

export const {
  addComment,
  increateThemeCommentCount,
  removeThemeReactionReducer,
  addReactionReducer,
} = themeSlice.actions;
