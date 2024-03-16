import React from 'react';
import Box from '../General/Box';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import CustomModal from '../General/CustomModal';
import {ScoreModalContent} from '../Play/score-style';
import {ExitModalButton, ExitModalTitle} from './style';

interface ExitModalProp {
  visible: boolean;
  close: () => void;
  handleExit: () => void;
}

const ExitModal = ({visible, close, handleExit}: ExitModalProp) => {
  const handleQuit = () => {
    close();
    handleExit?.();
  };

  return (
    <CustomModal visible={visible} close={close}>
      <ScoreModalContent>
        <Box padding="m">
          <ExitModalTitle>
            Are you sure you want to leave this session?
          </ExitModalTitle>
          <ExitModalButton>
            <CustomButton
              onPress={handleQuit}
              variant={ButtonVariant.lemon}
              text="Exit Session"
            />
          </ExitModalButton>
          <ExitModalButton>
            <CustomButton
              variant={ButtonVariant.brown}
              text="Continue Playing"
              onPress={close}
            />
          </ExitModalButton>
        </Box>
      </ScoreModalContent>
    </CustomModal>
  );
};

export default ExitModal;
