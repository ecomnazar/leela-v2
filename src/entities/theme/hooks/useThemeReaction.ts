import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import {
  leaveThemeReactionApi,
  removeThemeReactionApi,
} from "../model/themeThunk";

type TReactionType = "like" | "dislike";

interface Props {
  id: number;
  isLiked: boolean;
  isDisliked: boolean;
  reactionType: TReactionType;
}

export const useThemeReaction = () => {
  const dispatch = useAppDispatch();

  const reaction = async ({ id, isLiked, isDisliked, reactionType }: Props) => {
    if (reactionType === "like") {
      if (isLiked) {
        dispatch(removeThemeReactionApi({ themeId: id, isLike: true }));
      } else {
        if (isDisliked) {
          await dispatch(
            removeThemeReactionApi({ themeId: id, isLike: false })
          );
        }
        dispatch(leaveThemeReactionApi({ themeId: id, isLike: true }));
      }
    }

    if (reactionType === "dislike") {
      if (isDisliked) {
        dispatch(removeThemeReactionApi({ themeId: id, isLike: false }));
      } else {
        if (isLiked) {
          await dispatch(removeThemeReactionApi({ themeId: id, isLike: true }));
        }
        dispatch(leaveThemeReactionApi({ themeId: id, isLike: false }));
      }
    }
  };

  return reaction;
};
