import Confetti from '@assets/svg/confetti.svg';
import ModalClose from '@assets/svg/modal-close.svg';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '../General/Box';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import CustomModal from '../General/CustomModal';
import ProfileStatCard from '../Profile/stat-card';
import {
  ScoreButton,
  ScoreButtons,
  ScoreModalClose,
  ScoreModalContent,
  ScoreModalIcon,
  ScoreModalText,
  ScoreModalTop,
  ScorePoint,
  ScorePointText,
} from './score-style';
import Coin from '@assets/svg/coin.svg';
import {SessionResult} from '@src/redux/reducers/play/types';

interface ScoreModalProp {
  visible: boolean;
  close: () => void;
  result: SessionResult;
  showWinners: () => void;
  hasWinners: boolean;
}

const ScoreModal = ({
  visible,
  close,
  result,
  showWinners,
  hasWinners,
}: ScoreModalProp) => {
  return (
    <CustomModal visible={visible} close={close}>
      <ScoreModalContent>
        <ScoreModalClose>
          <TouchableOpacity onPress={close}>
            <ModalClose />
          </TouchableOpacity>
        </ScoreModalClose>
        <ScoreModalTop>
          <Box>
            <ScoreModalIcon>
              <Confetti />
            </ScoreModalIcon>
            <ScoreModalText>Your score is</ScoreModalText>
            <ScorePoint>
              <ScorePointText>
                {result.correctAnswers}/{result.total_questions_answered}
              </ScorePointText>
            </ScorePoint>
          </Box>
        </ScoreModalTop>
        <ScoreButtons>
          <Box>
            <ProfileStatCard
              item={{
                rank: result.total_credits_earned.points,
                title: 'Points Gotten',
              }}
            />
            <ProfileStatCard
              item={{
                icon: Coin,
                rank: result.total_credits_earned.coins,
                title: 'Coins Earned',
              }}
            />
          </Box>
          <Box>
            {hasWinners ? (
              <ScoreButton>
                <CustomButton
                  onPress={showWinners}
                  variant={ButtonVariant.brown}
                  text="Winners"
                />
              </ScoreButton>
            ) : null}
            <ScoreButton>
              <CustomButton
                variant={ButtonVariant.lemon}
                text="Share with friends"
              />
            </ScoreButton>
          </Box>
        </ScoreButtons>
      </ScoreModalContent>
    </CustomModal>
  );
};

export default ScoreModal;
