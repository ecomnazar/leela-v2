export type TThemeFilterOptionsType = (typeof THEME_FILTER_OPTIONS)[number];

export const THEME_FILTER_OPTIONS = [
  { value: "COMMENTS_ASC", label: "По комментариям (возр.)" },
  { value: "COMMENTS_DESC", label: "По комментариям (убыв.)" },
  { value: "LIKES_ASC", label: "По лайкам (возр.)" },
  { value: "LIKES_DESC", label: "По лайкам (убыв.)" },
  { value: "CREATED_AT_ASC", label: "По дате создания (старые)" },
  { value: "CREATED_AT_DESC", label: "По дате создания (новые)" },
];
