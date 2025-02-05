import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import {
  leaveThemeReactionApi,
  removeThemeReactionApi,
} from "../model/themeThunk";
import {
  addReactionReducer,
  removeThemeReactionReducer,
} from "../model/themeSlice";
import { TReactionType } from "@/shared/interfaces";

interface Props {
  id: number;
  isLiked: boolean;
  isDisliked: boolean;
  reactionType: TReactionType;
  single?: boolean;
}

export const useThemeReaction = () => {
  const dispatch = useAppDispatch();

  const removeReaction = async (
    reactionType: TReactionType,
    themeId: number,
    disableReducer?: boolean,
    single?: boolean
  ) => {
    if (!disableReducer) {
      dispatch(removeThemeReactionReducer({ reactionType, themeId, single }));
    }
    await dispatch(removeThemeReactionApi(themeId));
  };

  const addReaction = (
    reactionType: TReactionType,
    themeId: number,
    disableReducer?: boolean,
    single?: boolean
  ) => {
    dispatch(
      leaveThemeReactionApi({
        themeId,
        isLike: reactionType === "like" ? true : false,
      })
    );
    if (disableReducer) return;
    dispatch(addReactionReducer({ reactionType, themeId, single }));
  };

  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  const reaction = async ({
    id,
    isLiked,
    isDisliked,
    reactionType,
    single,
  }: Props) => {
    if (reactionType === "like" || reactionType === "dislike") {
      const oppositeReaction = reactionType === "like" ? "dislike" : "like";
      const isCurrentReaction = reactionType === "like" ? isLiked : isDisliked;
      const isOppositeReaction = reactionType === "like" ? isDisliked : isLiked;

      if (isCurrentReaction) {
        removeReaction(reactionType, id, false, single);
      } else {
        if (isOppositeReaction) {
          dispatch(
            removeThemeReactionReducer({
              reactionType: oppositeReaction,
              themeId: id,
              single: single,
            })
          );
          dispatch(addReactionReducer({ reactionType, themeId: id, single }));

          await removeReaction(oppositeReaction, id, true, single);
          addReaction(reactionType, id, true);
        } else {
          addReaction(reactionType, id, false, single);
        }
      }
    }
  };

  return reaction;
};
