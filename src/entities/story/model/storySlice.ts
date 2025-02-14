import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthorStoriesState, IPublicStories } from "./interfaces";
import {
  getPublicStoriesApi,
  getPublicStoriesByAuthorIdApi,
} from "./storyThunk";

export const storySlice = createSlice({
  name: "story",
  initialState: {
    publicStories: {
      data: {} as IPublicStories,
      loading: false,
    },
    authorStories: {} as IAuthorStoriesState,
    isModalOpen: false,
    selectedAuthorIndex: 0,
  },
  reducers: {
    toggleStoryModal: (state, action: PayloadAction<"open" | "close">) => {
      if (action.payload === "close") {
        state.isModalOpen = false;
      } else {
        state.isModalOpen = true;
      }
    },
    setSelectedAuthorIndex: (state, action: PayloadAction<number>) => {
      state.selectedAuthorIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getPublicStoriesApi.pending, (state) => {
        if (
          !state?.publicStories.data?.unseenExperts ||
          !state?.publicStories.data?.seenExperts ||
          !state?.publicStories.data?.companyStoryPreview
        ) {
          state.publicStories.loading = true;
        }
      })
      .addCase(
        getPublicStoriesApi.fulfilled,
        (state, action: PayloadAction<IPublicStories>) => {
          state.publicStories.loading = false;
          state.publicStories.data = action.payload;
        }
      )
      .addCase(getPublicStoriesApi.rejected, (state) => {
        state.publicStories.loading = false;
      })

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getPublicStoriesByAuthorIdApi.pending, (state) => {})
      .addCase(getPublicStoriesByAuthorIdApi.fulfilled, (state, action) => {
        const authorId = action.meta.arg.authorId;
        state.authorStories[authorId] = action.payload;
      })
      .addCase(getPublicStoriesByAuthorIdApi.rejected, (state) => {});
  },
});

export const { toggleStoryModal, setSelectedAuthorIndex } = storySlice.actions;
