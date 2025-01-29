type TThemeSortType =
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

export interface IGetPublicThemesProps {
  sort_by: TThemeSortType;
}
