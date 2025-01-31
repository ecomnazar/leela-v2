export type TThemeSortType =
  | "COMMENTS_ASC"
  | "LIKES_ASC"
  | "CREATED_AT_ASC"
  | "COMMENTS_DESC"
  | "LIKES_DESC"
  | "CREATED_AT_DESC";

export interface IPublicTheme {
  authorName: null | string;
  authorProfileImageUrl: null | string;
  authorRole: null | string;
  authorId: number;
  commentsCount: number;
  createdAt: string;
  id: number;
  isAnonymous: boolean;
  isPublished: boolean;
  likesAndDislikes: { likes: number; dislikes: number };
  tags: string[];
  text: string;
  title: string;
}

export interface IComment {
  authorName: string;
  authorProfileImageUrl: string;
  authorRole: string;
  authorId: number;
  createdAt: string;
  id: number;
  isAnonymous: boolean;
  likesAndDislikes: { likes: number; dislikes: number };
  text: string;
}

export interface IGetPublicThemesProps {
  sort_by: TThemeSortType;
  search_query?: string;
}

export interface IAddThemeCommentApiProps {
  themeId: number;
  text: string;
  isAnonymous: boolean;
}

export interface IAddThemeApiProps {
  title: string;
  text: string;
  isAnonymous: boolean;
  themeTags: string[];
}
