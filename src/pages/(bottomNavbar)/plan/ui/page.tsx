// import React from "react";
// import { CustomScrollView } from "@/shared/ui/CustomScrollView";
// import { Screen } from "@/widgets/_layouts/Screen";
// import { StarWithChart } from "./StarWithChart";
// import { TasksList } from "./TasksList";
// import { Animated, Platform, View } from "react-native";
// import { PageHeader } from "@/widgets/pageHeader";
// import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

// export const PlanPage = () => {
//   const dispatch = useAppDispatch();
//   const scrollOffsetY = new Animated.Value(0);

//   const animatedStarOpacity = scrollOffsetY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [1, 0],
//     extrapolate: "clamp",
//   });

//   const gradient =
//     Platform.OS === "ios"
//       ? ["transparent", "transparent", "#8992A0", "#AEB6C4"]
//       : ["transparent", "#DEE4EE", "#8992A0", "#AEB6C4"];

//   // return <AuthorStories authorId={21} />;

//   // return <Gallery />;

//   // return (
//   //   <Screen customGradientColors={gradient}>
//   //     <Animated.View style={{}}>
//   //       <PageHeader
//   //         enableEnergyShowcase
//   //         enableBalanceShowcase
//   //         title="ПЛАН"
//   //         disableBorder
//   //         scrollOffsetY={scrollOffsetY}
//   //         animated
//   //       />
//   //     </Animated.View>
//   //     <StarWithChart opacity={animatedStarOpacity} />
//   //     <CustomScrollView
//   //       onScroll={Animated.event(
//   //         [
//   //           {
//   //             nativeEvent: {
//   //               contentOffset: { y: scrollOffsetY },
//   //             },
//   //           },
//   //         ],
//   //         { useNativeDriver: false }
//   //       )}
//   //       scrollEventThrottle={16}
//   //       paddingTop={Platform.OS === "ios" ? 380 : 380}
//   //       hasBottomBar
//   //     >
//   //       <TasksList />
//   //     </CustomScrollView>
//   //   </Screen>
//   // );
// };
import videos from "assets/videos";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Button } from "react-native";

const videoSource = videos.avocado;

export const PlanPage = () => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
