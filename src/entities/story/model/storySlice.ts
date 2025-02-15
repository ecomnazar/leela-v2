import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthorStoriesState, IPublicStories } from "./interfaces";
import {
  getPublicStoriesApi,
  getPublicStoriesByAuthorIdApi,
} from "./storyThunk";
import images from "assets/images";

const experts = [
  {
    authorId: 1,
    name: "Анастасия",
    previewMediaUrl: images.stories5,
  },
  {
    authorId: 2,
    name: "Лана",
    previewMediaUrl: images.stories2,
  },
  {
    authorId: 3,
    name: "Сельби",
    previewMediaUrl: images.stories3,
  },
  {
    authorId: 4,
    name: "Мария",
    previewMediaUrl: images.stories4,
  },
  {
    authorId: 5,
    name: "Маша",
    previewMediaUrl: images.stories1,
  },
];

export interface IStoryMedia {
  id: number;
  authorId: number;
  createdAt: string;
  description: string;
  mediaUrl: string;
}

export interface IAuthorStories {
  lastReadStoryId: number;
  stories: IStoryMedia[];
}

const stories = {
  "1": {
    lastReadStoryId: 1,
    stories: [
      {
        id: 1,
        authorId: 1,
        createdAt: "2022-01-01",
        description: "Описание 1",
        mediaUrl:
          "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      // {
      //   id: 2,
      //   authorId: 1,
      //   createdAt: "2022-01-01",
      //   description: "Описание 2",
      //   mediaUrl:
      //     "https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      // },
    ],
  },
  "2": {
    lastReadStoryId: 3,
    stories: [
      {
        id: 3,
        authorId: 2,
        createdAt: "2022-01-01",
        description: "Описание 1",
        mediaUrl:
          "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 4,
        authorId: 2,
        createdAt: "2022-01-01",
        description: "Описание 2",
        mediaUrl:
          "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  "3": {
    lastReadStoryId: 5,
    stories: [
      {
        id: 5,
        authorId: 3,
        createdAt: "2022-01-01",
        description: "Описание 1",
        mediaUrl:
          "https://images.unsplash.com/photo-1506395308321-904a71783d60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 6,
        authorId: 3,
        createdAt: "2022-01-01",
        description: "Описание 2",
        mediaUrl:
          "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  "4": {
    lastReadStoryId: 7,
    stories: [
      {
        id: 7,
        authorId: 4,
        createdAt: "2022-01-01",
        description: "Описание 1",
        mediaUrl:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 8,
        authorId: 4,
        createdAt: "2022-01-01",
        description: "Описание 2",
        mediaUrl:
          "https://images.unsplash.com/photo-1505253668822-42074d58a7c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  "5": {
    lastReadStoryId: 9,
    stories: [
      {
        id: 9,
        authorId: 5,
        createdAt: "2022-01-01",
        description: "Описание 1",
        mediaUrl:
          "https://plus.unsplash.com/premium_photo-1724250160975-6c789dbfdc9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 10,
        authorId: 5,
        createdAt: "2022-01-01",
        description: "Описание 2",
        mediaUrl:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjB2ZWdldGFibGUlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
};

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
          // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --     DELETE     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
          state.publicStories.data.unseenExperts = experts;
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
        state.authorStories[authorId] = stories[authorId];
      })
      .addCase(getPublicStoriesByAuthorIdApi.rejected, (state) => {});
  },
});

export const { toggleStoryModal, setSelectedAuthorIndex } = storySlice.actions;
