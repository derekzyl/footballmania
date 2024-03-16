import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ExitModalButton, ExitModalTitle} from '../ExitModal/style';
import Box from '../General/Box';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import CustomModal from '../General/CustomModal';
import {ScoreModalContent} from '../Play/score-style';

interface InsufficientCreditModal {
  visible: boolean;
  close: () => void;
}

const InsufficientCreditModal = ({visible, close}: InsufficientCreditModal) => {
  const navigation = useNavigation();

  const goToStore = () => {
    close();
    navigation.navigate('Store');
  };

  return (
    <CustomModal visible={visible} close={close}>
      <ScoreModalContent>
        <Box padding="m">
          <ExitModalTitle>You do not have sufficient credits</ExitModalTitle>
          <ExitModalButton>
            <CustomButton
              onPress={goToStore}
              variant={ButtonVariant.lemon}
              text="Go to store"
            />
          </ExitModalButton>
          <ExitModalButton>
            <CustomButton
              variant={ButtonVariant.brown}
              text="Cancel"
              onPress={close}
            />
          </ExitModalButton>
        </Box>
      </ScoreModalContent>
    </CustomModal>
  );
};

export default InsufficientCreditModal;
