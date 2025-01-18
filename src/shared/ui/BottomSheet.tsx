import React from "react";
import { Platform, StyleSheet } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Easing } from "react-native-reanimated";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const handlePresentModalPress = () => bottomSheetModalRef.current?.present();

  const handleSheetChanges = (index: number) => {
    if (index === -1) onClose();
  };

  const animationConfigs =
    Platform.OS !== "web"
      ? {
          duration: 500,
          easing: Easing.out(Easing.cubic),
        }
      : null;

  React.useEffect(() => {
    if (isOpen) {
      handlePresentModalPress();
    }

    return () => {
      if (Platform.OS === "web") {
        bottomSheetModalRef.current?.close();
      }
    };
  }, [isOpen]);

  return (
    <>
      <BottomSheetModal
        style={{ zIndex: 20 }}
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        // @ts-ignore
        animationConfigs={animationConfigs}
        handleIndicatorStyle={{
          backgroundColor: "#e5e5e5",
          height: 6,
          width: 90,
          borderRadius: 5,
        }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.7}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="close"
            enableTouchThrough={false}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}
      >
        <BottomSheetView style={[styles.contentContainer]}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingBottom: 25,
    zIndex: 20,
    position: "relative",
  },
});
