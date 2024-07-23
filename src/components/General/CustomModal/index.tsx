import { View } from 'native-base';
import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ModalClose from '../../../assets/svg/modal-close.svg';
import { ScoreModalClose } from '../../../components/Play/score-style';
import Box from '../Box';
import { CardWithDepth } from '../Cards';

interface CustomModalProp {
  visible: boolean;
  close: () => void;
  children: ReactNode;
  noChild?: boolean;
  header?: boolean;
  px?: boolean;
  useSwipe?: boolean;
  propagateSwipe?: boolean;
}

const CustomModal = ({
  visible,
  close,
  children,
  noChild = false,
  header = false,
  px = false,
  useSwipe = true,
  propagateSwipe = false,
}: CustomModalProp) => {
  return (
    <Modal
      style={styles.modal}
      animationIn="zoomInUp"
      animationOut="zoomOutDown"
      onBackdropPress={close}
      onBackButtonPress={close}
      onSwipeComplete={close}
      swipeDirection={useSwipe ? 'down' : undefined}
      propagateSwipe={propagateSwipe}
      isVisible={visible}>
      {noChild ? (
        <>{children}</>
      ) : (
        <View padder>
          <Box>
            <CardWithDepth px={px}>
              {header ? (
                <ScoreModalClose>
                  <TouchableOpacity onPress={close}>
                    <ModalClose />
                  </TouchableOpacity>
                </ScoreModalClose>
              ) : null}
              {children}
            </CardWithDepth>
          </Box>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
});

export default CustomModal;
