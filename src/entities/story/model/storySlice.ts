import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAuthorStoriesState,
  IGetMyStoriesApiResponse,
  IMyStory,
  IOpenStoryModalProps,
  IPublicStories,
  IStoryAuthor,
  IStoryMedia,
  TCreateStoryAssetType,
} from "./interfaces";
import {
  getMyStoriesApi,
  getPublicStoriesApi,
  getPublicStoriesByAuthorIdApi,
} from "./storyThunk";

export interface IAuthorStories {
  lastReadStoryId: number;
  stories: IStoryMedia[];
}

export const storySlice = createSlice({
  name: "story",
  initialState: {
    publicStories: {
      data: {} as IPublicStories,
      all: [] as IStoryAuthor[],
      loading: false,
    },
    // authorStories: {} as IAuthorStoriesState,
    myStories: {
      data: [] as IMyStory[],
      lastReadStoryId: 0,
      loading: false,
    },
    createStory: {
      modal: false,
      assetType: "" as TCreateStoryAssetType,
      assetUri: "",
    },
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    storyModal: {
      modal: false,
      currentStoryIndex: 0,
      stories: {} as IAuthorStoriesState,
    },

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    isModalOpen: false,
    selectedAuthorIndex: 0,
  },
  reducers: {
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    openCreateStoryModal: (
      state,
      action: PayloadAction<{
        assetType: TCreateStoryAssetType;
        assetUri: string;
      }>
    ) => {
      (state.createStory.modal = true),
        (state.createStory.assetType = action.payload.assetType);
      state.createStory.assetUri = action.payload.assetUri;
    },

    closeCreateStoryModal: (state) => {
      state.createStory.modal = false;
    },

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    openStoryModal: (state, action: PayloadAction<IOpenStoryModalProps>) => {
      const { me, authorId, name, previewMediaUrl, currentStoryIndex } =
        action.payload;
      state.storyModal.modal = true;
      state.storyModal.currentStoryIndex = currentStoryIndex;

      if (me && !state.storyModal.stories[authorId]) {
        const myStories: IGetMyStoriesApiResponse = {
          lastReadStoryId: state.myStories.lastReadStoryId,
          stories: state.myStories.data,
        };
        state.storyModal.stories[authorId] = myStories;
        // state.storyModal.storiesLength = 1;
        // const arrayDataOfMe: IStoryAuthor = { authorId, name, previewMediaUrl };
        // state.storyModal.storiesArray = [arrayDataOfMe];
      }
    },

    scrollStoryCarousel: (state, action: PayloadAction<"prev" | "next">) => {
      const step = action.payload;
      const currentStoryIndex = state.storyModal.currentStoryIndex;
      if (step === "prev") {
        if (currentStoryIndex > 0) {
          state.storyModal.currentStoryIndex -= 1;
        } else {
          state.storyModal.modal = false;
        }
      }
      if (step === "next") {
        const allStories = state.publicStories.all;
        if (currentStoryIndex < allStories.length - 1) {
          console.log("123");

          state.storyModal.currentStoryIndex += 1;
        } else {
          state.storyModal.modal = false;
        }
      }
    },

    closeStoryModal: (state) => {
      state.storyModal.modal = false;
    },

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    toggleStoryModal: (state, action: PayloadAction<"open" | "close">) => {
      if (action.payload === "close") {
        state.isModalOpen = false;
      } else {
        state.isModalOpen = true;
      }
    },

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

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
          const { unseenExperts, seenExperts } = action.payload;
          state.publicStories.all = [...unseenExperts, ...seenExperts];
          // state.publicStories.all
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     DELETE     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          // state.publicStories.data.unseenExperts = experts;
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     DELETE     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        }
      )
      .addCase(getPublicStoriesApi.rejected, (state) => {
        state.publicStories.loading = false;
      })

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getPublicStoriesByAuthorIdApi.pending, (state) => {})
      .addCase(getPublicStoriesByAuthorIdApi.fulfilled, (state, action) => {
        const authorId = action.meta.arg.authorId;
        // state.authorStories[authorId] = action.payload;
        state.storyModal.stories[authorId] = action.payload;
        // const a = action.payload.
        // const author = state.publicStories.data.unseenExperts.find(
        //   (item) => item.authorId == authorId
        // );
        // if (author) {
        // const { name, previewMediaUrl } = author;
        // const dataForArray: IStoryAuthor = {
        //   authorId,
        //   name,
        //   previewMediaUrl,
        // };
        // state.storyModal.storiesArray = [dataForArray];
        // }
        // state.authorStories[authorId] = stories[authorId];
      })
      .addCase(getPublicStoriesByAuthorIdApi.rejected, (state) => {})

      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

      .addCase(getMyStoriesApi.pending, (state) => {
        state.myStories.loading = true;
      })
      .addCase(
        getMyStoriesApi.fulfilled,
        (state, action: PayloadAction<IGetMyStoriesApiResponse>) => {
          const { lastReadStoryId, stories } = action.payload;
          state.myStories.data = stories;
          state.myStories.lastReadStoryId = lastReadStoryId;
          state.myStories.loading = false;
        }
      )
      .addCase(getMyStoriesApi.rejected, (state) => {
        state.myStories.loading = false;
      });
  },
});

export const {
  toggleStoryModal,
  setSelectedAuthorIndex,
  openCreateStoryModal,
  closeCreateStoryModal,
  openStoryModal,
  closeStoryModal,
  scrollStoryCarousel,
} = storySlice.actions;
