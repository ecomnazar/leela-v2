import React from "react";
import { StyleSheet } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = React.useCallback((index: number) => {
    onClose();
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      handlePresentModalPress();
    }
  }, [isOpen]);

  return (
    <>
      <BottomSheetModal
        style={{ zIndex: 20 }}
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
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
          ></BottomSheetBackdrop>
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

{
  /* <BlurView
              style={StyleSheet.absoluteFill}
              intensity={10}
              tint="light"
              experimentalBlurMethod="blur"
            /> */
}
