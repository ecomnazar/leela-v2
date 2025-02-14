import { storiesAdapter } from "@/entities/story/model/storySlice";
import { getPublicStoriesByAuthorIdApi } from "@/entities/story/model/storyThunk";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React from "react";
import { useSelector } from "react-redux";

interface AuthorStoriesProps {
  authorId: number;
}

export const AuthorStories: React.FC<AuthorStoriesProps> = ({ authorId }) => {
  // Извлекаем состояние для конкретного автора
  const authorState = useAppSelector(
    (state) => state.story.authorStories[authorId]
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getPublicStoriesByAuthorIdApi({ authorId: 21 }));
  }, []);

  // Если данных ещё нет или они загружаются
  if (!authorState || authorState.loading) {
    return <div>Загрузка сторис...</div>;
  }

  if (authorState.error) {
    return <div>Ошибка: {authorState.error}</div>;
  }

  // Получаем селектор "selectAll" для нормализованного состояния.
  // Обратите внимание, что здесь мы передаём authorState.data в getSelectors
  const { selectAll } = storiesAdapter.getSelectors();
  const stories = selectAll(authorState.data);

  return (
    <div>
      <h3>Сторис автора {authorId}</h3>
      <div>
        {stories.map((story) => (
          <div key={story.id}>
            <img src={story.mediaUrl} alt={story.description} width="200" />
            <p>{story.description}</p>
          </div>
        ))}
      </div>
      <div>Последний просмотренный сторис: {authorState.lastReadStoryId}</div>
    </div>
  );
};
