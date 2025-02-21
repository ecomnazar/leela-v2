import { IStoryMedia } from "@/entities/story/model/interfaces";
import {
  closeStoryModal,
  scrollStoryCarousel,
} from "@/entities/story/model/storySlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { sleep } from "@/shared/lib/sleep";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { GestureResponderEvent } from "react-native";

interface Props {
  stories: IStoryMedia[];
  currentMediaIndex: number;
  setCurrentMediaIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const useStoryNavgation = ({
  stories,
  currentMediaIndex,
  setCurrentMediaIndex,
}: Props) => {
  const dispatch = useAppDispatch();

  const { currentStoryIndex } = useAppSelector(
    (state) => state.story.storyModal
  );

  const handlePress = (event: GestureResponderEvent) => {
    const x = event.nativeEvent.locationX || event.nativeEvent.pageX;
    x < WINDOW_WIDTH / 2 ? goToPrevStory() : goToNextStory();
  };

  const goToPrevStory = () => {
    // if it is first media of story
    if (currentMediaIndex === 0) {
      dispatch(scrollStoryCarousel("prev"));
      return;
    }

    setCurrentMediaIndex((prev) => prev - 1);
  };

  const goToNextStory = async () => {
    // if there more medias to view in current story
    if (stories.length - 1 > currentMediaIndex) {
      setCurrentMediaIndex((prev) => prev + 1);
      return;
    }

    await sleep(200);
    // if current stories medias end
    dispatch(scrollStoryCarousel("next"));
  };

  return { handlePress, goToNextStory };
};
