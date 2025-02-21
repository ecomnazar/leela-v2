import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { getPublicStoriesByAuthorIdApi } from "../model/storyThunk";

export const useFetchAuthorMedias = () => {
  const dispatch = useAppDispatch();
  const { stories } = useAppSelector((state) => state.story.storyModal);

  const fetchAuthorMedias = (authorId: number) => {
    if (stories[authorId]) return;
    dispatch(getPublicStoriesByAuthorIdApi({ authorId }));
  };

  return { fetchAuthorMedias };
};
