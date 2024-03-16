import React from 'react';
import {ExitModalButton, ExitModalTitle} from '../ExitModal/style';
import Box from '../General/Box';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import CustomModal from '../General/CustomModal';
import {ScoreModalContent} from '../Play/score-style';

interface UnavailableSessionModal {
  visible: boolean;
  close: () => void;
}

const UnavailableSessionModal = ({visible, close}: UnavailableSessionModal) => {
  return (
    <CustomModal visible={visible} close={close}>
      <ScoreModalContent>
        <Box padding="m">
          <ExitModalTitle>The quiz is not yet available</ExitModalTitle>
          <ExitModalButton>
            <CustomButton
              onPress={close}
              variant={ButtonVariant.brown}
              text="Close"
            />
          </ExitModalButton>
        </Box>
      </ScoreModalContent>
    </CustomModal>
  );
};

export default UnavailableSessionModal;
