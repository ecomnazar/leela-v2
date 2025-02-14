import { EntityState } from "@reduxjs/toolkit";

export interface ICreateStoryApiProps {
  mediaUrl: string;
  description: string;
}

export interface IStoryAuthor {
  authorId: number;
  name: string;
  previewMediaUrl: string;
}

export interface IPublicStories {
  companyStoryPreview: null;
  seenExperts: IStoryAuthor[];
  unseenExperts: IStoryAuthor[];
}

export interface IGetPublicStoriesByAuthorIdApiProps {
  authorId: number;
}

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

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// interface AuthorStoriesItemState {
//   data: EntityState<IStoryMedia, number>; // нормализованная коллекция сторис
//   lastReadStoryId: number | null;
//   loading: boolean;
//   error: string | null;
// }

// export interface IAuthorStories {
//   id: number;
//   authorId: number;
//   createdAt: string;
//   description: string;
//   mediaUrl: string;
// }

export interface IAuthorStoriesState {
  [authorId: number]: IAuthorStories | undefined;
}
