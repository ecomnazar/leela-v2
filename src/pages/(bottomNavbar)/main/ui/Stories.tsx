import { StoryAvatar } from "@/entities/ui/storyAvatar";
import { Flex } from "@/shared/ui/Flex";
import images from "assets/images";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import InstagramStories, {
  InstagramStoriesPublicMethods,
} from "@birdwingo/react-native-instagram-stories";
import {
  InstagramStoryProps,
  StoryItemProps,
} from "@birdwingo/react-native-instagram-stories/src/core/dto/instagramStoriesDTO";
import { Container } from "@/shared/ui/Container";

import InstaStory from "react-native-insta-story";
import { CustomText } from "@/shared/ui/CustomText";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "@gorhom/bottom-sheet";

// const stories = [
//   {
//     viewed: false,
//     name: "Алена",
//     image: images.stories1,
//   },
//   {
//     viewed: true,
//     name: "Евгений",
//     image: images.stories2,
//   },
//   {
//     viewed: false,
//     name: "Анжелика",
//     image: images.stories3,
//   },
//   {
//     viewed: false,
//     name: "Юрий",
//     image: images.stories4,
//   },
//   {
//     viewed: true,
//     name: "Оксана",
//     image: images.stories5,
//   },
// ];

const data = [
  {
    user_id: 1,
    user_image:
      "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
    user_name: "Ahmet Çağlar Durmuş",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    user_name: "Test User",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
    ],
  },
];

export const Stories = () => {
  // to use public methods:
  const ref = React.useRef(null); // if using typescript - useRef<InstagramStoriesPublicMethods>( null )

  const stories: InstagramStoryProps[] = [
    {
      id: "user1",
      name: "Алена",
      avatarSource: images.stories1,
      stories: [
        {
          id: "story1",
          source: {
            uri: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          mediaType: "image",
        },
        {
          id: "story2",
          source: {
            uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          mediaType: "image",
        },
      ],
    },
    {
      id: "user2",
      name: "Евгений",
      avatarSource: images.stories2,
      stories: [
        {
          id: "story1",
          source: {
            uri: "https://turkmenportal.com/images/uploads/cache/blogs/8a1300f428f3f8471e67ce9670c0d6ad-8999024-380x253-2.webp",
          },
          mediaType: "image",
        },
        {
          id: "story2",
          source: {
            uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          mediaType: "image",
        },
      ],
    },
    {
      id: "user3",
      name: "Анжелика",
      avatarSource: images.stories3,
      stories: [
        {
          id: "story1",
          source: {
            uri: "https://turkmenportal.com/images/uploads/cache/blogs/8a1300f428f3f8471e67ce9670c0d6ad-8999024-380x253-2.webp",
          },
          mediaType: "image",
        },
        {
          id: "story2",
          source: {
            uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          mediaType: "image",
        },
      ],
    },
  ];

  // usage of public method
  // const setStories = () => ref.current?.setStories(stories);

  return (
    <View style={{ height: 92 }}>
      <Container>
        <InstagramStories
          showName
          ref={ref}
          avatarSize={66}
          stories={stories}
          progressColor="#FFFFFF30"
          modalAnimationDuration={200}
          storyAnimationDuration={300}
          animationDuration={10000}
          progressActiveColor="#FFFFFF"
          imageStyles={{ width: "100%", height: "100%" }}
          avatarListContainerStyle={{ columnGap: 12 }}
          mediaContainerStyle={{
            width: WINDOW_WIDTH,
            height: WINDOW_HEIGHT,
          }}
          nameTextStyle={{
            textAlign: "center",
            fontSize: 11,
            marginTop: 4,
          }}
          nameTextProps={{
            className: "font-wixRegular text-textPrimary",
          }}
          progressContainerStyle={{
            position: "absolute",
            top: 70,
          }}
        />
      </Container>
      {/* <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Flex className="gap-x-3">
          {stories.map((story) => {
            return (
              <StoryAvatar
                key={story.name}
                image={story.image}
                name={story.name}
                size="medium"
                isActive={true}
              />
            );
          })}
        </Flex>
      </ScrollView> */}
    </View>
  );
};
